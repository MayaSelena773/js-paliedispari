
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//Chiedo all'utente di scegliere pari o dispari e un numero da 1 a 5
const evenOrOdd = prompt ('Scegli Pari o Dispari!');
const userNumber = parseInt (prompt ('Dimmi un numero'));
let sum = sumTwoNumbers(userNumber, getRndInteger(1, 5));
console.log(userNumber);

//Si genera un numero random in una funzione
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sommo i numeri
function sumTwoNumbers (num1, num2) {

    const sumNumbers = num1 + num2;
    console.log(sumNumbers);
    return sumNumbers;

    //Verifico se il numero è pari o dispari
    //E dichiaro il vincitore
    if (sumNumbers % 2 === 0) {
        alert ('Even Win!!');
    
    }else {
        alert ('Odd Win!!');
    }

}

