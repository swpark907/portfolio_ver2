'use strict'

const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
const dotName = document.querySelectorAll('.dot-name')

dot.forEach((d) => {
  d.addEventListener('click', (e) => {
    dot.forEach((d) => {
      d.classList.remove('active');
    })
    d.classList.add('active');
    const currentPage = document.querySelector(`${e.currentTarget.dataset.link}`) 
    console.log(currentPage)

    const top = window.pageYOffset + currentPage.getBoundingClientRect().top;

    window.scrollTo({top: top, behavior:'smooth'})
    console.log(top)

  })
})





