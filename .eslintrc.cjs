module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
};
