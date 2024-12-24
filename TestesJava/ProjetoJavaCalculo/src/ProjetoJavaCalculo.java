import java.util.Scanner;

import javax.swing.JOptionPane;

public class ProjetoJavaCalculo {
	public static void main(String[] args) {
		String num1 = JOptionPane.showInputDialog("Digite o primeiro número: ");
		String num2 = JOptionPane.showInputDialog("Digite o segundo número: ");
	
		//Conversao dos numeros
		
		float newNum1 = Float.parseFloat(num1);
		float newNum2 = Float.parseFloat(num2);
		
		//Soma dos números
		
		float soma = newNum1 + newNum2;
		
		
		JOptionPane.showMessageDialog(null, "A soma entre " + newNum1 + " e " + newNum2 + " é: " + newNum1 + " + " + newNum2 + " = " + soma);
	
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("--------------------------------");
		System.out.println("-Bem vindo ao programa de soma!-");
		System.out.println("--------------------------------");
		
		System.out.println("Em 5 segundos abrirá uma janela para você inserir seu nome!");
		System.out.println("1"); System.out.println("2"); System.out.println("3");
		System.out.println("4"); System.out.println("5");
		
		String nomeUser = JOptionPane.showInputDialog("Digite seu nome: ");
		
		JOptionPane.showMessageDialog(null,"Carregando...");
		System.out.println("Muito bem " + nomeUser + " vamos comecar...");
		
		System.out.println("Digite um número: ");
		Float numUser = teclado.nextFloat();
		
		System.out.println("Digite outro número: ");
		Float numUser2 = teclado.nextFloat();
		
		Float somaUser = numUser + numUser2;
		System.out.println(numUser + " + " + numUser2 + " = " + somaUser);
	}
}
