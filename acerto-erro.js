function acerto(osCartoes) {
    osCartoes.forEach(function(elemento) {
        elemento.classList.add("acertaste"); //adiciona a classe "acertaste" aos cartões descobertos, para indicar que o jogador acertou
    });   
}

function erro(osCartoes) {
    osCartoes.forEach(function(elemento) {
        elemento.classList.add("erro"); //adiciona a classe "erro" aos cartões que não foram acertados, para indicar que o jogador errou
    });  

    setTimeout(
        function() {
            osCartoes.forEach(function(elemento) {
        elemento.classList.remove("descoberta"); //remove a classe "descoberta" dos cartões que não foram acertados, para que o jogador possa tentar novamente
        elemento.classList.remove("erro"); //remove a classe "erro" dos cartões que não foram acertados, para que o jogador possa tentar novamente
        
        }); 
    }, 1000); //sao 1000 milissegundos, ou seja, 1 segundo, para que o jogador tenha tempo de ver os cartões que ele errou antes de eles serem virados novamente para baixo    
}

