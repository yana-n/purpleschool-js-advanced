const names = [
	{ id: 1, name: 'Peter' },
	{ id: 2, name: 'John' },
	{ id: 1, name: 'Peter' },
]

const getUniqueItems = (arr, key = 'id') => {
	return [...new Set(arr.map(el => el[key]))]
			.map(uniqueKey =>
				arr.find(el => el[key] === uniqueKey)
			)
}

console.log(getUniqueItems(names))
// output: [ { id: 1, name: 'Peter' }, { id: 2, name: 'John' } ]
