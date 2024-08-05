const race = (promises) => {
	return new Promise((resolve, reject) => {
		promises
			.forEach(promise => Promise.resolve(promise).then(resolve, reject))
	})
}

const p1 = Promise.reject(1)
const p2 = Promise.resolve(2)

race([p1, p2])
	.then(console.log)
	.catch(e => console.error(new Error(e)))
