/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const myConcat = function (str1, str2) {
	return str1.slice(0, 2).concat(str2.slice(str2.length - 3));
};

console.log('***Esercizio 1***');
console.log(myConcat('Nicola', 'Anna').toUpperCase());

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

// creare funzione
// all'interno creare array vuoto
// per 10 volte...
// generi un numero casuale
// e lo pushi
// torni l'array

console.log('***Esercizio 2***');

const numeriRandom = () => {
	const casuali = [];
	for (let i = 0; i < 10; i++) {
		casuali.push(Math.floor(Math.random() * 101));
	}
	return casuali;
};
console.log(numeriRandom());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const ricavaPari = (array) => {
	return array.filter((el) => el % 2 === 0);
};

console.log('***Esercizio 3***');
console.log(ricavaPari(numeriRandom()));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const somma = (array) => {
	let risultato = 0;
	array.forEach((el) => {
		risultato += el;
	});
	return risultato;
};

console.log('***Esercizio 4***');
console.log(somma(numeriRandom()));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaReduce = (array) => {
	return array.reduce((valore, el) => valore + el);
};

console.log('***Esercizio 5***');
console.log(sommaReduce(numeriRandom()));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const arr = [1, 2, 3];

const n = 5;

// function nuovoArray(array, numero) {
//   return array.map(function(el) {
//     return el + numero;
//   });
// }

const nuovoArray = (array, numero) => {
	return array.map((el) => el + numero);
};

console.log('***Esercizio 6***');
console.log(nuovoArray(arr, n));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const stringhe = ['Corso', 'Front', 'End', 'IFOA', 'Epicode'];

const lunghezza = (array) => {
	return array.map((el) => el.length);
};

console.log('***Esercizio 7***');
console.log(lunghezza(stringhe));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const dispari = () => {
	const numeriDispari = [];
	for (let i = 0; i < 100; i++) {
		if (i % 2 !== 0) {
			numeriDispari.push(i);
		}
	}
	return numeriDispari;
};

console.log('***Esercizio 8a***');
console.log(dispari());

const dispari2 = () => {
	let numeri2 = [];
	let numeri2Dispari = [];
	let indice = 0;
	while (indice < 100) {
		numeri2.push(indice);
		indice++;
	}
	numeri2.forEach((el) => {
		if (el % 2 !== 0) {
			numeri2Dispari.push(el);
		}
	});
	return numeri2Dispari;
};

console.log('***Esercizio 8b***');
console.log(dispari2());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
	{
		Title: 'The Lord of the Rings: The Fellowship of the Ring',
		Year: '2001',
		imdbID: 'tt0120737',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Return of the King',
		Year: '2003',
		imdbID: 'tt0167260',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Two Towers',
		Year: '2002',
		imdbID: 'tt0167261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of War',
		Year: '2005',
		imdbID: 'tt0399295',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'Lords of Dogtown',
		Year: '2005',
		imdbID: 'tt0355702',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings',
		Year: '1978',
		imdbID: 'tt0077869',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1990',
		imdbID: 'tt0100054',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
	},
	{
		Title: 'The Lords of Salem',
		Year: '2012',
		imdbID: 'tt1731697',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
		Year: '1984',
		imdbID: 'tt0087365',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1963',
		imdbID: 'tt0057261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		imdbID: 'tt0848228',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Infinity War',
		Year: '2018',
		imdbID: 'tt4154756',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Age of Ultron',
		Year: '2015',
		imdbID: 'tt2395427',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Endgame',
		Year: '2019',
		imdbID: 'tt4154796',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
	},
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const vecchio = (array) => {
	let esito = { Year: 3000 };
	array.forEach((film) => {
		let anno = parseInt(film.Year);
		if (anno < esito.Year) {
			esito = film;
		}
	});
	return esito;
};

console.log('***Esercizio 9***');
console.log(vecchio(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function contaFilm() {
	return movies.length;
}

console.log('***Esercizio 10***');
console.log(contaFilm());

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

// const titoli = (array) => {
// 	return array.map((el) => el.Title);
// }

const titoli = movies.map((el) => `Titolo: ${el.Title}`);

console.log('***Esercizio 11***');
console.log(titoli);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const millennio = (array) => {
	return array.filter((film) => parseInt(film.Year) > 2000);
}

console.log('***Esercizio 12***');
console.log(millennio(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sommaAnni = (array) => {
	return array.reduce((valore, element) => valore + parseInt(element.Year), 0);
}

console.log('***Esercizio 13***');
console.log(sommaAnni(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const cercaFilm = (array, id) => {
	return array.find((film) => film.imdbID === id);
}

console.log('***Esercizio 14***');
console.log(cercaFilm(movies, 'tt4154756'));

/* ESERCIZIO 14b: ricerca su selezione*/

// Popolamento della combo con i titoli dei film e gli imdbID come value

// Al caricamento della finestra assegno al div che conterrà il dettaglio film la classe hidden, definita in css, per non farlo apparire
window.addEventListener('load', function() {
	document.getElementById('film').className = 'hidden';
});

movies.forEach((film) => {
	document.getElementById('imdbID').innerHTML += `<option value="${film.imdbID}">${film.Title} - Anno ${film.Year}</option>`;
});

function cerca() {
	let imdbID = document.getElementById('imdbID').value; // recupero dell'imdbID scelto
	mioFilm = movies.find((element) => element.imdbID === imdbID); // ricerca enll'array del film con l'imdbID scelto

	// Quando si carica il film sostituisco la class hidden con la classe visibile (sistema alternativo rispetto a riga 339)
	document.getElementById('film').className = 'visible';
	// document.getElementById('film').style.display = 'block'; // comparsa del div che contiene i dettagli dei film (nel CSS è display: none;)
	// scrittura nell'html
	document.getElementById('titolo').innerHTML = mioFilm.Title;
	document.getElementById('anno').innerHTML = mioFilm.Year;
	document.getElementById('poster').setAttribute('src', mioFilm.Poster); // settaggio dell'attributo src del tag img con l'immagine trovata nella base dati
}


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const cercaAnno = (array, anno) => {
	return array.findIndex((element) => parseInt(element.Year) === anno);
}

console.log('***Esercizio 15***');
console.log(cercaAnno(movies, 1978));