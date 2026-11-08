import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/kehf-nahiv-inceleme/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        learn: resolve(__dirname, 'learn.html'),
        tutorial: resolve(__dirname, 'tutorial.html')
      }
    }
  }
});
