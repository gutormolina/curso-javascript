function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
    this.andar = function() {
        console.log('Andou');
    }
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;


const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 2000;

function Pintura(titulo, artista, valor) {
    this.titulo = titulo;
    this.artista = artista;
    this.valor = valor;
}

const quadro1 = new Pintura('Mona Lisa', 'Da Vinci', 1000000000)

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);