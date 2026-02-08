# Stage 1: Build the React frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the renderer
RUN npm run build-renderer

# Stage 2: Production server
FROM node:20-alpine AS production

WORKDIR /app

# Copy server package and install (minimal deps - just express)
COPY server/package.json ./server/
RUN cd server && npm install --omit=dev

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
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server/index.js"]
