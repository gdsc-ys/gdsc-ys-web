import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@gdsc-ys/color'],
  },
  build: {
    commonjsOptions: {
      include: ['@gdsc-ys/color'],
    },
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: '.',
    }),
    svgr({
      exportAsDefault: true,
    }),
  ],
});
