import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueEslint from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,ts,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Базовые правила от ESLint
  js.configs.recommended,

  // Конфиг для Vue
  {
    ...vueEslint.configs['flat/essential'],
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/require-default-prop': 0,
      'vue/no-unused-components': 1,
    },
  },

  // Конфиг для TypeScript
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },

  // Отключаем type-checked linting для .js и конфигов
  {
    files: ['*.js', '*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },

  // Отключаем type-checked linting для eslint.config.js
  {
    files: ['eslint.config.js'],
    languageOptions: {
      parser: null,
    },
    rules: {},
  },

  // Отключаем автоформатирование от Prettier для Vue файлов
  skipFormatting,
]
