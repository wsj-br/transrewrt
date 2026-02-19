#!/bin/bash

# Favicon Download Script for AI Provider Icons
# This script downloads favicons for AI model providers
# Run this script on your local machine with internet access

# Note: We don't use 'set -e' so the script continues even if individual downloads fail

# Error handling for unexpected issues
trap 'echo -e "\n${RED}Script interrupted. Partial results may be available in ${ICON_DIR}/${NC}"; exit 1' INT TERM

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create output directory for icons
ICON_DIR="./provider_icons"
mkdir -p "$ICON_DIR"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  AI Provider Favicon Download Script${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# Function to normalize filename (convert provider-id to provider_id.ico)
normalize_filename() {
    local provider_id="$1"
    echo "${provider_id//-/_}.ico"
}

# Function to download favicon using multiple methods
download_favicon() {
    local url="$1"
    local provider_id="$2"
    local output_file="$3"
    
    echo -e "${YELLOW}[$provider_id]${NC}"
    echo "  URL: $url"
    
    # Extract domain from URL
    local domain=$(echo "$url" | sed -E 's|https?://([^/]+).*|\1|')
    echo "  Domain: $domain"
    
    # Array of possible favicon URLs to try
    local favicon_urls=(
        "https://${domain}/favicon.ico"
        "https://${domain}/favicon.png"
        "https://${domain}/apple-touch-icon.png"
        "${url}/favicon.ico"
        "${url}/favicon.png"
        "https://www.google.com/s2/favicons?domain=${domain}&sz=256"
        "https://favicons.githubusercontent.com/${domain}"
        "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=256"
    )
    
    local success=0
    
    for fav_url in "${favicon_urls[@]}"; do
        echo "  → Trying: $fav_url"
        
        # Try to download with curl
        if curl -L -f -s -o "$output_file" \
               --max-time 15 \
               --retry 2 \
               --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
               "$fav_url" 2>/dev/null; then
            
            # Check if file is not empty and is a valid image
            if [ -s "$output_file" ]; then
                local file_type=$(file -b --mime-type "$output_file" 2>/dev/null || echo "unknown")
                local file_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null || echo "0")
                
                # Check if it's an image and has reasonable size (> 100 bytes)
                if [[ "$file_type" == image/* ]] && [ "$file_size" -gt 100 ]; then
                    echo -e "  ${GREEN}✓ Downloaded ($file_size bytes, $file_type)${NC}"
                    
                    # Convert to ICO format if ImageMagick is available
                    if command -v convert &> /dev/null; then
                        if [[ "$file_type" != *"x-icon"* ]] && [[ "$file_type" != *"vnd.microsoft.icon"* ]]; then
                            echo "  → Converting to ICO format..."
                            local temp_file="${output_file}.temp"
                            mv "$output_file" "$temp_file"
                            
                            # Convert with multiple sizes (16x16, 32x32, 48x48)
                            if convert "$temp_file" \
                                    \( -clone 0 -resize 16x16 \) \
                                    \( -clone 0 -resize 32x32 \) \
                                    \( -clone 0 -resize 48x48 \) \
                                    -delete 0 "$output_file" 2>/dev/null; then
                                echo -e "  ${GREEN}✓ Converted to ICO${NC}"
                                rm -f "$temp_file"
                            else
                                # Conversion failed, keep original
                                mv "$temp_file" "$output_file"
                                echo "  ⚠ Kept original format"
                            fi
                        fi
                    else
                        echo "  ℹ ImageMagick not found - keeping original format"
                    fi
                    
                    success=1
                    break
                else
                    rm -f "$output_file"
                fi
            else
                rm -f "$output_file"
            fi
        fi
    done
    
    if [ $success -eq 0 ]; then
        echo -e "  ${RED}✗ Failed to download favicon${NC}"
        return 1
    fi
    
    echo ""
    return 0
}

# Providers without icons - organized alphabetically
declare -A providers=(
    ["alfredpros"]="https://llmapi.dev"
    ["allenai"]="https://allenai.org"
    ["alpindale"]="https://huggingface.co"
    ["anthracite-org"]="https://huggingface.co"
    ["baidu"]="https://www.baidu.com"
    ["bytedance"]="https://www.bytedance.com"
    ["cognitivecomputations"]="https://huggingface.co"
    ["deepcogito"]="https://huggingface.co"
    ["eleutherai"]="https://www.eleuther.ai"
    ["essentialai"]="https://huggingface.co"
    ["gryphe"]="https://huggingface.co"
    ["ibm-granite"]="https://www.ibm.com"
    ["kwaipilot"]="https://huggingface.co"
    ["meituan"]="https://www.meituan.com"
    ["meta-llama"]="https://llama.meta.com"
    ["microsoft"]="https://www.microsoft.com"
    ["neversleep"]="https://huggingface.co"
    ["nex-agi"]="https://huggingface.co"
    ["nousresearch"]="https://nousresearch.com"
    ["opengvlab"]="https://github.com"
    ["openrouter"]="https://openrouter.ai"
    ["prime-intellect"]="https://www.primeintellect.ai"
    ["raifle"]="https://huggingface.co"
    ["sao10k"]="https://huggingface.co"
    ["stepfun"]="https://huggingface.co"
    ["tencent"]="https://www.tencent.com"
    ["thedrummer"]="https://huggingface.co"
    ["tngtech"]="https://huggingface.co"
    ["undi95"]="https://huggingface.co"
    ["upstage"]="https://www.upstage.ai"
    ["writer"]="https://writer.com"
)

# Check for required tools
echo "Checking for required tools..."
if ! command -v curl &> /dev/null; then
    echo -e "${RED}Error: curl is not installed. Please install curl first.${NC}"
    exit 1
fi

if ! command -v file &> /dev/null; then
    echo -e "${YELLOW}Warning: 'file' command not found. File type detection may not work.${NC}"
fi

if ! command -v convert &> /dev/null; then
    echo -e "${YELLOW}Warning: ImageMagick not found. ICO conversion will be skipped.${NC}"
    echo -e "${YELLOW}Install with: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)${NC}"
fi

echo -e "\nStarting downloads...\n"

# Statistics
total=${#providers[@]}
success_count=0
fail_count=0

# Download favicons (sorted alphabetically)
for provider_id in $(echo "${!providers[@]}" | tr ' ' '\n' | sort); do
    url="${providers[$provider_id]}"
    output_file="${ICON_DIR}/$(normalize_filename "$provider_id")"
    
    if download_favicon "$url" "$provider_id" "$output_file"; then
        success_count=$((success_count + 1))
    else
        fail_count=$((fail_count + 1))
    fi
    
    # Small delay to be nice to servers
    sleep 0.5
done

# Summary
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Download Summary${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "Total providers:          ${total}"
echo -e "${GREEN}Successfully downloaded:  ${success_count}${NC}"
echo -e "${RED}Failed:                   ${fail_count}${NC}"
echo -e "\n${GREEN}Icons saved to:${NC} ${ICON_DIR}/"

# List downloaded files
echo -e "\n${GREEN}Downloaded files:${NC}"
if ls "$ICON_DIR"/*.ico &>/dev/null || ls "$ICON_DIR"/*.png &>/dev/null; then
    ls -lh "$ICON_DIR"/ | grep -E '\.(ico|png)$' | awk '{printf "  %s  %s\n", $5, $9}' || true
else
    echo "  (no files downloaded)"
fi

# Additional instructions
echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Next Steps${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "1. Review the downloaded icons in: ${ICON_DIR}/"
echo -e "2. Manually download any failed icons if needed"
echo -e "3. For HuggingFace providers, you may want to use the HF logo"
echo -e "4. Update your providers JSON file with the new icon filenames"
echo -e "\n${GREEN}Done!${NC}\n"
