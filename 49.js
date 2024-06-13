// Exercício 49: Transações Financeiras

const transacoes = [
    {id: 1, valor: 115, data: "05-06-2024", categoria: "Alimentação"},
    {id: 2, valor: 300, data: "07-06-2024", categoria: "Transporte"},
    {id: 3, valor: 15, data: "10-06-2024", categoria: "Alimentação"},
];

function categorias(transacoes) {
    const objetoFinal = {};
    transacoes.forEach(transacao => {
        const {categoria, valor} = transacao;

        if(!objetoFinal[categoria]) {
            objetoFinal[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        objetoFinal[categoria].transacoes.push(transacao);
        objetoFinal[categoria].subtotal += valor;
    });
    
    return objetoFinal;
}

const objetoFinal = categorias(transacoes);
console.log(objetoFinal);