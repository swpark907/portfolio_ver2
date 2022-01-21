'use strict'

const emailBox = document.querySelector('.email-box');
const email = document.querySelector('.email');
const confirmation = document.querySelector('.confirmation');

emailBox.addEventListener('click', (e) => {

  document.execCommand("copy");

  email.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", email.textContent);
    console.log(event.clipboardData.getData("text"))
    
    confirmation.classList.add('on');
    setTimeout(() => {
      confirmation.classList.remove('on');
    }, 1000)
  }
});
})