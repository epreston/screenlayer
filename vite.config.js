// import types for vitest config autocomplete
/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

import { entries } from './scripts/aliases.js';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: '"test"',
    __BROWSER__: false,
    __GLOBAL__: false,
    __ESM_BUNDLER__: true,
    __ESM_BROWSER__: false,
    __CJS__: true
  },
  plugins: [vue()],
  resolve: {
    alias: entries
  },
  build: {
    target: ['es2022']
  },
  test: {
    // globals: true,
    pool: 'forks',
    setupFiles: ['./scripts/setup-vitest.js'],
    sequence: {
      hooks: 'list'
    },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
      ignoreEmptyLines: true,
      exclude: [
        ...configDefaults.coverage.exclude,
        // entries that skew coverage reports below
        'scripts/**'
      ]
    }
  }
});
