
package com.mycompany.projetojava1;

public class Aluno extends DadosPessoa {
    public Aluno(String nome, Integer idade, String sexo){
        super(nome,idade,sexo);
    }
    public void showAllAluno(){
        System.out.println("Nome: " + nome + "\n Idade: " + idade + "\n Sexo: " + sexo);
    }
}
