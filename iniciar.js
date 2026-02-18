function iniciar() { 
    movimentos = 0; 
    divideCartoes(niveis[nivelAtual].cartoes);

    document.querySelector('#mov').innerHTML = '00'; 
    maxContador();
    document.querySelector('#endGame').classList.remove("visivel"); 
    document.querySelector('#gameOver').classList.remove("visivel"); 
    document.querySelector('#subirNivel').classList.remove("visivel"); 

    document.querySelectorAll(".cartao").forEach(function(elemento) {
        elemento.addEventListener("click", descobrir);
    });

    // Certificar que o texto do nível está certo ao carregar a página
    atualizaNivel();
    iniciaCronometro();
}

function reiniciar() {
    nivelAtual = 0;
    atualizaNivel();
    iniciar();
}

iniciar();

document.querySelectorAll(".reiniciar").forEach(function(botao) {
    if (botao.id !== "subir") {
        botao.addEventListener("click", reiniciar);
    }
});
document.querySelector("#subir").addEventListener("click", carregaNovoNivel);