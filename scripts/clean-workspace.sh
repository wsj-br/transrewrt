#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Directories and files to clean
ITEMS_TO_REMOVE=(
    ".next"
    "node_modules"
    "dist"
    "out"
    ".turbo"
    "pnpm-lock.yaml"
    "data/*.json"
    "release"
    "build_timestamp"
    "public/documentation"
    "documentation/.docusaurus"
    "documentation/.cache-loader"
    "documentation/.cache"
    "documentation/build"   
    "documentation/node_modules"
    "documentation/pnpm-lock.yaml"
    ".genkit"
)

echo "🧹 Cleaning .log files and dev caches..."

while IFS= read -r -d '' logfile; do
    rel="${logfile#"$ROOT_DIR"/}"
    if rm -f "$logfile"; then
        echo "✅ Removed $rel"
    else
        echo "❌ Error removing $rel"
    fi
done < <(find "$ROOT_DIR" \
    \( -path "$ROOT_DIR/node_modules" -o -path "$ROOT_DIR/.git" -o -path "$ROOT_DIR/dist" \
       -o -path "$ROOT_DIR/release" -o -path "$ROOT_DIR/documentation/node_modules" \) -prune \
    -o -type f -name '*.log' -print0)

for cache in \
    "dev/presets-check/provider-catalogs-cache.json" \
    "dev/presets-check/presets-check.log" \
    "presets-editor-provider-catalogs.json"
do
    if [ -f "$ROOT_DIR/$cache" ]; then
        if rm -f "$ROOT_DIR/$cache"; then
            echo "✅ Removed $cache"
        else
            echo "❌ Error removing $cache"
        fi
    fi
done

echo "🧹 Cleaning build artifacts and dependencies..."

# Remove directories and files
for item in "${ITEMS_TO_REMOVE[@]}"; do
    if rm -rf "$ROOT_DIR"/$item; then
        echo "✅ Removed $item"
    else
        echo "❌ Error removing $item"
    fi
done

# Handle glob patterns separately
echo "🧹 Cleaning glob patterns..."

# Remove documentation/.cache-* directories
if find "$ROOT_DIR/documentation" -maxdepth 1 -type d -name ".cache-*" -exec rm -rf {} + 2>/dev/null; then
    echo "✅ Removed documentation/.cache-* directories"
fi

# Remove *.tsbuildinfo files
if find "$ROOT_DIR" -maxdepth 3 -type f -name "*.tsbuildinfo" -exec rm -f {} + 2>/dev/null; then
    echo "✅ Removed *.tsbuildinfo files"
fi


# Clear pnpm store cache
echo "🧹 Clearing pnpm store cache..."
if pnpm store prune; then
    echo "✅ pnpm store cache cleared"
else
    echo "❌ Error clearing pnpm store cache"
fi

# clear docker compose cache
echo "🧹 Clearing docker compose cache..."
if docker builder prune --all --force; then
    echo "✅ Docker compose cache cleared"
else
    echo "❌ Error clearing docker compose cache"
fi
# clear docker system images/networks/volumes
echo "🧹 Clearing docker system images/networks/volumes not used..."
if docker system prune --all --force; then
    echo "✅ Docker system images/networks/volumes not used cleared"
else
    echo "❌ Error clearing docker system images/networks/volumes"
fi

echo "✨ Clean completed!" 

echo ""
echo ""
echo "💡"
echo "     remember to run 'pnpm install' to update the dependencies before building the application"
echo "     or before running 'pnpm docker:up'"
echo ""
