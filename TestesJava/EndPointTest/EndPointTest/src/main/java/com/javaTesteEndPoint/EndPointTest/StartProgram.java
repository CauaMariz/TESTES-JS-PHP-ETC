package com.javaTesteEndPoint.EndPointTest;

import com.javaTesteEndPoint.EndPointTest.Usuario.UserService;
import com.javaTesteEndPoint.EndPointTest.Usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartProgram implements CommandLineRunner {

    @Autowired
    UserService userMethods;

    @Override
    public void run(String... args) throws Exception {
        Usuario usuario = new Usuario();

        usuario.setName("CauaMariz");
        usuario.setPass("Seinao");

        userMethods.saveUser(usuario);
    }
}
