function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(pi());

function imc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.8));
console.log(imc(60, 1.7));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if(cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

// funções anônimas sao descritas como function() {} ou () => {}
// utilizada para simplificar a chamada de funções

addEventListener('click', function(){ console.log('Oi') }); // funcao anonima

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(200, 1.8); // undefined pq n tem valor de return

console.log(imc2(200, 1.8));

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade('60'));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(2));

var profissao = 'Estudante';

function dados() {
    var nome = 'Augusto';
    var idade = 21;
    function outrosDados() {
        var endereco = 'Pelotas';
        var idade = 22;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

    return outrosDados();
}

console.log(dados());