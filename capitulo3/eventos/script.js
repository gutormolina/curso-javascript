// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internalLinks = document.querySelectorAll('a[href^="#"]');

function handleInternalLinks(event) {
    event.preventDefault();

    event.currentTarget.classList.add('ativo');
    const target = event.currentTarget;
    internalLinks.forEach((link) => {
        if(link != target && link.classList.contains('ativo')) {
            link.classList.remove('ativo');
        }
    })
}

internalLinks.forEach((link) => {
    link.addEventListener('click', handleInternalLinks);
})

// Selecione todos os elementos do site começando a partir do body
// ao clique mostre exatamente quais elementos estão sendo clicados

const wholePage = document.querySelectorAll('body *');

function handleClick(event) {
//    console.log(event.currentTarget); // comentado para fazer a questão de baixo 
    event.currentTarget.remove();
}

wholePage.forEach((item) => {
    item.addEventListener('click', handleClick);
})

console.log(wholePage); 

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// mudado diretamente no código anterior

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {
    console.log(event.key);
    if(event.key == 't') {
        document.documentElement.classList.toggle('texto-maior');
    }
}

window.addEventListener('keydown', handleKeyboard);