import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh'

export default defineConfig({
  base: isGitHubPages ? '/gene-portfolio/' : '/',
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(new Date().toISOString()),
  },
})
