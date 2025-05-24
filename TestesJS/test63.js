//METODO PUSH -- Add coisas a um array
nomesClientes = ["Pablo","Joao","Maria","Roberta"];

for (contador = 1; contador <= 5; contador++){
  nomesClientes.push("Teste")
}
console.log(nomesClientes)

//METODO POP -- Remove determinadas coisas de um array

nomesClientes = nomesClientes.filter(item => item !== "Teste");

console.log(nomesClientes);

//METODO SHIFT -- Remove o primeiro item

nomesClientes.shift();
console.log(nomesClientes);

//METODO UNSHIFT -- Add um item no inicio

nomesClientes.unshift("Item");
console.log(nomesClientes);

//METODO SPLICE() -- Remove itens de determinadas posicoes

nomesClientes.splice(2,3); //Neste caso removeu de Maria ate Roberta
console.log(nomesClientes);

// METODO SLICE -- Retorna uma parte do array

console.log(nomesClientes.slice(0,1));

//METODO FOREACH
nomesClientes.forEach((x)=>{
  console.log(`Ola ${x}!`)
})


//CLASSE EM JS
class ClasseTeste{
  nomeCliente;
  cpfCliente;
  logradouroCliente;

  constructor(nomeCliente,cpfCliente,logradouroCliente){
    this.nomeCliente = nomeCliente;
    this.cpfCliente = cpfCliente;
    this.logradouroCliente = logradouroCliente;
  }
}
let valores = new ClasseTeste();
valores.nomeCliente = "Joao";
valores.cpfCliente = 43534535;
valores.logradouroCliente = "Brasil-SP";
console.log(`Nome do cliente: ${valores.nomeCliente} \n Logradouro do cliente: ${valores.logradouroCliente} \n CPF do cliente: ${valores.cpfCliente}`)