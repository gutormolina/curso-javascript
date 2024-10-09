// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (let index = 1; index < itensMenu.length; index++) {
    const element = itensMenu[index];
    element.classList.remove('ativo');
}

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    console.log(item.hasAttribute('alt'));
    // poderia colocar em uma variável para
    // ficar mais organizado
    // exemplo:
    // const possuiAlt = item.hasAttribute('alt');
});

// Modifique o href do link externo no menu
const linkMenu = document.querySelector('.menu [href^="https://"]');

linkMenu.setAttribute('href', 'https://youtube.com');
