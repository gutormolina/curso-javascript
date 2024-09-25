var total1 = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3872983892 % 3;

// subtração e divisão faz "typecasting" de string para numero

console.log(modulo);

var testeNaN = 'Isso é 100' / 2;
console.log(testeNaN);
console.log(isNaN(testeNaN));

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1);

var x = 5;
console.log(x--);
console.log(x);

var y = 10;
console.log(--y);
console.log(y);

var idade = '21'; // poderia ter o + na frente da string tbm
var somaIdade = 5;

console.log(idade);
console.log(+idade + somaIdade); // o + na frente da var string faz o typecast

