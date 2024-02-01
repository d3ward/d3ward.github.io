import '../sass/about.sass'
import { navbar } from './components/navbar'
import A11yDialog from 'a11y-dialog'
import { themeManager } from './components/themeManager'
import { gotop } from './components/gotop'
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
	new themeManager()
	new navbar()
	new gotop()
	new aos()
	var d3Logo = document.querySelector('#Main')
	function a() {
		d3Logo.classList.add('animate-on-load')
		d3Logo.addEventListener(
			'animationend',
			() => {
				d3Logo.classList.remove('animate-on-load')
			},
			{ once: true }
		)
	}

	setTimeout(a, 500)
	const waveH = document
		.querySelector('.wave._float-top')
		.getBoundingClientRect()
	document.addEventListener('scroll', () => {
		const navbar = document.querySelector('header')
		if (window.scrollY > 50 + waveH.height) {
			navbar.classList.add('scrolled')
		} else {
			navbar.classList.remove('scrolled')
		}
		// Get the position of the center dot
		const dot = document.querySelector('.drop')
		const dotRect = dot.getBoundingClientRect()
		const dotCenterY = dotRect.top + dotRect.height / 2

		// Check each card
		document.querySelectorAll('.card').forEach((card) => {
			const cardRect = card.getBoundingClientRect()

			// Check if the top of the card is passing through the center of the dot
			if (cardRect.top <= dotCenterY && cardRect.bottom >= dotCenterY) {
				card.classList.add('highlighted')
			} else {
				card.classList.remove('highlighted')
			}
		})
	})
	/*
	document.addEventListener('scroll', function () {
		var scrollPosition = window.scrollY
		var linePath = document.getElementById('line-path')
		var lineCircle = document.getElementById('line-circle')

		// Update the SVG path and circle position
		linePath.setAttribute('d', 'M50,0 L50,' + scrollPosition)
		lineCircle.setAttribute('cx', 50)
		lineCircle.setAttribute('cy', scrollPosition)
	})*/
})
