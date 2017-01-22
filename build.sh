#!/bin/bash

# clear

FILE_NAME="build.sh"

# relative path
BROWSERIFY_PATH="$PWD/browserify"
SIMPLE_PATH="$PWD/simple"
SIMPLE2_PATH="$PWD/simple2"
TYPESCRIPT_PATH="$PWD/typescript"

echo "Start excute $FILE_NAME at $PWD"
echo ""

# build browserify
echo "================================"
echo "Start building at $BROWSERIFY_PATH"
cd "$BROWSERIFY_PATH"
yarn && bower install && npm run build && npm run test
echo "Building process has been done"
echo ""

# build simple
echo "================================"
echo "Start building at $SIMPLE_PATH"
cd "$SIMPLE_PATH"
yarn && bower install && npm run build && npm run test
echo "Building process has been done"
echo ""

# build simple2
echo "================================"
echo "Start building at $SIMPLE2_PATH"
cd "$SIMPLE2_PATH"
yarn && bower install && npm run build && npm run test
echo "Building process has been done"
echo ""

# build typescript
echo "================================"
echo "Start building at $TYPESCRIPT_PATH"
cd "$TYPESCRIPT_PATH"
yarn && bower install && npm run build
echo "Building process has been done"
echo ""
