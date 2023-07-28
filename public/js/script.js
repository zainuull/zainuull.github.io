// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hlink = document.querySelectorAll('#hlink');
const body = document.querySelector('body');
const moon = document.querySelector('#moon');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('bg-white');
});

hlink.forEach((link) => {
  link.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('bg-white');
  });
});


// DarkMode
moon.addEventListener('click', function () {
  body.classList.toggle('dark');
});
