import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // ✅ Load .env variables

  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(env.VITE_PORT) || 5173, // ✅ Read from .env or fallback
    },
  }
})
