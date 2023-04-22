/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "semi": [ "error", "always" ],
    "space-before-function-paren": [ "error", "never" ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "indent": [ "error", 2 ],
    "comma-dangle": [ "error", "only-multiline" ],
  }
};
