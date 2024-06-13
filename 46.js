// Exercício 46: Vendas por vendedor

const vendas = [
    {vendedor: "João", valor: 1496},
    {vendedor: "Leonardo", valor: 7954},
    {vendedor: "Donatelo", valor: 49.5},
    {vendedor: "Michelangelo", valor: 300},
    {vendedor: "Rafael", valor: 1000},
]

function vendasPorVendedor(vendas) {
    let sumario = {};
    for(let i = 0; i < vendas.length; i++) {
        let venda = vendas[i];
        let vendedor = venda.vendedor;
        let valor = venda.valor;
        if(sumario[vendedor]) {
            sumario[vendedor] += valor;
        } else {
            sumario[vendedor] = valor;
        }
    }
    return sumario;
}

const sumario = vendasPorVendedor(vendas);
console.log("Sumário: ", sumario);