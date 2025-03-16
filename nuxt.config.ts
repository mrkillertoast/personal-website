// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
				compatibilityDate: '2024-11-01',
				devtools: { enabled: true },
				css: [ '~/assets/css/tailwind.css', '~/assets/css/main.css' ],
				modules: [
				 '@nuxtjs/tailwindcss',
				 'shadcn-nuxt',
				 '@nuxt/content',
				 '@nuxt/icon',
				 '@nuxtjs/turnstile',
				 '@nuxthub/core'
				],
				runtimeConfig: {
								plunkApiKey: process.env.PLUNK_API_KEY,
								receiverEmail: process.env.RECEIVER_EMAIL,
								turnstile:{
												secretKey: process.env.TURNSTILE_SECRET_KEY
								}
				},
				turnstile: {
								siteKey: process.env.TURNSTILE_SITE_KEY,
				},
				shadcn: {
								/**
									* Prefix for all the imported component
									*/
								prefix: '',
								/**
									* Directory that the component lives in.
									* @default "./components/ui"
									*/
								componentDir: './components/ui'
				},
				icon: {
								serverBundle: {
												collections: [ 'lucide', 'cib' ]
								}
				}
});