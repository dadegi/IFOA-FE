/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}

console.log('Esercizio 1');
console.log(area(8, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(numero1, numero2) {
    let somma = numero1 + numero2;
    if (numero1 === numero2) {
        somma *= 3;
    }
    return somma;
}

console.log('Esercizio 2');
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19);
    console.log(differenza);
    if (numero > 19) {
        differenza *= 3;
    }
    return differenza;
}

console.log('Esercizio 3');
console.log(crazyDiff(23));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(numero) {
    let vero = false;
    if (numero === 400 || (numero > 20 && numero <= 100)) {
        vero = true;
    }
    return vero;
}

console.log('Esercizio 4');
console.log(boundary(48));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith('EPICODE')) {
        return stringa;
    } else {
        return 'EPICODE ' + stringa;
    }
}

console.log('Esercizio 5');
console.log(epify('EPICODERS are the best developers!'));
console.log(epify('Corso Front-End IFOA'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
    numero = Math.abs(numero);
    if (numero % 3 === 0 && numero % 7 === 0) {
        console.log('divisibile per tre e per sette');
    } else if (numero % 7 === 0) {
        console.log('divisibile per 7');
    } else if (numero % 3 === 0) {
        console.log('divisibile per 3');
    } else {
        console.log('Non multiplo di tre o di sette');
    }
}

console.log('Esercizio 6');
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    // let arrayStringa = stringa.split('');
    // let arrayCapovolto = arrayStringa.reverse();
    // let stringaCapovolta = arrayCapovolto.join('');
    let stringaCapovolta = stringa.split('').reverse().join('');
    return stringaCapovolta;
}

console.log('Esercizio 7');
console.log(reverseString('pippo'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = 'Questo esercizio è il numero otto del gruppo di esercizi del giorno quattro settimana due'

function upperFirst(stringa) {
    let arrayFrase = stringa.split(' ');
    let risultato = [];
    for (let i = 0; i < arrayFrase.length; i++) {
        // let prima = arrayFrase[i].charAt(0);
        // let parolaTagliata = arrayFrase[i].slice(1);
        // let parolaFinale = prima.toUpperCase() + parolaTagliata;
        let parolaFinale = arrayFrase[i].charAt(0).toUpperCase() + arrayFrase[i].substring(1)
        risultato.push(parolaFinale);
    }
    return risultato.join(' ');
}

console.log('Esercizio 8');
console.log(upperFirst(frase));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1);
}

console.log('Esercizio 9');
console.log(cutString('zio Paperone'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arrayNumeri = [];
    for (let i = 0; i < n; i++) {
        arrayNumeri.push(Math.floor(Math.random() * 11));
    }
    return arrayNumeri;
}

console.log(giveMeRandom(5));