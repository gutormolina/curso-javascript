const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
console.log(height);
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiro2 = document.querySelector('h2');
const h2left = primeiro2.offsetLeft;
console.log(h2left);

const h2rect = primeiro2.getBoundingClientRect();
console.log(h2rect); // É possível especificar utilizando rect.top, rect.bottom, rect.left, rect.right

if(h2rect.top < 0) { // Se o elemento está acima do viewport (não está visível)
    console.log('Passou do elemento')
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight, // Este considera toda a janela, incluindo a aba, não é usado muito
)

const  small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário desktop');
}