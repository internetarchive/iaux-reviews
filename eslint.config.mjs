import typescriptEslint from '@typescript-eslint/eslint-plugin';
import esX from 'eslint-plugin-es-x';
import html from 'eslint-plugin-html';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'es-x': esX,
      html,
    },

    languageOptions: {
      parser: tsParser,
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src', 'demo'],
        },
      },
    },

    rules: {
      // Regex syntax newer than the browser floor is a parse error, not a
      // degraded feature: the engine rejects the whole module, so every page
      // importing this component renders blank. The floor is Safari 16.4, so
      // these three stay banned even though `tsc` accepts them all.
      'es-x/no-regexp-lookbehind-assertions': 'error',
      'es-x/no-regexp-v-flag': 'error',
      'es-x/no-regexp-modifiers': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['**/*.js', '**/*.mjs', '**/*.d.ts'],
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];
