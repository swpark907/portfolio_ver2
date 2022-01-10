const words = document.querySelectorAll('.word');
let currentWord = 0;

let titleLetters = []

const splitLetters = (word) => {
  const content = word.innerHTML;
  word.innerHTML = '';
  
  let letters = [];

  for(let i = 0; i < content.length; i++){
    let letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    titleLetters.push(letter);
  }
  displayLetters(titleLetters);
}

const displayLetters = (arr) => {
  for(let i = 0; i < arr.length; i++){
    addClassname(arr, i)
  }
}

const addClassname = (arr, i) => {
  setTimeout(() => {    
    arr[i].classList.add('on')
    console.log(arr[i])
  }, 350+(i*80))
}

for(let i = 0; i < words.length; i++){
  splitLetters(words[i]);
}
