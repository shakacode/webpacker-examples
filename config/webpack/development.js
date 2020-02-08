const DashboardPlugin = require('webpack-dashboard/plugin');
const environment = require("./environment");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

environment.plugins.prepend("DashboardPlugin", new DashboardPlugin());

module.exports = environment.toWebpackConfig();
