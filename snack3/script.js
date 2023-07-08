// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, 
// ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// Chiedo il numero di Array da generare all'Utente
const numberN = parseInt(prompt("metti un numero"));

let i = 0;

// Ciclo While in cui la condizione è i inferione al numero inserito dall'utente
while(i < numberN){
    
    // Array vuoto che si riempirà di numeri casuali da 10 a 100
    const newArray = [];

    // Generazione 10 numeri con valore da 10 a 100
    let y = 0; 
    while(y < 10){
        newArray.push(Math.floor(Math.random()*100)+1);

        y++;
    }
    
    console.log(newArray);
    i++;
}