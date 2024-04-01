import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@web': resolve(__dirname, './'),
      '@dinui/react/utils': resolve(__dirname, '../../packages/react-ui/utils'),
      '@dinui/react': resolve(__dirname, '../../packages/react-ui/ui'),
    },
  },
  ssr: {
    noExternal: ['react-use'],
  },
})
