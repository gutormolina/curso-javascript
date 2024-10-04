// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}

//console.log(var, marca, portas); comentado para poder rodar

// primeiro que var não é o nome da variável,
// e segundo que const e let não vazam do bloco de escopo

// Como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    return x + dois;
}
somarDois(4);
// dividirDois(6); comentado para poder rodar

// é possível definir a const dois fora do escopo,
// ou definir ela uma "segunda" vez, na função dividir dois

// O que fazer para o total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

// na verdade este for é inútil, visto que número já é
// definido como 50 na linha 28, e quando multip. por 10
// e atribuído a total, este tera o valor 500
