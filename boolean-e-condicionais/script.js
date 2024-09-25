// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual', 'É menor'
var minhaIdade = 21;
var idadeIrmao = 29;

if (minhaIdade > idadeIrmao) {
    console.log('É maior');
} else if (minhaIdade == idadeIrmao) {
    console.log('É menor');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// é retornado o valor 3
console.log(expressao);

// Verifique se as seguinter variáveis são Truthy ou Falsy
var nome = 'Augusto';
var idade = 21;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome); // t pq string tem valor
console.log(!!idade); // t pq numero tem valor
console.log(!!possuiDoutorado); // f pq valor é false
console.log(!!empregoFuturo); // f pq é undefined
console.log(!!dinheiroNaConta); // f pq zero é false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
}

// irá aparece false, pois Gato é diferente de gato;

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}

// irá aparecer Cão, pois ele entra no if (encontra um verdadeiro) e
// no console.log ele testa e o ultimo verdadeiro é 'Cão'
