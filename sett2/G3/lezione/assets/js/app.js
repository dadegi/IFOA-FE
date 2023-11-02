// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CONTROLLARE LA VALIDITÀ DEL FORM
4. CALCOLARE L'ETÀ
5. VERIFICA LA MAGGIORE O MINORE ETÀ
6. SCRIVERE NELL'HTML
7. CANCELLARE IL FORM

EVENTO SCATENANTE
click

VARIABILI GLOBALI
nome
anno
stato
*/

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di input, calcolare l'età, verifica l'età, stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');
let esegui;

function eventHandler() {
    leggiForm();
    controlla();
    if (esegui) {
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML = 'Attenzione! Compilare correttamente tutti i campi e scrivere un numero tra 1900 e 2023!';
        return;
    }
}

function controlla() {
    esegui = false;
    if (anno >= 1900 && anno <= 2023) {
        if (nome != '') {
            errore.innerHTML = '';
            esegui = true;
        }
    }
    return esegui;
}

function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta() {
    eta = 2023 - Number(anno);
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';
}