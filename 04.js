// Exercício 4: Forma um triângulo?
const prompt = require('prompt-sync')();

let seg1 = parseInt(prompt("Insira o tamanho do primeiro segmento: "));
let seg2 = parseInt(prompt("Insira o tamanho do segundo segmento: "));
let seg3 = parseInt(prompt("Insira o tamanho do terceiro segmento: "));

function formaTriangulo(seg1, seg2, seg3) {
    if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2){
        return console.log("Os segmentos formam um triângulo");
    } else {
        return console.log("Os segmentos não formam um triangulo");
    }
}

formaTriangulo(seg1, seg2, seg3);