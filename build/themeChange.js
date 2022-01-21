'use strict'

const moon = document.querySelector('.moon');
const wrap = document.querySelector('.wrap');


moon.addEventListener('click', (e) => {
  wrap.classList.toggle('on');
})