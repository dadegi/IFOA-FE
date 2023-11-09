const addBtn = document.querySelector('#inserisci');
let taskList = document.querySelector('#listaTask');
const task = document.querySelector('#task');
const tasks = [];

addBtn.addEventListener('click', function () {
	if (task.value !== '') {
		aggiungiTask();
		scriviLista();
		cancellaInput();
	} else {
		alert('Inserire un task nel campo di input!');
		return;
	}
});

const aggiungiTask = () => {
	tasks.push(task.value);
};

const scriviLista = () => {
	taskList.innerHTML = '';
	tasks.forEach((element, index) => {
		let singletask = document.createElement('li');
        singletask.style.borderBottom = '1px solid gray';
        singletask.innerHTML = `${element}`;

        let pulsante = document.createElement('button');
        pulsante.classList.add('button');
        pulsante.innerHTML = '❌';
        pulsante.setAttribute('onclick', `elimina(${index})`);

        singletask.appendChild(pulsante);
		// singletask.innerHTML = `${element} <button class="button" onclick="elimina(${index})">❌</button>`;
		taskList.appendChild(singletask);
	});
	barraTask();
};

function cancellaInput() {
	task.value = '';
}

function elimina(index) {
	tasks.splice(index, 1);
	scriviLista();
}

function barraTask() {
	const elencoTask = document.querySelectorAll('li');
	elencoTask.forEach((element) => {
		element.onclick = function () {
			element.classList.toggle('barrato');
		};
	});
}
