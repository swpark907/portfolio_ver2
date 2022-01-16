const moon = document.querySelector('.moon');
const body = document.querySelector('body');
const area = document.querySelector('.galaxy')

function galaxy() {
  let amountMeteor = 15;
  let amountStar = 300;
  let i = 0;
  let j = 0;
  while(i < amountMeteor){
    let drop = document.createElement('i');
    let size = Math.random() * 2 + 0.5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5 + 5;

    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    area.appendChild(drop);
    i++;
  }

  while(j < amountStar){
    let star = document.createElement('j');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth*3);        
    let posY = Math.floor(Math.random() * window.innerHeight);
    let delay = Math.random() * 100 + 50;
    let duration = Math.random() * 300 + 15;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = posX + 'px';
    star.style.top = 100 + posY * 0.7 + 'px';
    star.style.animationDuration = duration + 's';
    
    area.appendChild(star);
    j++;
  }
}

galaxy();