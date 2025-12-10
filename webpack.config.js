const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development" || process.env.NODE_ENV !== "production";

  return {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/renderer/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
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
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",
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
  optimization: {
    usedExports: true,
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
    client: {
      webSocketURL: "ws://localhost:3030/ws",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  };
};
