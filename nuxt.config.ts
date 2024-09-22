// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2024-09-20',
    ssr: true,
    telemetry: false,
    typescript: {
        strict: true
    },
    srcDir: 'client',
    dir: {
        app: 'client'
    },
    future: {
        compatibilityVersion: 4,
    },
    features: {
        devLogs: true
    },
    experimental: {
        headNext: true,
        typedPages: true,
        appManifest: true,
        sharedPrerenderData: true,
        scanPageMeta: true,
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    scripts: {
        globals: []
    },
    site: {
        name: 'Ext Team'
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            htmlAttrs: { lang: 'ru' },
            meta: [
                {name: 'msapplication-TileColor', content: '#0056f9'},
                {name: 'theme-color', content: '#ffffff'},
            ],
            link: [
                {rel: 'manifest', href: '\/site.webmanifest'},
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '@@/node_modules/normalize.css/normalize.css',
        '@/assets/styles/variables.css',
    ],
    postcss: {
        plugins: {
            autoprefixer: {},
            'postcss-import': {},
            'postcss-nested': {},
            '@csstools/postcss-global-data': {
                files: ['./client/assets/styles/media-queries.css']
            },
            'postcss-preset-env': {
                stage: 2,
                features: {
                    'nesting-rules': true,
                    'custom-media-queries': true,
                    'custom-selectors': true,
                },
            },
            //'@unocss/postcss': {},
        }
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        }
    ],
    plugins: [],
    modules: [
        'nuxt-icons',
        '@pinia/nuxt',
        '@nuxt/fonts',
        '@vueuse/nuxt',
        '@nuxt/devtools',
        "@nuxt/scripts",
        //'@unocss/nuxt',
    ],
    vite: {
        plugins: [],
        build: {
            //cssMinify: 'lightningcss'
        },
    },
    nitro: {
        compressPublicAssets: true,
    },

    fonts: {
        families: [
            { name: 'Montserrat', provider: 'google' },
        ],
        experimental: {
            processCSSVariables: true,
        }
    },
})
