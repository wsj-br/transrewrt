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
      globals: { ...globals.node, ...globals.browser },
    },
    settings: { react: { version: "detect" } },
  },
  reactHooks.configs.flat["recommended-latest"],
];
