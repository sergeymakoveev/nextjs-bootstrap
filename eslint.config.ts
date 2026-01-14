import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
// import jestPlugin from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
// import anyParser from 'any-eslint-parser';

export default defineConfig(
  {
    // config with just ignores is the replacement for `.eslintignore`
    // It's globally scoped and applies to all files, must set without other rules
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    plugins: {
      // @ts-ignore
      import: importPlugin,
    },
  },
  /*
  {
    files: ['*.svg'],
    parser: anyParser,
    parserOptions: {},
    rules: {
      'regex/invalid': [
        'error',
        [
          {
            message: 'Don\'t hardcode "width" in svg',
            regex: '[ \\n]width=[\\\'|\\"](.*)?[\\\'|\\"]',
          },
          {
            message: 'Don\'t hardcode "height" in svg',
            regex: '[ \\n]height=[\\\'|\\"](.*)?[\\\'|\\"]',
          },
        ],
      ],
    },
  },
  */
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx}'],
    extends: [eslint.configs.recommended],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      // jest: jestPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          // project: ['./tsconfig.json'],
        },
      },
      'import/extensions': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.css',
        '.scss',
        '.svg',
        '.json',
      ],
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['typeLike'],
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'enum',
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'are'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          types: ['function'],
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          modifiers: ['global'],
          format: ['UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
      ],
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      // 'import/no-default-export': 'error',
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '\\.svg\\?react$',
            // Temporary, it fix wrong types in eslint-config-next@16.0.1
            '^eslint-config-next/.+',
          ],
        },
      ],
      'import/no-unused-modules': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '*.svg',
              patternOptions: {
                matchBase: true,
              },
              group: 'object',
              position: 'before',
            },
            {
              pattern: '*.{css,scss}',
              patternOptions: {
                matchBase: true,
              },
              group: 'object',
              position: 'after',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: [],
        },
      ],
    },
  },
  {
    files: ['**/*.{jsx,tsx,mjsx}'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactHooksPlugin.configs.flat.recommended,
      nextTypescript,
      nextCoreWebVitals,
    ],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...importPlugin.flatConfigs.react.rules,
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommended],
    rules: {
      ...importPlugin.flatConfigs.typescript.rules,
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-redeclare': 'error',
    },
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // {
  //   // enable jest rules on test files
  //   files: ['test/**'],
  //   extends: [jestPlugin.configs['flat/recommended']],
  // },
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
);
