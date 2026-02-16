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

function acerto(osCartoes) {
    osCartoes.forEach(function(elemento) {
        elemento.classList.add("acertaste"); //adiciona a classe "acertaste" aos cartões descobertos, para indicar que o jogador acertou
    });   
}

function erro(osCartoes) {
    osCartoes.forEach(function(elemento) {
        elemento.classList.remove("descoberta"); //remove a classe "descoberta" dos cartões que não foram acertados, para que o jogador possa tentar novamente
    });  
}


divideCartoes();

document.querySelectorAll(".cartao").forEach(function(elemento) {
    elemento.addEventListener("click", descobrir);
});