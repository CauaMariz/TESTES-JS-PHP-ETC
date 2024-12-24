import javax.swing.JOptionPane;

public class Aluno extends Pessoa {
    public Double nota;

    public Aluno(String nome, Integer idade, String local, Double nota) {
        super(nome, idade, local);
        this.nota = nota;
    }

    public void viewNotaAluno() {
        JOptionPane.showMessageDialog(null, "Nota do Aluno " + nome + ". Nota: " + nota);
    }

    public void pegarNotaAluno() {
        String newNota;
        Double media;

        newNota = JOptionPane.showInputDialog("Insira sua nova nota: ");
        double novaNota = Double.parseDouble(newNota);
        media = (novaNota + nota) / 2.0;

        JOptionPane.showMessageDialog(null, "A media de " + nome + " foi de: " + media);
    }
}
