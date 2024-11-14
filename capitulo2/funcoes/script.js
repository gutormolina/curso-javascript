// Crie uma função para verificar se um valor é Truthy

function verificarTruthy(valor) {
    if (!!valor == true) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarTruthy(+'0'));
console.log(verificarTruthy(NaN));
console.log(verificarTruthy('Augusto'));

// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}

console.log(perimetroQuadrado(4));
console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome) {
    if (typeof nome !== 'string' || typeof sobrenome !== 'string') {
        return 'Por favor insira valores válidos';
    } else {
        return `${nome} ${sobrenome}`;
    }
}

console.log(nomeCompleto('Augusto', 'Molina'));
console.log(nomeCompleto('Augusto', 21));

// Crie uma função que verifica se um número é par

function verificaPar(numero) {
    if (typeof numero != 'number') {
        return 'Por favor insira um número válido';
    } else if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPar('Augusto'));
console.log(verificaPar(42));
console.log(verificaPar('24'));
console.log(verificaPar(1));
console.log(verificaPar(0));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retornaTipo(arg) {
    return typeof arg;
}

console.log(retornaTipo('string'));
console.log(retornaTipo(23));
console.log(retornaTipo(null));
console.log(retornaTipo(Symbol()));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
    console.log(nomeCompleto('Augusto', 'Molina'));
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} 
        países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de
        ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// Para corrigir foi necessário tirar o total países do escopo da
// primeira função
