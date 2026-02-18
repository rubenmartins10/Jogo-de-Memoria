var movimentos = 0;
var grupoCartoes = [["🦄", "🍦"], ["🌈", "👽"], ["👾", "🤖"]]; //["👹", "👺"]
var nivelAtual = 0;
var niveis = [
    {
        cartoes: grupoCartoes[0]
    },
    {
        cartoes: grupoCartoes[0].concat(grupoCartoes[1])
    },
    {
        cartoes: grupoCartoes[0].concat(grupoCartoes[1], grupoCartoes[2])
    }
];