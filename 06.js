// Exercício 6: Adivinhar o número
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número de 1 a 5: "));;
var valores = [1, 2, 3, 4, 5]
let numRandom = valores[Math.floor(Math.random()*valores.length)];

while(1){
    if(num === numRandom) {
        console.log("Você acertou!")
        break;
    } else {
        console.log("Você errou! Tente de novo.");
        num = parseInt(prompt("Digite um número de 1 a 5: "));
    }
}