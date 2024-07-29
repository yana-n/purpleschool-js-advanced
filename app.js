const names = [
	{ id: 1, name: 'Peter' },
	{ id: 2, name: 'John' },
	{ id: 1, name: 'Peter' },
]

const getUniqueItems = arr => new Set(arr.map((el) => arr.find((item) => el.id === item.id)))

console.log(getUniqueItems(names))
// output: [ { id: 1, name: 'Peter' }, { id: 2, name: 'John' } ]
