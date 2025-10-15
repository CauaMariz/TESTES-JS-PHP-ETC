package com.TesteJava21.TesteJava21.security;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Wellcome {
    @GetMapping("/home")
    public String wellcomeHome(){
        return "Bem vindo!";
    }

    @GetMapping("/adm")
    @PreAuthorize("hasRole('ADMIN')")
    public String wellcomeAdm(){
        return "Bem vindo ADM!";
    }
}
