<?php 

//Ao usar ... antes do parammetro da funcao, dizemos que nao sabemos quantos parametros terá a funcao

function Func (...$x){
  $Num=2;
  $Contagem=count($x);
  for ($Contador=0;$Contador < $Contagem;$Contador++){
    echo "A soma entre $Num + $x[$Contador] = "  . $Num + $x[$Contador] . "<br>";
  }
}
//Como nao sabemos a quantidade de parametros qeu sera passada, entao usamos o loop for
Func(4,5,6,7);

//Aqui, aprendemos que no PHP, podemos especificar o tipo de dado e o tipo de retorno da funcao usando : e o tipo
function RetornoDados(float $a, float $b) : int {
  return (int) ($a + $b);
}


echo  RetornoDados(5.6,6.7);