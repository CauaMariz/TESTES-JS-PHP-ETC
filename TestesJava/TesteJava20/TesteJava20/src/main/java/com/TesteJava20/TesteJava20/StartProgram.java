package com.TesteJava20.TesteJava20;

import com.TesteJava20.TesteJava20.usuario.Usuario;
import com.TesteJava20.TesteJava20.usuario.UsuarioController;
import com.TesteJava20.TesteJava20.usuario.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.swing.*;

@Component
public class StartProgram implements CommandLineRunner {
    @Autowired
    UsuarioService usuarioService;

    @Override
    public void run(String... args) throws Exception {
        Usuario usuario = new Usuario();

        usuario.setName("Caua");
        usuario.setSenha("senha123");
        usuario.setEmail("email@email.com");

        usuarioService.saveUser(usuario);
    }
}
