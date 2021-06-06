const path = require("path");
module.exports = {
  mode: "development",
  entry: "./frontend/js/entry.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      os: false,
      constants: require.resolve("constants"),
      "crypto-browserify": false,
      vm: false,
      path: require.resolve("path-browserify"),
    },
  },
};
