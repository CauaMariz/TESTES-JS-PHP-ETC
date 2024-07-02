add=false
function ver(){
    if (!add){

        let remove=document.createElement('button')
        remove.textContent='remover'
        remove.style.backgroundColor='yellow'
        remove.style.transition='background-color 1s ease-in-out'
        remove.style.position='relative'
        remove.style.top='150px'
        remove.style.left='70px'

        let menu=document.createElement('div')
        menu.style.position = 'absolute'
        menu.style.marginTop='-30px'
        menu.style.marginLeft='-8px'
        menu.style.height='100px'
        menu.id='menu'
        menu.style.display='flex'
        menu.style.width='100vw'        
        menu.style.backgroundColor='blue';

        remove.addEventListener('click',()=>{
            menu.style.backgroundColor='transparent'
            remove.style.backgroundColor='transparent'
            setTimeout(()=>{
                menu.remove()
                remove.remove()
            },1000)
            add=false
        })

        document.body.appendChild(remove)
        document.body.appendChild(menu)
        add=true
    } 
    
}
    