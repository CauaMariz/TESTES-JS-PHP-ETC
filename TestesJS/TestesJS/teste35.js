//Usando Extends. o extends é basicamente para herdar uma nova class de uma class de origem, utilizando os mesmos parametros.
{class Models{
  constructor(modelo,ano,tipo){
    this.$Modelo=modelo
    this.$Ano=ano
    this.$Tipo=tipo
}
  ViewAll(){
    console.log(`O modelo:${this.$Modelo}, o ano: ${this.$Ano}, o tipo: ${this.$Tipo}`)
  }

}
  class NewModels extends Models{
    ViewNewAll(){
      console.log(`O novo modelo:${this.$Modelo}, o novo ano: ${this.$Ano}, o novo tipo: ${this.$Tipo}`)
    }	
}

let dados=new Models('HB20',2019,'Hatch')
dados.ViewAll()

let NewDados=new NewModels('Chevette',1990,'seda')
NewDados.ViewNewAll()
}

//Teste versao 2
class Models{
  constructor(modelo,ano,tipo){
    this.$Modelo=modelo
    this.$Ano=ano
    this.$Tipo=tipo
}
  ViewAll(){
    let carr=console.log('Carregando...')
    setTimeout(()=>{
      console.log(`O modelo:${this.$Modelo}, o ano: ${this.$Ano}, o tipo: ${this.$Tipo}`)
    },2000)
  }

}
  class NewModels extends Models{
    ViewNewAll(){
      setTimeout(()=>{
        console.log(`O novo modelo:${this.$Modelo}, o novo ano: ${this.$Ano}, o novo tipo: ${this.$Tipo}`)
      },3000)
    }	
}

let dados=new Models('HB20',2019,'Hatch')
dados.ViewAll()

let NewDados=new NewModels('Chevette',1990,'seda')
NewDados.ViewNewAll()
