// Exercício 11: PA
const prompt = require('prompt-sync')();

let a1 = parseFloat(prompt("Digite o primeiro termo da PA: "));

let r = parseFloat(prompt("Digite a razão da PA: "));

let sequencia = [];
let soma = 0;

for(let i = 0; i < 10; i++){
    sequencia[i] = a1 + r*i; 
    soma += sequencia[i];
}

console.log(sequencia);
console.log("Soma: ", soma);