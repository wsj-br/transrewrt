const path = require("path");

module.exports = {
  mode: "production",
  target: "electron-main",
  entry: {
    main: "./src/main/main.js",
    preload: "./src/main/preload.js",
  },
  output: {
    path: path.resolve(__dirname, "dist-main"),
    filename: "[name].js",
    clean: true,
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: {
    "better-sqlite3": "commonjs better-sqlite3",
    "electron-reload": "commonjs electron-reload",
  },
  optimization: {
    splitChunks: false,
  },
  resolve: {
    extensions: [".js"],
  },
  ignoreWarnings: [
    { module: /node_modules\/ws\/lib/ },
  ],
};
