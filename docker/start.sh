#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install
nvm use

#if no node_modules folder, run npm install
if [ ! -d "node_modules" ]; then
  npm install
fi

if [ ! -d "dist" ]; then
    npm run build
fi

nginx
npm run dev
