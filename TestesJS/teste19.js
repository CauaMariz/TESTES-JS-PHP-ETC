//neste codigo, aprendemos a usar o fade in. Na linha 8, criamos o elemento, na linha 11, damos o innerText dele. na 12 o adicionamos no body. na 13 damos opacidade 0 para ele nao aparecer ainda, na 14 damos a transition com a opacidade de 1s de dentro para fora(ease-in-out). Na 16, é a parte mais importante. setTimeout é um contador que vai naturalmente com setTimeout({}), onde tem que ir uma function dentro, ou o nome dela. entao o txt recebe o style de opacity 1, onde vai estar visivel. Apos as {} vai ,100 que é 100 milissegundos, (a demora que executa a function do setTimeout). por fim, chamamos a function ver() para retornar o codigo, ou usamos return no setTimeout.
txtt=false

  function ver(){

  if(!txtt){

  let txt=document.createElement('div')
  let campo=document.getElementById('campo')

  txt.innerText='Hello World'
  document.body.appendChild(txt)
  txt.style.opacity='0'
  txt.style.transition='1s ease-in-out'

  setTimeout ( function () {
  txt.style.opacity='1'
  return ver()
  },100)

}
  txtt=true
}
//ver()