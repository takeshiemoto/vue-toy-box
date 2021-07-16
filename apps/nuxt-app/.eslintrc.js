module.exports = {
  extends: [
    '../../.eslintrc.json',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  ignorePatterns: ['!**/*', '.eslintrc.js'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  rules: {},
};
