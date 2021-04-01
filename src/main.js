var iso;
var d3ss = {
  //Open and close the navbar , on default button ofr navbar or using the toggle parameter
  navbar: function (toggle) {
    var n = document.querySelector("nav");
    if (n) {
      const toggleActive = function () {
        n.classList.toggle("opened");
      };
      var oc = (toggle) ? toggle : "nav>div>div";
      document.querySelector(oc).addEventListener("click", toggleActive);
    }
  },
  theme: function () {
    //Theme Switcher
    var toggle = document.getElementById("theme-toggle");
    if (window.CSS && CSS.supports("color", "var(--bg)") && toggle) {
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
    }
  },
  aos: function () {
    //Get and observe all the items with the item class
    let items = document.querySelectorAll("[class*=_aos]");
    //Only Use the IntersectionObserver if it is supported and _aos elements exist
    if (IntersectionObserver && items) {
      //When the element is visible on the viewport, 
      //add the _aos-done class so it creates the _aos animation.
      let callback = function (entries) {
        entries.forEach(entry => {
          //if the element is visible, add the _aos-done class
          if (entry.isIntersecting && !entry.target.classList.contains('_aos-done')) {
            entry.target.classList.add('_aos-done');
          } else {
            //else the element do reverse animation
            entry.target.classList.remove('_aos-done');
          }
        });
      }
      //Create the observer
      let observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.1
      });
      //Add each _aos element to the observer
      items.forEach((item) => {
        observer.observe(item);
      });
    }

  },
  gotop: function () {
    const gt_btn = document.getElementById('gt-link');
    if (gt_btn) {
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
    }
  },
  pagesRoute: function () {
    const notFoundPage = document.querySelector("#notFound");
    const scrollTop = () => {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    }
    const navigate = (id) => {
      var activePage = document.querySelector("section.page-active");
      const activeLink = document.querySelector('[topage].active');
      activeLink.classList.remove("active");
      const pageTo = document.querySelector('[topage="' + id + '"]');
      pageTo.classList.add("active");
      if (activePage) {
        activePage.classList.remove("page-active");
      }
      var nextPage = document.querySelector(id);
      if (nextPage) {
        nextPage.classList.add("page-active");
      } else {
        if (notFoundPage)
          notFoundPage.classList.add("page-active");
      }
      scrollTop();
      if (history.pushState) {
        history.pushState(null, null, id);
      } else {
        location.hash = id;
      }

    }
    const link = Array.from(document.querySelectorAll('[topage]'))
    link.forEach(function (page) {
      var id = page.getAttribute("topage");
      page.addEventListener('click', function () {

        navigate(id);
        if(id=="#home"){
          iso.arrange({
            filter: '*'
          });
        }
      });
    })
    if (window.location.hash) {
      navigate(window.location.hash);
    }
  }
}

/* Things done once the DOM is loaded */
function d3ssOnDOMContentLoaded() {
  d3ss.navbar();
  d3ss.theme();
  d3ss.gotop();
  d3ss.pagesRoute();
  d3ss.aos();
  iso = new Isotope('.flt_cnt', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  var filterButtons = document.querySelectorAll('.flt_btns>button');
  filterButtons.forEach(element => {
    element.addEventListener("click", () => {
      var current = document.querySelector(".flt_btns>button.active");
      current.classList.remove("active");
      element.className += " active";
      var filterValue = element.getAttribute('data-filter');
      iso.arrange({
        filter: filterValue
      });
    });
  });
  // Play logo animation once
  var d3Logo = document.querySelector('#d3Logo');
  var wstatus = 1;

  function startA() {
    d3Logo.classList.add('startA')
  }
  d3Logo.addEventListener("click", function () {
    if (wstatus) d3Logo.classList.remove('startA');
    else startA();
    wstatus = !wstatus;
  });
  setTimeout(startA, 300);
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", d3ssOnDOMContentLoaded);