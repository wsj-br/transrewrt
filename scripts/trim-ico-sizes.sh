#!/usr/bin/env bash
set -euo pipefail

# Requires: ImageMagick (identify, convert)

for ico in *.ico; do
  # Skip if no .ico files
  [ -e "$ico" ] || continue

  # Check if the .ico already contains exactly 16x16 and 32x32 (and nothing else)
  sizes=$(identify -format "%wx%h\n" "$ico" 2>/dev/null | sort -u)
  if [ "$sizes" = "$(printf '16x16\n32x32')" ]; then
    echo "Skipping $ico (already has only 16x16 and 32x32)"
    continue
  fi

  echo "Processing: $ico"

  # Backup original
  backup="${ico}.old"
  if [ ! -e "$backup" ]; then
    cp --preserve=all "$ico" "$backup"
  else
    echo "  Backup $backup already exists, skipping backup copy"
  fi

  # Create a temp dir for extracted PNGs
  tmpdir="$(mktemp -d)"
  trap 'rm -rf "$tmpdir"' EXIT

  # Get all sizes present in the ICO
  sizes_list=$(identify -format "%wx%h\n" "$ico" 2>/dev/null | sort -u)

  # Choose source size: highest resolution present in the ICO.
  source_size=$(echo "$sizes_list" | sort -t'x' -k1 -n -k2 -n | tail -n1)

  if [ -z "$source_size" ]; then
    echo "  No sizes found in $ico, leaving original."
    rm -rf "$tmpdir"
    continue
  fi

  # Find first frame index with source_size and extract it
  source_idx=$(identify -format "%s %wx%h\n" "$ico" 2>/dev/null | awk -v s="$source_size" '$2==s {print $1; exit}')
  convert "$ico[$source_idx]" "$tmpdir/source.png"
  convert "$tmpdir/source.png" -resize 16x16 "$tmpdir/16.png"
  convert "$tmpdir/source.png" -resize 32x32 "$tmpdir/32.png"

  convert "$tmpdir/16.png" "$tmpdir/32.png" "$ico"
  echo "  Updated $ico with only 16x16 and 32x32 entries"
  rm -rf "$tmpdir"
done
