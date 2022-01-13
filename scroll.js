'use strict'

const nav = document.querySelector('.nav');
const aboutTitle = document.querySelector('#about-title');
const projectsTitle = document.querySelector('#projects-title');
const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
const dotName = document.querySelectorAll('.dot-name')
const section = document.querySelectorAll('section');
const sectionList = document.querySelectorAll('.section-list')

window.addEventListener('scroll', (e) => {
  window.scrollY > 300 ? nav.classList.add('active') : nav.classList.remove('active');
});

dot.forEach((element) => {
  scrollToTarget(element);
})

sectionList.forEach((element) => {
  scrollToTarget(element);
})

function scrollToTarget(element) {
  element.addEventListener('click', (e) => {
    const currentPage = document.querySelector(`${e.currentTarget.dataset.link}`) 

    const top = window.pageYOffset + currentPage.getBoundingClientRect().top;

    window.scrollTo({top: top, behavior:'smooth'})
  })
}

// 스크롤 할 때 dot 의 active 효과

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < section.length; i++){
    const top = section[i].getBoundingClientRect().top;
    if(top < 800 && top > -500){
      dot.forEach(d => {
        d.classList.remove('active');
        if(section[i] === document.querySelector(`${d.dataset.link}`)){
          d.classList.add('active');
        }
      })
    }
  }
})

