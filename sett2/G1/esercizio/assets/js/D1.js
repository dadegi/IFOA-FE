/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
string: sequenza di caratteri senza specifiche
number: numero di qualsiasi tipo
boolean: valore vero o falso
null: valore intenzionalmente assente (variabile vuota)
undefined: valore non (ancora) presente
data: data in ogni suo formato
TIPI COMPLESSI o DERIVATI
array
oggetto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Dario';
console.log(myName);
document.getElementById('myName').innerHTML += myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
console.log(12 + 20);
// Soluzione 2
let somma = 12 + 20;
console.log(somma);
document.getElementById('somma').innerHTML += somma;
// Soluzione 3
let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);
// Soluzione 4
let nuovoNumero1 = 12;
let nuovoNumero2 = 20;
let nuovaSomma = nuovoNumero1 + nuovoNumero2;
console.log(nuovaSomma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con la keyword const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'Del Giudice';
console.log(myName);
const persona = myName;
// persona = 'Dario Del Giudice'; Questa istruzione genererà un errore di riassegnazione di valore a una costante


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
console.log(4 - x);

// Soluzione 2
let y = 4;
console.log(y - x);

// Soluzione 3
let sottrazione = 4 - x;
console.log(sottrazione);
document.getElementById('sottrazione').innerHTML += sottrazione;

// Soluzione 4
let nuovaSottrazione = y - x;
console.log(nuovaSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john';
let name2 = 'John';
// Soluzione 1
console.log('I due nomi sono uguali? ', name1 === name2);
console.log('I due nomi sono uguali? ' + (name1 === name2));
// Soluzione 2
let verifica = name1 === name2;
console.log('I due nomi sono uguali? ', verifica);
let scrivi = (verifica) ? 'Sì' : 'No';
document.getElementById('verifica').innerHTML += scrivi;

// Soluzione 1
console.log('I due nomi sono uguali? ', name1.toLowerCase() === name2.toLowerCase());
//Soluzione 2
let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log('I due nomi sono uguali? ', altraVerifica);
scrivi = (altraVerifica) ? 'Sì' : 'No';
document.getElementById('altraVerifica').innerHTML += scrivi;
