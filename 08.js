// Exercício 8: Atividade física
const prompt = require('prompt-sync')();

let horasAtividade = parseFloat(prompt("Digite a quantidade de horas de atividade física realizadas: "));

function pontosEDinheiro (horasAtividade) {
    let pontos = 0;
    if (horasAtividade < 10) {
        pontos = 2 * horasAtividade;
    } else if (horasAtividade < 20) {
        pontos = 5 * horasAtividade;
    } else {
        pontos = 10 * horasAtividade;
    }
    let dinheiro = pontos * 0.05;

    return console.log(`Quantidade de pontos: ${pontos}\nDinheiro ganho: R$ ${dinheiro.toFixed(2)}`);
}

pontosEDinheiro(horasAtividade);