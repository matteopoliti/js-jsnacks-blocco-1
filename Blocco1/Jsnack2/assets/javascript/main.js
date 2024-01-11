/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/

const numero = document.getElementById("cuboNumber");
const bottone = document.getElementById("button");
const risultatoHtml = document.getElementById("risultato");
let arrayNumeri = [];
let numeriCubo = [];
bottone.addEventListener("click", function(){
    console.log(numero.value)
    for(let i = 1; i < numero.value; i++){
        arrayNumeri.push(i)
    }

    let cubo;
    for (let i = 0; i < arrayNumeri.length; i++) {

    cubo = arrayNumeri[i] ** 3;
    numeriCubo.push(cubo);
    risultatoHtml.innerHTML = `Il risultato è: ${numeriCubo}`
    }
    console.log(numeriCubo)
})




document.getElementById("ricaricaButton").addEventListener("click", ricaricaPagina);

function ricaricaPagina() {
    location.reload();
}