const js = require("@eslint/js");

const browserGlobals = {
  document: "readonly",
  window: "readonly",
};

const nodeGlobals = {
  module: "readonly",
  require: "readonly",
};

module.exports = [
  {
    ignores: ["dead-simple-grid/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["eslint.config.js"],
    ...js.configs.recommended,
    languageOptions: {
      ...(js.configs.recommended.languageOptions || {}),
      ecmaVersion: "latest",
      sourceType: "module",
      globals: browserGlobals,
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: nodeGlobals,
    },
  },
];
