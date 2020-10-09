module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': 0,
    'brace-style': 0,
    'no-else-return': 0,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'react/jsx-indent': ['error', 2],
  },
};
