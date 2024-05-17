// Exercício 27: Multiplicar matriz pelo vetor
const prompt = require('prompt-sync')();

let matrizM = [];

for(let i =  0; i < 6; i++) {
    matrizM[i] = []
}

for(let i = 0; i < 6; i++){
    console.log("Insira a linha ", i+1);
    for (let j = 0; j < 6; j++) {
        matrizM[i][j] = parseFloat(prompt("Insira o número: "));
    }
}

console.log(matrizM);

let valorA = parseFloat(prompt("Insira o valor A: "));

function multiplicarMatrizPorNumero(matriz, vetor){
    let produto = matriz
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            produto[i][j] = matriz[i][j] * vetor;
        }
    }
    return produto;
}

let produto = multiplicarMatrizPorNumero(matrizM, valorA);
console.log(produto);