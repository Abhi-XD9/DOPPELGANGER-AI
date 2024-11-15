import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/FaceSearch-AI/",
  build: {
    rollupOptions: {
      input: '/src/main.jsx', 
    },
  },
});