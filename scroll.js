const nav = document.querySelector('.nav');
const aboutTitle = document.querySelector('#about-title');
const projectsTitle = document.querySelector('#projects-title');

window.addEventListener('scroll', (e) => {
  window.scrollY > 300 ? nav.classList.add('active') : nav.classList.remove('active');
})

console.log(aboutTitle.getBoundingClientRect())

