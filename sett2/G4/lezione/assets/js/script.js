let numero1;
let numero2;
let operazione;
let nomeOperazione;
let risultato;

function eventHandler() {
	numero1 = document.getElementById('numero1').value;
	numero2 = document.getElementById('numero2').value;
	operazione = document.getElementById('operazione').value;

	if (controlla()) {
		calcola();
        scrivi();
        cancellaForm();
	} else {
		return;
	}
}

function controlla() {
	if (numero1 === '' || numero2 === '' || operazione === '') {
		alert("inserire i due numeri e scegliere un'operazione");
		return false;
	// } else if (typeof numero1 != 'number' || typeof numero2 != 'number') {
	// 	alert("inserire numeri validi");
	// 	return false;
	} else {
        return true;
    }
}

function calcola() {
	switch (operazione) {
		case '1':
            nomeOperazione = 'addizione';
			risultato = Number(numero1) + Number(numero2);
			break;
		case '2':
            nomeOperazione = 'sottrazione';
			risultato = Number(numero1) - Number(numero2);
			break;
		case '3':
            nomeOperazione = 'moltiplicazione';
			risultato = Number(numero1) * Number(numero2);
			break;
		case '4':
            nomeOperazione = 'divisione';
			risultato = Number(numero1) / Number(numero2);
			break;
	}
}

function scrivi() {
    document.getElementById('risultato').innerHTML = 'Il risultato della ' + nomeOperazione +  ' tra ' + numero1 + ' e ' + numero2 + ' è ' + risultato;
}

function cancellaForm() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('operazione').value = '';
}
