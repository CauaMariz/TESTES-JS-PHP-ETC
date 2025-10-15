package com.TesteJava21.TesteJava21.runProgram;

import com.TesteJava21.TesteJava21.produtoController.ProdutoController;
import com.TesteJava21.TesteJava21.produtoService.ProdutoService;
import com.TesteJava21.TesteJava21.produtos.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RunProgram implements CommandLineRunner {
    @Autowired
    ProdutoService produtoService;

    @Override
    public void run(String... args) throws Exception {
        Produto produto = new Produto();

        produto.setNome("garfo");
        produto.setCategoria("talher");
        produto.setPreco(23.4);

        produtoService.saveProduto(produto);

        if(produtoService.findProduto(produto.getId()).equals(false)){
            System.out.println("Produto nao encontrado");
        }
        else{
            System.out.println("Produto encontrado! O nome dele é: \n <h1>" + produto.getNome() + "</h1>");
        }
    }
}
