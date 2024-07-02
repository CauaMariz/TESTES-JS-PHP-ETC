  //Metodos JS
const alunos=[
  {sala:'salaA',
  nomes:'pedro',
  notas:8},

  {sala:'salaB',
  nomes:'leo',
  notas:9}
]


  //find - quando encontrar o primeiro valor pedido ele retorna. se nao encontrar retorna undefined.

    let FindNome=alunos.find((nome)=>{
      return nome.nomes=='pedro'
    })
    console.log('Method Find: ',FindNome)

  //.filter - retorna todos os valores que encontrar no valor pedido.

  let FilterNota=alunos.filter((nota)=>{
    return nota.notas>=9
  })
    console.log('Method Filter: ',FilterNota)
  
  //.findIndex - Procura onde o valor especificado esta. No caso retorna 1 pois antes vem o 'pedro', que ta no posic. 0.
  let FindIndexNome=alunos.findIndex((nome)=>{
    return nome.nomes=='leo'
  })
  console.log('Method findIndex: ',FindIndexNome)

  //.map - O method Map percorre toda a lista. Sendo assim, voce pode fazer algo com ele. No exemplo abaixo ele retorna apenas booleam.
  let MapNota=alunos.map((nota)=>{
    return nota.notas>=8
  }) 
  console.log('Method Map: ',MapNota)

  //.reverse - O method Reverse reverte a ordem do array. 
  let ReverseArray=alunos.reverse()
  console.log('Method Reverse: ',ReverseArray)

  //.some - O method some() é booleam. Retorna true or false se encontrar pelo menos algum valor do que foi pedido
  let SomeSala=alunos.some((sala)=>{
    return sala.sala==='salaA' 
  })
  console.log(SomeSala)

  //.every - O Method every() verifica se todos os objects do array tem o  velor especificado. No caso retorna false, pois todos os nomes nao tem 'joao'
  let EveryeNome=alunos.every((nome)=>{
    return nome.nomes==='joao' 
  })
  console.log(EveryeNome)

