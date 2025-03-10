persSelect = document.getElementById('nombre'); // On récupère l'élément d'id "nombre" qui désigne le selecteur du nombre de personnes
persSelect.value = '4'; // On s'assure que la valeur de la liste déroulante est à 4 personnes
quantDisplay = [...document.querySelectorAll('.quantite')]; // On récupère tous les éléments de classe "quantité" (soit les span contenant les quantités) et on les stocke dans la liste quantDisplay
personnes = +persSelect.value; // On récupère la valeur de persSelect qui correspond au nombre de personnes séléctionné, en le tranformant en nombre
quantites = quantDisplay.map(e => (+e.innerText) / personnes); // On stocke les quantités pour 1 personne pour chaque ingrédient en divisant les quantités (transformés en nombre) par le nombre de personnes

function update() { // La fonction étant liée à l'événement 'onchange' du selecteur de personnes. Elle s'éxécutera donc à chaque de changement du nombre de personnes
  personnes = +persSelect.value; // On récupère la nouvelle valeur du selecteur, et donc le nombre de personnes

  quantites.forEach((element, index) => {
    quantDisplay[index].innerText = Math.ceil(element * personnes).toString();
  });
}
