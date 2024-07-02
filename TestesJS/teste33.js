let Campo=document.querySelector('#campo')
class View{
  constructor (Estado,Lojas,Estoque){
    this.$Estado=Estado
    this.$Lojas=Lojas
    this.$Estoque=Estoque
  }
  ViewEsta(){
    Campo.innerHTML=` Estados: ${this.$Estado} <br> `
  }
  ViewStor(){
    Campo.innerHTML=` Estados: ${this.$Estado} <br> `
  }
  ViewEstoq(){
    Campo.innerHTML=` Estados: ${this.$Estado} <br> `
  }
}

const novo=new View('SP, RJ, RS, PA, MG','Loja A, Loja B, Loja C, Loja D','1200, 2340, 5698, 2300')


function ViewAll(){
  novo.ViewEsta()
  novo.ViewStor()
  novo.ViewEstoq()
}

function ViewEstad(){
  novo.ViewEsta()
}

function ViewStore(){
  novo.ViewStor()
}

function ViewEstoqu(){
  novo.ViewEstoq()
}

  

