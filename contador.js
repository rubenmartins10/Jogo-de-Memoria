function atualizarContador() {
    var movimentosTexto;
    movimentos++;
    movimentosTexto = movimentos;

    if (movimentos < 10) {
        movimentosTexto = '0' + movimentos;
    }

    document.querySelector('#mov').innerHTML = movimentosTexto; 

}