
package testejava;

public class Carros{

    public String tipoCarro;
    public int ano;
    public int kmRodados;
    public String tipoTransmissao;
    public String motorizacao;
    
    public Carros(String tipoCarro, int ano, int kmRodados, String tipoTransmissao, String motorizacao){
        this.tipoCarro = tipoCarro;
        this.ano = ano;
        this.kmRodados = kmRodados;
        this.tipoTransmissao = tipoTransmissao;
        this.motorizacao = motorizacao;
    }
    
    public void showCarro(){
        System.out.println("Tipo do carro: " + tipoCarro + ". Ano: " + ano + ". KM Rodados: " + kmRodados + ". Tipo de transmissao: " + tipoTransmissao + ". Motorizacao: " + motorizacao);
    }
}
