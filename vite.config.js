import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ganti "numpang-ngopi" sesuai nama repository Anda di GitHub
export default defineConfig({
  plugins: [react()],
  base: '/numpang-ngopi/'
})
