
import javax.swing.JOptionPane;

public class Aluno extends Pessoa {
    public Double nota1;
    public Double nota2;
    public Integer presenca;

    public Aluno(String nome, Integer idade, Double nota1, Double nota2, Integer presenca) {
        super(nome, idade);
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public void mediaNotaAluno() {
        double media = (this.nota1 + this.nota2) / 2;
        JOptionPane.showMessageDialog(null, "Media da nota: " + media);
        String input = JOptionPane.showInputDialog(nome,"Digite algo: ");

        JOptionPane.showMessageDialog(null,"O usuário digitou: " + input);
     }
}
