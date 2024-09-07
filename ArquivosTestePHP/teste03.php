<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste</title>
</head>

<body>
  <?php

  $Dados = [
    "Nomes" => [
      "Maria",
      "Joao",
      "Pedro"
    ],
    "Idades" => [
      "Maria" => 19,
      "Joao" => 23,
      "Pedro" => 28
    ]
  ];

  //Usando o foreach()

  foreach ($Dados["Nomes"] as $Name) {
    echo "Nome: " . $Name . "<br>";
  } //Com este foreach pedi que apenas exibisse Nome: com todo item de $Dados["Nomes"] e $Name é o nosso index do dados Nomes

  foreach($Dados["Idades"] as $Nome => $Value){
    echo "Nome: " . $Nome . "- Idade: " . $Value . "<br>";
  } //Ja com este foraech eu pedi que com toda idade de $Dados["Idades"] Colocasse "Nome: " . valorDoItemAtual e "Idade: " . valorDoItemQuePertenceAChave
  echo "<pre>";
  echo json_encode($Dados, JSON_PRETTY_PRINT);

  echo "</pre>";


  ?>
</body>

</html>