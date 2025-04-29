import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ESSENCIAL para GoDaddy funcionar corretamente
  plugins: [react()],
  server: {
    open: true,
  },
  optimizeDeps: {
    exclude: ['Lucide-react'],
  },
});
