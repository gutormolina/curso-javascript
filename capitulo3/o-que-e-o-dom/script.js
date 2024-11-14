// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;

console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector('.ativo'); // selector all acessa todos
console.log(primeiroAtivo);

// Retorne a linguagem do navegador

const browserLanguage = window.navigator.language;
console.log(browserLanguage);

// Retorne a largura da janela

const windowWidth = window.innerWidth;
console.log(windowWidth);
