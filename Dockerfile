# Stage 1: Build the React frontend and prepare production node_modules
FROM node:24-alpine AS builder

WORKDIR /app

# Build deps for native modules (argon2, better-sqlite3) – removed after install
RUN apk add --no-cache python3 make g++

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and scripts needed by postinstall (electron-rebuild.js)
COPY package.json pnpm-lock.yaml ./
COPY scripts/ ./scripts/

# Install all dependencies (native modules built for Node 24 here).
# --ignore-scripts: skip postinstall (electron-rebuild); we run plain Node in prod, not Electron.
RUN pnpm install --ignore-scripts
# Rebuild native addons for this image's Node (skipped by --ignore-scripts above).
RUN pnpm rebuild better-sqlite3 argon2

# Copy source code
COPY . .

# Build the renderer
RUN pnpm run build-renderer

# Keep only production dependencies so production stage can copy them as-is
# --ignore-scripts: avoid re-running postinstall (electron-rebuild), since electron was just pruned
RUN pnpm prune --prod --ignore-scripts

# Stage 2: Production server – copy resolved deps from builder, no install
FROM node:24-alpine AS production

WORKDIR /app

# Copy package files and resolved node_modules from builder (no pnpm install)
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules

# Copy built static files from builder
COPY --from=builder /app/dist ./dist

# Copy server code (index.js, logger.js, and any other server modules)
COPY server/*.js ./server/

# Copy config for initialization
COPY config/ ./config/

# Password reset script (run via: docker exec <container> reset-web-password "<new-password>")
COPY scripts/reset-web-password.js ./scripts/
COPY scripts/reset-web-password.sh ./reset-web-password
RUN chmod +x /app/reset-web-password

# Create data directory for config persistence (mounted as volume)
RUN mkdir -p /app/data

# Build timestamp for About tab (same format as write-build-timestamp.js)
RUN date +"%Y-%m-%dT%H:%M:%S%z" > build_timestamp

ENV CONFIG_PATH=/app/data/config.json
ENV NODE_ENV=production
ENV PORT=5000
ENV LOG_TO_CONSOLE=1
ENV PATH="/app:/app/scripts:${PATH}"

EXPOSE 5000

CMD ["node", "server/index.js"]
