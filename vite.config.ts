import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio-starter/",   
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(new Date().toISOString()),
  },
});


