#!/bin/bash

echo "Installing server dependencies"

npm install 

echo "Installing client dependencies"

pushd client
npm install 
npm run build
popd

echo "Build complete"