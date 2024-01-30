// Fixed Header Nav Bar
let nav = document.querySelector('.header-section');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 450){
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
})

// Nav Bar
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('nav');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
// Closed Burger menu after selected 
document.querySelectorAll("#nav ul li").forEach(item => {
  item.addEventListener('click', ()=>{
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
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

