// Exercício 30: Matriz 5x5 e vetores
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

const tamanho = 5;
let matrizM = lerMatriz(tamanho, tamanho);

console.log("Matriz: ", matrizM);

let SL = [];
let SC = [];

for(let i = 0; i < tamanho; i++){
    let somaLinha = 0;
    let somaColuna = 0;
    for(let j = 0; j < tamanho; j++){
        somaLinha += matrizM[i][j];
        somaColuna += matrizM[j][i];
    }
    SL.push(somaLinha);
    SC.push(somaColuna);
}

console.log("Vetor SL: ", SL);
console.log("Vetor SC: ", SC);