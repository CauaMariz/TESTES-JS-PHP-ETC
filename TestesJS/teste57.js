const mapa = new Map();
mapa.set('ID: 23432', 'Joao');
mapa.set('ID: 45325', 'Julia');
mapa.set('ID: 74564', 'Mateus');


console.log(mapa.get('ID: 23432')); //Neste teste, podemos ver que get so procura a key, ou seja, que esta na primeira , do set

function each() {
    mapa.forEach((Nome, ID) => {
        console.log('Nome: ', Nome, ID);
    });
};

each();

console.log('Retorna a keys, o primeiro valor: \n ', mapa.keys());

console.log('Retorna o objeto, o segundo valor: \n ', mapa.values());


const $Set = new Set(); //Neste teste podemos ver que Set() so armazena um valor, e para armazenar mais de um, é preciso usar array

$Set.add([45, 'Brasil']);
$Set.add([36, 'Italia']);
$Set.add([23, 'Portugal']);

console.log('Set: ', $Set);

console.log('Tamanho do set: ', $Set.size);
