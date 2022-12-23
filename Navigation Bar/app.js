const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
  console.log(navToggle);
  console.log(links);
});
