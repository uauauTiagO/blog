import { resolve } from 'node:path';
import { copyFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: 'copy-app-to-index',
      closeBundle() {
        try {
          copyFileSync(resolve(__dirname, 'docs/app.html'), resolve(__dirname, 'docs/index.html'));
        } catch (e) {
          console.error(e);
        }
      },
    },
  ],
  base: command === 'serve' ? '/' : '/blog/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'app.html'),
      },
    },
  },
}));
