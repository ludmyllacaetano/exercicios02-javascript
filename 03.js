// Exercício 3: Preço da passagem
const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Qual a distância a ser percorrida? (em Km) "));

let precoPassagem;

if(distancia < 200){
    precoPassagem = 0.5 * distancia;
} else {
    precoPassagem = 0.45 * distancia;
}

console.log(`Preço da Passagem: R$ ${precoPassagem.toFixed(2)}`);