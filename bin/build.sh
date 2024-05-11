#!/bin/bash

mkdir lib

mkdir lib/src
cp src/* lib/src

mkdir lib/cjs
npx tsc src/*.ts --outDir lib/cjs --lib es2017 --declaration; cp lib/cjs/* lib/.

mkdir lib/mjs
npx tsc src/*.ts --outDir lib/mjs --target es2017 --declaration; cp lib/cjs/* lib/.

exit 0