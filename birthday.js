const VALID_AGE = 14
const BIRTHDAY_DATE = '2009-12-01'

const hasBdayThisYear = date => {
	const currentMonth = new Date().getMonth()
	const currentDate = new Date().getDate()

	const bdayMonth = new Date(date).getMonth()
	const bdayDate = new Date(date).getDate()

	return currentMonth >= bdayMonth && currentDate >= bdayDate
}

const isValidAge = date => {
	const currentYear = new Date().getFullYear()
	const bdayYear = new Date(date).getFullYear()
	const age = currentYear - bdayYear - (hasBdayThisYear(date) ? 0 : 1)

	return age > VALID_AGE
}

console.log(isValidAge(BIRTHDAY_DATE))
