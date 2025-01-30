
package testejava;

public class CaracteristicasProdutos {
    public String nome;
    public int preco;
    public String categoria;
    
    public CaracteristicasProdutos(String nome,int preco,String categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    public void showDadosProduto(){
        System.out.println("O nome do produto eh: " + nome + ". Preco: R$ " + preco + ". Categoria: " + categoria);
    }
}
