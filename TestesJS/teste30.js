DivFalse=false

function clicar(){

  let div=document.createElement('div')
  let Rase=document.createElement('button')

  div.style.opacity='0'
  div.style.transition='1s ease-in-out'
  div.style.backgroundColor='black'
  div.style.height='100px'
  div.style.width='100px'
  div.style.borderRadius='50%'

  Rase.textContent='Apagar'

  if (!DivFalse){
  setTimeout(function (){
    div.style.opacity='1'

    document.body.appendChild(div)
    document.body.appendChild(Rase)

  },200)}
  
  Rase.addEventListener('click',()=>{
    div.style.transition='1s ease-in-out'
    div.remove()
    Rase.remove()
    null
    return DivFalse=false
  })

  DivFalse=true
}