function gameOver() {
    clearInterval(cronometro);
    document.querySelector("#gameOver").classList.add("visivel");
}