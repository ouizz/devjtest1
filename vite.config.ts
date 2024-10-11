// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
    server: {
      host: 'N-PW06QDQS',
      port: 5173,
    https: {
      // key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
      // cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.cert')),
    },
  },
  // base: '/linensystem/'
  base: ''
})

