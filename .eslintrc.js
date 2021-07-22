'use strict'
module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  ignorePatterns: ['.eslintrc.js', 'vite.config.ts', 'tsconfig.json','.stylelintrc.json'],
  rules: {
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['warn'],
    '@typescript-eslint/array-type': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-angle-bracket-type-assertion': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    '@typescript-eslint/consistent-type-assertions': ['warn'],
    '@typescript-eslint/no-inferrable-types': ['warn'],
    'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
    'semi': ['error', 'always'],
    'prefer-spread': ['warn'],
    'no-unused-vars': ['off'],
    'no-extra-semi': ['warn'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['warn', 'unix']
  }
};
