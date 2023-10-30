// Variabili globali

// Dichiarare queste due variabili con var non cambia il loro funzionamento
let globale1 = 5; // variabile globale in quanto definita fuori da ogni blocco
let globale2 = 5; // variabile globale in quanto definita fuori da ogni blocco

function sommaGlobale() {
	return globale1 + globale2;
}

document.getElementById("sommaGlobale").innerHTML = sommaGlobale();

// Variabili locali
function sommaLocale() {
	let locale1 = 5; // variabile locale in quanto definita all'interno di un blocco
	let locale2 = 5; // variabile locale in quanto definita all'interno di un blocco
	return locale1 + locale2;
}

// Questa istruzione darebbe errore in quanto non si possono usare le variabili locali al di fuori del loro blocco
// Errore bloccante
// document.getElementById('locale').innerHTML = locale1 + locale2;
document.getElementById("somma").innerHTML = sommaLocale();

// Riassegnazione di variabili
let numero = 10;

document.getElementById("primoValore").innerHTML = numero;

numero = 5; // Non si deve usare let quando si riassegna una variabile perché si genererebbe un errore di doppia dichiarazione di variabile

document.getElementById("secondoValore").innerHTML = numero;

// Costanti
const nome = 'Pippo';

document.getElementById('costante').innerHTML = nome;

// Questa riassegnazione di costante genera un errore, perché il valore di una costante non può cambiare durante l'esecuzione dello script
// nome = 'Pluto';

// Tipizzazione
let tipoDebole = 15;
document.getElementById('tipoNumero').innerHTML = tipoDebole;

tipoDebole = 'Pippo';
document.getElementById('tipoStringa').innerHTML = tipoDebole;

// Operatore ternario
let anni = 18;

const ingresso = (anni < 18) ? 'Ingresso vietato' : 'ingresso permesso';

document.getElementById('ternario').innerHTML = ingresso;