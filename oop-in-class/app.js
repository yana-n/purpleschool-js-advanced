const characterOptions = {
	race: 'European',
	name: 'John',
	language: 'en'
}

class Character {
	constructor({ race, name, language }) {
		this.race = race
		this.name = name
		this.language = language
	}

	speak() {
		console.log(`Character speaks: language - ${this.language}, name - ${this.name}`)
	}
}

const orcOptions = {
	...characterOptions,
	weapon: 'sword'
}

class Orc extends Character {
	constructor({ race, name, language, weapon }) {
		super({ race, name, language })

		this.weapon = weapon
	}

	blow() {
		console.log('Orc blow!')
	}

	speak() {
		console.log(`Orc speaks: weapon - ${this.weapon}`)
	}
}

const elfOptions = {
	...characterOptions,
	spell: 'magic'
}

class Elf extends Character {
	constructor({ race, name, language, spell }) {
		super({ race, name, language })

		this.spell = spell
	}

	createSpell() {
		console.log('Elf has created spell!')
	}

	speak() {
		console.log(`Elf speaks: spell - ${this.spell}`)
	}
}

const character = new Character(characterOptions)
character.speak() // language: en, name: John

const orc = new Orc(orcOptions)
orc.speak() // Orc speaks: weapon -sword
orc.blow() // Orc blow!

const elf = new Elf(elfOptions)
elf.speak() // Elf speaks: spell - magic
elf.createSpell() // Elf has created spell!
