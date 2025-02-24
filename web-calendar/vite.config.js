import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui-kit': path.resolve(__dirname, '../UI-Kit/src/components'),
    },
  },
});


