export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const { success } = await verifyTurnstileToken(body.token)
	return { valid: success }
})