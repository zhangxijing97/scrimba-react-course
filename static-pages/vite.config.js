import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/scrimba-react-course/static-pages/',
  plugins: [react()],
})
