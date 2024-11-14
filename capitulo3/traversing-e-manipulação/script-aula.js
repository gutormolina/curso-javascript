const h1 = document.querySelector('h1');
const animalsList = document.querySelector('.animais-descricao');

console.log(h1.innerHTML);
console.log(h1.outerHTML);

// h1.outerHTML = ' <p>Novo Título</p>';

// console.log(animalsList.innerHTML);

const list = document.querySelector('.animais-lista');

console.log(list.children[list.children.length - 1]);   // os dois fazem
console.log(list.querySelector('li:last-child'));       // a mesma coisa

console.log(list.previousSibling);

const animals = document.querySelector('.animais');
const contact = document.querySelector('.contato');
const title = contact.querySelector('.titulo');
const map = document.querySelector('.mapa');

// animals.appendChild(title); // move o que está entre parenteses para o final

contact.replaceChild(map, title);

// contact.insertBefore(animals, map);

const newh1 = document.createElement('h1');

newh1.innerText = 'Novo Título';
newh1.classList.add('titulo');

map.appendChild(newh1); 

console.log(newh1);

const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);