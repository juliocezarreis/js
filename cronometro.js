/*parseInt(prompt(""))*/
const hora = 0;
const minuto = 0;
const segundo = 12;

let contH = 0;
let contM = 0;
let contS = 0;

var loop = setInterval(function() {

    contS++;

    if (contH == hora && contM == minuto && contS == segundo) {
        clearInterval(loop);
    }

    if (contS == 60) {
        contM++;
        contS = 0;
    }
    if (contM == 60) {
        contH++;
        contM = 0;
    }

    console.log(`${contH}h ${contM}m ${contS}s até (${hora}h ${minuto}m ${segundo}s)`);

}, 1000);