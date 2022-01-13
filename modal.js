'use strict'

const moreProject = document.querySelector('.more');
const cover = document.querySelector('.cover');
const projectModal = document.querySelector('.project_modal');
const modalClose = document.querySelector('.project_modal_close');

moreProject.onclick = showModal;

function showModal(e){
  projectModal.classList.add('active');
}

window.addEventListener('click', (e) => {
  e.target === projectModal || e.target === modalClose ? projectModal.classList.remove('active') : false;
})