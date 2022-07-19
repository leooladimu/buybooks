//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
//
//// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()]
//})
import react from "@vitejs/plugin-react";

export default {
  optimizeDeps: {
    include: ['react', 'react-dom/client']
  },
  plugins: [react()],
};