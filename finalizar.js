function finalizar() {
    clearInterval(cronometro);
    if ( nivelAtual < niveis.length -1 ) {
        document.querySelector("#subirNivel").classList.add("visivel"); 
    }
    else {
        document.querySelector("#endGame").classList.add("visivel");
    }
}