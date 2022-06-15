
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//Chiedo all'utente di scegliere pari o dispari e un numero da 1 a 5
const userEvenOrOdd = prompt ('Scegli Pari o Dispari!');
const userNumber = parseInt (prompt ('Dimmi un numero da 1 a 5'));
console.log(userEvenOrOdd);
console.log(userNumber);

// Generare un numero random per il computer da 1 a 5 (funzione)
const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);

// Sommo numero utente e numero computer
const sum = userNumber + computerNumber;
console.log('Somma', sum);

// Stabilisco se la somma è pari o dispari con una funzione
const isSumEvenOrOdd = isNumberEvenOrOdd(sum);
console.log('Somma pari dispari:', isSumEvenOrOdd);
    
// Se la scelta dell'utente === risultato, l'utente ha vinto, altrimenti ha perso
if(userEvenOrOdd === isSumEvenOrOdd) {
    alert('You Win!!');

} else {
    alert('You Lost...');
}


// ----------------------
// FUNCTIONS
// ----------------------

// Funzione che stabilisce se un numero è pari o dispari
// number è il numero da valutare
// return: stringa, 'pari' se number è pari altrimenti 'dispari'
function isNumberEvenOrOdd(number) {
    let result;

    if(number % 2 === 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}

// Funzione che genera numeri random con estremi compresi
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


