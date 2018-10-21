#! /bin/bash

# XXX this probably will only work on my computer. 

cd "$(dirname $(readlink -f "$0"))/catch-a-reindeer/"

npm install
npm run build

cd build
scp -r * kechpaja_catchareindeer@ssh.phx.nearlyfreespeech.net:/home/public
