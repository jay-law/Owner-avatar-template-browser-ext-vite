import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [],
  root: 'src',
  base: '',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: "../build",
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('src/**/*.html').map(file => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),

    }
  }
})