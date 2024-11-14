// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImage = document.querySelector('img');
console.log(firstImage);

const firstImageTopOffset = firstImage.offsetTop;
console.log(firstImageTopOffset);

// Retorna a soma da largura de todas as imagens
function imgSum() {
    const imgs = document.querySelectorAll('img');
    let sum = 0;
    imgs.forEach ((img) => {
        sum += img.offsetWidth;
    });
    return sum;
}

window.onload = function() {    // onload só ocorre depois
    console.log(imgSum());      // que tudo é carregado
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

function verifyLinkSize() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;
        if(linkWidth >= 48 && linkHeight >= 48) {  
            console.log(link, 'Possui boa acessibilidade');
        } else {
            console.log(link, 'Não possui boa acessibilidade');
        }
    });
}

console.log(verifyLinkSize());

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const smallBrowser = window.matchMedia('(max-width:720px)').matches;

if(smallBrowser) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}