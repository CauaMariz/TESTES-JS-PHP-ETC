package com.TesteJava20.TesteJava20.security;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeSecurity {

    @GetMapping
    public String welcome(){
        return "Bem vindo!";
    }


    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('MANAGER' , 'USER')")
    public String users(){
        return "Bem vindo usuario";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('MANAGER')")
    public String adm(){
        return "Bem vindo admin";
    }
}
