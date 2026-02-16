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