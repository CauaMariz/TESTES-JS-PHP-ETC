package com.TesteJava20.TesteJava20.usuario;

import com.TesteJava20.TesteJava20.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping(value = "/cadastrar")
    public Usuario saveUser(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
