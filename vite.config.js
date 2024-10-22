import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Importa el paquete completo de vite-plugin-monaco-editor
import MonacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    react(),
    // Usa el plugin de Monaco como el valor por defecto del paquete importado
    MonacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'css', 'html', 'json'],  // Define los workers que necesitas
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jdoodle.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
});
