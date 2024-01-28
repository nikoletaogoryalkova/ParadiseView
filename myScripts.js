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
