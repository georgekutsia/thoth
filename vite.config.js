import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MonacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    react(),
    MonacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'css', 'html', 'json'],  // Define los workers que necesitas
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jdoodle.com',  // Redirige a la API correcta de JDoodle
        changeOrigin: true,  // Cambia el origen de la solicitud para evitar problemas de CORS
        secure: true,  // Asegura que la conexión es HTTPS
        rewrite: (path) => path.replace(/^\/api/, '')  // Quita el prefijo '/api' de la solicitud antes de enviarla
      }
    }
  }
});
