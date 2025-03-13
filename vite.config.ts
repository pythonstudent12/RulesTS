import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg?react',
        }),
    ],
    base: '/IT-Bookstore/',
    resolve: {
        alias: {
            app: '/docs/app',
            entities: '/docs/entities',
            features: '/docs/features',
            pages: '/docs/pages',
            shared: '/docs/shared',
            widgets: '/docs/widgets',
        },
    },
    server: {
        port: 3000,
    },
    build: {
        outDir: 'docs',
    },
})
