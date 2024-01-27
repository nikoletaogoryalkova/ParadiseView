let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('nav');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


$('.selected').on('click', function () {
  $('.language span').show('slow');
});

// Back to top
