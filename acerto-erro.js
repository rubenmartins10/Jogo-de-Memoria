function acerto(osCartoes) {
    setTimeout(function() {
        osCartoes.forEach(function(elemento) {
            elemento.classList.add("acertaste"); //adiciona a classe "acertaste" aos cartões descobertos, para indicar que o jogador acertou
        });   

        setTimeout(function() {
            var totalAcertos = document.querySelectorAll(".acertaste").length;
            var totalCartas = document.querySelectorAll(".cartao").length;

            if (totalAcertos === totalCartas) {
                document.querySelector("#subirNivel").classList.add("visivel");
            }
        }, 1200);
    }, 800); 

    document.querySelector("#som-acerto").cloneNode().play();
}

function erro(osCartoes) {
    osCartoes.forEach(function(elemento) {
        elemento.classList.add("erro"); //adiciona a classe "erro" aos cartões que não foram acertados, para indicar que o jogador errou
    });  

    document.querySelector("#som-erro").play();


    setTimeout(
        function() {
            osCartoes.forEach(function(elemento) {
                elemento.classList.remove("descoberta"); //remove a classe "descoberta" dos cartões que não foram acertados, para que o jogador possa tentar novamente
                elemento.classList.remove("erro"); //remove a classe "erro" dos cartões que não foram acertados, para que o jogador possa tentar novamente
            }); 
    }, 1000); //sao 1000 milissegundos, ou seja, 1 segundo, para que o jogador tenha tempo de ver os cartões que ele errou antes de eles serem virados novamente para baixo    
}