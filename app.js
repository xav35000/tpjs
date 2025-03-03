persDisplay = document.getElementById('personnes')
quantDisplay = [...document.querySelectorAll('.quantite')]
personnes = persDisplay.innerText
quantites = quantDisplay.map(e => +e.innerText)

console.log(quantites)

function update() {
  persDisplay.innerText = personnes

  quantites.forEach((element, index) => {
    quantDisplay[index].innerText = element.toString()
  })
}


function plus() {
  personnes += 1
}

quantites = quantites.map(e => e+1)
personnes += 1

console.log(quantites)

update()
