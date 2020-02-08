const { environment } = require("@rails/webpacker");

// Enable the default config of split chunks
environment.splitChunks();

// or using custom config
// const nodeEnv = process.env.NODE_ENV;
// environment.splitChunks(config => ({
//   ...config,
//   optimization: {
//     splitChunks: {
//       chunks: "all",
//       // Prefer this in production
//       // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksname
//       // name: nodeEnv !== 'production'
//       // Use this for the demo to show the descriptive chunk names
//       name: true
//     },
//     runtimeChunk: true
//   }
// }));

module.exports = environment;
