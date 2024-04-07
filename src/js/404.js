import '../sass/404.sass'
import { themeManager } from './components/themeManager'
import A11yDialog from 'a11y-dialog'
import { navbar } from './components/navbar'
import { aos } from './components/aos'

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const dialog_support = new A11yDialog(
		document.querySelector('#dlg_support')
	)
	dialog_support.on(
		'show',
		() => (document.documentElement.style.overflowY = 'hidden')
	)
	dialog_support.on(
		'hide',
		() => (document.documentElement.style.overflowY = '')
	)
	new navbar()
	new themeManager()
	new aos()
	function showComponentBasedOnURL() {
		const url = window.location.href
		const componentMap = [
			{ keyword: 'awesome-extensions-for-kiwi', componentId: 'aek' }
		]
		let notFound = true
		componentMap.forEach(({ keyword, componentId }) => {
			if (url.includes(keyword)) {
				notFound = false
				document.getElementById(componentId).style.display = 'flex' // Show the component if the keyword is found in the URL
			}
		})
		if (notFound) document.getElementById('404').style.display = 'flex'
	}

	showComponentBasedOnURL()
})
