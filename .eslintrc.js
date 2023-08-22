module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: 'node_modules',
  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 0,
    'react/self-closing-comp': 1,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-curly-newline': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-curly-spacing': [
      1,
      {
        when: 'always',
        children: true,
      },
    ],
    'object-curly-spacing': [1, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
    quotes: [1, 'single'],
    eqeqeq: 1,
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-unneeded-ternary': 1,
    'no-extra-bind': 2,
    'no-console': 1,
    'no-trailing-spaces': [
      1,
      {
        skipBlankLines: true,
      },
    ],
    'comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    semi: 2,
    'semi-spacing': 1,
    'semi-style': [1, 'last'],
    'keyword-spacing': 1,
    'key-spacing': 1,
    'array-bracket-spacing': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'block-spacing': 1,
    'func-call-spacing': 1,
    'brace-style': [1, '1tbs', { allowSingleLine: true }],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false,
        overrides: { '+': true },
      },
    ],
    'spaced-comment': 1,
    'rest-spread-spacing': 2,
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'newline-per-chained-call': 1,
    // 'object-property-newline': 1,
    'object-curly-newline': [
      1,
      {
        ImportDeclaration: {
          multiline: true,
          minProperties: 5,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 5,
        },
      },
    ],
    indent: [1, 'tab', { SwitchCase: 1 }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'simple-import-sort/imports': [
          'warn',
          {
            'groups': [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$']
            ]
          }
        ]
      },
    },
  ],
};
