/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const iniziale = array => {
  nomiLettera = [];
  lettera = prompt('Inserisci l\'iniziale da cercare');
  letteraLow = lettera.toLowerCase();
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0).toLowerCase() === letteraLow) {
      nomiLettera.push(array[i]);
    }
  }
  if (nomiLettera.length === 0) {
    console.log(`Non c'e' nessun nome con la lettera ${lettera}`);
  }
  else
    console.log(nomiLettera);
}

// Invoca la funzione qui e stampa il risultato in console
iniziale(names);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]