// // Function to check if the user has accepted cookies
// function cookiesAccepted() {
//   return document.cookie.includes("cookiesAccepted=true");
// }

// // Function to handle cookie acceptance
// function acceptCookies() {
//   setCookie("cookiesAccepted", "true", 30);
//   document.getElementById("cookies-banner").style.display = "none";
// }

// // Check if cookies are already accepted
// if (cookiesAccepted()) {
//   document.getElementById("cookies-banner").style.display = "none";
// }

//Clear Cookies
// function clearCookies() {
//   let cookies = document.cookie.split(";");

//   for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i];
//       let eqPos = cookie.indexOf("=");
//       let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
//       document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
//   }
// }  clearCookies();



// Fixed Header Nav Bar
let nav = document.querySelector('.header-section');
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 450) {
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
  item.addEventListener('click', () => {
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
});


// Change Language
document.querySelector('.selected').addEventListener('click', function () {
  document.querySelector('.language span').show('slow');
});

// Disable click event on video element
window.addEventListener('click', event => {
  if (event.target.matches('iframe')) {
    event.stopPropagation();
  }
}, true);

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

