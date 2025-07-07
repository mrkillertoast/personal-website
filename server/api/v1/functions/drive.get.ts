const config = useRuntimeConfig()

export default defineEventHandler(async () => {

	return config.driveUrl;
})