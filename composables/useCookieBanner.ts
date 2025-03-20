import { ref, onMounted } from 'vue'

// Define consent interface
interface ConsentOptions {
	analytics: boolean;

	[ key: string ]: boolean;
}

export function useCookieBanner() {
	const isBannerVisible = ref(false)
	const consentSettings = ref<ConsentOptions>({
		analytics: false
	})
	const { gtag } = useGtag()

	// Check for existing consent cookie
	const checkConsentCookie = (): boolean => {
		if (import.meta.client) {
			const cookies = document.cookie.split(';')
			const consentCookie = cookies.find(cookie => cookie.trim().startsWith('cookie-consent='))

			if (consentCookie) {
				try {
					const consentValue = JSON.parse(consentCookie.split('=')[ 1 ])
					consentSettings.value = consentValue
					updateGtagConsent(consentValue)
					return true
				} catch (e) {
					console.error('Error parsing consent cookie', e)
					return false
				}
			}
		}
		return false
	}

	// Save consent settings to cookie
	const saveConsent = () => {
		if (import.meta.client) {
			const consentValue = JSON.stringify(consentSettings.value)
			document.cookie = `cookie-consent=${ consentValue };max-age=${ 60 * 60 * 24 * 365 };path=/;SameSite=Lax`
			updateGtagConsent(consentSettings.value)
		}
	}

	// Update Google Analytics consent
	const updateGtagConsent = (consent: ConsentOptions) => {
		gtag('consent', 'update', {
			'analytics_storage': consent.analytics ? 'granted' : 'denied'
		})
	}

	// Accept all cookies
	const acceptAll = () => {
		consentSettings.value.analytics = true
		saveConsent()
		isBannerVisible.value = false
	}

	// Accept only necessary cookies
	const acceptNecessary = () => {
		consentSettings.value.analytics = false
		saveConsent()
		isBannerVisible.value = false
	}

	// Set specific consent option
	const setConsent = (key: string, value: boolean) => {
		if (key in consentSettings.value) {
			consentSettings.value[ key ] = value
		}
	}

	// Initialize consent settings
	onMounted(() => {
		// Only show banner if consent cookie doesn't exist
		const cookieExists = checkConsentCookie()
		isBannerVisible.value = !cookieExists
	})

	return {
		isBannerVisible,
		consentSettings,
		acceptAll,
		acceptNecessary,
		setConsent,
		saveConsent
	}
}