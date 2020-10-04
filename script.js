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

//Gotop button config
 // Set a variable for our button element.
 const navbar = document.getElementById("nav");
 const scrollToTopButton = document.getElementById('go_top');
 const scrollFunc = () => {
     let y = window.scrollY;
     if (y > 0) {
        navbar.style.backgroundColor ='#000';
         scrollToTopButton.className = "go_top show";
     } else {
      navbar.style.backgroundColor ='#000000c4';
         scrollToTopButton.className = "go_top hide";
     }
 };
 window.addEventListener("scroll", scrollFunc);
 const scrollToTop = () => {
     const c = document.documentElement.scrollTop || document.body.scrollTop;
     if (c > 0) {
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo(0, c - c / 10);
     }
 };
 scrollToTopButton.onclick = function (e) {
     e.preventDefault();
     scrollToTop();
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
