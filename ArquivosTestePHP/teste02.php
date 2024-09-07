<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste02.php</title>
</head>

<body>
  <?php

  $Dados = array(
    "Nomes" => array(
      "Maria",
      "Joao",
      "Roberta"
    ),
    "Idades" => [
      "Maria" => 17,
      "Joao" => 23,
      "Roberta" => 26
    ]
  );

  function VerIdade($Age)
  {
    if ($Age < 18) {
      echo "<br>Menor de idade:  . $Age . <br>";
      echo "--------------------------<br>";
    } else {
      echo "Maior de Idade:  . $Age . <br>";
      echo "--------------------------<br>";
    }
  }

  VerIdade($Dados["Idades"]["Maria"]);
  VerIdade($Dados["Idades"]["Joao"]);
  VerIdade($Dados["Idades"]["Roberta"]);

  //Exibindo o array de uma forma nao tao agradavel
  echo "<pre>";
  echo "<b>Dados: </b> <br>";
  print_r($Dados);
  echo "</pre>";
  echo "--------------------------<br>";

  //Mostrando o array, o tipo e valor dos itens usando var_dump();
  echo "<pre>";
  var_dump($Dados);
  echo "</pre>";
  echo "--------------------------<br>";

  //Mostrando o array em forma de string
  
  echo "<pre>";

  echo json_encode($Dados, JSON_PRETTY_PRINT); //A opcao JSON_PRETTY_PRINT em PHP é usada com a função json_encode() para gerar uma representação JSON de uma estrutura de dados que é mais legível
  
  echo "</pre>";
  echo "--------------------------<br>";

  ?>
</body>

</html>