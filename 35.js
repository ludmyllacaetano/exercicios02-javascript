// Exercício 35: par ou impar
const prompt = require('prompt-sync')();

let par = [];
let impar = [];

for (let i = 0; i < 30; i++) {
    let valor = parseInt(prompt("Insira um valor: "));

    if (valor % 2 === 0) {
        if (par.length === 5) {
            console.log("O vetor par está cheio!");
            par = [];
        }
        par.push(valor);
    } else {
        if (impar.length === 5) {
            console.log("O vetor ímpar está cheio!");
            impar = [];
        }
        impar.push(valor);
    }
}

console.log("Vetor par: ", par);
console.log("Vetor ímpar: ", impar);