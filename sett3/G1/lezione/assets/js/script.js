// METODO SPLICE

const mioArray = ['Anna', 'Mario', 'Daniele', 'Giovanna', 'Nicola'];
const nome1 = mioArray.splice(1, 2); // Con splice elimino i valori presenti nell'array mioArray e li inserisco in un nuovo array chiamato nom1

const nuovoArray = [...mioArray, ...nome1] // Con lo spread operator inserisco tutti i valori di entrambi gli array in nuovoArray

console.log(nuovoArray);

mioArray.splice(0, 2, 'Gianni', 'Antonio'); // Il metodo splice MODIFICA l'array iniziale, che resta modificato in TUTTO lo script, non solo dopo lo splice

console.log(mioArray);

// --- Altro esempio

const arrayPosizioni = ['primo', 'secondo', 'terzo'];
console.log(arrayPosizioni);

for (let i = 0; i < arrayPosizioni.length; i++) {
  document.getElementById('testo').innerHTML += `<li>${arrayPosizioni[i]}</li>`
}

for (let i = 0; i < arrayPosizioni.length; i++) {
  if (arrayPosizioni[i] === 'secondo') {
    arrayPosizioni.splice(i, 1, 'nuovo secondo');
  }
  document.getElementById('testo2').innerHTML += `<li>${arrayPosizioni[i]}</li>`
}

console.log(arrayPosizioni);

// METODO SLICE
// Crea una fetta dell'array SENZA MODIFICARE l'array iniziale
const disney = ['pippo', 'pluto', 'paperino', 'gastone', 'archimede', 'nonna papera'];

const preferiti = disney.slice(1, 5);

console.log(disney);
console.log(preferiti);

// METODO forEach
// NON CREA un nuovo array, si limita ad eseguire la stessa funzione per ogni elemento dell'array
const numeri1 = [2, 4, 6, 8, 10];

numeri1.forEach(function(el) {
    console.log(el * 3);
});

// METODO MAP
// CREA un nuovo array, applicando a ogni elemento dell'array la funzione indicata. Generalmente il metodo map ha un return

const arraySomma = numeri1.map(function(el) {
    return el + 5;
});

console.log(arraySomma);

// NESSUNO DEI DUE METODI modifica l'array di partenza

// Selezione elementi da checkbox, forEach, spread operator e memorizzazione valori
let studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    materie: []
}

console.log(studente);

let checkHtml = document.getElementById('HTML');
let checkCss = document.getElementById('CSS');
let checkJs = document.getElementById('JS');

let scelti = [checkHtml, checkCss, checkJs]; // array di checkbox

// sintassi arrow function
const invia = () => {
    let corsi = [];
    document.getElementById('scelti').innerHTML = '';
    scelti.forEach((checkbox) => {
        if (checkbox.checked) {
            corsi.push(checkbox.value);
        }
    });
    document.getElementById('scelti').innerHTML = `Corsi scelti: ${corsi}`;
    studente.materie.push(...corsi);
    console.log(studente);
}

// sintassi dedclared function
// function invia() {
//     let corsi = [];
//     document.getElementById('scelti').innerHTML = '';
//     scelti.forEach((checkbox) => {
//         if (checkbox.checked) {
//             corsi.push(checkbox.value);
//         }
//     });
//     document.getElementById('scelti').innerHTML = `Corsi scelti: ${corsi}`;
//     studente.materie.push(...corsi);
//     console.log(studente);
// }

// METODO MAP
let arrayNomi = ['Mario', 'Aldo', 'Anna', 'Nicola', 'Maria', 'Giovanni', 'Giulia'];

const lunghezzaNomi = arrayNomi.map((el) => {
    return el.charAt(0);
});

console.log(lunghezzaNomi);