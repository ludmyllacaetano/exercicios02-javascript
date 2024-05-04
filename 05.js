// Exercício 5: JoKenPo
const prompt = require('prompt-sync')();

console.log("Lista de jogadas:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura\n");
let jogada = parseInt(prompt("Insira o número da sua jogada: "));

var computer = [1,2,3];
var random = computer[Math.floor(Math.random()*computer.length)];

console.log(`${jogada} vs ${random}`);

if (jogada === random){
    console.log("Empatou!");
} else if((jogada == 1 && random == 2) || (jogada == 2 && random == 3) || (jogada == 3 && random == 1)) {
    console.log("Perdeu!");
} else {
    console.log("Ganhou!");
}