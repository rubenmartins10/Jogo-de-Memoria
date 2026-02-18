function finalizar() {
    if ( nivelAtual < niveis.length -1 ) {
    document.querySelector("#subirNivel").classList.add("visivel"); 
    }
    else {
        document.querySelector("#endGame").classList.add("visible");
    }
}