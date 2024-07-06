#!/bin/bash

echo "Installing server dependencies"

npm install --omit=dev

echo "Installing client dependencies"

pushd client
npm install --omit=dev --legacy-peer-deps
npm run build
popd

echo "Build complete"