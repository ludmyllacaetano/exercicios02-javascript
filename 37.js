// Exercício 37: Gabarito de prova
const prompt = require('prompt-sync')();

let gabarito = [];

for (let i = 1; i < 21; i++) {
    gabarito[i] = prompt(`Digite a resposta para a questão ${i}: `);
}
console.log("Gabarito: ", gabarito);

for(let i = 1; i < 51; i++) {
    let respostas = [];
    let acertos = 0;
    for (let j = 1; j < 21; j++) {
        respostas[j] = prompt(`Digite a resposta do aluno para a questão ${j}: `);
        if(respostas[j] == gabarito[j]) {
            acertos++;
        }
    }
    console.log(`Aluno ${i}`);
    console.log("Acertos:", acertos);
    if(acertos>=12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }

}