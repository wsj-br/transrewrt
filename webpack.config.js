const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const pkg = require("./package.json");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
  mode: isDevelopment ? "development" : "production",
  target: isDevelopment ? "electron-renderer" : "web",
  entry: "./src/renderer/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: isDevelopment ? "/" : "./",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            ...(isDevelopment && {
              plugins: [require.resolve("react-refresh/babel")],
            }),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext][query]",
        },
      },
      {
        test: /\.css$/,
        use: isDevelopment
          ? ["style-loader", "css-loader"]
          : [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __APP_VERSION__: JSON.stringify(pkg.version),
      __APP_DESCRIPTION__: JSON.stringify(pkg.description || ""),
      __APP_AUTHOR__: JSON.stringify(pkg.author || ""),
      __APP_LICENSE__: JSON.stringify(pkg.license || ""),
      __REPO_URL__: JSON.stringify("https://github.com/wsj-br/transrewrt"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",
      favicon: path.resolve(__dirname, "images/transrewrt_logo.ico"),
    }),
    !isDevelopment && new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    isDevelopment && new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  performance: {
    // Entry: initial load JS/CSS. 1MB is reasonable for React + Fluent UI (web/Docker + Electron).
    maxEntrypointSize: 1000000,
    // Single asset limit (chunks, etc.). 512KB allows larger vendor chunks and avoids noisy warnings for big icons.
    maxAssetSize: 512000,
    // Only apply size hints to JS/CSS; exclude images/icons so one large .ico doesn't trigger warnings.
    assetFilter(assetFilename) {
      return !/\.(ico|png|jpe?g|gif|svg|webp|woff2?)$/i.test(assetFilename);
    },
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  ignoreWarnings: [
    /export .* was not found in '@fluentui\/react-icons'/,
    {
      module: /@fluentui\/react-icons/,
    },
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3030,
    hot: true,
    liveReload: false, // Disable liveReload when using HMR
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // When using dev:web (watch:web on 5000), proxy /api to Express server (port 3030)
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3030",
        changeOrigin: false,
      },
    ],
    client: {
      // default host/port so HMR works for both watch (3030) and watch:web (5000)
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  };
};
