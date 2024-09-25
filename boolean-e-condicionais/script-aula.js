var possuiGraduacao = false;

if(possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
} else {
    console.log('É falso');
}

console.log(x);

var nome = '';

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

var x = '10';

console.log(x == 10); // compara o valor e tenta o typecasting
console.log(x === 10); // compara o valor e o tipo de dado

// o mesmo vale para !== e !=

console.log(x != 10);
console.log(x !== 10);

// switch cases segue igual a linguagem C