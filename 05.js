// Exercício 5: JoKenPo
const prompt = require('prompt-sync')();

console.log("Lista de jogadas:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura\n");
let jogada = parseInt(prompt("Insira o número da sua jogada: "));

var computer = [1,2,3];
var random = computer[Math.floor(Math.random()*computer.length)];

function nomeJogada(num) {
    let jogada;
    switch (num) {
        case 1:
            jogada = 'Pedra';
            break;
        case 2:
            jogada = 'Papel';
            break;
        case 3:
            jogada = 'Tesoura';
            break;
        default:
            console.log("Jogada inválida!");
            jogada = 'Inválida';
            break;        
    }
    return jogada;
}


console.log(`${nomeJogada(jogada)} vs ${nomeJogada(random)}`);

if (jogada === random){
    console.log("Empatou!");
} else if((jogada == 1 && random == 2) || (jogada == 2 && random == 3) || (jogada == 3 && random == 1)) {
    console.log("Perdeu!");
} else {
    console.log("Ganhou!");
}