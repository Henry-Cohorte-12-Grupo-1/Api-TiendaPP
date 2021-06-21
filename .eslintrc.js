module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    //"node/callback-return": "error",
    "array-callback-return": ["error", { checkForEach: true }],
    "linebreak-style": 0,
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": "warn",
    "no-undef": "error",
  },
};
