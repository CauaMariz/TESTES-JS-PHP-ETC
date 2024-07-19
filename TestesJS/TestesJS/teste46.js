async function func(){
  let dados=['joao','maria','pedro']
  let awa=await fetch(dados)
  let jss= await awa.json()
  console.log(jss)
}
