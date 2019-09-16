#!/usr/bin/bash

echo new project name: && \
read -r PROJECT_NAME && \
git clone --depth=1 https://github.com/wmzy/lib-starter $PROJECT_NAME && \
cd $PROJECT_NAME && \
rm -rf .git && \
git init && \
rm -rf scripts &&\
npm ci
