// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (item, index, array) {
//     // Sempre será primeiro esses três
//     // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
    // console.log(item, index, array);
});

// comentados só pra não poluir o console

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    // não precisa dos parenteses caso for 1 arg apenas
    // mas é padrão sempre usar !!!
    console.log(item);
});

// pode ter a seguinte formatação também :
// imgs.forEach(() => console.log(x));
