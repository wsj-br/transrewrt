# Stage 1: Build the React frontend
FROM node:lts-alpine AS builder

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including devDependencies for build)
RUN pnpm install

# Copy source code
COPY . .

# Build the renderer
RUN pnpm run build-renderer

# Stage 2: Production server
FROM node:lts-alpine AS production

WORKDIR /app

# Install pnpm and build deps for native modules (better-sqlite3), then remove build deps
RUN apk add --no-cache python3 make g++ && npm install -g pnpm

# Copy server package and install (minimal deps - express, better-sqlite3)
COPY server/package.json server/pnpm-lock.yaml ./server/
RUN cd server && pnpm install --prod && apk del python3 make g++

# Copy built static files from builder
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server/index.js ./server/

# Copy config_default.json for initialization
COPY config_default.json ./

# Create data directory for config persistence (mounted as volume)
RUN mkdir -p /app/data

ENV CONFIG_PATH=/app/data/config.json
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server/index.js"]
