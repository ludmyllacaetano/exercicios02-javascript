// Exercício 1: Redução da idade de um fumante
const prompt = require('prompt-sync')();

let quantidadeCigarros = parseInt(prompt("Qual o número de cigarros que você fuma por dia? "));

let anosFumante = parseInt(prompt("Há quantos anos você fuma? "));

let diasPerdidos = (10/(24*60))*quantidadeCigarros*(anosFumante*365);

console.log("Dias perdidos: ", Math.round(diasPerdidos));