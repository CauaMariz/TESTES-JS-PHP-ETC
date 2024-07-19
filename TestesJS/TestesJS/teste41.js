let btnn = false
let Campo = document.querySelector('#campo')

async function ass() {
  if (!btnn) {
    const DadosURL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    const Awa = await fetch(DadosURL)

    if (Awa.status === 200) {

      const Dados = await Awa.json()

      let NewDados = JSON.stringify(Dados)

      Campo.style.wordWrap = 'normal'

      let btn = document.createElement('button')
      btn.textContent = 'Apagar dados'

      Campo.innerHTML = NewDados

      btn.addEventListener('click', () => {
        Campo.innerHTML = ''
        btn.remove()
        null
        btnn = false
      })

      document.body.appendChild(btn)
      btnn = true
      return btnn
    }
  }
}
function Ver() {
  ass()
}