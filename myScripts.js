let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('nav');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// Change Language
$('.selected').on('click', function () {
  $('.language span').show('slow');
});

// Disable click event on video element
window.addEventListener('click', event => {
  if (event.target.matches('iframe')) {
    event.stopPropagation();
  }
}, true);


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header-section");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  // Use document.documentElement.scrollTop instead of window.pageYOffset
  if (document.documentElement.scrollTop > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}