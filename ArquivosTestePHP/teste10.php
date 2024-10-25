<?php

//Verifica se o numero é inteiro. Se for, retorna 1, senao, retorna nada
$Num = 59.85;
echo is_int($Num);

//Verifica se o num é float/double. Retorna 1 ou nada
$x = 598.5;
echo is_float($x);

//Verifica se a variavel é um numero
$x = 5985;
echo "<br>" . is_numeric($x);

//Converte o numero para inteiro
$x = 5985;
echo "<br>" . (int)$x;