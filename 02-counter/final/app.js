const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')

const valueElt = document.getElementById('value')


increaseBtn.addEventListener('click', () => {
  valueElt.innerText = Number(valueElt.innerText) + 1
  if(Number(valueElt.innerText) === 0){
    valueElt.style.color = 'hsl(205, 86%, 17%)';
  } else if(Number(valueElt.innerText) > 0){
    valueElt.style.color = 'green';
  }
})
decreaseBtn.addEventListener('click', () => {
  valueElt.innerText = Number(valueElt.innerText) - 1
  if(Number(valueElt.innerText) === 0){
    valueElt.style.color = 'hsl(205, 86%, 17%)';
  } else if(Number(valueElt.innerText) < 0){
    valueElt.style.color = 'red';
  }
})
resetBtn.addEventListener('click', () => {
  valueElt.innerText = 0;
  valueElt.style.color = 'hsl(205, 86%, 17%)';
})

