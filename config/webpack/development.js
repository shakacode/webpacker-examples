process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");

const webpackConfiguration = environment.toWebpackConfig();

// To inspect the webpackConfiguration, uncomment the next line
debugger;

// Then run:
// bin/webpack --debug

module.exports = webpackConfiguration;
