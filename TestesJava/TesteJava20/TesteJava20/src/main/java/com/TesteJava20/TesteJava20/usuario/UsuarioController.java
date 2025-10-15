package com.TesteJava20.TesteJava20.usuario;

import com.TesteJava20.TesteJava20.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping(value = "/cadastrar")
    public Usuario saveUser(Usuario usuario) {
        return usuarioService.saveUser(usuario);
    }
}
