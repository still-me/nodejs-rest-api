module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: [2, "always"],
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": "off",
  },
};
