var pessoa = {
    nome: 'Augusto',
    idade: 21,
};

console.log(pessoa.idade);

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro(lado) {
        // n precisa do function
        return this.lados * lado;
    },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
console.table(quadrado);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
};

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function () {
    console.log('Escondi');
};

var bg = menu.backgroundColor;
