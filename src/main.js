// Pages routes
(function() {
  var pages = {
    'default': '',
    'scrollTop':()=> {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange':()=> {
      pages.routeID = location.hash.slice(1);
      pages.routeElem = document.getElementById(pages.routeID);
      pages.scrollTop();
    },
    'init':()=> {
      window.addEventListener('hashchange',()=> {
        pages.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = pages.default;
      } else {
        pages.routeChange();
      }
    }
  };
  window.pages = pages;
})();
pages.init();

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




 const gt_btn = document.getElementById('gt-link');
 // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
 window.addEventListener("scroll", () => {
   let y = window.scrollY;
   if (y > 0) {
     gt_btn.className = "gt-link show";
   } else {
     gt_btn.className = "gt-link hide";
   }
 });

 gt_btn.onclick = function (e) {
   e.preventDefault();
   if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
     window.scroll({
       top: 0,
       left: 0,
       behavior: 'smooth'
     });
   }
 }
 


// Play logo animation once
var wrapper = document.querySelector('.wrapper svg');
var wstatus=1;
function startA() {wrapper.classList.add('startA')}
wrapper.addEventListener("click",function(){
  if(wstatus) wrapper.classList.remove('startA');
  else startA();
  wstatus=!wstatus;
});
setTimeout(startA, 300);