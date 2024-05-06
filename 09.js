// Exercício 9: Atividade física
const prompt = require('prompt-sync')();

let continuar = 1;
let salario;
let sexo;
let somaM = 0;
let somaF = 0;
let quantidadeHomens = 0;
let quantidadeMulheres = 0;

while (continuar === 1) {
    salario = parseFloat(prompt("Insira o seu salário: "));
    console.log("Digite:\n1 - Masculino\n2 - Feminino");
    sexo = parseInt(prompt("Insira o número corresponde ao seu sexo: "));
    if (sexo == 1) {
        somaM += salario;
        quantidadeHomens++;
    } else if(sexo == 2){
        somaF += salario;
        quantidadeMulheres++;
    } else {
        console.log("Comando inválido!");
        sexo = parseInt(prompt("Insira o número corresponde ao seu sexo: "));
    }
    continuar = parseInt(prompt("Digite 1 para continuar e 0 para terminar: "));
}

console.log(`O salário total pago aos homens foi de R$ ${somaM.toFixed(2)}, com um salário médio de R$ ${(somaM/quantidadeHomens).toFixed(2)}.\nO salário total pago as mulheres foi de R$ ${somaF.toFixed(2)}, com um salário médio de R$ ${(somaF/quantidadeMulheres).toFixed(2)}.`);
