// Script pour ajuster les quantités en fonction du nombre de personnes
document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-portions');
    const increaseBtn = document.getElementById('increase-portions');
    const portionsDisplay = document.getElementById('portions-display');
    const portionsCount = document.getElementById('portions-count');
    const ingredientElements = document.querySelectorAll('[data-base-value]');
    
    let currentPortions = 4;
    
    function updateIngredients() {
        ingredientElements.forEach(element => {
            const baseValue = parseFloat(element.getAttribute('data-base-value'));
            const newValue = (baseValue * currentPortions / 4).toFixed(1).replace('.0', '');
            element.textContent = newValue;
        });
        
        portionsDisplay.textContent = currentPortions;
        portionsCount.textContent = currentPortions + ' personnes';
    }
    
    decreaseBtn.addEventListener('click', function() {
        if (currentPortions > 1) {
            currentPortions--;
            updateIngredients();
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        if (currentPortions < 12) {
            currentPortions++;
            updateIngredients();
        }
    });
});