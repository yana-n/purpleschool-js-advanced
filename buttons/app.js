const BTN_COUNTS = 5
const BTN_TEXT = 'Click me!'
const BTN_CLICKED_TEXT = 'Clicked!'

const app = document.querySelector('#app')
const actions = app.querySelector('#actions')
let counts = 0

const createBtn = () => {
	const btn = document.createElement('button')
	btn.classList.add('btn')
	btn.innerText = BTN_TEXT
	btn.setAttribute('type', 'button')
	actions.appendChild(btn)
}

const toggleButton = (e) => {
	const target = e?.target

	if (target?.type !== 'button') return

	actions
		.querySelectorAll('button')
		.forEach(button => {
			button.innerText = BTN_TEXT
			button.removeAttribute('disabled')
		})

	target.innerText = BTN_CLICKED_TEXT
	target.setAttribute('disabled', 'disabled')
}

const renderCounter = () => {
	const counter = app.querySelector('#counter')

	counter.innerText = counts
}

const increaseCounter = () => {
	counts += 1

	renderCounter()
}

const initApp = () => {
	renderCounter()

	for (let i = 0; i < BTN_COUNTS; i++) {
		createBtn()
	}

	actions.addEventListener('click', e => {
		toggleButton(e)
		increaseCounter()
	})
}

initApp()
