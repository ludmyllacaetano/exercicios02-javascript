// Exercício 14: Array de nomes
const prompt = require('prompt-sync')();

let nomes = [];

for(let i = 0; i < 7; i++) {
    nomes[i] = prompt("Insira um nome: ");
}

console.log(nomes.reverse());