console.log('Sistema de Dados Da Empresa X')
console.log('-'.repeat(20))
console.log('\n')
console.log('Dados do Setor 1')
console.log('-'.repeat(20))


let Dados = [{

    Funcionarios: ['Joao', 'Maria', 'Cleber', 'Roberta', 'Jose'],
    Idades: [34, 53, 22, 23, 67],

}]
console.log(Dados)
console.log(Dados[0].Idades[0])

//Neste codigo abaixo, utilizei [0] pois Dados tem mais de um objeto, e funcionarios esta na posicao 0, ja Idades esta na posicao 1.
function from() {
    Dados[0].Funcionarios.forEach((locc) => {
        console.log(locc, ' From Dados')
    })
}
from()

function Analise() {
    Dados[0].Idades.map((idd, name) => {
        if (idd > 45) {
            console.log('Idoso', idd, Dados[0].Funcionarios[name])
        }
    })
}
Analise()