// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq');
const selectDT = faq.querySelector('dt:first-child');
console.log(selectDT);

// Selecione o DD referente ao primeiro DT

const selectDD = selectDT.nextElementSibling;
console.log(selectDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animals = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;