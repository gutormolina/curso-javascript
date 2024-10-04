// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var pessoa = {
    nome: 'Augusto',
    sobrenome: 'Molina',
    idade: 21,
    cidade: 'Bagé',
    nacionalidade: 'brasileiro',
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
};

// Crie um método no objeto anterior que mostre o seu nome completo

console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que lata ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Au';
        } else {
            return '...';
        }
    },
};
