const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

	const body = await readBody(event)

	console.log(body)


	const emailContent = `
    Name: ${ body.name } <br><br>
    Email: ${ body.email }<br><br>
    Message: ${ body.message }
  `;

	const promise = await fetch('https://api.useplunk.com/v1/send', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${ config.private.plunkApiKey }`
		},
		body: JSON.stringify({
			"to": "selina.rufer00@gmail.com",
			"subject": "New Message from Website",
			"body": emailContent
		})
	});

	return promise.ok;
})