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

