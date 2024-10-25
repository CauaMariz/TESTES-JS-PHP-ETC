<?php
//Este metodo substr() é como o concat do js. Assim voce coloca a string a ser cortada, e o numero de caracteres
$Nome = "Joao Pablo";
echo substr($Nome, 5);

//Aqui, eu ja especifiquei que corta da string 0 ate a 4.
echo "<br>" .  substr($Nome, 0, 4);

//Tambem tem como fazer usando uma string diretamente
echo "<br>" . substr("Joao Pablo", 0, 5);

//Para pegar do ultimo caracter, é so usar -1. Ao usar - nos numeros, o corte da string comecará a partir do fim dela

echo "<br>" . substr($Nome,0,-1);