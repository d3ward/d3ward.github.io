import '../sass/index.sass'
import * as data from './data.json'
import { navbar } from './components/navbar'
import Shuffle from 'shufflejs'
import { dialog } from './components/dialog'
import { themeManager } from './components/themeManager'
import { gotop } from './components/gotop'
import { aos } from './components/aos'
import { Typer } from './components/typer'
import { gitStats } from './components/gitStats'

let text = [
	'DEVELOPER + DESIGNER ',
	'Tic Tac Toe',
	'Connect Four',
	'Memory Tiles'
]
class Demo {
	constructor(element) {
	  this.element = element;
	  this.shuffle = new Shuffle(element, {
		itemSelector: '.grid-p>*',
		delimiter: ','
	  });
  
	  // Log events.
	  this.addShuffleEventListeners();
	  this._activeFilters = [];
	  this.addFilterButtons();
	  this.addSearchFilter();
	}
	/**
	 * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
	 * for them like you normally would (with jQuery for example).
	 */
	addShuffleEventListeners() {
	  this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
		console.log('layout. data:', data);
	  });
	}
  
	addFilterButtons() {
	  const options = document.querySelector('.filter-options');
	  if (!options) {
		return;
	  }
	  
	  const filterButtons = Array.from(options.children);
	  const onClick = this._handleFilterClick.bind(this);
	  filterButtons.forEach((button) => {
		button.addEventListener('click', onClick, false);
	  });
	}
  
	_handleFilterClick(evt) {
	  const btn = evt.currentTarget;
	  const isActive = btn.classList.contains('active');
	  const btnGroup = btn.getAttribute('data-group');
	  
	  this._removeActiveClassFromChildren(btn.parentNode);
	  
	  let filterGroup;
	  if (isActive) {
		btn.classList.remove('active');
		filterGroup = Shuffle.ALL_ITEMS;
	  } else {
		btn.classList.add('active');
		filterGroup = btnGroup;
	  }
	  
	  this.shuffle.filter(filterGroup);
	}
  
	_removeActiveClassFromChildren(parent) {
	  const { children } = parent;
	  for (let i = children.length - 1; i >= 0; i--) {
		children[i].classList.remove('active');
	  }
	}
  
	addSorting() {
	  const buttonGroup = document.querySelector('.sort-options');
	  if (!buttonGroup) {
		return;
	  }
	  buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
	}
  
	_handleSortChange(evt) {
	  // Add and remove `active` class from buttons.
	  const buttons = Array.from(evt.currentTarget.children);
	  buttons.forEach((button) => {
		if (button.querySelector('input').value === evt.target.value) {
		  button.classList.add('active');
		} else {
		  button.classList.remove('active');
		}
	  });
	  
	  // Create the sort options to give to Shuffle.
	  const { value } = evt.target;
	  let options = {};
	  
	  function sortByDate(element) {
		return element.getAttribute('data-created');
	  }
	  
	  function sortByTitle(element) {
		return element.getAttribute('data-title').toLowerCase();
	  }
	  
	  if (value === 'date-created') {
		options = {
		  reverse: true,
		  by: sortByDate,
		};
	  } else if (value === 'title') {
		options = {
		  by: sortByTitle,
		};
	  }
	  this.shuffle.sort(options);
	}
  
	// Advanced filtering
	addSearchFilter() {
	  const searchInput = document.querySelector('.js-shuffle-search');
	  if (!searchInput) {
		return;
	  }
	  searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
	}
	update(){
		console.log("Update ")
		this.shuffle.disable()
		this.shuffle.layout()
		this.shuffle.update()
		this.shuffle.enable()
	}
	/**
	 * Filter the shuffle instance by items with a title that matches the search input.
	 * @param {Event} evt Event object.
	 */
	_handleSearchKeyup(evt) {
	  const searchText = evt.target.value.toLowerCase();
	  this.shuffle.filter((element, shuffle) => {
		// If there is a current filter applied, ignore elements that don't match it.
		if (shuffle.group !== Shuffle.ALL_ITEMS) {
		  // Get the item's groups.
		  const groups = JSON.parse(element.getAttribute('data-groups'));
		  const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
		  // Only search elements in the current group
		  if (!isElementInCurrentGroup) {
			return false;
		  }
		}
		const titleElement = element.querySelector('.picture-item__title');
		const titleText = titleElement.textContent.toLowerCase().trim();
		return titleText.indexOf(searchText) !== -1;
	  });
	}
  }
  function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
 async function appendData(data) {
	var ext_grid = document.querySelector(".grid-p");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		var tags="";
		(data[i].tags.split(",")).forEach(el => {
			tags+="<div>"+el+"</div>"
		});
		var gs = '<div gs-user="'+data[i].user+'" gs-repo="'+data[i].repo+'">'+
			'<div gs-data="description"></div>'+
			'<div class="gs-compact">'+
			'<label><i gs-icon="watchers"></i><div gs-data="watchers"></div></label>'+
			'<label><i gs-icon="stars"></i><div gs-data="stars"></div></label>'+
			'<label><i gs-icon="forks"></i><div gs-data="forks"></div></label></div></div>'
		div.className = "col-4 _f-center";
		var url = (data[i].url == null )?'':'<a target="_blank" class="btn btn-p" href="'+data[i].url+'"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg>Open</a>'
		var githuburl = (data[i].githuburl == null )?'':'<a target="_blank" class="btn btn-p" href="'+data[i].githuburl+'"><svg id="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>Github</a>'
		div.setAttribute("data-groups",data[i].groups)
		div.innerHTML = '<div class="card  _aos-bottom"><div class="badges">' + tags + '</div>' +
			'<div class="img-w _bg-white"><img src="assets/svg/' + data[i].logo + '" alt="Logo '+data[i].name+'"></div>' +'<h5>'+data[i].name+'</h5>'+ gs+
			'<div class="links">' +url+githuburl + '</div</div>';
		ext_grid.appendChild(div);
	}
	console.log("Loaded data and rendered")
}
appendData(data).then(
// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new themeManager()
	new navbar()
	new gotop()
	new aos()
	var elty = document.getElementById('typewriter')
	if (elty != undefined) {
		var toRotate = elty.getAttribute('data-type')
		var period = elty.getAttribute('data-period')
		if (toRotate) {
			new Typer(elty, JSON.parse(toRotate), period)
		}
	}

	
	console.log("create grid")
	const gridP = new Demo(document.querySelector('.grid-p'));
	new gitStats()
	
	setTimeout(() => {
		gridP.update()
	}, 1000);
	// Play logo animation once

	var d3Logo = document.querySelector('#d3Logo')
	var wstatus = 1

	function startA() {
		d3Logo.classList.add('startA')
	}
	d3Logo.addEventListener('click', function () {
		if (wstatus) d3Logo.classList.remove('startA')
		else startA()
		wstatus = !wstatus
	})
	setTimeout(startA, 300)
})
)