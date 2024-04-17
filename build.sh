#!/bin/sh

bun build \
    src/index.ts \
    --outdir=dist \
    --outfile=dist/index.js \
    --target browser \
    --external rxjs \
    --watch \
#    &

# tsc --watch --emitDeclarationOnly --project tsconfig.json

wait
