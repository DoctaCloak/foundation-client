const path = require('path');

module.exports = {
  ignorePatterns: [
    '.eslintrc.js',
    'jest.config.js',
    path.resolve(__dirname, '/webpack/*'),
    path.resolve(__dirname, '/test-setup/*'),
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    strict: ['error', 'never'],
    'no-extra-semi': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
};
