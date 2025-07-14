package com.projetoTesteConexao.Projeto.Teste.Conexao.JPA.Repository;

import com.projetoTesteConexao.Projeto.Teste.Conexao.JPA.User.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartApp implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;


    @Override
    public void run(String... args) throws Exception {
        Users user = new Users();
        user.setName("NomeTeste");
        user.setPass("senhaTeste");
        userRepository.save(user);
    }
}
