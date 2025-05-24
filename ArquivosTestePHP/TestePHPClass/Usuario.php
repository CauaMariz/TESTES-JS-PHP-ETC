<?php 

class Usuario{
  private $name;
  private $email;
  private $pass;
  private $pdo;
  private $conection;


  function __construct(){
    $dns = "mysql:host=localhost;dbname = usuarios";
 
    try{
         $this->pdo = new PDO($dns, "root", "");
         echo "Conectado com sucesso!";
    }
    catch(Throwable){
      echo "Erro ao conectar ao banco de dados!";
    }
  }

  function chkUser($email):int{
    $sql = $this->pdo->prepare("SELECT * FROM usuarios WHERE email = :e");
    $sql->bindParam(":e" , $email);
    $sql->execute();

    return $sql->rowCount();
  }

  function insertUser($name,$email,$pass):bool{
    $sql = $this->pdo->prepare("INSERT INTO usuarios SET name = :n, email = :e, senha = :p");
    $sql->bindParam(":n",$name);
    $sql->bindParam(":e",$email);
    $sql->bindParam(":p",$pass);
    $sql->execute();

    return $sql->rowCount() > 0;
  }
}