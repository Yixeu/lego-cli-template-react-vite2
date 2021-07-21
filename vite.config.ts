import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      extensions: [".tsx", ".ts", ".js", ".json"]
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    outDir: 'build'
  },
  plugins: [reactRefresh()]
} as any)