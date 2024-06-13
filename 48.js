// Exercício 48: Combinar objetos

const inventarioLojaA = {
    canetas: 150,
    papel: 196,
    borrachas: 200,
    lapis: 300,
}

const inventarioLojaB = {
    canetas: 70,
    papel: 19,
    borrachas: 200,
    cadernos: 200,
}

function combinarObjetos(inventarioLojaA, inventarioLojaB){
    const inventarioFinal = {};
    for(const item in inventarioLojaA) {
        inventarioFinal[item] = inventarioLojaA[item];
    }

    for(const item in inventarioLojaB) {
        if(inventarioFinal[item]) {
            inventarioFinal[item] += inventarioLojaB[item];
        } else {
            inventarioFinal[item] = inventarioLojaB[item];
        }
    }
    return inventarioFinal;
}

let inventarioFinal = combinarObjetos(inventarioLojaA, inventarioLojaB);

console.log("Inventario Loja A:", inventarioLojaA);
console.log("Inventario Loja B:", inventarioLojaB);
console.log("Inventario Completo:", inventarioFinal);