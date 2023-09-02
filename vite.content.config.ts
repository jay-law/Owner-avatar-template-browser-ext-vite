import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        rollupOptions: {
            input: {
                dom_parser: resolve(__dirname, './src/content/content_script.ts'),
            },
            output: {
                dir: 'build/content',
                entryFileNames: '[name].js',
            }
        }
    }
})


