// Exercício 38: vetor e operação
const prompt = require('prompt-sync')();

let vetor = [];

for (let i = 0; i < 6; i++) {
    vetor[i] = parseInt(prompt(`Digite o número para a posição ${i}: `));
}
console.log("Vetor: ", vetor);

console.log("1- soma dos elementos;\n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor.");

let operacao = parseInt(prompt("Insira o número referente a operação: "));

switch (operacao) {
    case 1:
        let soma = 0;
        for(let i = 0; i < vetor.length; i++) {
            soma += vetor[i];
        }
        console.log("A soma dos elementos é:", soma);
        break;
    case 2:
        let produto = vetor[0];
        for(let i = 1; i < vetor.length; i++) {
            produto *= vetor[i];
        }    
        console.log("O produto dos elementos é:", produto);
        break;
    case 3:
        let somaTotal = 0;
        for(let i = 0; i < vetor.length; i++) {
            somaTotal += vetor[i];
        }
        let media = somaTotal/vetor.length;
        console.log("Média:", media);
        break;
    case 4:
        let vetorCrescente = vetor.sort();
        console.log("Vetor em ordem crescente:", vetorCrescente);
        break;
    case 5:
        console.log(vetor);
        break;
    default:
        console.log("Insira uma operação presente na lista.");
        break;
}