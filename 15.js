// Exercício 15: Array de nomes
const prompt = require('prompt-sync')();

let numeros = [];
let numerosPares = [];

for(let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Insira um número: "));
}

numeros.forEach(function (item, indice) {
    if(item%2 === 0) {
        console.log("Número: " + item + " Posição: " + indice); 
    }
});
