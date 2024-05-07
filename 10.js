// Exercício 10: Do While
const prompt = require('prompt-sync')();

let soma = 0;
let media = 0;
let pares = 0;
let menor;
let continuar = 1;
let num;
let i = 0;

do {
    num = parseFloat(prompt("Insira um número: "));
    soma += num;
    i++;
    media = soma/i;
    if(num%2 == 0) {
        pares++;
    }
    if (i === 1){
        menor = num;
    } else {
        if(num < menor) menor = num;
    }
    continuar = prompt("Deseja continuar?\n1 - sim\n2 - não\n");
} while (continuar != 2);

console.log(`Somatório: ${soma}\nMenor valor: ${menor}\nMédia: ${media.toFixed(2)}\nQuantidade de números pares: ${pares}`);