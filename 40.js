// Exercício 40: Loto
const prompt = require('prompt-sync')();

let loto = [];

for (let i = 0; i < 5; i++) {
    loto[i] = parseInt(prompt(`Digite o número para a posição ${i}: `));
}
console.log("Resultado da Loto: ", loto);

for(let i = 1; i < 3; i++) {
    let apostas = [];
    let acertos = 0;
    for (let j = 0; j < 5; j++) {
        apostas[j] = prompt(`Digite um número: `);
        if(apostas[j] == loto[j]) {
            acertos++;
        }
    }
    console.log(`Aposta ${i}`);
    //console.log("Acertos:", acertos);
    if(acertos==5) {
        console.log("Ganhador");
    } 

}