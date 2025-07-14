package com.projetoTesteConexao.Projeto.Teste.Conexao.JPA.Repository;

import com.projetoTesteConexao.Projeto.Teste.Conexao.JPA.User.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users , Integer> {
}
