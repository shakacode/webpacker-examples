# ShakaCode Webpacker Examples

## Installation

``` 
bundle
yarn
``` 

## Running

Use `foreman` or `overmind` to run one of the following Procfiles, like

```
overmind start -f Procfile.dev
```

## Procfile.dev
This setup uses the webpack-dev-server.

## Procfile.dev-static
This setup uses the webpack via webpack compiling in watch mode.

## Procfile
The production setup if you deploy to Heroku.

## Procfile.production
The setup that first precompiles all assets so that you can check the true production-like
performance locally.

```bash
( rm -rf public/webpack/production ; exit 0 ) && RAILS_ENV=production rake assets:precompile && bin/rails server -e production
```

## Bundle Analysis
In config/webpack/environment.js

```js
// Uncomment to do bundle analysis
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// environment.plugins.prepend("BundleAnalyzerPlugin", new BundleAnalyzerPlugin());
```

Run
```bash
NODE_ENV=production bin/webpack --profile --json > stats.json
```
(or `yarn analyze-bundle`)
