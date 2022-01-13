'use strict'

const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
const dotName = document.querySelectorAll('.dot-name')
const section = document.querySelectorAll('section');

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

// 스크롤 할 때 dot 의 active 효과

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < section.length; i++){
    const top = section[i].getBoundingClientRect().top;
    if(top < 500 && top > -500){
      dot.forEach(d => {
        d.classList.remove('active');
        if(section[i] === document.querySelector(`${d.dataset.link}`)){
          d.classList.add('active');
        }
      })
    }
  }
})





