function atualizarContador() {
    var movimentosTexto;
    movimentos++;
    movimentosTexto = movimentos;

    if (movimentos > niveis[nivelAtual].movimentosMax) {
        gameOver();
        return;
    }

    if (movimentos < 10) {
        movimentosTexto = '0' + movimentos;
    }

    document.querySelector('#mov').innerHTML = movimentosTexto; 

}

function maxContador() {
    var movimentosMaxTexto = niveis[nivelAtual].movimentosMax;
    if ( movimentosMaxTexto < 10 ) {
        movimentosMaxTexto = "0" + movimentosMaxTexto;
    }
    document.querySelector("#mov-total").innerText = movimentosMaxTexto;
}