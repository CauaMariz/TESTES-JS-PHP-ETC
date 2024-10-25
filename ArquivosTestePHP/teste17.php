<?php 
//Operadores de incremento. Sao muito utilizados em loops. Sao eles($x--,--$x,$x++ e ++$x)
//Exemplo de uso:

$valor1=10;

echo ++$valor1 . "<br>"; //o ++ antes da variavel, quer dizer que o valor incrementado,(que é 1) é incrementado na mesma hora
echo $valor1 . "<br>";

echo $valor1++ . "<br>";//o ++ depois da var, quer dizer que sera incrementado quando esse valor for chamado novamente
echo $valor1  . "<br>";

//Agora com --, a logica é a mesma, porem ao inves de adicionar 1, é retirado 1.

//Operadores logicos:

$valor2=10;
$valor3=10;
$valor=null;

echo $valor2 && $valor3==10 ? "valores iguais" : "valores diferentes" ;
echo  "<br>";
echo $valor2 and $valor3==10 ? "valores iguais" : "valores diferentes";
echo  "<br>";
echo $valor2 || $valor3==10 ? "valores iguais a 10" : "valores diferentes de 10";
echo  "<br>"; 
echo $valor2 !=10 ? "valores diferente de 10" : "valor igual a 10";
echo  "<br>"; 
echo $valor2 <>10 ? "valores diferente de 10" : "valor igual a 10";
echo  "<br>"; 
echo !$valor ? "valor nao tem nada" : "valor tem algo ";
