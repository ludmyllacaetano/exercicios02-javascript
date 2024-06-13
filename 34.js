// Exercício 34: matriz 50x50
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

let matriz = gerarMatrizAleatoria(50, 50);
console.log("Matriz original: ", matriz);

for (let i = 0; i < 50; i++) {
    let diagonal = matriz[i][i];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] *= diagonal;
    }
}

console.log("Matriz após a multiplicação: ", matriz);
