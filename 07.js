// Exercício 7: Aluguel de carros
const prompt = require('prompt-sync')();

const carroPopular = 90;
const carroLuxo = 150;

console.log("Tipo de carro:\n 1 - Carro Popular\n 2 - Carro de Luxo");
let tipoCarro = parseInt(prompt("Insira o número do tipo de carro alugado: "));
let diasAluguel = parseInt(prompt("Insira a quantidade de dias do aluguel: "));
let KmPercorridos = parseFloat(prompt("Insira a quantidade de Km percorridos: "));

function precoAPagar(tipoCarro, diasAluguel, KmPercorridos){
    let valorAPagar = 0;
    if (tipoCarro == 1) {
        if (KmPercorridos < 100) {
            valorAPagar = (KmPercorridos * 0.2) + (carroPopular*diasAluguel);
        } else {
            valorAPagar = (KmPercorridos * 0.1) + (carroPopular*diasAluguel);
        }
    }
    else {
        if (KmPercorridos < 200) {
            valorAPagar = (KmPercorridos * 0.3) + (carroLuxo*diasAluguel);
        } else {
            valorAPagar = (KmPercorridos * 0.25) + (carroLuxo*diasAluguel);
        }
    }
    return console.log(`O preço a ser pago é de R$ ${valorAPagar.toFixed(2)},00`);;
}

precoAPagar(tipoCarro, diasAluguel, KmPercorridos);

//console.log(`O preço a ser pago é de ${valorAPagar.toFixed(2)},00`);