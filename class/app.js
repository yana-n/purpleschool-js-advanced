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

	#checkMileage(value) {
		return this.#mileage < value
	}

	changeMileage(value) {
		if (!this.#checkMileage(value)) {
			console.error(
				`the values are the same (current: ${this.#mileage
				}, new: ${value}). Mileage NOT changed`
			)
			return false
		}

		console.log(`mileage changed from ${this.#mileage} to ${value}`)
		this.#_mileage = value
		return true
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
car.changeMileage(10001)
car.changeMileage(2500)
car.info()
