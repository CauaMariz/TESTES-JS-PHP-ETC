<?php
//O switch() do php é a mesma coisa do JS
$Dia = 7;

switch ($Dia) {
  case 7:
    echo "Ultimo dia";
    break;
  case 5:
    echo "Quinta feira";
    break;
  default:
    echo "Dia invalido";
}

//Neste outro exemplo, dei uma condicao que se o salario estiver entre 1000 e 2000 aparece todas as mesmas mensagens
$Salario = 1200;

switch ($Salario) {
  case 1000:
  case 1100:
  case 1200:
  case 1300:
  case 1400:
  case 1500:
  case 1600:
  case 1700:
  case 1800:
  case 1900:
  case 2000:
    echo "<br> Salario entre R$1000 e R$2000";
    break;
  default:
    echo "Salario abaixo de R$1000";
}
