//first line makes so that Black is always selected. The rest are all my cursed variables
document.querySelector('#pal1').classList.add('selected');
const grid = document.getElementById('pixel-board');
let allPal = document.getElementById('color-palette');
let selectedPal = document.querySelector('.selected');
const clearBtn = document.querySelector('#clear-board');
let pxblock = document.getElementsByClassName('pixel');
let inputText = document.getElementById('board-size');
let btnInput = document.getElementById('generate-board');
let actVal;
let hexN;
let rndN;

//Cria a grid de pixels. No momento só 5x5
window.addEventListener('load', function() {
  //default backgroundcolor for the palettes. Don't know why, but this needs to be here or sometimes the random hex won't work  
    document.querySelector('#pal1').style.backgroundColor = 'black';    
    document.querySelector('#pal2').style.backgroundColor = 'crimson';
    document.querySelector('#pal3').style.backgroundColor = 'indigo';
    document.querySelector('#pal4').style.backgroundColor = 'goldenrod';

    for (let x = 0 ; x < 5 ; x++) {
    const pixRow = document.createElement('tr');
    grid.appendChild(pixRow);
  
    for (let i = 0 ; i < 5 ; i++) {
      let pixCol = document.createElement('th');
      pixCol.classList.add('pixel');
      pixCol.style.backgroundColor = 'white';
      pixRow.appendChild(pixCol);
    }
  }
  //rand color with a hexadecimal base, not rgb

  let allPal = document.getElementsByClassName('color');
  for (let n = 1 ; n < allPal.length ; n++){    
    rndN = Math.floor(Math.random()*16777214);
    hexN = rndN.toString(16);
    allPal[n].style.backgroundColor = '#' + hexN;    
  }
});

//seleciona cor da Palette
allPal.addEventListener('click', function(event) {
  selectedPal.classList.remove('selected');
  event.target.classList.add('selected');
  selectedPal = event.target;
});

//pinta o pixel de acordo com o selectedPal
grid.addEventListener('click', function(event) {
  if (event.target != grid){
  event.target.style.backgroundColor = selectedPal.style.backgroundColor;
  }
});

//limpa a board
clearBtn.addEventListener('click', function() {
  for (let i = 0 ; i < pxblock.length ; i++) {
    pxblock[i].style.backgroundColor = 'white';
  }
});

//gera board de acordo com input de numero
btnInput.addEventListener('click', function() {
  actVal = inputText.value;
  //Thank you my dude: https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/ the only thing I got to work is this isNaN()
  if (isNaN(actVal) || actVal == '' ) {
    window.alert('Board inválido!');
  }
  //se menor que 5
  else if (actVal < 5) {
    grid.innerHTML = '';
    for (let i = 0 ; i < 5 ; i++) {
      const pixRow = document.createElement('tr');
      grid.appendChild(pixRow);

      for (let x = 0 ; x < 5 ; x++) {
        const pixCol = document.createElement('th');
        pixCol.classList.add('pixel');
        pixCol.style.backgroundColor = 'white';
        pixRow.appendChild(pixCol);
      }
    }
  }

  //se maior 50
  else if (actVal > 50) {
    grid.innerHTML = '';
    for (i = 0 ; i < 50 ; i++) {
      const pixRow = document.createElement('tr');
      grid.appendChild(pixRow);

      for (let x = 0 ; x < 50 ; x++) {
        const pixCol = document.createElement('th');
        pixCol.classList.add('pixel');
        pixCol.style.backgroundColor = 'white';
        pixRow.appendChild(pixCol);
      }
    }
  }

  //entre 5 e 50
  else if (actVal >= 5 && actVal <= 50) {
    grid.innerHTML = '';
    for (let i = 0 ; i < actVal ; i++) {
      let pixRow = document.createElement('tr');
      grid.appendChild(pixRow);  
      for (let x = 0 ; x < actVal ; x++) {
        let pixCol = document.createElement('th');
        pixCol.classList.add('pixel');
        pixCol.style.backgroundColor = 'white';
        pixRow.appendChild(pixCol);
      }
    }
  }
});
