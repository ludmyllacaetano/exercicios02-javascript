// Exercício 29: Matriz 5x5
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

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaElementos = 0;

for(let i = 0; i < tamanho; i++){
    somaColuna2 +=matrizM[i][1];
    for(let j = 0; j < tamanho; j++){
        somaElementos += matrizM[i][j];
        if(j === i){
            somaDiagonalPrincipal += matrizM[i][j];
        } 
        if (i === 3) {
            somaLinha4 += matrizM[i][j];
        }
    }
}

console.log("Soma da linha 4: ", somaLinha4);
console.log("Soma da coluna 2: ", somaColuna2);
console.log("Soma da diagonal principal: ", somaDiagonalPrincipal);
console.log("Soma de todos os elementos: ", somaElementos);