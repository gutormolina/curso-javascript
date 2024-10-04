// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < brasilCampeao.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
} // poderia ter usado forEach tbm

console.log(''); // separar os anos

brasilCampeao.forEach(function (ano) {
    console.log(`O brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (var i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]}`);

    if (frutas[i] === 'Pera') {
        break;
    }
} // poderia ter usado forEach tbm

// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma do array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
console.log(frutas[frutas.length - 1]);
