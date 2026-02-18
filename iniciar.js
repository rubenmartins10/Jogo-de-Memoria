function iniciar() { 
    movimentos = 0; //reinicia o número de movimentos para 0
    divideCartoes(niveis[nivelAtual].cartoes);

    document.querySelector('#mov').innerHTML = '00'; //reinicia o contador de movimentos para 00
    document.querySelector('#endGame').classList.remove("visivel"); //remove a classe "visivel" do elemento com id "endGame" para ocultar o feedback de vitória, caso ele esteja visível
    document.querySelector('#gameOver').classList.remove("visivel"); //remove a classe "visivel" do elemento com id "gameOver" para ocultar o feedback de derrota, caso ele esteja visível
    document.querySelector('#subir').classList.remove("visivel"); //remove a classe "visivel" do elemento com id "subir" para ocultar o botão de subir nível, caso ele esteja visível

    document.querySelectorAll(".cartao").forEach(function(elemento) {
        elemento.addEventListener("click", descobrir);
    });

    //iniciaCronometro();
}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", iniciar); //adiciona um evento de clique ao botão "Reiniciar" que chama a função iniciar para reiniciar o jogo quando o botão for clicado

document.querySelector("#subir").addEventListener("lcick", carregaNovoNivel); 