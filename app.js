persDisplay = document.getElementById('personnes')
quantDisplay = [...document.querySelectorAll('.quantite')]
personnes = +persDisplay.innerText
quantites = quantDisplay.map(e => (+e.innerText) / personnes)

function update() {
  persDisplay.innerText = personnes

  quantites.forEach((element, index) => {
    quantDisplay[index].innerText = Math.round(element * personnes).toString()
  })
}


function plus() {
  personnes += window.event.ctrlKey ? 5 : 1
  update()
}


function moins() {
  personnes = personnes - window.event.ctrlKey ? 5 : 1
  update()
}



document.querySelector('#personnes').addEventListener('mouseover', (event) => {
        alert('AA')
});

