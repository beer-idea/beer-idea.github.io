var changeHeaderColorWhenScrolling = function() {
  var body = document.body;
  var documentElement = document.documentElement;
  var scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;

  var element = document.getElementById("page-header")

  if(scrollTop > 600) {
    addClass(element, "page-header--scrolled")
  } else {
    removeClass(element, "page-header--scrolled")
  }
};

var addClass = function (element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
};

var removeClass = function(element, className) {
  element.classList.remove(className);
};

var setUpScrollListener = function() {
  window.addEventListener('scroll', changeHeaderColorWhenScrolling);
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  setUpScrollListener();
} else {
  document.addEventListener("DOMContentLoaded", setUpScrollListener);
}

