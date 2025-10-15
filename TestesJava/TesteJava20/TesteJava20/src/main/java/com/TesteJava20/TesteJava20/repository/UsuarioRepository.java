package com.TesteJava20.TesteJava20.repository;

import com.TesteJava20.TesteJava20.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario , Long> {
}
