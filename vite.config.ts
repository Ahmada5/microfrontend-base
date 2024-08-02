import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        microfrontend1: 'http://127.0.0.1:5500/assets/remoteEntry.js',
        microfrontend2: 'http://127.0.0.1:5501/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/assets': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Access-Control-Allow-Origin', '*');
          });
        },
      },
    },
  },
  
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
