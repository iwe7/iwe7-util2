#!/usr/bin/env bash
rm -rf dist/iwe7-util2
ng build --project iwe7-util2
mkdir -p ./dist/iwe7-util2/themes
cp -fr ./projects/iwe7-util2/themes/* ./dist/iwe7-util2/themes/
cd dist/iwe7-util2
npm publish
cd ../
rm -rf dist/iwe7-util2
yarn add iwe7-util2
