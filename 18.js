// Exercício 18: Registro
const prompt = require('prompt-sync')();

let nome = prompt("Insira o nome: ");
let cargo = prompt("Insira o cargo: ");
let salario = prompt("Insira o salário: ");

let funcionario = {
    nome,
    cargo,
    salario
}

console.log(funcionario);