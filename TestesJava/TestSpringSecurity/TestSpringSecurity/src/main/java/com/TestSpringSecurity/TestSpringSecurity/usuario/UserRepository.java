package com.TestSpringSecurity.TestSpringSecurity.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <Usuario , Long> {
}
