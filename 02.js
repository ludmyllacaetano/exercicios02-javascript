// Exercício 2: Velocidade do carro
const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt("Qual a velocidade do carro? "));

let valorMulta;

if(velocidade>80) {
    valorMulta = (velocidade - 80)*5
    console.log("Você foi multado");
    console.log(`Valor da multa: R$ ${valorMulta},00`);
}