import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { monacoEditorPlugin } from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'css', 'html', 'json'],  // Define los workers que necesitas
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jdoodle.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});

