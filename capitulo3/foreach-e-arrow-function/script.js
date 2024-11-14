// Mostre no console cada parágrafo do site
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragraphs.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
    console.log(item, index);
});

// Este erro se resolve colocando os parênteses,
// pois são passados dois argumentos

let i = 0;
imgs.forEach( => {
    console.log(i++);
});

// Este erro se resolve também colocando os parênteses,
// pois não é passado nenhum argumento, e só pode se omitir
// os parênteses se unicamente um argumento for passado

imgs.forEach(() => i++);

// Não tem erro