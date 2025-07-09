/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vocali = parola => {
  contaVocali = 0;
  vocaliPresenti = [];
  for (let i = 0; i < parola.length; i++) {
    if (parola[i] === 'a' || parola[i] === 'e' || parola[i] === 'i' || parola[i] === 'o' || parola[i] === 'u') {
      contaVocali++;
      vocaliPresenti.push(parola[i]);
    }
  }
  vocaliPresenti.toString();
  console.log(`${contaVocali} (${vocaliPresenti})`);
}

// Invoca la funzione qui e stampa il risultato in console
vocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)