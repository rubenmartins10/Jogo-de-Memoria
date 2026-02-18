var cronometro;

function iniciaCronometro() {
    var segundos = 0;
    var minutos = 0;
    var segundosTexto = 0;
    var minutosTexto = 0;

    clearInterval(cronometro);
    document.querySelector('#minutos').innerHTML = '00';
    document.querySelector('#segundos').innerHTML = '00';

    cronometro = setInterval(atualizarCronometro, 1000);

    function atualizarCronometro() {
        segundos = segundos + 1;
        if (segundos > 59) {
            segundos = 0;
            minutos = minutos + 1;
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if (segundos < 10) {
            segundosTexto = '0' + segundos;
        }
        if (minutos < 10) { 
            minutosTexto = '0' + minutos;
        }
        document.querySelector('#minutos').innerHTML = minutosTexto;
        document.querySelector('#segundos').innerHTML = segundosTexto;
    }
}