const DashboardPlugin = require('webpack-dashboard/plugin');
const environment = require("./environment");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

environment.plugins.prepend("DashboardPlugin", new DashboardPlugin());

const webpackConfiguration = environment.toWebpackConfig();

// To inspect the webpackConfiguration, uncomment the next line
debugger;

// Then run:
// bin/webpack --debug

module.exports = webpackConfiguration;
