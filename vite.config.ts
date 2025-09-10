import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: '/SpaceX2020/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/app/App.test.tsx'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities/model'),
    },
  },
});
