var grupoCartoes = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalCartoes = grupoCartoes.concat(grupoCartoes); //concatena o array grupoCartoes com ele mesmo, para criar um array com 16 elementos (8 pares de cartões)

function embaralharCartoes() {
    var resultado;
    resultado = totalCartoes.sort(function() {
        return Math.random() - 0.5; //embaralha o array totalCartoes usando a função sort e Math.random
})

    return resultado; //retorna o array embaralhado
};



function divideCartoes() {
    var mesa = document.querySelector("#mesa"); //seleciona o elemento com id "mesa" e armazena na variável mesa
    var cartasEmbaralhadas = embaralharCartoes(); //chama a função embaralharCartoes e armazena o resultado na variável cartasEmbaralhadas
    
    mesa.innerHTML=""; //limpa a mesa antes de adicionar os cartões, para evitar que os cartões sejam adicionados várias vezes ao clicar no botão "Reiniciar"

    cartasEmbaralhadas.forEach(function(elemento){ //para cada elemento do array totalCartoes, executa a função que cria um cartão
        var cartao = document.createElement("div"); //cria um elemento div para o cartão

        cartao.innerHTML = 
            "<div class='cartao' data-valor=" +
            elemento +
            ">" +
                "<div class='cartao_conteudo'>" + 
                elemento + 
               "</div>" + 
           "</div>"
        ;

        mesa.appendChild(cartao); //adiciona o cartão criado à mesa
    });
}


function descobrir() {
    var descobertas;
    var totalDescobertas = document.querySelectorAll(".descoberta"); //seleciona todos os elementos com a classe "descoberta" e armazena na variável totalDescobertas
    
    if (totalDescobertas.length > 1 ) { //se o jogador já descobriu dois cartões
        return;
    }

    this.classList.add("descoberta"); //ao clicar, adiciona a classe "descoberta" ao cartão clicado

    descobertas = document.querySelectorAll(".descoberta"); //seleciona novamente todos os elementos com a classe "descoberta" e armazena na variável descobertas, para verificar se o jogador descobriu dois cartões
    if (descobertas.length < 2 ) { //se o jogador ainda não descobriu dois cartões
        return;
    }


    if (descobertas[0].dataset.valor === descobertas[1].dataset.valor) { //se os dois cartões descobertos forem iguais
        console.log("Par encontrado!"); //exibe uma mensagem no console
    } else {
        console.log("Tente novamente!"); //se os dois cartões descobertos forem diferentes, exibe uma mensagem no console
        }


}


divideCartoes();

document.querySelectorAll(".cartao").forEach(function(elemento) {
    elemento.addEventListener("click", descobrir);
});