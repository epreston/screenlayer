import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { entries } from '../../scripts/aliases.js';

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa', // disable history fallback
  plugins: [vue()],
  resolve: {
    alias: entries
  },
  build: {
    target: ['es2024']
  }
});
