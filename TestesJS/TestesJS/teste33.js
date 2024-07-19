let Campo=document.querySelector('#campo')
class View{
  constructor (Estado,Lojas,Estoque){
    this.$Estado=Estado
    this.$Lojas=Lojas
    this.$Estoque=Estoque
  }
  ViewEsta(){
    Campo.innerHTML+=` Estados: ${this.$Estado} <br> `
  }
  ViewStor(){
    Campo.innerHTML+=` Lojas: ${this.$Lojas} <br> `
  }
  ViewEstoq(){
    Campo.innerHTML+=` Estoque: ${this.$Estoque} <br> `
  }
}

const novo=new View(
  'SP, RJ, RS, PA, MG',
  'Loja A, Loja B, Loja C, Loja D',
  '1200, 2340, 5698, 2300'
)


function ViewAll(){
  Campo.innerHTML=''
  novo.ViewEsta()
  novo.ViewStor()
  novo.ViewEstoq()
}

function ViewEstad(){
  Campo.innerHTML=''
  novo.ViewEsta()
}

function ViewStore(){
  Campo.innerHTML=''
  novo.ViewStor()
}

function ViewEstoqu(){
  Campo.innerHTML=''
  novo.ViewEstoq()
}

  

