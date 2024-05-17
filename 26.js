// Exercício 26: Multiplicar matrizes
const prompt = require('prompt-sync')();

let matrizA = [];
let matrizB = [];
let matrizProduto = [];

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

matrizA = gerarMatrizAleatoria(3, 5);
console.log("Matriz A: ", matrizA);
matrizB = gerarMatrizAleatoria(3, 5);
console.log("Matriz B: ", matrizB);

function multiplicarMatriz(matrizA, matrizB){
    let matrizProduto = [];
    for(i = 0; i < 3; i++) {
        let produto = [];
        for (let j = 0; j < 5; j++) {
            produto.push(matrizA[i][j] * matrizB[i][j]);
        }
        matrizProduto.push(produto);
    }
    return matrizProduto;
}

matrizProduto = multiplicarMatriz(matrizA, matrizB);
console.log("A matriz produto é: ", matrizProduto);