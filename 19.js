// Exercício 19: Horários
const prompt = require('prompt-sync')();
let horario = [];

for(let i = 0; i < 5; i++) {
    horario[i] = prompt("Insira um horário: ");
    console.log(horario[i]);
}

console.log(horario);