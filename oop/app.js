const options = {
	race: 'European',
	name: 'John',
	language: 'en'
}

const Character = function({ race, name, language}) {
	this.race = race
	this.name = name
	this.language = language
}

Character.prototype.speak = function() {
	console.log(`language: ${this.language}, name: ${this.name}`)
}

const character = new Character(options)
character.speak() // language: en, name: John

const Orc = function(options, weapon){
	Character.call(this, options)
	this.weapon = weapon
}

Orc.prototype = Object.create(Character.prototype)
Orc.prototype.constructor = Orc

Orc.prototype.blow = function() { console.log('Blow!') }

const orc = new Orc(options, 'axe')
orc.blow() // Blow!
orc.speak() // language: en, name: John
console.log(orc.race) // European

const Elf = function(options, spellType){
	Character.call(this, options)
	this.spellType = spellType
}

Elf.prototype = Object.create(Character.prototype)
Elf.prototype.constructor = Elf

Elf.prototype.createSpell = function() {
	console.log(`Spell was created with ${this.spellType}`)
}

const elf = new Elf(options, 'magic')
elf.createSpell() // Spell was created with magic
elf.speak() // language: en, name: John
console.log(elf.language) // en
