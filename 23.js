// Exercício 23: Matriz identidade

function matrizIdentidade(n) {
    let matriz = [];
    for(let i = 0; i < n; i++) {
        matriz[i] = [];
        for(let j = 0; j < n; j++) {
            if (i == j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
} 

console.log(matrizIdentidade(7));
