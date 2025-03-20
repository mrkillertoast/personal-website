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
		'@nuxthub/core',
		'nuxt-gtag'
	],
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/images/favicons/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-touch-icon.png' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicons/favicon-96x96.png' },
				{ rel: 'manifest', href: '/images/favicons/site.webmanifest' }
			],
			title: 'Rauscher.ai',
			meta: [
				{
					"charset": "utf-8"
				}
			]
		},
	},
	runtimeConfig: {
		plunkApiKey: process.env.PLUNK_API_KEY,
		receiverEmail: process.env.RECEIVER_EMAIL,
		turnstile: {
			secretKey: process.env.TURNSTILE_SECRET_KEY
		},
		public: {}
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
	},
	gtag: {
		enabled: process.env.NODE_ENV === 'production',
		id: process.env.GOOGLE_ANALYTICS_ID,
		//initialConsent: false, // Disable tracking by default
		config: {
			page_title: 'Lukas Rauscher',
		},
		initCommands: [
			// Denies everything on startup
			[ 'consent', 'default', {
				ad_user_data: 'denied',
				ad_personalization: 'denied',
				ad_storage: 'denied',
				analytics_storage: 'denied',
				wait_for_update: 500,
			} ],
		],
	}
});
