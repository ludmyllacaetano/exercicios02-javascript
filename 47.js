// Exercício 47: Transformar objeto de entrada

const entrada = {
    numLegais: ["seis", "tres", "sete"],
    temperos: ["cominho", "lemon pepper", "pimenta do reino"],
}

function aplicarFuncao(objeto, funcao){
    const objetoFinal = {};

    for(const [chave, valor] of Object.entries(objeto)) {
        objetoFinal[chave] = funcao(valor);
    }
    return objetoFinal;
}

let saida = aplicarFuncao(entrada, "toUpperCase")