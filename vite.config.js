import { defineConfig } from 'vite';
import {resolve} from "path";
import checker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react';

// This is where the application will be built into
var BUILD_DIR = resolve(__dirname, "front_end/static/front_end");

// This is the directory where the source code must live, current it is in the frontend_web dir
var APP_DIR = resolve(__dirname, "frontend_web/src");

export default defineConfig({
  plugins: [
   // Checker performs typescipt testing on a worker process 
    checker({ typescript: true }),
    
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),

  ],
  root: resolve(APP_DIR),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json',".ts",'tsx'],
  },
  build: {
    outDir: resolve(BUILD_DIR),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve(APP_DIR,'main.tsx'),
        styles: resolve(APP_DIR,'styles.ts'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
});
