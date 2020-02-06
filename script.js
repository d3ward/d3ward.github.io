// Pages routes
(function() {
  var pages = {
    'default': 'home',
    'scrollTop': function() {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange': function() {
      pages.routeID = location.hash.slice(1);
      pages.routeElem = document.getElementById(pages.routeID);
      pages.scrollTop();
    },
    'init': function() {
      window.addEventListener('hashchange', function() {
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
var mybutton = document.getElementById("goTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) mybutton.style.display = "block";
  else mybutton.style.display = "none";
}
function pagesscrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Home projects filter
flt_selection("all"); 
function flt_selection(c) {
  var x, i;
  x = document.getElementsByClassName("cols");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {flt_remove(x[i], "show");if (x[i].className.indexOf(c) > -1) flt_add(x[i], "show");}
}
function flt_add(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}}
}
function flt_remove(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {while (arr1.indexOf(arr2[i]) > -1) {arr1.splice(arr1.indexOf(arr2[i]), 1);}}
  element.className = arr1.join(" ");
}
var flt_btncnt = document.getElementById("flt_tag");
var flt_btns = flt_btncnt.getElementsByClassName("flt_btn");
for (var i = 0; i < flt_btns.length; i++) {
  flt_btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.className += " active";
  });
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
