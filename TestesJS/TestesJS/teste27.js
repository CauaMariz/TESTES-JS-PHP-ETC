//neste teste, usamos inputs para colocar dados e no fim mostrar na tela. Na linha 7, comecamos uma class que na linha 8 damos o constructor, usado para a construcao da class. nos () colocamos os parametros (o que vamos usar no codigo) depois usamos os parametros dos () nas chaves, citando um novo valor de constructor com this. Depois damos functions ja escrevendo na tela usando cada valor do constructor. depois de fechar a class, damos valores aos valores do constructor usando new Matriculas(). no fim do codigo apenas chamamos as functions com dados.ViewFunction()
function enviar(){
  const freque=document.querySelector('#freq').value
  const aluno=document.querySelector('#alun').value
  const discip=document.querySelector('#disci').value
  
  class Matriculas{
    constructor(freq, alun, disci,){
      this.Frequencia=freq
      this.Aluno=alun
      this.Disciplina=disci
    }
    ViewFreq(){
      document.write(`A frequencia é de '<strong>'${this.Frequencia}'</strong>'`+'<br>')
    }
    ViewAlun(){
      document.write(`O aluno é '<strong>'${this.Aluno}'</strong>'`+'<br>')
    }
    ViewDisci(){
      document.write(`A disciplina é '<strong>'${this.Disciplina}'</strong>'`+'<br>')
    }
  }
  const dados=new Matriculas(freque,aluno,discip)

  dados.ViewFreq()
  dados.ViewAlun()
  dados.ViewDisci()

}