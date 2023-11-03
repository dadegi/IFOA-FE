// Esercizi aggiuntivi (facoltativi) per D4

let arrayRandom = function (n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
console.log(arrayRandom(5));
checKArray(arrayRandom(5));

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checKArray(array) {
	let somma = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 5) {
			console.log('Il numero ' + array[i] + ' è maggiore di 5');
			somma += array[i];
		} else {
			console.log('Il numero ' + array[i] + ' è minore di 5');
		}
	}
	console.log(somma);
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
	{
		price: 25,
		name: 'Prodotto 1',
		id: 1,
		quantity: 5,
	},
	{
		price: 37,
		name: 'Prodotto 2',
		id: 2,
		quantity: 12,
	},
	{
		price: 9,
		name: 'Prodotto 3',
		id: 3,
		quantity: 8,
	},
	{
		price: 41,
		name: 'Prodotto 4',
		id: 4,
		quantity: 20,
	},
];

function shoppingCartTotal() {
	let totalValue = 0;
	for (let i = 0; i < shoppingCart.length; i++) {
		let singleValue = shoppingCart[i].price * shoppingCart[i].quantity;
		totalValue += singleValue;
	}
	return totalValue;
}

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newItem = {
	price: 18,
	name: 'Prodotto 5',
	id: 5,
	quantity: 24,
};

function addToShoppingCart(item) {
    shoppingCart.push(item);
    console.log(shoppingCart.length);
}

addToShoppingCart(newItem);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart() {
    let prices = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        prices.push(shoppingCart[i].price);
    }
    let max = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i];
        }
    }
    return max;
}

console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart() {
    let last = shoppingCart.length - 1;
    return shoppingCart[last];
}

console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(numero) {
    let limite = 0;
    while (limite < 3) {
        let valore = Math.floor(Math.random() * 10);
        console.log(valore);
        if (valore > numero) {
            limite++;
        }
    }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let tupla = [1, 5, 'pippo', 9, 'pluto']

function average(tupla) {
    let numeri = [];
    let somma = 0
    for (let i = 0; i < tupla.length; i++) {
        if (typeof tupla[i] === 'number') {
            numeri.push(tupla[i]);
            somma += tupla[i];
        }
    }
    return somma/numeri.length;
}

console.log(average(tupla));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringhe = ['pippo', 'paperino', 'zio paperone', 'brigitta', 'basettoni']

function longest(array) {
    let lettere = array[0].length;
    let lunga = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lettere) {
            lettere = array[i].length;
            lunga = array[i];
        }
    }
    return lunga;
}

console.log(longest(stringhe));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let email = 'Buongiorno, questa mail è di carattere pubblicitario.';

function antiSpam(emailContent) {
    console.log(emailContent.indexOf('SPAM'));
    if (emailContent.indexOf('SPAM') === -1 && emailContent.indexOf('SCAM') === -1) {
        return true;
    } else {
        return false;
    }
}

console.log(antiSpam(email));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let compleanno = new Date(1967, 9, 20);

function dateDiff(data) {
    let oggi = new Date();
    let diff = oggi - data;
    let giorni = diff / (1000 * 60 * 60 * 24);
    return Math.floor(giorni);
}

console.log(dateDiff(compleanno));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(numero1, numero2) {
    let matrice = [];
    for (let i = 0; i < numero1; i++) {
        let riga = [];
        for (let j = 0; j < numero2; j++) {
            riga.push(i.toString() + j.toString());
        }
        matrice.push(riga);
    }
    return matrice;
}

console.log(matrixGenerator(5, 4));
