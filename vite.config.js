import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'  // Tambahkan ini

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/ui.css',
        'resources/css/app.css',
        'resources/js/app.jsx',
      ],
      refresh: [
        'resources/views/**/*.blade.php',
        'resources/js/**/*.jsx',
      ],
    }),
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
      jsxImportSource: '@emotion/react'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@lib': path.resolve(__dirname, 'resources/js/lib'),
    }
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ]
  }
})
