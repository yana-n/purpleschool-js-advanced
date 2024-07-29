const ERROR_TEXT = 'It\'s not a valid dice value'
const MIN_DICE_COUNT = 1
const DICES = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20']

const getRandomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const getNumFromStr = str => {
	return Number(str.replace(/\D/g, ''))
}

const isDiceValueValid = (dices, dice) => {
	return dices.includes(dice.toUpperCase())
}

const throwDice = dice => {
	if (!isDiceValueValid(DICES, dice)) {
		return console.log(ERROR_TEXT)
	}

	const edgeCount = getNumFromStr(dice)

	return getRandomNum(MIN_DICE_COUNT, edgeCount)
}

console.log(throwDice(DICES[0]))
