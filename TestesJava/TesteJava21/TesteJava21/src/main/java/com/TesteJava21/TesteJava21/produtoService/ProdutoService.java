package com.TesteJava21.TesteJava21.produtoService;

import com.TesteJava21.TesteJava21.produtos.Produto;
import com.TesteJava21.TesteJava21.produtos.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    @PostMapping(value = "/saveProduto")
    public Produto saveProduto(@RequestBody Produto produto){
        return produtoRepository.save(produto);
    }

    @PostMapping(value = "/findProduto")
    public Optional<Produto> findProduto(@RequestBody Long produto){
        return  produtoRepository.findById(produto);
    }
}
