document.addEventListener('DOMContentLoaded', () => {
	const timerEl = document.querySelector('#timer')
	const today = new Date()
	const deadline = `January 1 ${today.getFullYear() + 1} 00:00:00`

	const padZero = num => num < 10 ? `0${num}` : num

	const timeLeft = date => {
		const total = new Date(date).getTime() - new Date().getTime()
		const seconds = Math.floor((total / 1000) % 60)
		const minutes = Math.floor((total / 1000 / 60) % 60)
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
		const days = Math.floor(total / (1000 * 60 * 60 * 24) % 31)
		const months = Math.floor(total / (1000 * 60 * 60 * 24 * 31))

		return { total, months, days, hours, minutes, seconds }
	}

	function createTitle(n, index) {
		const titles = [
			['месяц', 'месяца', 'месяцев'],
			['день', 'дня', 'дней'],
			['час', 'часа', 'часов'],
			['минута', 'минуты', 'минут'],
			['секунда', 'секунды', 'секунд']
		]

		return titles[index][n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
	}

	const renderTimer = (el, time) => {
		const { months, days, hours, minutes, seconds } = time

		el.innerHTML = `
			${months} ${createTitle(months, 0)}, 
			${days} ${createTitle(days, 1)}, 
			${padZero(hours)} ${createTitle(hours, 2)}, 
			${padZero(minutes)} ${createTitle(minutes, 3)},
			${padZero(seconds)} ${createTitle(seconds, 4)}
		`
	}

	const initTimer = date => {
		const timeInterval = setInterval(() => {
			const time	= timeLeft(date)

			renderTimer(timerEl, time)

			if (time.total <= 0){
				clearInterval(timeInterval)

				console.log('New Year\'s Day')
			}
		},1000)
	}

	initTimer(deadline)
})
