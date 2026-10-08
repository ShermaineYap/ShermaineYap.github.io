import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at https://shermaineyap.github.io/ (user site) so base stays "/".
// If you ever deploy to a project repo, set base: '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
