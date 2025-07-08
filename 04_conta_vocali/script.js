/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vocali = (contaVocali, vocaliPresenti) => {
  contaVocali = 0;
  vocaliPresenti = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
      contaVocali++;
      vocaliPresenti.push(word[i]);
    }
  }
  vocaliPresenti.toString();
  return contaVocali + ' (' + vocaliPresenti + ')';
}

// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa 'javascript': 3 (a, a, i)