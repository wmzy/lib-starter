[![Build Status](https://travis-ci.org/wmzy/lib-starter.svg?branch=master)](https://travis-ci.org/wmzy/lib-starter)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/lib-starter/badge.svg?branch=master)](https://coveralls.io/github/wmzy/lib-starter?branch=master)
# lib-starter

> Library starter

## Usage

```bash
export PROJECT_NAME=new-project-name

git clone --depth=1 https://github.com/wmzy/lib-starter $PROJECT_NAME \
&& cd $PROJECT_NAME \
&& rm -rf .git \
&& git init \
&& npm i
```

## Workflow

```bash
# develop
npm start

# build
npm run build

# test
npm test

# commit changes
npm run commit

# publish
npm publish
```

## TODO

* [ ] github pages
* [ ] generator
