#!/bin/bash

# Docker deployment script for Transrewrt application
# Deploys to pi-piro server (arm64) from amd64 host

set -e  # Exit on error

# Configuration
IMAGE_NAME="wsj-br/transrewrt:devel"
TARGET_HOST="pi-piro"
TARGET_PORT="5000"
TARGET_PLATFORM="linux/arm64"
DATA_VOLUME="transrewrt-data"

echo ""
echo "--------------------------------"
echo " Deploying Transrewrt to ${TARGET_HOST}"
echo " Target platform: ${TARGET_PLATFORM}"
echo "--------------------------------"
echo ""

# Step 0: Check if the Transrewrt app is installed on the target host and running
echo " Checking if Transrewrt is already running on ${TARGET_HOST}..."
if ssh ${TARGET_HOST} "docker ps --filter 'name=transrewrt-web' --format '{{.Names}}' | grep -q 'transrewrt-web'"; then
    echo " Transrewrt is already running on ${TARGET_HOST}. Stopping existing container..."
    ssh ${TARGET_HOST} "docker stop transrewrt-web"
else
    echo " No existing Transrewrt container found on ${TARGET_HOST}."
fi

echo "removing existing image..."
ssh ${TARGET_HOST} "docker rmi -f ${IMAGE_NAME}"

# Step 1: Build the Docker image for arm64 using buildx
echo " Building Docker image for ${TARGET_PLATFORM}..."
docker buildx build --platform ${TARGET_PLATFORM} -t ${IMAGE_NAME} --load .

echo ""
echo " Transferring image to ${TARGET_HOST}..."

SIZE=$(docker image inspect ${IMAGE_NAME} --format "{{.Size}}")
echo " Image size: ${SIZE}"

docker save ${IMAGE_NAME} | pv -s $SIZE | ssh ${TARGET_HOST} "docker load"

echo ""
echo " Creating data volume on ${TARGET_HOST} (if not exists)..."
ssh ${TARGET_HOST} "docker volume create ${DATA_VOLUME} 2>/dev/null || true"

echo ""
echo " Starting container on ${TARGET_HOST}..."
echo " Access the app at: http://${TARGET_HOST}:${TARGET_PORT}"
echo ""
ssh ${TARGET_HOST} "docker run -d --rm -p ${TARGET_PORT}:${TARGET_PORT} --name transrewrt-web -v ${DATA_VOLUME}:/app/data ${IMAGE_NAME}"

echo ""
echo " Deployment complete!"
echo ""
echo "${TARGET_HOST} docker ps"
ssh ${TARGET_HOST} "docker ps"
echo ""


echo " Container 'transrewrt-web' is running in the background."
echo " To view logs: ssh ${TARGET_HOST} 'docker logs -f transrewrt-web'"
echo " To stop: ssh ${TARGET_HOST} 'docker stop transrewrt-web'"