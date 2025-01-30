
package testejava;


public class produtosLoja{
    public String nome_produto;
    public String nome_fornecedor;
    public int data_fabricacao;
    public int data_vencimento;
    public double preco;
    public String dimencao_produto;
    public String categoria;
    
    public produtosLoja(String nome_produto, String nome_fornecedor, int data_fabricao, int data_vencimento, double preco, String dimencao_produto, String categoria){
        this.nome_produto = nome_produto;
        this.nome_fornecedor = nome_fornecedor;
        this.data_fabricacao = data_fabricao;
        this.data_vencimento = data_vencimento;
        this.preco = preco;
        this.dimencao_produto = dimencao_produto;
        this.categoria = categoria;
    }
    
    public void showProduto(){
        System.out.println("Nome do produto: " + nome_produto + ". Nome do fornecedor: " + nome_fornecedor + ". Data de fabricacao: " + data_fabricacao + ". Data de vencimento: " + data_vencimento + ". Preco: " + preco + ". Dimencao do produto: " + dimencao_produto + ". Categoria: " + categoria);
    }
}
