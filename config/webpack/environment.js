const { environment } = require("@rails/webpacker");

// Uncomment to do bundle analysis
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// environment.plugins.prepend("BundleAnalyzerPlugin", new BundleAnalyzerPlugin());

// Enable the default config of split chunks
environment.splitChunks();

module.exports = environment;
