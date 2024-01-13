const button = document.querySelector('.calculate');

button.addEventListener('click', function() {
    const valor = document.querySelector('#value').value;
    const taxaDeJuros = document.querySelector('#fee').value / 100;
    const tempo = document.querySelector('#time').value;

    let montante = valor * (1 + taxaDeJuros)**tempo; 

    document.querySelector('.resultado > span').innerHTML = ( "R$" + montante.toFixed(2));
})