import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import createVuePlugin from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.json', '.ts', '.vue'],
  },
  plugins: [
    createVuePlugin(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://127.0.0.1:3002/',
    },
  },
});
