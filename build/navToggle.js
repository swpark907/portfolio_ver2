const toggleBtn = document.querySelector('.nav-toggle');
const navLists = document.querySelector('.section-lists');

toggleBtn.onclick = () => {
  navLists.classList.toggle('on');
  toggleBtn.classList.toggle('on');
}