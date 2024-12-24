package mainclassnumaleatorio;

import java.util.Scanner;

public class MainClassNumAleatorio {
		
	public static int geradorNum(int userNumFinal,int userNumInicial) {
		int random = (int) (Math.random() * userNumFinal) + userNumInicial;
		return random;
	}
	
	public static void main(String[] args) {
	Scanner user = new Scanner(System.in);
	
	System.out.println("Bem vindo ao sistema de gerador de números!");
	
	System.out.print("Digite o primeiro número: ");
	int userNumInicial = user.nextInt();
	
	System.out.println("Digite o segundo número: ");
	int userNumFinal = user.nextInt();
	int calculoGerador = geradorNum(userNumFinal,userNumInicial);
	System.out.println("O computador gerou o seguinte número: " + calculoGerador);
	}
	
}
