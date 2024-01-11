/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let age;
let numbers = [];


for(let i = 0; i < 10; i++){
    age = prompt('How old are you?');
    numbers.push(+age);

    console.log(age, numbers)
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( 'La somma delle età inserite è: ' + sum );

