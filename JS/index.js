"use strict"

// CREAZIONE DIV CONTAINER
let container = document.createElement("div");
container.classList.add("container", "mt-3");
document.body.append(container);

// CREAZIONE ARRAY
let nave1 = ["3-9"];
let nave2 = ["4-8", "5-8"];
let nave3 = ["8-5", "8-6", "8-7"];
let nave4 = ["4-1", "5-1", "6-1", "7-1"];
let thHead = ["Partita numero", "Tentativi totali", "Tempo impiegato", "Colpi a segno", "Colpi mancati"];

// CREAZIONE VARIABILI
let cntN1 = 0;
let cntN2 = 0;
let cntN3 = 0;
let cntN4 = 0;
let totNaviColpite = 0;
let tent = 0;
let ore = 0, min = 0, sec = 0;
let intervallo;
let countdown;
let rovescia;
let t = 119;
let acqua = 0;
let colpito = 0;
let termina = false;
let nPartita = 0;

// CRONOMETRO
let divC = document.createElement("div");
divC.classList.add("d-flex", "justify-content-center", "p-2", "m-2");
document.body.append(divC);

let p1 = document.createElement("p");
p1.setAttribute("id", "cronometro");
p1.classList.add("bg-dark", "text-center", "text-light", "border-3");
container.append(p1);

// CONTO ALLA ROVESCIA
let divR = document.createElement("div");
divR.classList.add("d-flex", "justify-content-center", "p-2", "m-2");
document.body.append(divR);

let p2 = document.createElement("p");
p2.setAttribute("id", "rovescia");
p2.classList.add("bg-light", "text-center", "text-dark", "border-3");
container.append(p2);

// GRIGLIA E FUNZIONAMENTO GIOCO
for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for (let j = 0; j < 10; j++) {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "*" + j);
        cella.classList.add("h-100", "w-100", "border", "border-warning", "border-3", "p-3", "m-2");
        cella.addEventListener("click", function () {
            if (termina == true) {
                return;
            }
            tent++;
            let coordinata = i + "-" + j;
            cella.classList.add("animazione");
            if (nave1.includes(coordinata)) {
                cella.style.backgroundColor = "red";
                console.log("colpito");
                cntN1++;
                colpito++;
                if (cntN1 === 1) {
                    alert("Nave 1 affondata!");
                    totNaviColpite++;
                }
                else {
                    console.log("Parti colpite della nave 1: " + cntN1);
                }
            }
            else if (nave2.includes(coordinata)) {
                cella.style.backgroundColor = "green";
                console.log("colpito");
                cntN2++;
                colpito++;
                if (cntN2 === 2) {
                    alert("Nave 2 affondata!");
                    totNaviColpite++;
                }
                else {
                    console.log("Parti colpite della nave 2: " + cntN2);
                }
            }
            else if (nave3.includes(coordinata)) {
                cella.style.backgroundColor = "orange";
                console.log("colpito");
                cntN3++;
                colpito++;
                if (cntN3 === 3) {
                    alert("Nave 3 affondata!");
                    totNaviColpite++;
                }
                else {
                    console.log("Parti colpite della nave 3: " + cntN3);
                }
            }
            else if (nave4.includes(coordinata)) {
                cella.style.backgroundColor = "white";
                console.log("colpito");
                cntN4++;
                colpito++;
                if (cntN4 === 4) {
                    alert("Nave 4 affondata!");
                    totNaviColpite++;
                }
                else {
                    console.log("Parti colpite della nave 4: " + cntN4);
                }
            }
            else {
                cella.style.backgroundColor = "blue";
                console.log("acqua");
                acqua++;
            }
            if (totNaviColpite === 4) {
                termina = true;
                clearInterval(intervallo);
                clearInterval(countdown);
                intervallo = null;
                countdown = null;
                nPartita++;
                alert("Gioco completato, Hai vinto la battaglia navale! Schiacciare il pulsante nuova partita per rigiocare");
                console.log("I tentativi totali effettuati per completare il gioco sono stati: " + tent);
                console.log("Il tempo totale impiegato è: " + ore + ": ore " + min + ": minuti e " + sec + " secondi. Hai avanzato " + (t + 1) + " sec");
                visualizzaTabella();
                return;
            }
            cella.classList.add("pe-none");
        });
        col.append(cella);
    }
}

let divBtn = document.createElement("div");
divBtn.classList.add("d-flex", "justify-content-center", "p-2", "m-2");
document.body.append(divBtn);
let btnNuovaPartita = document.createElement("button");
btnNuovaPartita.classList.add("btn", "btn-warning", "text-center", "text-dark", "border-3", "m-3", "p-3");
btnNuovaPartita.textContent = "Nuova partita!";
divBtn.append(btnNuovaPartita);

