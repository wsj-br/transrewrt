# how to deploy to pi-piro

# Setup

## Install QEMU binfmt support for arm64 (and other platforms)
docker run --privileged --rm tonistiigi/binfmt --install all

## Create and use a buildx builder
docker buildx create --name multiarch --driver docker-container --use
docker buildx inspect --bootstrap

## Verify arm64 is supported (should show linux/arm64 in Platforms)
docker buildx inspect | grep Platforms

# Deploy Process

## Automated deployment (recommended)
Use the deployment script which handles volume creation and mounting:
```bash
./scripts/docker-deploy.sh
```

## Manual deployment steps

### 1. Create the image
pnpm docker-devel

### 2. Stop the container in pi-piro and delete the image
ssh pi-piro "docker stop t-r-web && docker rmi -f wsj-br/t-r:devel"

### 3. Transfer the image to pi-piro
docker save wsj-br/t-r:devel | ssh pi-piro "docker load"

### 4. Create a named volume for data persistence (if not exists)
ssh pi-piro "docker volume create t-r-data"

### 5. Run the image on pi-piro with volume mount
ssh pi-piro "docker run -d --rm -p 5000:5000 -v t-r-data:/app/data --name t-r-web wsj-br/t-r:devel"

### 6. Access the app
http://pi-piro:5000

## Running locally with persistence

### Using docker-compose (recommended)
docker-compose up -d

### Using docker run with volume
```bash
# Create volume
docker volume create t-r-data

# Run with volume mount
docker run -d --rm -p 5000:5000 -v t-r-data:/app/data --name t-r-web wsj-br/t-r:devel
```

## Data Persistence

The application stores its configuration in `/app/data/config.json` inside the container. To persist this data between container restarts:

- **Named volume** (recommended): `-v t-r-data:/app/data`
- **Bind mount**: `-v /path/on/host:/app/data`

Without a volume mount, all configuration will be lost when the container stops.