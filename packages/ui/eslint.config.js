import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', '*.config.*'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.test.json'],
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      storybook,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      react: {
        version: '19',
      },
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...storybook.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node built-ins
            ['^node:'],

            // React
            ['^react$'],

            // Third-party packages
            ['^@?\\w'],

            // Internal absolute imports (@/)
            ['^@/'],

            // Relative imports
            ['^\\.'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
    },
  },

  eslintConfigPrettier,
];
