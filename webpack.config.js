const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const pkg = require("./package.json");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
  mode: isDevelopment ? "development" : "production",
  // Use "web" in dev so the bundle served by webpack-dev-server has no runtime require() calls
  // (renderer has nodeIntegration: false). Production already loads from file with target "web".
  target: "web",
  entry: "./src/renderer/index.tsx",
  // TypeScript: webpack can resolve .ts/.tsx via babel-loader (preset-typescript)

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: isDevelopment ? "/" : "./",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
      // Favicon from images/ stays as emitted file (used by HtmlWebpackPlugin).
      {
        test: /\.ico$/i,
        include: (resourcePath) => {
          const n = resourcePath.replace(/\\/g, "/");
          return n.includes("/images/");
        },
        type: "asset/resource",
        generator: {
          filename: "[name][hash][ext][query]",
        },
      },
      // Inline all other .ico (e.g. provider icons from renderer/assets) so they load with the bundle.
      {
        test: /\.ico$/i,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext][query]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][hash][ext][query]",
        },
      },
      {
        test: /\.css$/,
        use: isDevelopment
          ? ["style-loader", "css-loader", "postcss-loader"]
          : [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
      __DEV__: JSON.stringify(isDevelopment),
    }),
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",
      favicon: path.resolve(__dirname, "images/transrewrt_logo.ico"),
      // Production: no 'unsafe-eval' (Electron security). Dev: allow 'unsafe-eval' for React Refresh / HMR.
      cspScriptSrc: isDevelopment ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self' 'unsafe-inline'",
    }),
    !isDevelopment && new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    !isDevelopment &&
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "NOTICES"),
            to: "NOTICES",
          },
        ],
      }),
    isDevelopment && new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/renderer"),
    },
    // Bundle Node-style modules for Electron renderer / dev server so require() is not used at runtime
    fallback: {
      events: require.resolve("events/"),
    },
  },
  performance: {
    // Entry: initial load JS + vendors + CSS. Current main entrypoint ~2 MiB (React, Fluent UI, app).
    maxEntrypointSize: 3 * 1024 * 1024, // 3 MiB
    // Single asset limit. vendors.js (React, Fluent UI, etc.) is ~1.9 MiB in production.
    maxAssetSize: 2.5 * 1024 * 1024, // 2.5 MiB
    // Only apply size hints to JS/CSS; exclude images/icons so one large .ico doesn't trigger warnings.
    assetFilter(assetFilename) {
      return !/\.(ico|png|jpe?g|gif|svg|webp|woff2?)$/i.test(assetFilename);
    },
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 8,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
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
  // Renderer imports assets from images/; ignore screenshot output so pnpm take-screenshots
  // does not trigger a full dev rebuild on every PNG write.
  ...(isDevelopment && {
    watchOptions: {
      ignored: ["**/node_modules/**", "**/images/screenshots/**"],
    },
  }),
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // SSE via /api proxy: compression can buffer streamed responses and break incremental reads.
    compress: false,
    port: 4030,
    hot: true,
    liveReload: false, // Disable liveReload when using HMR
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // When using dev:web (watch:web on 5000), proxy /api to Express server (port 4030)
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:4030",
        changeOrigin: false,
      },
    ],
    ...(isDevelopment
      ? {
          setupMiddlewares: (middlewares, devServer) => {
            devServer.app.get("/NOTICES", (_req, res) => {
              const noticesPath = path.join(__dirname, "NOTICES");
              if (!fs.existsSync(noticesPath)) {
                res.status(404).type("text/plain").send("Third-party notices file not found.");
                return;
              }
              res.type("text/plain; charset=utf-8").sendFile(path.resolve(noticesPath));
            });
            return middlewares;
          },
        }
      : {}),
    client: {
      // default host/port so HMR works for both watch (4030) and watch:web (5000)
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "warn",
    },
  },
  };
};
