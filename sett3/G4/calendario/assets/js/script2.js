const now = new Date();

const appointments = [];

const monthNames = [
	'Gennaio',
	'Febbraio',
	'Marzo',
	'Aprile',
	'Maggio',
	'Giugno',
	'Luglio',
	'Agosto',
	'Settembre',
	'Ottobre',
	'Novembre',
	'Dicembre',
];

const scriviMese = function () {
	const title = document.querySelector('h1');
	const indiceMese = now.getMonth(); // 10 perché siamo a novembre
	const nomeMese = monthNames[indiceMese]; // novembre
	title.innerText = nomeMese;
};

scriviMese();

const giorniTotali = function () {
	const anno = now.getFullYear(); // 2023 perché siamo nel 2023
	const mese = now.getMonth(); // 10 perché siamo a novembre

	let ultimoGiorno = new Date(anno, mese + 1, 0);
	const numeroGiorni = ultimoGiorno.getDate();
	return numeroGiorni;
};

const creaGriglia = function (numeroGiorni) {
	const calendarDiv = document.getElementById('calendar');

	for (let i = 0; i < numeroGiorni; i++) {
        // Creazione griglia e array
		const cellaGiorno = document.createElement('div'); // ad ogni giorno associo un div
		cellaGiorno.classList.add('day'); // stilizzo il div come definito in css
		const valoreCella = document.createElement('h3');
		valoreCella.innerText = i + 1;
		cellaGiorno.appendChild(valoreCella);
		calendarDiv.appendChild(cellaGiorno);
		appointments.push([]);

        // Evento click sul singolo giorno
        cellaGiorno.addEventListener('click', function (e) {
			deselezionaCelle(); // deseleziono l'eventuale altra cella selezionata
			cellaGiorno.classList.add('selected'); // aggiungo la classe css per mostrare la selezione del giorno cliccato
			giornoAppuntamento(i); // scrivo il giorno cliccato nella sezione Giorno del form
			if (appointments[i].length > 0) {
				mostraAppuntamenti(i);
			} else {
				const divAppuntamenti = document.getElementById('appointments');
				divAppuntamenti.style.display = 'none';
			}
		});
	}
};

const deselezionaCelle = function () {
	const celle = document.querySelectorAll('.day');
	celle.forEach((element) => {
		element.classList.remove('selected');
	});
};

const giornoAppuntamento = function (indiceGiorno) {
	const giorno = document.getElementById('newMeetingDay');
	giorno.classList.add('hasDay');
	giorno.innerText = indiceGiorno + 1;
};

creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
	const appuntamentiGiorno = appointments[indiceGiorno];
	const lista = document.querySelector('#appointments ul');
	lista.innerHTML = '';

	appuntamentiGiorno.forEach((element) => {
		const newLi = document.createElement('li');
		newLi.innerText = element;
		lista.appendChild(newLi);
	});
	
	const divAppuntamenti = document.getElementById('appointments');
	divAppuntamenti.style.display = 'block';
};

const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const selectedDay = document.getElementById('newMeetingDay').innerText;
	const meetingTime = document.getElementById('newMeetingTime').value;
	const meetingName = document.getElementById('newMeetingName').value;
	const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
	const indiceArray = parseInt(selectedDay) - 1;
	appointments[indiceArray].push(stringaAppuntamento);

	const pallino = document.createElement('div');
	pallino.classList.add('pallino');
	const divSelezionato = document.querySelector('.selected');
	if (!divSelezionato.querySelector('.pallino')) {
		divSelezionato.appendChild(pallino);
	}
	mostraAppuntamenti(indiceArray);
});
