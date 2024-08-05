class Billing {
	#amount = 100

	constructor(amount) {
		this.#amount = amount
	}

	get amount() {
		return this.#amount
	}

	calculateTotal() {
		return this.amount
	}
}

class FixedBilling extends Billing {
	constructor(amount) {
		super(amount)
	}
}

class HourBilling extends Billing {
	constructor(amount, hours) {
		super(amount)

		this.hours = hours
	}

	calculateTotal() {
		return this.amount * this.hours
	}
}

class ItemsBilling extends Billing {
	constructor(amount, items) {
		super(amount)

		this.items = items
	}

	calculateTotal() {
		return this.amount * this.items
	}
}

console.log(new Billing(300).calculateTotal())
console.log(new FixedBilling(400).calculateTotal())
console.log(new HourBilling(500, 4).calculateTotal())
console.log(new ItemsBilling(600, 20).calculateTotal())
