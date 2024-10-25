<?php 

$Nome="Joao";

//strlen() é o length do PHP;
echo "O nome $Nome tem " . strlen($Nome) . " letras <br>";

$Frase="Ola mundo";

//Este conta o numero de palavras
echo "A frase $Frase tem " . str_word_count($Frase) . " palavras <br>";

//Este verifica se tem uma string especifica em algo
echo "Tem ola na frase $Frase ?" . strpos($Frase,"Ola") . "<br>Neste caso retorna 0 por que é a posicao que ola foi encontrado. Se nao tiver ola, retorna false <br>";

//Este retorna a string tudo em maiusculo
echo "Retorna tudo em maiusculo: " . strtoupper($Frase);

//Este retorna a string tudo em minusculo
echo " <br> Retorna tudo em minusculo: " . strtolower($Frase);

//Este substitui a string
echo " <br> Substitui a string Ola por Oi: " . str_replace("Ola","Oi",$Frase); //Syntax: substituir Ola por Oi na var $Frase.

//Este inverte a string
echo " <br> Inverte a string: " . strrev($Frase); 

//Este tira espacos da string
echo " <br> Tira espacos da string: " . trim($Frase);

//Este faz a string virar um array
echo " <br> Este converte a string em um array: ";
print_r (explode(" ",$Frase)); 