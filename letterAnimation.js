'use strict'

const words = document.querySelectorAll('.word');
let currentWord = 0;

let titleLetters = []

const splitLetters = (word) => {
  const content = word.innerHTML;
  word.innerHTML = '';

  for(let i = 0; i < content.length; i++){
    let letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    titleLetters.push(letter);
  }
}

const displayLetters = (arr) => {
  for(let i = 0; i < arr.length; i++){
    addClassname(arr, i)
  }
}

const addClassname = (arr, i) => {
  setTimeout(() => {    
    arr[i].classList.add('on')
  }, 350+(i*80))
}

for(let i = 0; i < words.length; i++){
  splitLetters(words[i]);
}

window.addEventListener('scroll', (e) => {
  
  for(let i = 0; i < words.length; i++){
    const top = words[i].getBoundingClientRect().top ;
    if(top < 900 && top > 0){
      const spans = words[i].querySelectorAll('span');
      const letters = [];
      spans.forEach((span) => {
        letters.push(span);
      })
      displayLetters(letters);
    }
  }
})
