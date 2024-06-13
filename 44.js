// Exercício 44: Função contar string

const objeto = {
    arcoiris: ["vermelho", "laranja", "amarelo", "verde", "azul", "anil", "violeta"],
    descobridor: "René Descartes",
    anoDescobrimento: 1637,
    angulos: [40, 42],
}

function contarPropriedadesString(objeto) {
    let numStrings = 0;
    for(let chave in objeto) {
        if(typeof objeto[chave] == 'string') {
            numStrings++;
        }
    }
    return numStrings;
}

let numStrings = contarPropriedadesString(objeto);
console.log(`Há ${numStrings} strings no objeto.`);