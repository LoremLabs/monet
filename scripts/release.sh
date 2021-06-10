#!/usr/bin/env bash
set -ev

mkdir dist/publish
cp package.json README.md dist/publish

cd dist/publish
node --input-type=commonjs << EOM_NODE_EVAL
const { writeFileSync } = require('fs');
const pkg = require('./package.json');
pkg.scripts = pkg.devDependencies = {};
pkg.browser = "monet.js";
delete pkg.optionalDependencies;
delete pkg.prettier;
writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf8');
EOM_NODE_EVAL
cd -

cd dist
cp -r components publish/
cp -r elements/* publish/
cd -

cd dist/publish
npm publish --access=public
cd -
