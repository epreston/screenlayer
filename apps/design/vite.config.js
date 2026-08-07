import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { entries } from '../../scripts/aliases.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: entries
  },
  build: {
    target: ['es2024']
  }
});
