// vite.config.js

// import types for vitest config autocomplete
/// <reference types="vitest" />

import { defineConfig } from 'vite';
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
    __NODE_JS__: true
  },
  resolve: {
    alias: entries
  },
  // plugins: [vue(), splitVendorChunkPlugin()],
  build: {
    target: ['es2022', 'edge112', 'firefox112', 'chrome112', 'safari16.4', 'ios16.4']
  },
  test: {
    // globals: true,
    // disable threads on GH actions to speed it up
    threads: !process.env.GITHUB_ACTIONS,
    setupFiles: ['./scripts/vitest-setup.js']
  }
});
