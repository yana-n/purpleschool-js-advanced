const renderHTML = ({ latitude, longitude }) => {
	const app = document.querySelector('#app')

	app.innerHTML = `Latitude is ${latitude}, longitude is ${longitude}`
}

const getCurrentLocation = () => {
	return new Promise((resolve, reject) => {
		const showGeolocation = geo => {
			const { coords: { latitude, longitude } } = geo
			resolve({ latitude, longitude })
		}

		const handleError = e => reject(new Error(e.message))

		navigator?.geolocation.getCurrentPosition(showGeolocation, handleError)
	})
}

getCurrentLocation()
	.then(location => renderHTML(location))
	.catch(e => alert(e))
