const TEXT_LANG = 'en'

const createReq = (url, method = 'GET') => {
	const req = new XMLHttpRequest()
	req.open(method, url, true)
	req.send()

	return req
}

const ditto = createReq('https://pokeapi.co/api/v2/pokemon/ditto')

ditto.addEventListener('load', () => {
	const { abilities } = JSON.parse(ditto.responseText)
	const { ability: { url } } = abilities[0]

	const effectRes = createReq(url)

	effectRes.addEventListener('load', function() {
		const { effect_entries } = JSON.parse(effectRes.responseText)
		const { effect } = effect_entries.filter(item => item.language.name === TEXT_LANG)[0]

		console.log(effect)
	})
})
