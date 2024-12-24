
public class Pessoa {

    public String nome;
    public Integer idade;
    public String sexo;
    public Integer cpf;

    public Pessoa(String nome, Integer idade, String sexo, Integer cpf){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf= cpf

        System.out.println("Nome do usuário: " + nome + "\n Idade do usuário: " + idade + "\n Sexo do usuário: " + sexo + "\n CPF do usuário: " + cpf);
    }
}
