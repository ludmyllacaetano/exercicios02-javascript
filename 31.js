// Exercício 31: Ler inteiro e Matriz 30x30
const prompt = require('prompt-sync')();

function lerMatriz(numLinhas, numColunas){
    let matrizM = [];
    for(let i =  0; i < numLinhas; i++) {
        matrizM[i] = []
    }
    for(let i = 0; i < numLinhas; i++){
        console.log("Insira a linha ", i+1);
        for (let j = 0; j < numColunas; j++) {
            matrizM[i][j] = parseInt(prompt("Insira o número: "));
        }
    }
    return matrizM;
}

// function gerarMatrizAleatoria(numLinhas, numColunas){
//     let matriz = Array();
//     for(let i = 0; i < numLinhas; i++){
//         matriz[i] = Array();
//         for(let j = 0; j < numColunas; j++){
//             matriz[i].push(Math.ceil(Math.random()*100)-1 - Math.ceil(Math.random()*100)-1);
//         }
//     }
//     return matriz;
// }

let numA = parseInt(prompt("Digite um número inteiro: "));
let matrizV = lerMatriz(30, 30);
//let matrizV = gerarMatrizAleatoria(30, 30);
console.log(matrizV);

let somaA = 0;
let matrizX = [];
let tamanho = 30;

for(let i =  0; i < tamanho; i++) {
    matrizX[i] = []
}

for(let i = 0; i < tamanho; i++){
    for(let j = 0; j < tamanho; j++){
        if(matrizV[i][j] == numA){
            somaA++;
        }else {
            matrizX[i][j] = matrizV[i][j];
        }
    }
}

console.log(`Quantidade valores iguais a ${numA}: ${somaA}`);
console.log("Matriz X: ", matrizX);

