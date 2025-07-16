import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/everestclaimsandadvisory/', // Adjust this if your project is hosted in a subdirectory
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
  },
})
