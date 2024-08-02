import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'microfrontend2',
      filename: 'remoteEntry.js',
      exposes: {
        './Microfrontend2': './src/components/Microfrontend2.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  
});
