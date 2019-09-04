module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'import/no-unresolved': 'warning',
    'import/extensions': { js: 'never' },
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    'nonblock-statement-body-position': ['warn', 'beside'],
    'keyword-spacing': ['warn', { before: true }],
    'no-console': 'warn',
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
    'vue/html-self-closing': ['warn'],
    'vue/require-default-prop': ['warn'],
  },
};
