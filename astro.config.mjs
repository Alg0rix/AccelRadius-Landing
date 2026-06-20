// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://accelradius.id',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/jsx-dev-runtime',
        'react/jsx-runtime',
        'react-dom/client',
        'gsap',
        'gsap/ScrollTrigger',
        'gsap/SplitText',
        '@gsap/react',
        'motion/react',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
      ],
      exclude: ['@astrojs/react'],
    },
    ssr: {
      noExternal: ['gsap', '@gsap/react', 'motion'],
    },
  },
});