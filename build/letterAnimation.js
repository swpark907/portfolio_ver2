'use strict'

const words = document.querySelectorAll('.word');
let currentWord = 0;

let titleLetters = []

// 클래스명 시간차 추가를 통한 애니메이션 구현

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
  }, 100+(i*50))
}

for(let i = 0; i < words.length; i++){
  splitLetters(words[i]);
}

// 화면에 나타나면 애니메이션 실행

window.addEventListener('scroll', (e) => {
  
  for(let i = 0; i < words.length; i++){
    const top = window.pageYOffset + words[i].getBoundingClientRect().top ;
    if(window.pageYOffset + window.innerHeight > top){
      const spans = words[i].querySelectorAll('span');
      const letters = [];
      spans.forEach((span) => {
        letters.push(span);
      })
      displayLetters(letters);      
    }
  }
})


