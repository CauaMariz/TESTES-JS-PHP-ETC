{
let cores={tipo:'primarias',tons:'escuras',quantidade:'15'}
//cores.tipo='secundarias'
  console.log('-'.repeat(35))
  console.log(cores.tipo)
}
  console.log('-'.repeat(35))
{
let cores = { tipo: 'primarias', tons: 'escuras', quantidade: 15 };

function vercor(){
  if (cores.quantidade >= 15) {
    return 'tinta suficiente';
  } else {
    return 'pouca tinta';
  }
}
  console.log(vercor())
}

let cores = { tipo: 'primarias', tons: 'escuras', quantidade: 15 };
function vertom(){
  if (cores.tons=='escuras') {
    return 'tom certo';
  } else {
    return 'tom errado';
  }
}
  console.log(vertom())
  console.log('-'.repeat(35))