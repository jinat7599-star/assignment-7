import javascript from '@eslint/js'
import browserGlobals from 'globals'
import hooksPlugin from 'eslint-plugin-react-hooks'
import refreshPlugin from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

 
const ignoreDist = globalIgnores(['dist']);

const mainConfig = {
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...browserGlobals.browser,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { 
        jsx: true 
      },
    },
  },
  plugins: {
    'react-hooks': hooksPlugin,
    'react-refresh': refreshPlugin,
  },
  rules: {
    ...hooksPlugin.configs.recommended.rules,
    ...refreshPlugin.configs.vite.rules,
    ...javascript.configs.recommended.rules,
    'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  },
};

export default defineConfig([
  ignoreDist,
  mainConfig,
]);