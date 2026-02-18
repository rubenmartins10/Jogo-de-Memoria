
function descobrir() {
    var descobertas;
    var cartoesPendentes;
    var totalDescobertas = document.querySelectorAll(".descoberta:not(.acertaste)"); //seleciona todos os elementos com a classe "descoberta" que não possuem a classe "acertaste" e armazena na variável totalDescobertas, para verificar quantos cartões o jogador já descobriu e evitar que ele descubra mais de dois cartões ao mesmo tempo
    if (totalDescobertas.length > 1 ) { //se o jogador já descobriu dois cartões
        return;
    }

    this.classList.add("descoberta"); //ao clicar, adiciona a classe "descoberta" ao cartão clicado

    descobertas = document.querySelectorAll(".descoberta:not(.acertaste)"); //seleciona novamente todos os elementos com a classe "descoberta" que não possuem a classe "acertaste" e armazena na variável descobertas, para verificar quantos cartões o jogador já descobriu e passar os cartões descobertos para a função comparar
    if (descobertas.length < 2 ) { //se o jogador ainda não descobriu dois cartões
        return;
    }

    comparar(descobertas); //chama a função comparar, passando os cartões descobertos como argumento
    atualizarContador(); //chama a função atualizarContador para atualizar o número de movimentos do jogador
    cartoesPendentes = document.querySelectorAll(".cartao:not(.acertaste)"); //seleciona todos os elementos com a classe "cartao" que não possuem a classe "acertaste" e armazena na variável cartoesPendentes, para verificar quantos cartões ainda estão pendentes e finalizar o jogo quando não houver mais cartões pendentes
    if (cartoesPendentes.length === 0) {
        setTimeout(finalizar, 1000); //se não houver mais cartões pendentes, chama a função finalizar após um atraso de 500 milissegundos para exibir a mensagem de vitória
    }
}

function comparar(cartoesAComparar) { //função que compara os cartões descobertos
    if (
        cartoesAComparar[0].dataset.valor === cartoesAComparar[1].dataset.valor //compara o valor dos dois cartões descobertos usando o atributo data-valor
    ) {
        acerto(cartoesAComparar); //se os dois cartões descobertos forem iguais, chama a função acerto
    } else {
        erro(cartoesAComparar); //se os dois cartões descobertos forem diferentes, chama a função erro
    }
    
}