// RIAVVIO PARTITA
btnNuovaPartita.addEventListener("click", function () {
    alert("Reset del gioco!");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById("cella_" + i + "*" + j).style.backgroundColor = "";
            document.getElementById("cella_" + i + "*" + j).classList.remove("pe-none");
            document.getElementById("cella_" + i + "*" + j).classList.remove("animazione");
        }
    }
    clearInterval(countdown);
    clearInterval(intervallo);
    countdown = null;
    intervallo = null;
    cntN1 = 0;
    cntN2 = 0;
    cntN3 = 0;
    cntN4 = 0;
    totNaviColpite = 0;
    ore = 0;
    min = 0;
    sec = 0;
    t = 119;
    termina = false;
    tent = 0;
    acqua = 0;
    colpito = 0;
    console.log("Partita numero " + (nPartita + 1) + " iniziata!");
    console.log("Regole: devi affondare tutte e 4 le navi entro 120 secondi. Ogni cella può essere cliccata una sola volta.");
    document.getElementById("cronometro").innerText = "" + ore + ": " + min + ": " + sec;
    document.getElementById("rovescia").innerText = t;
    intervallo = setInterval(() => {
        if (sec != 60)
            sec++;
        if (sec == 60) {
            sec = 0;
            if (min != 60)
                min++;
        }
        if (min == 60) {
            min = 0;
            if (ore != 24)
                ore++;
        }
        if (ore == 24)
            ore = 0;
        document.getElementById("cronometro").innerText = "" + ore + ": " + min + ": " + sec;
    }, 1000);

    countdown = setInterval(() => {
        document.getElementById("rovescia").innerText = t;
        if (t === 0) {
            termina = true;
            nPartita++;
            alert("Hai perso! Il tempo è scaduto riprovare schiacciando su nuova partita!");
            clearInterval(intervallo);
            clearInterval(countdown);
            intervallo = null;
            countdown = null;
            visualizzaTabella();
            return;
        }
        t--;
    }, 1000);
});

// INIZIALIZZAZIONE CRONOMETRO E CONTO ALLA ROVESCIA
window.onload = function () {
    console.log("Partita numero " + (nPartita + 1) + " iniziata!");
    console.log("Regole: devi affondare tutte e 4 le navi entro 120 secondi. Ogni cella può essere cliccata una sola volta.");
    intervallo = setInterval(() => {
        if (sec != 60)
            sec++;
        if (sec == 60) {
            sec = 0;
            if (min != 60)
                min++;
        }
        if (min == 60) {
            min = 0;
            if (ore != 24)
                ore++;
        }
        if (ore == 24)
            ore = 0;
        document.getElementById("cronometro").innerText = "" + ore + ": " + min + ": " + sec;
    }, 1000);

    countdown = setInterval(() => {
        document.getElementById("rovescia").innerText = t;
        if (t === 0) {
            termina = true;
            nPartita++;
            alert("Hai perso! Il tempo è scaduto riprovare schiacciando su nuova partita!");
            clearInterval(countdown);
            clearInterval(intervallo);
            countdown = null;
            intervallo = null;
            visualizzaTabella();
            return;
        }
        t--;
    }, 1000);
}

function visualizzaTabella() {
    if (termina != true) {
        return;
    }
    else {
        let section = document.createElement("section");
        section.classList.add("container", "p-3");
        document.body.append(section);
        let table = document.createElement("table");
        table.classList.add("table", "table-striped", "text-center", "border", "border-dark", "border-3");
        section.append(table);
        let thead = document.createElement("thead");
        thead.classList.add("border", "border-dark", "border-3");
        table.append(thead);
        let tbody = document.createElement("tbody");
        table.append(tbody);
        let trHead = document.createElement("tr");
        thead.append(trHead);
        for (let i = 0; i < thHead.length; i++) {
            let thH = document.createElement("th");
            thH.setAttribute("scope", "col");
            thH.classList.add("border", "border-dark", "border-3");
            thH.textContent = thHead[i];
            trHead.append(thH);
        }
        let trBody = document.createElement("tr");
        trBody.classList.add("border", "border-dark", "border-3");
        tbody.append(trBody);
        let td1 = document.createElement("td");
        td1.setAttribute("scope", "row");
        td1.classList.add("border", "border-dark", "border-3");
        td1.textContent = nPartita;
        trBody.append(td1);
        let td2 = document.createElement("td");
        td2.classList.add("border", "border-dark", "border-3");
        td2.textContent = tent;
        trBody.append(td2);
        let td3 = document.createElement("td");
        td3.classList.add("border", "border-dark", "border-3");
        td3.textContent = ore + ": ore " + min + ": minuti e " + sec + " secondi";
        trBody.append(td3);
        let td4 = document.createElement("td");
        td4.classList.add("border", "border-dark", "border-3");
        td4.textContent = colpito;
        trBody.append(td4);
        let td5 = document.createElement("td");
        td5.classList.add("border", "border-dark", "border-3");
        td5.textContent = acqua;
        trBody.append(td5);
    }
}