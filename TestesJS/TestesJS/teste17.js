//Neste teste, criei um elemento que quando clico em um button, ele aparece, e quando clico nele, mostra ola na tela. Na linha 8 criamos o elemento, na 9 damos um ID para ele, na 11 adicionamos um evento click com uma function. Na linha 14 adicionamos este button ao body do html.
//Na linha 3, criei um let que recebe falso. Na linha 7, se botaoAdicionado nao for falso, ou seja, se nao existir um button, ele cria um, senao, nao cria. Na linha 15 botaoAdicionado recebe verdade, pois ja existe.
let botaoAdicionado = false;

function verBotao() {
  let campo=document.getElementById('campo')
  if (!botaoAdicionado) {
    let botao = document.createElement('button');
    botao.id = 'botaoVer';
    botao.textContent = 'Ver texto';
    botao.addEventListener('click', ()=>{
      campo.innerHTML='Ola'
    });
    document.body.appendChild(botao);
    botaoAdicionado = true;
  }
}
function Limpar(){
  let campo=document.getElementById('campo').innerHTML=''
  botaoVer.remove()
  return botaoAdicionado=false
}
