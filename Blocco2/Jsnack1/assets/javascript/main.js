/*Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.*/


let nomi = ["Homer", "Bart", "Marge", "Mickey", "Rick"];
let cognomi = ["Simpson", "Griffin", "Mouse", "Sanchez", "Flanders"];

const riusltatoHtml = document.getElementById("risultato")

let lista = []

for(i = 0; i < nomi.length; i++){
    let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    let cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    let listaCasuale = `${nomeCasuale} ${cognomeCasuale}`
    lista.push(listaCasuale)
}


riusltatoHtml.innerHTML += `<span>${lista}</span>`