# Stage 1: Build the React frontend and prepare production node_modules
FROM node:lts-alpine AS builder

WORKDIR /app

# Build deps for native modules (argon2, better-sqlite3) – removed after install
RUN apk add --no-cache python3 make g++

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (native modules are built here)
RUN pnpm install

# Copy source code
COPY . .

# Build the renderer
RUN pnpm run build-renderer

# Keep only production dependencies so production stage can copy them as-is
RUN pnpm prune --prod

# Stage 2: Production server – copy resolved deps from builder, no install
FROM node:lts-alpine AS production

WORKDIR /app

# Copy package files and resolved node_modules from builder (no pnpm install)
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules

# Copy built static files from builder
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server/index.js ./server/

# Copy config for initialization
COPY config/ ./config/

# Create data directory for config persistence (mounted as volume)
RUN mkdir -p /app/data

ENV CONFIG_PATH=/app/data/config.json
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server/index.js"]
