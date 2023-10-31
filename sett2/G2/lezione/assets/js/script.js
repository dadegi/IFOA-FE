// Oggetti
const docente = {
    name: 'Dario',
    surname: 'Del Giudice',
    eta: 56,
    docente: true
};

document.getElementById('name').innerHTML = docente.name;
document.getElementById('surname').innerHTML = docente.surname;
document.getElementById('eta').innerHTML = docente.eta;
// Aggiunta proprietà
docente.email = 'dadegi@gmail.com';

document.getElementById('email').innerHTML += docente.email;
// Eliminazione valore proprietà
delete docente.eta;

document.getElementById('eliminata').innerHTML += docente.eta;
// Creazione copia oggetto
const nuovoOggetto = docente;
nuovoOggetto.name = 'Pippo';
// Il valore delle proprietà cambia in entrambi gli oggetti quando si usa l'operatore di assegnazione =
document.getElementById('primo').innerHTML += docente.name;
document.getElementById('secondo').innerHTML += nuovoOggetto.name;

const altroOggetto = Object.assign({}, docente);
// const altroOggetto = {...mioOggetto} // Altra sintassi per creare una copia distinta dell'oggetto
altroOggetto.name = 'Paperino';
// Utilizzando lo spread operator (...) o Object.assign() si crea una copia dell'oggetto distinta dall'oggetto di partenza
document.getElementById('precedente').innerHTML += docente.name;
document.getElementById('nuovo').innerHTML += altroOggetto.name;

// Array
const mioArray = ['gatto', 'cane', 'coniglio'];

// Lettura intero array
document.getElementById('array').innerHTML = mioArray;

// Destrutturazione
document.getElementById('primaVoce').innerHTML = mioArray[0];
document.getElementById('secondaVoce').innerHTML = mioArray[1];
document.getElementById('terzaVoce').innerHTML = mioArray[2];

mioArray.sort();

document.getElementById('ordinato').innerHTML = mioArray;

document.getElementById('ordinato1').innerHTML = mioArray[0];
document.getElementById('ordinato2').innerHTML = mioArray[1];
document.getElementById('ordinato3').innerHTML = mioArray[2];

// Flussi condizionali
let peso = 16;
// if
if (peso > 15) {
    document.getElementById('semplice').innerHTML = 'Il peso è superiore alla portata del pallet';
}
// if-else
if (peso <= 15) {
    document.getElementById('ifElse').innerHTML = 'Il peso è adatto alla portata del pallet';
} else {
    document.getElementById('ifElse').innerHTML = 'Troppo pesante per un pallet';
}
// if-else if-else
let nps = 25;

if (nps <= 35) {
    document.getElementById('nps').innerHTML = 'NPS sufficiente';
} else if (nps <= 70) {
    document.getElementById('nps').innerHTML = 'NPS insufficiente';
} else {
    document.getElementById('nps').innerHTML = 'NPS ottimo';
}

// Range di condizioni
let voto = 8.5;
let presenze = 60;

if (voto >= 7.5 || presenze >= 70) {
    document.getElementById('range').innerHTML = 'Corso valido'
} else {
    document.getElementById('range').innerHTML = 'Corso non valido'
}

document.getElementById('successivo').innerHTML = 'Javascript va avanti';