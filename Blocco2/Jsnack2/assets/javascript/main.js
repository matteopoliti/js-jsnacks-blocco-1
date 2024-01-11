/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

const numero = document.getElementById("Number");
const bottone = document.getElementById("button");
const risultatoHtml = document.getElementById("risultato");
let arrayNumeri = [];
let posizioneDispari = [];
bottone.addEventListener("click", function(){
    for(let i = 0; i <= numero.value; i++){
        arrayNumeri.push(i)
        if(i % 2 !== 0){
            posizioneDispari.push(i)
        }
    }


    let sum = 0;
    for (let i = 0; i < posizioneDispari.length; i++) {
        sum += posizioneDispari[i];
    }
    
    risultatoHtml.innerHTML = `La somma degli elementi in posizione dispari è: ${sum}`
})

