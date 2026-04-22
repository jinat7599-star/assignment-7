import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

 
const viteConfiguration = {
  plugins: [
    react(),
    tailwindcss()
  ],
};

export default defineConfig(viteConfiguration);