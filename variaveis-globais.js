var movimentos = 0;
var grupoCartoes = [["🦄", "🍦"], ["🌈", "👽"], ["👾", "🤖"], ["👹", "👺"]]; 
var nivelAtual = 0;
var niveis = [
    {
        cartoes: grupoCartoes[0],
        movimentosMax: 5
    },
    {
        cartoes: grupoCartoes[0].concat(grupoCartoes[1]),
        movimentosMax: 10
    },
    {
        cartoes: grupoCartoes[0].concat(grupoCartoes[1], grupoCartoes[2]),
        movimentosMax: 15
    },
    {
        cartoes: grupoCartoes[0].concat(grupoCartoes[1], grupoCartoes[2], grupoCartoes[3]),
        movimentosMax: 20
    }
];