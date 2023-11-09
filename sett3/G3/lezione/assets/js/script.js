const btn = document.getElementById('invia');

btn.addEventListener('click', function (e) {
	//e.preventDefault();
	let form = document.querySelector('form');
	let nome = document.getElementById('nome');
	let cognome = document.getElementById('cognome');
	let email = document.getElementById('email');
	let eta = document.getElementById('eta');

	if (!cognome.checkValidity()) {
		cognome.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText =
			cognome.validationMessage;
		return;
	} else if (!email.checkValidity()) {
		email.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = email.validationMessage;
		return;
	} else if (!eta.checkValidity()) {
		eta.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = eta.validationMessage;
		return;
	}

	cognome.style.backgroundColor = 'transparent';
	email.style.backgroundColor = 'transparent';
	eta.style.backgroundColor = 'transparent';

	nome = nome.value;
	cognome = cognome.value;
	email = email.value;
	eta = eta.value;

	confirm('Sei sicuro dei dati inseriti?');

	if (confirm) {
		document.getElementById('nomeForm').innerText = nome;
		document.getElementById('cognomeForm').innerText = cognome;
		document.getElementById('emailForm').innerText = email;
		document.getElementById('etaForm').innerText = eta;
	} else {
		form.reset();
	}
});

// setTimeout

let btnRigenera = document.getElementById('ricrea');
function generaCodice() {
	btnRigenera.setAttribute('disabled', 'true');
	document.getElementById('rigenera').innerText = '';
	document.getElementById('codice').style.textDecoration = 'none';

	let codice = Math.floor(Math.random() * 100001);
	if (codice < 100000) {
		codice = codice + 100000;
	}
	document.getElementById('codice').innerText = codice;
	scadenza();
}

const scadenza = () => {
	setTimeout(() => {
		rigenera();
	}, 5000);
};

// function scadenza() {
//     setTimeout(() => {
//         rigenera();
//     }, 5000);
// }

function rigenera() {
	document.getElementById('codice').style.textDecoration = 'line-through';
	document.getElementById('rigenera').innerText =
		'Codice scaduto, rigenerare!';
	btnRigenera.removeAttribute('disabled');
}

generaCodice();

// setInterval

let barra = document.getElementById('barra');

const avviaTimer = () => {
	let timer = 0;
	if (timer === 0) {
		timer = 1;
		let progress = setInterval(() => {
			if (timer >= 500) {
				document.getElementById('stop').innerText = 'Progress bar completata!'
				clearInterval(progress);
			} else {
				barra.style.width = `${timer}px`;
				document.getElementById('stop').innerText = ''
				timer++;
				let percentuale = timer / 5;
				document.getElementById('percentuale').innerText = `${percentuale}%`;
			}
		}, 10);
	}
}

// avviaTimer();
