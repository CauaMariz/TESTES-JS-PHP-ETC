package com.TestSpringSecurity.TestSpringSecurity;

import com.TestSpringSecurity.TestSpringSecurity.usuario.UserService;
import com.TestSpringSecurity.TestSpringSecurity.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartProgram implements CommandLineRunner {
    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {
        Usuario usuario = new Usuario();
        usuario.setName("cauaa");
        usuario.setPass("asdas");

        userService.saveUser(usuario);
    }
}
