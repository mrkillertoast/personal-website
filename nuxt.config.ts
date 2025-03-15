// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: [ '~/assets/css/tailwind.css', '~/assets/css/main.css' ],
	modules: [ '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/content', '@nuxt/icon' ],
	runtimeConfig: {
		plunkApiKey: process.env.PLUNK_API_KEY,
		receiverEmail: process.env.RECEIVER_EMAIL
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