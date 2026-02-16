divideCartoes();

document.querySelectorAll(".cartao").forEach(function(elemento) {
    elemento.addEventListener("click", descobrir);
});