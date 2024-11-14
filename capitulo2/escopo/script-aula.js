'use strict'; // impede que "erros bobos" aconteçam
// ex: definir variáveis sem var

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();
//console.log(carro); // esta fora do escopo
// se criar variável sem var, let ou const ela é global
// mas não é uma boa prática

if (true) {
    var mes = 'Dezembro'; // var vaza
    console.log(mes);
}

console.log(mes);

if (true) {
    let dia = '25';
    console.log(dia);
}

// console.log(dia); // let não deixa (const tbm)

{
    var carro2 = 'Fusca';
    const ano = 1990;
}
console.log(carro2);
// console.log(ano);

for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
} // o i vaza, por isso se usa let no lugar para loops
//

console.log(i * 10);

// const n pode ser modificado, let sim
// ambos n podem ser redeclarados!!

const semana = 'Sexta';
// const semana = 'Quinta'; -> irá dar erro

console.log(semana);

const data = {
    ano: 2024,
    mes: 'Outubro',
};

data.ano = 2019;
data.dia = 3;
