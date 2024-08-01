import { defineConfig } from 'vitest/config'
import path from 'path'
import { config } from 'dotenv'

export default defineConfig({
  root: '.',
  test: {
    globals: true,
    environment: 'node',
    env: {
      ...config({ path: '.env.testing' }).parsed
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
