{
  let Names = ['joao', 'pedro', 'maria', 'roberta', 'mario']
  let mapp = Names.map((nome) => {
    return nome += ' nome'
  })
  console.log(mapp)
}
//Usando APIs. API é basicamente dados de terceiros que voce pode pegar por URL, para fazer testes, etc. Para usa-los, é preciso colocar o URL, usar async e await e usar o fetch()
//1- declarar function com async
//2- usar URL para pegar o API
//3- usar await ANTES de fetch para pegar o resultado da API
//5- Usar if status da var de fetch for === 200
//6- Usar await para esperar o nome da var fetch com .json()
//7- chamar a function
 async function func(){
 const URL='https://jsonplaceholder.typicode.com/users'
 let fet=await fetch(URL)

  try{
    if (fet.status===200){
     let json=await fet.json()
     console.log(json)
    }
  } 
  catch(erro){
    console.log(` ${erro} `)
  }
 }
 func()