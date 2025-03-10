persDisplay = document.getElementById('regime')
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

function traitement() {  
        var reponse = document.querySelector('option:checked').value
        alert(reponse)
}
