$(document).foundation();

// SVG Elements to inject
var mySVGsToInject = document.querySelectorAll('.inject-me');

// Do the SVG injection
SVGInjector(mySVGsToInject);

$('[data-fadeInOut]').hover(function () {
  $('.card-hover-reveal-section').toggleClass("fade-in");
});
