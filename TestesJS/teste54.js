/*
let DadosGerais = [{
    Nomes: ['Joao', 'Maria', 'Leticia', 'Jose'],
    Idades: [34, 56, 23, 62],
    Cargo: ['Repositor', 'Caixista', 'Secretaria', 'Motorista']
}]
*/

let x = false

class Dados {
    constructor(Nomes, Idades, Cargo) {
        this.$Nomes = Nomes
        this.$Idades = Idades
        this.$Cargo = Cargo
    }
    Name() {
        campo.innerHTML += ` <strong>Nomes</strong>: ${this.$Nomes} <br> `
    }
    Age() {
        campo.innerHTML += ` <strong>Idades</strong>: ${this.$Idades} <br> `
    }
    Carg() {
        campo.innerHTML += ` <strong>Cargos:</strong> ${this.$Cargo} <br> `
    }
}

let InnerDados = new Dados
    ('Joao, Maria, Roberta, Jose',
        '23, 35 ,45, 62',
        'Motorista, Repositor (a), Caixista, Secretario'
    )

let campo = document.querySelector('#campo')

function Delet() {
    let btn = document.createElement('button')
    btn.textContent = 'Fechar Dados'
    btn.classList.add('stylebtn')

    btn.addEventListener('click', () => {
        btn.remove()
        campo.innerHTML = ''
        x = false
    })

    document.body.appendChild(btn)
}

function see() {

    if (!x) {
        campo.innerHTML = ''
        InnerDados.Name()
        InnerDados.Age()
        InnerDados.Carg()
        Delet()
        x = true
        return x
    }
}
function Ages() {
    if (!x) {
        campo.innerHTML = ''
        InnerDados.Age()
        Delet()
        x = true
        return x
    }
}
function Cargs() {
    if (!x) {
        campo.innerHTML = ''
        InnerDados.Carg()
        Delet()
        x = true
        return x
    }
}

