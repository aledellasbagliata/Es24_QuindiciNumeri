window.addEventListener("load", function () {

    const wrapper = this.document.getElementById("wrapper");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = this.document.createElement("div");
            div.id = "div-" + i + "-" + j;
            div.addEventListener("click", clickSuCella);
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.backgroundColor = "gray";
            div.style.margin = "2px";
            div.style.padding = "0";
            wrapper.appendChild(div);

        }

    }
    caricaMatrice(); 


});

function clickSuCella() {

    const div = this;
    const id = div.id.split("-");
    const i = parseInt(id[1]);
    const j = parseInt(id[2]);

    // cella sopra
    if (j - 1 >= 0) {
        const divSopra = document.getElementById("div-" + i + "-" + (j - 1));
        if (divSopra.textContent == "") {
            scambiaDiv(div, divSopra);
        }
    }

    // cella sotto
    if (j + 1 < 4) {
        const divSotto = document.getElementById("div-" + i + "-" + (j + 1));
        if (divSotto.textContent == "") {
            scambiaDiv(div, divSotto);
        }
    }
    // cella a sinistra 
    if (i - 1 >= 0) {
        const divSinistra = document.getElementById("div-" + (i - 1) + "-" + j);
        if (divSinistra.textContent == "") {
            scambiaDiv(div, divSinistra);
        }
    }
    // cella a destra
    if (i + 1 < 4) {
        const divDestra = document.getElementById("div-" + (i + 1) + "-" + j);
        if (divDestra.textContent == "") {
            scambiaDiv(div, divDestra);
        }
    }

};

function caricaMatrice() {

    for (let cont = 0; cont < 15; cont++) {
        let divRnd;
        do {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);

            divRnd = document.getElementById("div-" + i + "-" + j);

        } while (divRnd.innerHTML != "");

        divRnd.style.backgroundColor = "blue";
        divRnd.innerHTML = cont;
    }
}

function scambiaDiv(piena, vuota) {
    vuota.style.backgroundColor = "blue";
    vuota.innerHTML = piena.innerHTML;
    piena.innerHTML = "";
    piena.style.backgroundColor = null;
}

function checkVitory()
{
    
}