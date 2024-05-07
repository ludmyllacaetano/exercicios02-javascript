// Exercício 12: Fibonacci

function fibonacci(n) {
    let sequencia = [1, 1];
    for(let i = sequencia.length; i < n; i++) {
        sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
    }
    return sequencia;
}

console.log(fibonacci(10));