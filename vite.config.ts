import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      // typescript: true,
    }),
    svgr({
      include: '**/*.svg',
    }),
  ],
  base: '/BreakthroughBot/',
  server: {
    open: true,
    port: 5171,
  },
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTests.ts'],
    // include: ['./src/components/**/*.tsx'],
  },
})
