//Teste 1
const soma = (a, b) => a + b;
console.log(soma(3, 5)); // Saída: 8
//

//Teste 2
function $obterDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const $dados = { id: 1, nome: 'João' };
            resolve($dados);
        },760);
    });
}

$obterDados().then(result => {
    console.log(result); // Saída após 2 segundos: { id: 1, nome: 'João' }
    function Carre(){
        setTimeout(()=>{
            console.log('.');
        },1000)
        setTimeout(()=>{
            console.log('.');
        },1800)
        setTimeout(()=>{
            console.log('.');
        },2600)
    }
    Carre()
});
//

//Teste 3
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz barulho.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} faz au au.`);
    }
}

const meuCachorro = new Cachorro('Rex');
meuCachorro.falar(); // Saída: "Rex faz au au."
//

//Teste 4
function obterDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { id: 1, nome: 'Maria' };
            resolve(dados);
        }, 4000);
    });
}

async function mostrarDados() {
    try {
        const resultado = await obterDados();
        console.log(resultado); // Saída após 2 segundos: { id: 1, nome: 'Maria' }
    } catch (erro) {
        console.error('Erro ao obter dados:', erro);
    }
}

mostrarDados();
//

//Teste 5
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(num => num * num);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Saída: [2, 4]

const sooma = numeros.reduce((acc, num) => acc + num, 0);
console.log(sooma); // Saída: 15 (soma de todos os elementos)
//


/*
Explicacoes

1. Arrow Functions
-------------------
As arrow functions são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6 (ES6). Elas oferecem uma sintaxe mais compacta e têm um comportamento diferenciado em relação às funções tradicionais, especialmente no que diz respeito ao escopo do this.

javascript
Copiar código
const soma = (a, b) => a + b;
console.log(soma(3, 5)); // Saída: 8
const soma = (a, b) => a + b;: Esta linha define uma arrow function chamada soma que recebe dois parâmetros a e b e retorna a soma desses dois valores. É uma forma abreviada de uma função comum que não precisa de uma declaração explícita de return.

console.log(soma(3, 5));: Aqui, chamamos a função soma com os argumentos 3 e 5. O resultado, 8, é então impresso no console.

2. Promessas (Promises)
------------------------
As promessas são um conceito essencial em JavaScript para lidar com operações assíncronas de maneira mais limpa e organizada.

javascript
Copiar código
function obterDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { id: 1, nome: 'João' };
            resolve(dados);
        }, 2000);
    });
}

obterDados().then(resultado => {
    console.log(resultado); // Saída após 2 segundos: { id: 1, nome: 'João' }
});
function obterDados() { ... }: Aqui, definimos uma função obterDados que retorna uma promessa. Dentro do construtor da promessa, temos um código que simula uma operação assíncrona (através de setTimeout). Após 2 segundos, a promessa é resolvida (resolve(dados)) com um objeto contendo dados simulados ({ id: 1, nome: 'João' }).

obterDados().then(resultado => { ... });: Chamamos a função obterDados e encadeamos o método .then, que recebe o resultado da promessa resolvida (resultado) como parâmetro. Dentro da função de retorno do then, imprimimos o resultado no console.

3. Classes e Herança
---------------------
Classes e herança são recursos introduzidos no ECMAScript 6 (ES6) que permitem uma programação orientada a objetos mais estruturada em JavaScript.

javascript
Copiar código
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz barulho.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} faz au au.`);
    }
}

const meuCachorro = new Cachorro('Rex');
meuCachorro.falar(); // Saída: "Rex faz au au."
class Animal { ... }: Define uma classe Animal com um construtor que recebe um parâmetro nome e inicializa this.nome com esse valor. A classe também tem um método falar que imprime uma mensagem usando o nome do animal.

class Cachorro extends Animal { ... }: Define uma subclasse Cachorro que estende (herda) da classe Animal. Ela sobrescreve o método falar para especificar como um cachorro faz barulho.

const meuCachorro = new Cachorro('Rex');: Cria uma instância da classe Cachorro com o nome 'Rex'.

meuCachorro.falar();: Chama o método falar da instância meuCachorro. Devido à herança e à sobrescrita do método na subclasse Cachorro, a saída será "Rex faz au au.".

4. Programação Assíncrona com async/await
------------------------------------------
O async/await é uma sintaxe introduzida no ECMAScript 2017 (ES8) para lidar com código assíncrono de maneira mais síncrona e legível.

javascript
Copiar código
function obterDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { id: 1, nome: 'Maria' };
            resolve(dados);
        }, 2000);
    });
}

async function mostrarDados() {
    try {
        const resultado = await obterDados();
        console.log(resultado); // Saída após 2 segundos: { id: 1, nome: 'Maria' }
    } catch (erro) {
        console.error('Erro ao obter dados:', erro);
    }
}

mostrarDados();
async function mostrarDados() { ... }: Define uma função assíncrona mostrarDados. Dentro dela, usamos await para esperar que a promessa retornada por obterDados() seja resolvida.

const resultado = await obterDados();: Usando await, esperamos até que a função obterDados() resolva sua promessa. Isso permite que o código assíncrono pareça síncrono e seja mais fácil de ler e manter.

console.log(resultado);: Após a promessa ser resolvida, imprimimos o resultado no console.

mostrarDados();: Chamamos a função mostrarDados(), que inicia o processo de obtenção de dados assíncronos e os exibe após 2 segundos.

5. Manipulação Avançada de Arrays (usando map, filter, reduce)
---------------------------------------------------------------
JavaScript oferece métodos poderosos para manipulação de arrays, como map, filter e reduce, que são comumente usados para transformar, filtrar e reduzir arrays de maneira eficiente.

javascript
Copiar código
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(num => num * num);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Saída: [2, 4]

const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // Saída: 15 (soma de todos os elementos)
.map(num => num * num): O método map é usado para criar um novo array com os resultados da função aplicada a cada elemento do array original. Neste exemplo, num * num calcula o quadrado de cada número em numeros.

.filter(num => num % 2 === 0): O método filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. Aqui, num % 2 === 0 filtra os números pares de numeros.

.reduce((acc, num) => acc + num, 0): O método reduce executa uma função redutora (fornecida por você) para cada elemento do array, resultando em um único valor de retorno. Neste caso, acc + num acumula a soma de todos os elementos de numeros, começando com um acumulador (acc) inicializado em 0.

Esses exemplos ilustram como JavaScript moderno oferece maneiras elegantes e poderosas de manipular dados, lidar com assincronismo e organizar código orientado a objetos. Dominar esses conceitos é fundamental para desenvolver aplicações eficientes e robustas na plataforma web.




*/