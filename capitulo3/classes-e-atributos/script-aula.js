const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className = menu.className + ' vermelho';
menu.className += ' verde';

// os dois fazem a mesma coisa

console.log(menu.className);

// console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes.class);
console.log(animais.attributes['data-texto']);
// o segundo exemplo faz a mesma coisa
// mas para atributos com hífen

const img = document.querySelector('img');

console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'É um flamingo');

console.log(img.getAttribute('alt'));

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

const carro = {
    portas: 4,
    andar: function (km) {
        console.log(`Andou ${km}`);
    },
};
