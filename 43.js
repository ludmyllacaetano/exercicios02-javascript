// Exercício 43: Combinar objetos

const obj1 = {
    nome: "Pablo",
    idade: 45,
    negocio: "narcotráfico",
}

const obj2 = {
    sobrenome: "Escobar",
    nacionalidade: "Colombiano",
}

function combinarObjetos(obj1, obj2) {
    let objCombinado = {};

    for(let atributo in obj1) {
        objCombinado[atributo] = obj1[atributo];
    }

    for(let atributo in obj2) {
        objCombinado[atributo] = obj2[atributo];
    }

    return objCombinado
}

let objCombinado = combinarObjetos(obj1, obj2);

console.log("Objeto 1:", obj1);
console.log("Objeto 2:", obj2);
console.log("Objeto Combinado:", objCombinado);