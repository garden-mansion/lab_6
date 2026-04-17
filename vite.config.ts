import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  server: {
    host: '0.0.0.0', // Bind to all available network interfaces
    port: 3000, // Default port, change if necessary
  },


  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
})
