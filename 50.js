// Exercício 50: Reserva de hotéis

const prompt = require('prompt-sync')();

const hotel = [];
const reservas = [];

class Hoteis{
    constructor(id, nome, cidade, quartosTotais, quartosDisponiveis){
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosDisponiveis;
}
}

class Reserva{
    constructor(idReserva, idHotel, nomeCliente){
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
}
}

function adicionarHoteis(){
    let id = hotel.length + 1;
    let nome = prompt("Insira o nome do hotel: ");
    let cidade = prompt("Insira a cidade onde está o hotel: ");
    let quartosTotais = prompt("Insira o total de quartos existentes no hotel: ");
    let quartosDisponiveis = prompt("Insira o total de quartos disponíveis: ");

    let novoHotel = new Hoteis(id, nome, cidade, quartosTotais, quartosDisponiveis);
    hotel.push(novoHotel);

    console.log("Hotel adicionado");
}

function buscarHoteis(){
    let cidade = prompt("Insira a cidade: ");
    let quantidadeDeHoteis = hotel.filter(hotel => hotel.cidade === cidade);
    if(quantidadeDeHoteis.length === 0) {
        console.log("Não há hoteis na cidade ", cidade);
    } else {
        console.log("Hoteis em " + cidade + ": ");
        quantidadeDeHoteis.forEach(hotel => console.log(hotel));
    }
}

function fazerReserva(){
    let idReserva = reservas.length + 1;
    let idHotel = prompt("Insira o ID do hotel: ");
    const hoteis = hotel.find(hoteis => hoteis.id == idHotel);
    if(!hoteis) {
        console.log("Hotel não encontrado.");
        return;
    }

    if(hoteis.quartosDisponiveis > 0) {
        const nomeCliente = prompt("Insira o nome do Cliente: ");
        const novaReserva = new Reserva(idReserva, idHotel, nomeCliente);
        reservas.push(novaReserva);
        hotel.quartosDisponiveis--;
        console.log("Reserva realizada.");
    } else {
        console.log("Não há quartos disponíveis.");
    }
}

function cancelarReserva(){
    const idReserva = parseInt(prompt("Insira o ID da reserva a ser cancelada: "));
    const reservaCancelada = reservas.find(reserva => reserva.idReserva === idReserva);
    const umHotel = hotel.find(umHotel => umHotel.id === reservaCancelada.idHotel);

    reservas.splice(reservas.indexOf(reservaCancelada), 1);
    umHotel.quartosDisponiveis++;
    console.log("Reserva Cancelada.");
}

function listarReservas(){
    reservas.forEach(reserva => {
        const umHotel = hotel.find(umHotel => umHotel.id === reserva.idHotel);
        console.log("ID da Reserva: ", reserva.idReserva);
        console.log("Nome do Cliente: ", reserva.nomeCliente);
        console.log("Hotel: ", umHotel.nome);
        console.log("Cidade: ", umHotel.cidade);
        console.log("\n");
    })
}

while(entrada != 6) {
    console.log("1- Adicionar Hotéis\n2- Buscar Hotéis por cidade\n3- Fazer Reserva\n4- Cancelar reserva\n5- Listar Reservas\n6- Sair");
    let entrada = parseInt(prompt("Escolha uma função: "));
    switch (entrada) {
        case 1:
            adicionarHoteis();
            break;
        case 2:
            buscarHoteis();
            break;
        case 3:
            fazerReserva();
            break;
        case 4:
            cancelarReserva();
            break;
        case 5:
            listarReservas();
            break;
        case 6:
            break;
        default:
            console.log("Digite uma entrada válida!");
            break;
    }
}