//Usando for() da maneira convencional e mais poluida.
let Nomes = ['a', 'b', 'c']

for (i = 0; i < Nomes.length; i++) {
    console.log('Letra' + i)
}
//

//Nesta versao, for of() é mais moderno e legivel que apenas for() usado acima, portanto, tente sempre usar ele
let nomes = ['caua', 'pedro', 'bernardo']

for (let see of nomes) {
    nomes += see
    console.log('Nome ' + see)
}
    console.log('\n')
//

//Fazendo o mesmo que o for of() porem com forEach que é usado em arrays.

{
    let nomes = ['caua', 'pedro', 'bernardo']
    nomes.forEach((nome) => {
        console.log('Nome', nome)
    })

}