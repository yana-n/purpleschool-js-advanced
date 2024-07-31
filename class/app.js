class Car {
	#brand
	#model
	#_mileage

	constructor({ brand, model, mileage }) {
		this.#brand = brand
		this.#model = model
		this.#mileage = mileage
	}

	get #mileage() {
		return this.#_mileage
	}

	set #mileage(mileage) {
		this.#_mileage = mileage
	}

	info() {
		console.log(this.#brand, this.#model, this.#mileage)
	}
}

const options = {
	brand: 'Audi',
	model: 'A6',
	mileage: 1000
}

const car = new Car(options)
car.info()
