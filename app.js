persSelect = document.getElementById('nombre');
persSelect.value = '4';
quantDisplay = [...document.querySelectorAll('.quantite')];
personnes = +persSelect.value;
quantites = quantDisplay.map(e => (+e.innerText) / personnes);

function update() {
  personnes = +persSelect.value;

  quantites.forEach((element, index) => {
    quantDisplay[index].innerText = Math.max(1, (Math.round(element * personnes).toString()))
  })
}
