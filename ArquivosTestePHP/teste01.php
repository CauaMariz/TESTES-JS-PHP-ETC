<!DOCTYPE html>
<html lang="Pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TestePhp</title>
</head>

<body>

  <h1>Usando PHP</h1>
  <?php

  echo "Ola mundo";
  echo "<br>";
  $Dados = array('Joao', 'Pedro', 'Maria');


  $SegundoArray = array(
    "nome" => "Caua",
    "idade" => 17,
    "pais" => "Brasil",

    "NotasEscola" => array(
      "Geografia" => 7,
      "Historia" => 7,
      "Matematica" => 9,
      "Biologia" => 3
    )
  );

  echo "<pre>";
  print_r($Dados);
  echo "</pre>";

  print_r($SegundoArray["NotasEscola"]);
  print ('<br>');

  print_r("Nota de Geografia: " . "<b>" . $SegundoArray["NotasEscola"]["Geografia"] . "</b>");
  echo "<br>";
  echo "<br>";

  print_r("Nota de Historia: " . "<b>" . $SegundoArray["NotasEscola"]["Historia"] . "</b>");
  echo "<br>";
  echo "<br>";

  print_r("Nota de Matematica: " . "<b>" . $SegundoArray["NotasEscola"]["Matematica"] . "</b>" . "<br>");

  /*

  $Nota = 6;

  */
  function VerNota($Nota)
  {
    if ($Nota > 5) {
      print ("Nota alta: " . $Nota . "<br>" . "<br>");
    } else {
      print ("Nota baixa: " . $Nota . "<br>");
    }
  }

  VerNota($SegundoArray["NotasEscola"]["Geografia"]);
  VerNota($SegundoArray["NotasEscola"]["Historia"]);
  VerNota($SegundoArray["NotasEscola"]["Matematica"]);
  VerNota($SegundoArray["NotasEscola"]["Biologia"]);

  ?>
</body>

</html>