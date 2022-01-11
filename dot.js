'use strict'

const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
const dotName = document.querySelectorAll('.dot-name')

dots.addEventListener('click', (e) => {
  if(e.target.className === 'dot'){
    dot.forEach((d) => {
      d.classList.remove('active');
    })
    e.target.classList.add('active');
  }

  if(e.target.className === 'dot-name'){
    dot.forEach((d) => {
      d.classList.remove('active');
    })
    e.target.parentNode.classList.add('active');
  }
})





