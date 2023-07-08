// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente 
// e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Array vuoto dove verranno pushati i numeri inseriti dall'utente
const numbersArray = []

// La somma di partenza è uguale a 0 
let summ = 0;

// Cicolo while con condizioni iniziale: somma deve essere inferiore a 50
while(summ < 50 ){
    let numbersUser = Number(prompt("inserisci un numero"));
    while(isNaN(numbersUser)){
    numbersUser = Number(prompt("Inserisci un numero valido"))
    }
    // Calcolo della somma  dei numeri inseriti dall'utente
    summ += numbersUser;

    // condizione in cui la somma supera 50
    if(summ > 50){
        console.log("la somma è maggiore di 50");
        alert("la somma è maggiore di 50")
    } else if (summ < 50){
        numbersArray.push(numbersUser);
    }
    console.log(numbersArray, summ)
}




