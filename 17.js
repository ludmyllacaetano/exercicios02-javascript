// Exercício 17: Nome e idade
const prompt = require('prompt-sync')();

let nome = []
let idade = []
let menorDeIdade = []

for(let i = 0; i < 9; i++){
    nome[i] = prompt("Insira o seu nome: ");
    idade[i] = parseInt(prompt("Insira a sua idade: "));
    if(idade[i] < 18) {
        menorDeIdade[nome[i]] = idade[i];
    }
}

console.log(menorDeIdade);