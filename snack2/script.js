// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, 
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Array vuoto di numeri casuali
const numbersArray = [];
console.log(numbersArray);

// Array vuoto in vengono pushati i numeri dispari
let numbersOdd = [];

// Array vuoto in vengono pushati i numeri pari
let numbersEven = [];

// CICLO FOR genera numeri casuali
for (let i = 0; i < 10; i++) {
    const casualNumbers = Math.floor(Math.random()*100);
    console.log(casualNumbers);

    // Push dei numeri casuali nell'Array
    numbersArray.push (casualNumbers);

    // Condizione: se pari pusha i numeri nell'array dei numeri pari, altrimenti in quello dei numeri dispari
    // Dopo stampa nei DIV creati in HTML tramite ID
    if (casualNumbers % 2 == 0) {
        numbersEven.push(casualNumbers)
        document.getElementById("green").innerHTML = (`NUMERI PARI: ${numbersEven}`);
    } else {
        numbersOdd.push(casualNumbers)
        document.getElementById("red").innerHTML = (`NUMERI DISPARI: ${numbersOdd}`);
    }
}



