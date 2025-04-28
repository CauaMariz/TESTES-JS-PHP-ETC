package org.example;

import javax.swing.*;
import java.util.ArrayList;

public class Funcionario {

    public static boolean showFuncionario(String nome, int idade, int cpf, int id) {
        JOptionPane.showMessageDialog(null, "Nome: " + nome + ". Idade: " + idade + ". CPF: " + cpf + ". ID: " + id);
        return true;
    }

    public void faltasFuncionario() {
        String faltaStr = JOptionPane.showInputDialog("Digite o número de faltas que voce teve: ");
        int faltaInt = Integer.parseInt(faltaStr);

        String diaFalta;
        ArrayList<String> faltasTotais = new ArrayList<>();

        int contador;
        for (contador = 0; contador < faltaInt; contador++) {
            diaFalta = JOptionPane.showInputDialog("Digite o dia que voce faltou na " + (contador + 1) + " falta. Exe: \"SEG, TER...\":");
            faltasTotais.add(contador + 1 + " " + diaFalta);
        }

        int opcUser = JOptionPane.showOptionDialog(null, "Voce possui atestado para algum desses dias? " + faltasTotais, "Confirmacao: ", JOptionPane.YES_NO_OPTION, JOptionPane.QUESTION_MESSAGE, null, null, null);

        if (opcUser == JOptionPane.NO_OPTION) {
            JOptionPane.showMessageDialog(null, "Vezes que voce faltou: " + faltaInt + ". Dias que voce faltou: " + String.join(", ", faltasTotais));
        } else {
            String atestadoFalta = JOptionPane.showInputDialog("Para quais dias voce tem o atestado? \n *Digite o numero do dia e ao lado o dia correspondente. Exemplo: 1 seg:  " + faltasTotais);

            for (int contador1 = 0; contador < faltasTotais.size(); contador1++) {
                while (atestadoFalta.equals()) {

                }
            }
        }
    }
}
