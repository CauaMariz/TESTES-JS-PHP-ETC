public class JavaApplication4{
    public static void main (String[] args) {
        Pessoa pessoa = new Pessoa("Caua",17,"Brasil");

        pessoa.viewDados();

        Aluno aluno = new Aluno("Caua",17,"Brasil" , 9.0);
        aluno.viewNotaAluno();
        aluno.pegarNotaAluno();
    }
}