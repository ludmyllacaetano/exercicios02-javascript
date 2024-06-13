// Exercício 42: Objeto dados

const dados = {
    nome: "GoGo AutoPeças",
    produtos: ["chave", "parafuso", "pneu"],
    coresMarca: ["rosa", "verde"],
    numFuncionarios: 12,
    nota: 5,
}

function buscarArray(dados) {
    let dadosArray = {}
    for (let item in dados) {
        if(Array.isArray(dados[item])) {
            dadosArray[item] = dados[item];
        }
    }
    return dadosArray;
}

console.log(buscarArray(dados));