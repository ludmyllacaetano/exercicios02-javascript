// Exercício 20: Peso ideal
const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Insira a sua altura: "));
let sexo = prompt("Insira o seu sexo ('M' masculino e 'F para feminino): ");

function pesoIdeal(altura, sexo){
    if(sexo == 'M' || sexo == 'm') {
        return (72.7 * altura - 58)
    }else {
        return (62.1 * altura - 44.7)
    }
}

console.log("O peso ideal é de " + pesoIdeal(altura, sexo).toFixed(2) + "kg");