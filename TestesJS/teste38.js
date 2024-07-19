
let Campo = document.querySelector('#campo')

class View {
  constructor(Estado, Lojas, Estoque) {
    this.$Estado = Estado
    this.$Lojas = Lojas
    this.$Estoque = Estoque
  }
  ViewEsta() {
    Campo.innerHTML += ` Estados: ${this.$Estado} <br> `
  }
  ViewStor() {
    Campo.innerHTML += ` Lojas: ${this.$Lojas} <br> `
  }
  ViewEstoq() {
    Campo.innerHTML += ` Estoque: ${this.$Estoque} <br> `
  }
}


function ViewAll() {
  let Esta = document.querySelector('#Estado').value
  let Estoq = document.querySelector('#Estoque').value
  let Lojas = document.querySelector('#Lojas').value

  Campo.innerHTML = ''

  const novo = new View(Esta, Lojas, Estoq)
  novo.ViewEsta()
  novo.ViewEstoq()
  novo.ViewStor()
}

function ViewEstad() {
  let Esta = document.querySelector('#Estado').value
  Campo.innerHTML = ''
  const novo = new View(Esta, '', '');
  novo.ViewEsta()
}

function ViewStore() {
  let Lojas = document.querySelector('#Lojas').value
  Campo.innerHTML = ''
  const novo = new View('', Lojas, '');
  novo.ViewStor()
}

function ViewEstoqu() {
  let Estoq = document.querySelector('#Estoque').value
  Campo.innerHTML = ''
  const novo = new View('', '', Estoq);
  novo.ViewEstoq()
}
function Limp() {
  let Esta = document.querySelector('#Estado').value = ''
  let Estoq = document.querySelector('#Estoque').value = ''
  let Lojas = document.querySelector('#Lojas').value = ''

  Campo.innerHTML = ''
}

