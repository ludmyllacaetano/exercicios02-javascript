// Exercício 45: string chave, valor vezes em que aparece

const array = ["uva", "maçã", "pêra", "goiaba", "maçã", "maçã", "uva"];

function contarRepeticoes(array){
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        if (obj[string]) {
            obj[string]++;
        } else {
            obj[string] = 1;
        }
    }
    return obj;
}

let objetoFinal = contarRepeticoes(array);
console.log(objetoFinal);
