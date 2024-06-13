// Exercício 36: Gabarito de apostas
const prompt = require('prompt-sync')();

let gabarito = [];
for (let i = 0; i < 13; i++) {
    gabarito[i] = parseInt(prompt("Digite um número: "));
}

// for (let i = 0; i < 3; i++) {
//     gabarito[i] = Math.floor(Math.random() * 100); // Gera números aleatórios entre 1 e 100
// }

console.log("Gabarito:", gabarito);

let apostas = [];

for (let i = 1; i < 13; i++) {
    apostas = [];
    for( let j = 0; j< 13; j++) {
        let aposta = parseInt(prompt("Digite um número: "));
        apostas.push(aposta);
    }

    let acertos = 0;
    for (let i = 0; i < 101; i++) {
        if(apostas[i] == gabarito[i]) {
            acertos++;
        }
    }
    if (acertos == 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
    console.log("Apostador: ", i);
    console.log("Acertos: ", acertos);
}