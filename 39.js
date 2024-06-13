// Exercício 39: vetor compactado
const prompt = require('prompt-sync')();

let vetorA = [];

for (let i = 0; i < 100; i++) {
    vetorA[i] = parseInt(prompt(`Digite o número para a posição ${i}: `));
}
console.log("Vetor A: ", vetorA);

let vetorB = [];

for(let i = 0; i < 100; i++) {
    if (vetorA[i] > 0) {
        vetorB.push(vetorA[i]);
    }
}

console.log("Vetor B: ", vetorB);