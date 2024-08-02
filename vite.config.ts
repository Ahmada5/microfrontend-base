import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'microfrontend1',
      filename: 'remoteEntry.js',
      exposes: {
        './Microfrontend1': './src/components/Microfrontend1.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3001,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  
});
