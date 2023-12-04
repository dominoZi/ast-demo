module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "eslint-plugin-local-rules"],
  rules: {
    // 0 - off, 1 - warn, 2 - error
    "local-rules/no-arrow-funct-jsx": 2,
    "local-rules/data-test-id-check": 1,
    "no-undef": 0,
  },
};
