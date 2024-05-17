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
matrizB = gerarMatrizAleatoria(5, 3);
console.log("Matriz B: ", matrizB);

// function multiplicarMatriz(matrizA, matrizB){
//     let matrizProduto = [];
//     for(i = 0; i < 3; i++) {
//         let produto = [];
//         for (let j = 0; j < 5; j++) {
//             produto.push(matrizA[i][j] * matrizB[i][j]);
//         }
//         matrizProduto.push(produto);
//     }
//     return matrizProduto;
// }

function multiplicacaoDeMatrizes(matrizA, matrizB){
    let produto = [];
    for(let r = 0; r < matrizA.length; r++) {
        produto[r] = [];
        for(let c = 0; c < matrizB[0].length; c++) {
            let soma = 0;
            for(let i = 0; i < matrizA[0].length; i++) {
                soma += matrizA[r][c] * matrizB[i][c];
            }
            produto[r][c] = soma;
        }
    }
    return produto;
}

matrizProduto = multiplicacaoDeMatrizes(matrizA, matrizB);
console.log("A matriz produto é: ", matrizProduto);