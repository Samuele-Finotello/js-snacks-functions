/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const oraSalutoArrow = persona => {
  data = new Date();
  ora = data.getHours();
  if (ora > 2 && ora <= 13) {
    console.log(`Buongiorno ${persona}`);
  }
  else {
    if (ora > 13 && ora <= 17) {
      console.log(`Buon pomeriggio ${persona}`);
    }
    else {
      console.log(`Buonasera ${persona}`);
    }
  }
}

function oraSaluto(persona) {
  data = new Date();
  ora = data.getHours();
  if (ora > 2 && ora <= 13) {
    console.log(`Buongiorno ${persona}`);
  }
  else {
    if (ora > 13 && ora <= 17) {
      console.log(`Buon pomeriggio ${persona}`);
    }
    else {
      console.log(`Buonasera ${persona}`);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console
oraSalutoArrow(name);
oraSaluto(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.