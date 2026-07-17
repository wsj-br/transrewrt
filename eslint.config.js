"use strict";

const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");
const tseslint = require("typescript-eslint");

const browserGlobals = {
  ...globals.browser,
  // Webpack DefinePlugin (see webpack.config.js)
  __REPO_URL__: "readonly",
  __APP_VERSION__: "readonly",
  __APP_DESCRIPTION__: "readonly",
  __APP_AUTHOR__: "readonly",
  __APP_LICENSE__: "readonly",
  __DEV__: "readonly",
};

const reactFlatRecommended = react.configs.flat.recommended;

const reactRules = {
  ...reactFlatRecommended.rules,
  // React 17+ new JSX transform: no need for React in scope (build injects jsx-runtime).
  "react/react-in-jsx-scope": "off",
  "react/jsx-uses-react": "off",
};

module.exports = tseslint.config(
  {
    ignores: [
      "node_modules/",
      "dist/",
      "dist-main/",
      "release/",
      "website/dist/",
      "**/strings.json",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    ...reactFlatRecommended,
    languageOptions: {
      ...reactFlatRecommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...browserGlobals,
      },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactRules,
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["src/renderer/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      ...reactFlatRecommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: browserGlobals,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactRules,
      ...reactHooks.configs.flat["recommended-latest"].rules,
      // TypeScript components declare props via interfaces/types.
      "react/prop-types": "off",
      // Existing sync-from-props and fetch-on-mount patterns are intentional.
      "react-hooks/set-state-in-effect": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.js"],
    ...reactHooks.configs.flat["recommended-latest"],
  },
);
