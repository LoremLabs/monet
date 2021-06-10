#!/usr/bin/env bash
set -ex

mkdir dist/publish
cp package.json README.md dist/publish

cd dist
cp -r components publish/
cp -r elements/* publish/
cd -

cd dist/publish
npm publish
cd -
