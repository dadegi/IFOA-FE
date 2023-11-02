// switch-case

let day = 'thursday';
let giorno;

// if (day === 'monday') {
//     giorno = 'lunedì';
// } else if (day === 'tuesday') {
//     giorno = 'martedì';
// } else if (day === 'wednesday') {
//     giorno = 'mercoledì';
// } else if (day === 'thursday') {
//     giorno = 'giovedì';
// } else if (day === 'friday') {
//     giorno = 'venerdì';
// } else if (day === 'saturday') {
//     giorno = 'sabato';
// } else {
//     giorno = 'domenica';
// }

switch (day) {
	case 'monday':
		giorno = 'lunedì';
		break;

	case 'tuesday':
		giorno = 'martedì';
		break;

	case 'wednesday':
		giorno = 'mercoledì';
		break;

	case 'thursday':
		giorno = 'giovedì';
		break;

	case 'friday':
		giorno = 'venerdì';
		break;

	case 'saturday':
		giorno = 'sabato';
		break;

	default:
		giorno = 'domenica';
		break;
}

document.getElementById('giorno').innerHTML += giorno;

// while/do-while
let numero1 = 1;
document.getElementById('listaWhile').innerHTML = '';
while (numero1 < 11) {
    document.getElementById('listaWhile').innerHTML += '<li>' + numero1 + '</li>';
    numero1++;
}

let numero2 = 1;
document.getElementById('listaDoWhile').innerHTML = '';
do {
    document.getElementById('listaDoWhile').innerHTML += '<li>' + numero2 + '</li>';
    numero2++;
} while (numero2 < 11);

// for
const numeri = [4, 9, 16, 25, 49];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i]; // somma = somma + numeri[i]
}

document.getElementById('somma').innerHTML += somma;

const studenti = ['Alessandro', 'Marta', 'Barbara', 'Basilia', 'Daniele'];
document.getElementById('studenti').innerHTML = '';

for (let i = studenti.length - 1 ; i > -1;  i--) {
    document.getElementById('studenti').innerHTML += '<li>' + studenti[i] + '</li>';
}