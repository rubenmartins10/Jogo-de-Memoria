function subirNivel() {
    nivelAtual++;
}

function atualizaNivel() {
    var nivelTexto = nivelAtual + 1;
    if (nivelTexto < 10) {
        nivelTexto = "0" + nivelTexto;
    }
    document.querySelector("#nivel").innertext = nivelTexto;
}

function carregaNovoNivel() {
    subirNivel();
    atualizaNivel();
    iniciar();
}