

// element argument can be a selector string
//   for an individual element
var iso = new Isotope('.grid_p', {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// filter items on button click
var filterButtons = document.querySelectorAll('.filter-button-group>button');
filterButtons.forEach(element => {
  element.addEventListener("click", () => {
    var filterValue = element.getAttribute('data-filter');
    iso.arrange({
      filter: filterValue
    });
  });
});

var cards=document.getElementsByClassName("flip");

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.addEventListener("click",()=>{
    element.classList.toggle("flipped");
  })
}

