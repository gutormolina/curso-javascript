const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

//img.addEventListener('click', callback);

const imgList = document.querySelector('.animais-lista');

function callbackList(event) {
    console.log(event.currentTarget);   // mostra o elemento inteiro que está escutando o evento
    console.log(event.target);          // mostra o elemento específico que foi clicado
    console.log(event.type);            // mostra o tipo de evento que foi disparado
}

// imgList.addEventListener('click', callbackList);

const externalLink = document.querySelector('a[href^="http"]');

function handleExternalLink(event) {
    event.preventDefault();  // previne o comportamento padrão do link
    console.log(event);
    console.log(this.getAttribute('href'));  // this é o próprio elemento que está escutando o evento
    console.log(event.currentTarget);        // é a mesma coisa que o this
}

externalLink.addEventListener('click', handleExternalLink);

// https://developer.mozilla.org/en-US/docs/Web/Events lista com eventos do browser

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);
// 
// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
    if(event.key == 'a')
        document.body.classList.toggle('azul');
    console.log(event.key);
} 

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
     console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
}) 