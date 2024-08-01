class Billing {
	amount = 0

	calculateTotal() {
		return this.amount
	}
}

class FixedBilling extends Billing {
	amount = 10
}

class HourBilling extends Billing {
	amount = 20

	constructor(hours) {
		super()

		this.hours = hours
	}

	calculateTotal() {
		return this.amount * this.hours
	}
}

class ItemsBilling extends Billing {
	amount = 30

	constructor(items) {
		super()

		this.items = items
	}

	calculateTotal() {
		return this.amount * this.items
	}
}
