// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgsImagem);

// Selecione todos os links internos (onde o href começa con #)
const internalLinks = document.querySelectorAll('[href^="#"');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const animDescFirsH2 = document.querySelector('.animais-descricao h2');
console.log(animDescFirsH2);

// Selecione o último p do site
const pNodeList = document.querySelectorAll('p');
const lastP = pNodeList[pNodeList.length - 1];
console.log(lastP);
