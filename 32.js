// Exercício 32: 
const prompt = require('prompt-sync')();

// function lerMatriz(numLinhas, numColunas){
//     let matrizM = [];
//     for(let i =  0; i < numLinhas; i++) {
//         matrizM[i] = []
//     }
//     for(let i = 0; i < numLinhas; i++){
//         console.log("Insira a linha ", i+1);
//         for (let j = 0; j < numColunas; j++) {
//             matrizM[i][j] = parseInt(prompt("Insira o número: "));
//         }
//     }
//     return matrizM;
// }

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

let linhas = 12;
let colunas = 13;

let matrizM = gerarMatrizAleatoria(linhas, colunas);
console.log("Matriz M: ", matrizM);

let matrizModificada = [];

function maiorModuloLinha(linha) {
    let maior = 0;
    for(let i = 0; i < linha.length; i++) {
        if(Math.abs(linha[i]) > Math.abs(maior)) {
            maior = Math.abs(linha[i]);
        }
    }
    return maior;
}

for (let i = 0; i < matrizM.length; i++) {
    let maior = maiorModuloLinha(matrizM[i]);
    matrizModificada[i] = [];
    for(let j = 0; j < colunas; j++) {
        matrizModificada[i][j] = matrizM[i][j]/maior;
    }
}
console.log("Matriz Modificada: ", matrizModificada);