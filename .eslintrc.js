module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        'max-len': 'off',
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
