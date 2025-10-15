package com.TesteJava21.TesteJava21.produtoController;

import com.TesteJava21.TesteJava21.produtoService.ProdutoService;
import com.TesteJava21.TesteJava21.produtos.Produto;
import com.TesteJava21.TesteJava21.produtos.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {
    @Autowired
    ProdutoService produtoService;

    @PostMapping(value = "/saveProduto")
    public Produto saveProduto(@RequestBody Produto produto){
        return produtoService.saveProduto(produto);
    }

    @PostMapping(value = "/findProduto")
    public Optional<Produto> findProduto(@RequestBody Long produto){
        return  produtoService.findProduto(produto);
    }
}
