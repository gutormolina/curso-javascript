var numero = 20;
var numero2 = 10;

numero %= numero2;
console.log(numero);

// condição ? true : false; (ternário)

var idade = 21;
var naoEstaDirigindo = false;

var podeBeber;
podeBeber = idade >= 18 && naoEstaDirigindo ? true : false;
// n faz sentido retornar o booleano pois a comparacao
// ja retorna um true ou false

console.log(podeBeber);

var possuiFaculdade = true;

if (possuiFaculdade) console.log('Sim possui');
