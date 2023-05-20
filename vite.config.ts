import { defineConfig } from 'vite';
import { ViteAngularPlugin } from '@nxext/angular-vite';

export default defineConfig({
  plugins: [ViteAngularPlugin()],
  resolve: {
    preserveSymlinks: true,
  },
});
