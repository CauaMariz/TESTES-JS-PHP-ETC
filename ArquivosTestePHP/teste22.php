<?php
//O while no php é a mesma coisa do JS. O do while é que o codigo do do{} é feito e depois vem a verificacao do while(). Ja o for() é para quando ja sabemos ate onde tem que ir o codigo
$Num = 5;
$Contador = 1;

while ($Contador < 10) {
  echo "Numero: " . $Num + $Contador . "<br>";
  $Contador++;
}
$Contador = 1;

//Neste while eu coloquei que se o num for igual a 11, o while para. Tem tammbem o continue, onde o proposito é o mesmo, porem se a condicao for verdadeira, continua no while
while ($Contador < 10) {
  if ($Num + $Contador == 11) break;
  echo "Numero: " . $Num + $Contador . "<br>";
  $Contador++;
}

