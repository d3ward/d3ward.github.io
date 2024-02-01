import '../sass/index.sass'
import { navbar } from './components/navbar'
import Shuffle from 'shufflejs'
import A11yDialog from 'a11y-dialog'
import { themeManager } from './components/themeManager'
import { gotop } from './components/gotop'
import { aos } from './components/aos'

class Demo {
	constructor(element) {
		this.element = element
		this.shuffle = new Shuffle(element, {
			itemSelector: '.grid-p>*',
			delimiter: ','
		})
		this.addShuffleEventListeners()
		this._activeFilters = []
		this.addFilterButtons()
		this.addSearchFilter()
	}
	addShuffleEventListeners() {
		this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
			console.log('layout. data:', data)
		})
	}

	addFilterButtons() {
		const options = document.querySelector('.filter-options')
		if (!options) {
			return
		}

		const filterButtons = Array.from(options.children)
		const onClick = this._handleFilterClick.bind(this)
		filterButtons.forEach((button) => {
			button.addEventListener('click', onClick, false)
		})
	}

	_handleFilterClick(evt) {
		const btn = evt.currentTarget
		const isActive = btn.classList.contains('active')
		const btnGroup = btn.getAttribute('data-group')
		this._removeActiveClassFromChildren(btn.parentNode)
		let filterGroup
		if (isActive) {
			btn.classList.remove('active')
			filterGroup = Shuffle.ALL_ITEMS
		} else {
			btn.classList.add('active')
			filterGroup = btnGroup
		}
		this.shuffle.filter(filterGroup)
	}

	_removeActiveClassFromChildren(parent) {
		const { children } = parent
		for (let i = children.length - 1; i >= 0; i--) {
			children[i].classList.remove('active')
		}
	}

	addSorting() {
		const buttonGroup = document.querySelector('.sort-options')
		if (!buttonGroup) {
			return
		}
		buttonGroup.addEventListener(
			'change',
			this._handleSortChange.bind(this)
		)
	}

	_handleSortChange(evt) {
		const buttons = Array.from(evt.currentTarget.children)
		buttons.forEach((button) => {
			if (button.querySelector('input').value === evt.target.value) {
				button.classList.add('active')
			} else {
				button.classList.remove('active')
			}
		})
		const { value } = evt.target
		let options = {}

		function sortByDate(element) {
			return element.getAttribute('data-created')
		}

		function sortByTitle(element) {
			return element.getAttribute('data-title').toLowerCase()
		}

		if (value === 'date-created') {
			options = {
				reverse: true,
				by: sortByDate
			}
		} else if (value === 'title') {
			options = {
				by: sortByTitle
			}
		}
		this.shuffle.sort(options)
	}

	// Advanced filtering
	addSearchFilter() {
		const searchInput = document.querySelector('.js-shuffle-search')
		if (!searchInput) {
			return
		}
		searchInput.addEventListener(
			'keyup',
			this._handleSearchKeyup.bind(this)
		)
	}
	update() {
		console.log('Update ')
		this.shuffle.disable()
		this.shuffle.layout()
		this.shuffle.update()
		this.shuffle.enable()
	}

	_handleSearchKeyup(evt) {
		const searchText = evt.target.value.toLowerCase()
		this.shuffle.filter((element, shuffle) => {
			// If there is a current filter applied, ignore elements that don't match it.
			if (shuffle.group !== Shuffle.ALL_ITEMS) {
				// Get the item's groups.
				const groups = JSON.parse(element.getAttribute('data-groups'))
				const isElementInCurrentGroup =
					groups.indexOf(shuffle.group) !== -1
				// Only search elements in the current group
				if (!isElementInCurrentGroup) {
					return false
				}
			}
			const titleElement = element.querySelector('.picture-item__title')
			const titleText = titleElement.textContent.toLowerCase().trim()
			return titleText.indexOf(searchText) !== -1
		})
	}
}
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
}
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
	console.log('create grid')
	const gridP = new Demo(document.querySelector('.grid-p'))

	setTimeout(() => {
		gridP.update()
	}, 1000)

	var d3Logo = document.querySelector('#d3Logo')
	var wstatus = 1

	function startA() {
		d3Logo.classList.add('startA')
		const cards_counts = document.querySelectorAll('.count')
		cards_counts.forEach((card) => {
			const targetNumber = parseInt(card.dataset.targetNumber, 10)
			const duration = 2000
			let currentNumber = 0
			const interval = duration / targetNumber
			const timer = setInterval(() => {
				currentNumber++
				card.textContent = currentNumber
				if (currentNumber === targetNumber) {
					clearInterval(timer)
				}
			}, interval)
		})
		const ANIMATEDCLASSNAME = 'animated'
		const cards = document.querySelectorAll('.grid-stats > *')
		const ELEMENTS_SPAN = []
		cards.forEach((element, index) => {
			let addAnimation = false
			if (!ELEMENTS_SPAN[index])
				ELEMENTS_SPAN[index] = element.querySelector('.ripple')
			element.addEventListener('mouseover', (e) => {
				if (element.classList.contains('gs-avatar'))
					element.classList.add('transition-2')
				ELEMENTS_SPAN[index].style.left =
					e.pageX - element.offsetLeft + 'px'
				ELEMENTS_SPAN[index].style.top =
					e.pageY - element.offsetTop + 'px'
				if (addAnimation) element.classList.add(ANIMATEDCLASSNAME)
			})
			element.addEventListener('mouseout', (e) => {
				ELEMENTS_SPAN[index].style.left =
					e.pageX - element.offsetLeft + 'px'
				ELEMENTS_SPAN[index].style.top =
					e.pageY - element.offsetTop + 'px'
			})
		})
	}
	d3Logo.addEventListener('click', function () {
		d3Logo.classList.add('bounce')
		d3Logo.addEventListener(
			'animationend',
			() => {
				d3Logo.classList.remove('bounce')
			},
			{ once: true }
		)
	})
	setTimeout(startA, 300)

	const waveH = document
		.querySelector('.wave._float-top')
		.getBoundingClientRect()
	document.addEventListener('scroll', () => {
		const navbar = document.querySelector('header')
		if (window.scrollY > waveH.height - 70) {
			navbar.classList.add('scrolled')
		} else {
			navbar.classList.remove('scrolled')
		}
	})
})
