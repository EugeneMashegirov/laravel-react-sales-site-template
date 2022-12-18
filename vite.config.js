import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
const path = require('path')

export default defineConfig({
    resolve:{
        alias:{
          '~' : path.resolve(__dirname, 'node_modules')
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
