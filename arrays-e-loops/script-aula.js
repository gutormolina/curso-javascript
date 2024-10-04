// var ultimoItem = videoGames.pop(); // pop retorna o removido

// videoGames.push('3DS');

// console.log(videoGames.length);

for (var numero = 1; numero <= 10; numero++) {
    console.log(numero);
}

var i = 0;
while (i < 100) {
    console.log(i);
    i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'PS4') {
        break;
    }
}

videoGames.forEach(function (item) {
    console.log(item);
});

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function (fruta, index) {
    frutas.pop();
    console.log(fruta, index, frutas);
});
