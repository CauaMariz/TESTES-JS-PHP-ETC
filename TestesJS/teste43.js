let FrsSq, ScnSq, TrhSq, ForSq, FivSq, winner, square, Tent = false

function Rmv() {
  if (FrsSq) FrsSq.remove()
  if (ScnSq) ScnSq.remove()
  if (TrhSq) TrhSq.remove()
  if (ForSq) ForSq.remove()
  if (FivSq) FivSq.remove()
  if (Tent) Tent.remove()
}

function Ini() {
  Tent = document.createElement('div')
  Tent.textContent = 'Tente deixar todos os Squares sincronizados!'
  Tent.style.width = '200px'
  Tent.style.height = '50px'
  Tent.style.backgroundColor = 'rgb(55, 158, 255)'
  Tent.style.color = 'White'
  Tent.style.fontFamily = 'Arial'
  Tent.style.textAlign = 'center'
  Tent.style.justifyContent = 'center'
  Tent.style.position = 'absolute'
  Tent.style.display = 'flex'
  Tent.style.paddingTop = '12px'
  Tent.style.borderRadius = '15px'
  document.body.appendChild(Tent)
}

function Func1() {
  if (!FrsSq) {
    FrsSq = document.createElement('div')
    Ini()

    FrsSq.id = 'FrsSq'
    FrsSq.style.height = '100px'
    FrsSq.style.width = '100px'
    FrsSq.style.backgroundColor = 'rgb(161, 45, 255)'
    FrsSq.style.display = 'flex';
    FrsSq.style.justifyContent = 'center';
    FrsSq.style.alignItems = 'center';
    FrsSq.style.position = 'absolute';
    FrsSq.style.top = '50%'
    FrsSq.style.left = '42%'
    FrsSq.style.transform = 'translate(-50%,-50%)'
    document.body.appendChild(FrsSq)
  }
  FrsSq.addEventListener('click', () => {
    if (!ScnSq) {
      ScnSq = document.createElement('div')
      ScnSq.id = 'ScnSq'
      ScnSq.style.height = '100px'
      ScnSq.style.width = '100px'
      ScnSq.style.backgroundColor = 'rgb(161, 45, 255)'
      ScnSq.style.display = 'flex';
      ScnSq.style.justifyContent = 'center';
      ScnSq.style.alignItems = 'center';
      ScnSq.style.position = 'absolute';
      ScnSq.style.top = '50%'
      ScnSq.style.left = '34%'
      ScnSq.style.transform = 'translate(-50%,-50%)'
      document.body.appendChild(ScnSq)
    }

    ScnSq.addEventListener('click', () => {

      if (!TrhSq) {
        TrhSq = document.createElement('div')
        TrhSq.id = 'TrhSq'
        TrhSq.style.height = '100px'
        TrhSq.style.width = '100px'
        TrhSq.style.backgroundColor = 'rgb(161, 45, 255)'
        TrhSq.style.display = 'flex';
        TrhSq.style.justifyContent = 'center';
        TrhSq.style.alignItems = 'center';
        TrhSq.style.position = 'absolute';
        TrhSq.style.top = '35%'
        TrhSq.style.left = '50%'
        TrhSq.style.transform = 'translate(-50%,-50%)'
        document.body.appendChild(TrhSq)
      }

      TrhSq.addEventListener('click', () => {

        if (!ForSq) {
          ForSq = document.createElement('div')
          ForSq.id = 'ForSq'
          ForSq.style.height = '100px'
          ForSq.style.width = '100px'
          ForSq.style.backgroundColor = 'rgb(161, 45, 255)'
          ForSq.style.display = 'flex';
          ForSq.style.justifyContent = 'center';
          ForSq.style.alignItems = 'center';
          ForSq.style.position = 'absolute';
          ForSq.style.top = '35%'
          ForSq.style.left = '42%'
          ForSq.style.transform = 'translate(-50%,-50%)'
          document.body.appendChild(ForSq)
        }

        ForSq.addEventListener('click', () => {
          if (!FivSq) {

            FivSq = document.createElement('div')
            FivSq.id = 'FivSq'
            FivSq.style.height = '100px'
            FivSq.style.width = '100px'
            FivSq.style.backgroundColor = 'rgb(161, 45, 255)'
            FivSq.style.display = 'flex';
            FivSq.style.justifyContent = 'center';
            FivSq.style.alignItems = 'center';
            FivSq.style.position = 'absolute';
            FivSq.style.top = '35%'
            FivSq.style.left = '34%'
            FivSq.style.transform = 'translate(-50%,-50%)'
            document.body.appendChild(FivSq)

          }

          FivSq.addEventListener('click', () => {

            Rmv()

            let square = document.createElement('div')
            square.id = 'clickAq'
            square.style.height = '100px'
            square.style.width = '100px'
            square.style.backgroundColor = 'rgb(41, 116, 255)'
            square.style.borderRadius = '50%'
            square.style.fontFamily = 'Arial'
            square.textContent = 'Clique aqui'
            square.style.color = 'white'
            square.style.textAlign = 'center'
            square.style.lineHeight = '100px'

            document.body.appendChild(square)

            square.addEventListener('click', () => {

              winner = document.createElement('p')
              winner.textContent = 'Winner!'
              winner.style.fontSize = 'x-large'

              winner.addEventListener('mouseout', () => {
                winner.style.left = '-10%'
              })
              winner.addEventListener('mousemove', () => {
                winner.style.left = '50%'
              })

              document.body.appendChild(winner)
              Rmv()
              let square1 = document.querySelector('#square')
              square.remove()
              square1.remove()

              let Dnv = document.createElement('Button')
              Dnv.textContent = 'Recomecar Jogo'
              Dnv.id = 'Dnv'
              Dnv.style.border = 'none'
              Dnv.style.borderRadius = '13px'
              Dnv.style.backgroundColor = 'rgb(41, 116, 255)'
              Dnv.style.color = 'white'
              Dnv.style.padding = '10px'
              Dnv.style.fontSize = '20px'
              Dnv.style.cursor = 'pointer'

              Dnv.addEventListener('click', () => {
                winner.style.left = '-10%'
                Dnv.style.position = 'absolute'
                Dnv.style.left = '-20%'

                setTimeout(() => {
                  location.reload()
                }, 800)
              })
              document.body.appendChild(Dnv)

            })
          })
        })
      })
    })
  })
  FrsSq, ScnSq, TrhSq, ForSq, FivSq, winner, square = true
  return FrsSq, ScnSq, TrhSq, ForSq, FivSq, winner, square = false
}
