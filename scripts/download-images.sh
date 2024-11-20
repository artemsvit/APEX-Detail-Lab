#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$SCRIPT_DIR/.."

# Create public directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/public"

# Download hero image from Unsplash
curl -L "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=2560&q=80" -o "$PROJECT_ROOT/public/hero-bg.jpg"

echo "✅ Hero image downloaded successfully to: $PROJECT_ROOT/public/hero-bg.jpg"
