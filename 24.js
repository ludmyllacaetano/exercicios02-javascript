// Exercício 24: Contar negativos
const prompt = require('prompt-sync')();

let matrizM = [];
matrizM = [[1, -2, 3, -4, -5, 6], [1, -2, -3, -4, -5, 6, 7, 8]]
function contarNegativos(matriz) {
    let vetorC = [];
    let numNegativos = 0;
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                numNegativos++;
            } 
        }
        vetorC[i] = numNegativos;
        numNegativos = 0;
    }
    return vetorC;
} 

console.log(contarNegativos(matrizM))