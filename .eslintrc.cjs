//eslint-disable-next-line
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',

    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-newline': ['warn', { multiline: true }],
    'object-curly-newline': ['warn', { multiline: true }],

    'linebreak-style': ['warn', 'windows'],

    quotes: ['warn', 'single'],
    'quote-props': ['warn', 'as-needed'],
    semi: ['warn', 'never'],
    'comma-dangle': ['warn', 'never'],

    '@typescript-eslint/no-unused-vars': 'warn',
    'no-undef': 'error',

    'import/newline-after-import': ['warn', { count: 1 }],
    'import/no-cycle': 'error'
  }
}