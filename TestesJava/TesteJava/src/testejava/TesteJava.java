package testejava;
public class TesteJava{
    public static void main(String[] args){
        CaracteristicasProdutos produto = new CaracteristicasProdutos("Carro",14500,"Automovel");
        Carros carro = new Carros("Seda", 2010 ,120000, "Manual" , "2.0 130 CV");
        produto.showDadosProduto();
        carro.showCarro();
        
        produtosLoja produtosloja = new produtosLoja("Copo","Copos LTDA",12092000,12092020,12.54,"10 x 10","Produtos de casa");
        
        produtosloja.showProduto();
    }
}