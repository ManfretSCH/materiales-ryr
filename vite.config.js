// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/materiales-ryr/', // <--- ¡ESTO ES LO IMPORTANTE!
  plugins: [react()],
});