"use strict";

const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");

module.exports = [
  { ignores: ["node_modules/", "dist/", "release/", "**/strings.json"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        // Webpack DefinePlugin (see webpack.config.js)
        __REPO_URL__: "readonly",
        __APP_VERSION__: "readonly",
        __APP_DESCRIPTION__: "readonly",
        __APP_AUTHOR__: "readonly",
        __APP_LICENSE__: "readonly",
        __DEV__: "readonly",
      },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      // React 17+ new JSX transform: no need for React in scope (build injects jsx-runtime).
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  reactHooks.configs.flat["recommended-latest"],
];
