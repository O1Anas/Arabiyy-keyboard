#!/bin/bash

# Script to normalize tashkeel in all .md files using source/tools/tashkeel_normalizer.py

echo "Starting Tashkeel normalization for all .md files (excluding 'LICENSE' files)..."

# Get the directory of the current script (source/tools/)
SCRIPT_DIR=$(dirname "$0")

# Define the path to the normalizer script relative to SCRIPT_DIR
NORMALIZER_SCRIPT="$SCRIPT_DIR/tashkeel_normalizer.py"

# Explicitly define the path to your Python executable
# IMPORTANT: Convert Windows backslashes to forward slashes and add /c/ for the C: drive
PYTHON_EXE="/c/Users/MMG/AppData/Local/Programs/Python/Python313/python.exe"

# Check if the normalizer script exists
if [ ! -f "$NORMALIZER_SCRIPT" ]; then
    echo "Error: '$NORMALIZER_SCRIPT' not found."
    echo "Please ensure the normalizer script is in the correct path within source/tools/."
    exit 1
fi

# Check if the Python executable exists
if [ ! -f "$PYTHON_EXE" ]; then
    echo "Error: Python executable not found at '$PYTHON_EXE'."
    echo "Please verify the path to your Python installation."
    exit 1
fi

# Find all .md files from the repository root, EXCLUDING those with 'LICENSE' in their name, and process them
find "$(git rev-parse --show-toplevel)" -name "*.md" -type f | grep -v 'LICENSE' | grep -v -- '-en' | grep -v -- '_en' | while read -r file; do
    echo "Processing: $file"
    
    # Run the Python script to normalize the file in-place
    # Use the explicitly defined PYTHON_EXE
    "$PYTHON_EXE" -c "
import sys
# Add the directory containing tashkeel_normalizer.py to the Python path
sys.path.append('$SCRIPT_DIR')
from tashkeel_normalizer import normalize_tashkeel

file_path = '$file'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    normalized_content = normalize_tashkeel(content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(normalized_content)

    print(f'Successfully normalized: {file_path}')
except Exception as e:
    print(f'Error processing {file_path}: {str(e)}')
    sys.exit(1)
"
    if [ $? -ne 0 ]; then
        echo "Error during normalization of $file. Aborting."
        exit 1
    fi
done

echo "Tashkeel normalization completed for all .md files."