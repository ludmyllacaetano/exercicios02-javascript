// Exercício 20: Folha de pagamento
const prompt = require('prompt-sync')();

let matricula = prompt("Digite a matricula: ");
let nome = prompt("Digite o nome: ");
let salarioBruto = parseFloat(prompt("Digite o salário: "));
let deducaoINSS = 0.12*salarioBruto;
let salarioLiquido = salarioBruto - deducaoINSS;

let funcionario = {
    matricula,
    nome,
    salarioBruto,
    deducaoINSS,
    salarioLiquido
}

console.log(funcionario);