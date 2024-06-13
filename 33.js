// Exercício 33: multiplicar diagonal principal com a média da diagonal secundária
const prompt = require('prompt-sync')();

function gerarMatrizAleatoria(numLinhas, numColunas){
    let matriz = Array();
    for(let i = 0; i < numLinhas; i++){
        matriz[i] = Array();
        for(let j = 0; j < numColunas; j++){
            matriz[i].push(Math.ceil(Math.random()*100)-1 - Math.ceil(Math.random()*100)-1);
        }
    }
    return matriz;
}

let matriz = gerarMatrizAleatoria(3, 3);
console.log("Matriz original: ", matriz);

function mediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    let media = soma/3;
    return media;
} 

let media = mediaDiagonalSecundaria(matriz);

for(let i = 0; i < 3; i++){
    matriz[i][i] *= media;
}

console.log("Média: ", media);
console.log("Matriz modificada: ", matriz);