/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: './tsconfig.app.json',
            include: ['lib'],
            exclude: ['lib/**/*.spec.tsx'],
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            //fileName: 'index',
            entry: resolve(__dirname, 'lib/index.tsx'),
            formats: ['es'],
        },
        copyPublicDir: false,
    },
    test: {
        coverage: { include: ['lib'], exclude: ['lib/index.tsx'] },
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setup.js',
    },
});
