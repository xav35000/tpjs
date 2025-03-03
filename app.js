persDisplay = document.getElementById('personnes')
quantDisplay = [...document.querySelectorAll('.quantite')]
personnes = +persDisplay.innerText
quantites = quantDisplay.map(e => (+e.innerText) / personnes)

function update() {
  persDisplay.innerText = personnes

  quantites.forEach((element, index) => {
    quantDisplay[index].innerText = (element * personnes).toString()
  })
}


function plus() {
  personnes += 1

  
  
}
