import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import path, { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { config } from 'dotenv'

const { parsed } = config({
  path: path.resolve(process.cwd(), '.env'),
})

const common = {
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}

const plugins = [
  react({
    babel: {
      babelrc: true,
    },
  }),
  createHtmlPlugin({
    inject: {
      data: parsed
    }
  }),
]

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    ...common,
    plugins: [eslintPlugin(), ...plugins],
  }
})
