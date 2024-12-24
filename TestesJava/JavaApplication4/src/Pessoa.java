import javax.swing.JOptionPane;

public class Pessoa {
    public String nome;
    public Integer idade;
    public String local;

    public Pessoa(String nome, Integer idade, String local){
        this.nome = nome;
        this.idade = idade;
        this.local = local;
    }

    public void viewDados() {
        JOptionPane.showMessageDialog(null,"Nome: " + nome + ". Idade: " + idade + ". Local: " + local);
    }
}
