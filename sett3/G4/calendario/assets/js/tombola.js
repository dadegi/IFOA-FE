const btnEstrai = document.getElementById('estrai');
const estratti = []

document.addEventListener('load', init());

function init() {
    for (let i = 0; i < 90; i++) {
        const container = document.querySelector('#container');
        const casella = document.createElement('div');
        casella.classList.add('casella');
        casella.innerText = i + 1;
        container.appendChild(casella);
    }
}

btnEstrai.addEventListener('click', function() {
    estrai();
});

function estrai() {
    let estratto = Math.floor(Math.random() * 91);
    let invalido = estratti.find(value => value === estratto);
    if (invalido) {
        console.log('TROVATO!!!');
        estrai();
    } else {
        estratti.push(estratto);
        document.getElementById('estratto').innerText = estratto;
        console.log(estratti);
        colora(estratto);
    }
}

function colora(numero) {
    const caselle = document.querySelectorAll('.casella');
    caselle.forEach((element) => {
        let numeroCasella = Number(element.innerText);
        if (numeroCasella === numero) {
            element.style.backgroundColor = 'red';
        }
    });
}
