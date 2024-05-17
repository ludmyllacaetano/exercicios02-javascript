// Exercício 28: Matriz 10x10
const prompt = require('prompt-sync')();

function lerMatriz(numLinhas, numColunas){
    let matrizM = [];
    for(let i =  0; i < numLinhas; i++) {
        matrizM[i] = []
    }
    for(let i = 0; i < numLinhas; i++){
        console.log("Insira a linha ", i+1);
        for (let j = 0; j < numColunas; j++) {
            matrizM[i][j] = parseFloat(prompt("Insira o número: "));
        }
    }
    return matrizM;
}
let tamanho = 10;
let matriz = lerMatriz(tamanho, tamanho);
console.log("Matriz", matriz);

let somaAcimaDaDiagonal = 0;
let somaAbaixoDaDiagonal = 0;

for(let i = 0; i < tamanho; i++){
    for(let j = 0; j < tamanho; j++){
        if(j > i){
            somaAcimaDaDiagonal += matriz[i][j];
        } else if(j < i) {
            somaAbaixoDaDiagonal += matriz[i][j];
        }
    }
}

console.log("Soma acima da diagonal: ", somaAcimaDaDiagonal);
console.log("Soma abaixo da diagonal: ", somaAbaixoDaDiagonal);