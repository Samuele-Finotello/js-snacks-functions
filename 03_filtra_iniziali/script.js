/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const iniziale = (nomiLettera, lettera, letteraUp) => {
  nomiLettera = [];
  lettera = prompt('Inserisci l\'iniziale da cercare');
  letteraUp = lettera.toUpperCase();
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === letteraUp) {
      nomiLettera.push(names[i]);
    }
  }
  return nomiLettera;
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]