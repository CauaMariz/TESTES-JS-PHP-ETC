
public class Pessoa {
    public String nome;
    public  Integer idade;

    public Pessoa(String nome, Integer idade){
        this.nome = nome;
        this.idade = idade;
    }
    public void mostrarDados(){
        System.out.println("Nome: " + nome + "\n Idade: " + idade);
    }
}
