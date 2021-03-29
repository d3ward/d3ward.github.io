//Theme Switcher
if (window.CSS && CSS.supports("color", "var(--bg)")) {
  var toggle = document.getElementById("theme-toggle");

  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ?
    "dark" : "light");
  if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


  toggle.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
  };
} else {
  // If the feature isn't supported, then we hide the toggle buttons
  var btnContainer = document.querySelector(".toggle_theme");
  btnContainer.style.display = "none";
}

//AOS
function aos(){
  //Only Use the IntersectionObserver if it is supported
  if (IntersectionObserver) {
      //When the element is visible on the viewport, 
      //add the _aos-done class so it creates the _aos.
      let callback = function(entries) {
          entries.forEach(entry => {
              //if the element is visible, add the _a_completed class
              if (entry.isIntersecting && !entry.target.classList.contains('_aos-done')) {
                  entry.target.classList.add('_aos-done');
              }
              else{
                entry.target.classList.remove('_aos-done');
              }
          });
      }
      //Create the observer
      let observer = new IntersectionObserver(callback, {
          root: null,
          threshold: 0.1
      });

      //Get and observe all the items with the item class
      let items = document.querySelectorAll("[class*=_aos]");
      items.forEach((item) => {
          observer.observe(item);
      });
  }
}
aos();

function clipBoard(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
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

var navbar = document.querySelector("nav");

    const toggleActive = function () {
      navbar.classList.toggle("opened");
    };
    document.querySelector("nav>div>div").addEventListener("click", toggleActive);


   // Pages routes
   function pagesRoute(){
    const notFoundPage = document.querySelector("#notFound");
    const scrollTop = () =>{
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    }
    const navigate = (id) =>{
      var activePage = document.querySelector("section.page-active");
      const activeLink= document.querySelector('[topage].active');
          activeLink.classList.remove("active");
      const pageTo = document.querySelector('[topage="'+id+'"]');
     pageTo.classList.add("active");
      if(activePage){
        activePage.classList.remove("page-active");
      }
      var nextPage = document.querySelector(id);
      if(nextPage){
        nextPage.classList.add("page-active");
      }else{
        if(notFoundPage)
          notFoundPage.classList.add("page-active");
      } 
      scrollTop();
      if(history.pushState) {
        history.pushState(null, null, id);
      }
      else {
          location.hash = id;
      }
      
    }
    const link = Array.from(document.querySelectorAll('[topage]'))
      link.forEach(function(page){
        var id= page.getAttribute("topage");
        page.addEventListener('click', function(){
          
          navigate(id);
        });
      })
      if (window.location.hash) {
        navigate(window.location.hash);
      } 
}
pagesRoute();
//Home projects filter


var iso = new Isotope('.flt_cnt',{
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// filter items on button click
var filterButtons = document.querySelectorAll('.flt_btns>button');
filterButtons.forEach(element => {
  element.addEventListener("click", () => {
    var current= document.querySelector(".flt_btns>button.active");
    current.classList.remove("active");
    element.className +=" active";
    var filterValue = element.getAttribute('data-filter');
    iso.arrange({
      filter: filterValue
    });
  });
});

// Play logo animation once
var d3Logo = document.querySelector('#d3Logo');
var wstatus=1;
function startA() {d3Logo.classList.add('startA')}
d3Logo.addEventListener("click",function(){
  if(wstatus) d3Logo.classList.remove('startA');
  else startA();
  wstatus=!wstatus;
});
setTimeout(startA, 300);
 
