<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  DIGITE SEU NOME E IDADE
  <form action="cadastrar.php" method="post">
    <input type="text" placeholder="Nome: " name="nomeUser" required>
    <input type="number" placeholder="Idade: " name="idadeUser" required>
    <button type="submit" name="enviar">Enviar</button>
  </form>
</body>
</html>