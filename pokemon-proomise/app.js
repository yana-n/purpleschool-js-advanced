const TEXT_LANG = 'en'
const POKE_API = 'https://pokeapi.co/api/v2'

const getData = ({ url, method = 'GET', message }) => {
	return fetch(url, { method })
		.then(res => {
			if (!res.ok) throw new Error(`${message}: ${res.status}`)

			return res.json()
		})
}

getData({ url: `${POKE_API}/pokemon/ditto` })
	.then(({ abilities }) => {
		const { ability: { url } } = abilities[0]

		return getData({ url })
	})
	.then(({ effect_entries }) => {
		const { effect } = effect_entries.filter(item => item.language.name === TEXT_LANG)[0]

		console.log(effect)
	})
