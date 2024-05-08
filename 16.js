// Exercício 16: Vetor, random e crescente

function preencherVetor(n) {
    let vetor = []
    for(let i = 0; i < n; i++) {
        vetor[i] = Math.floor(Math.random() * 100);
    }
    return vetor;
}

let vetor = preencherVetor(20);

console.log("Vetor aleatório: ", vetor);

console.log("Em ordem crescente: ", vetor.sort(function(a, b) { return a - b; }));