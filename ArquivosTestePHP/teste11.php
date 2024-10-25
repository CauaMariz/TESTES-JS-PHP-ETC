<?php

// (string) converte coisas para string
/*A mesma coisa para:

  (int)- Converte para o tipo de dados Inteiro
  (float)- Converte para o tipo de dados Float
  (bool)- Converte para o tipo de dados Boolean
  (array)- Converte para o tipo de dados Array
  (object)- Converte para o tipo de dados Objeto
  (unset)- Converte para o tipo de dados NULL
  unset nao é mais usado
*/
$Num = 23;
$Num = (string) $Num;
var_dump($Num);
