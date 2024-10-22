import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Importa el módulo completo y luego accede al plugin

export default defineConfig({
  plugins: [
    react(),

  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jdoodle.com',  // Redirige a la API correcta
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Quita el prefijo '/api' en la solicitud antes de enviarla
      }
    }
  }
});
