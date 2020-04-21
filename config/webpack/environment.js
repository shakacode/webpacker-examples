const { environment } = require("@rails/webpacker");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

environment.plugins.prepend("BundleAnalyzerPlugin", new BundleAnalyzerPlugin());

// Enable the default config of split chunks
environment.splitChunks();

module.exports = environment;
