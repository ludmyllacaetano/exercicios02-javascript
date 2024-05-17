// Exercício 24: Contar negativos
const prompt = require('prompt-sync')();

let matriz = Array();

// function gerarMatrizAleatoria(){
//     for(let i = 0; i < 15; i++){
//         matriz[i] = Array();
//         for(let j = 0; j < 20; j++){
//             matriz[i].push(Math.ceil(Math.random()*100)-1 - Math.ceil(Math.random()*100)-1);
//         }
//     }
//     return matriz;
// }


for(let i =  0; i < 15; i++) {
    matriz[i] = []
}

for(let i = 0; i < 15; i++){
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = parseFloat(prompt("Insira o número: "));
    }
}

//let soma = Array();
let somaColunas = Array();

for(let i = 0; i < 15; i++) {
    let soma = matriz[i][0];
    for(let j = 1; j < 20; j++) {
        soma += matriz[i][j];
    }
    somaColunas.push(soma);
}
somaColunas.forEach((total, indice)=>{
    console.log(`A soma total da coluna ${indice+1} foi de : ${total.toFixed(2)}`)
});
//console.log(matriz)
//console.log("A soma das colunas é:")
//console.log(somaColunas);