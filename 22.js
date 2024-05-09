// Exercício 22: Pesquisa Prefeitura
const prompt = require('prompt-sync')();

let salario = [];
let numFilhos = [];
let continuar = 1;
let id = 0;

while(continuar == 1) {
    salario[id] = parseFloat(prompt("Digite o seu salário: "));
    numFilhos[id] = parseInt(prompt("Digite o número de filhos: "));
    continuar = parseInt(prompt("Deseja continuar? \n1 - sim\n2 - não\n"));
    id++;
}

let somaSalario = 0;
let somaFilhos = 0;
let mediaSalario = 0;
let mediaFilhos = 0;
let maiorSalario = 0;
let salarioAte350 = 0

for (let i = 0; i < salario.length; i++) { 
    somaSalario += salario[i]; 
    if (salario[i] < 350) {
        salarioAte350++;
    }
    if (salario[i] > maiorSalario || i == 0) {
        maiorSalario = salario[i];
    }
} 

for (let i = 0; i < numFilhos.length; i++) {
    somaFilhos += numFilhos[i];
}

mediaSalario = somaSalario/(salario.length);
mediaFilhos = somaFilhos/(numFilhos.length);

console.log(`Média do salário da população: ${mediaSalario}\nMédia do número de filhos: ${mediaFilhos}\nMarior salário: ${maiorSalario}\nPorcentagem de pessoas com salário até R$350,00: ${salarioAte350/salario.length * 100}%`);

