// window.alert('Alerta');

const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/Cap%C3%ADtulo%203/o-que-e-o-dom/') {
    console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');

// alert('teste'); -> window eh global logo n precisa da chamada

const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);
