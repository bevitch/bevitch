module.exports = {
  root: true,
  env: { node: true },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'array-element-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 3
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 3
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-empty-pattern': 'off',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    // typescript configuration
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    // vue rules
    'vue/component-tags-order': [
      'error',
      {
        'order': [
          'template',
          'script',
          'style'
        ]
      }
    ],
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        'registeredComponentsOnly': true,
        'ignores': []
      }
    ],
    'vue/eqeqeq': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'vue/require-name-property': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/no-reserved-component-names': 'error'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: { jest: true }
    }
  ]
};

