package com.javaTesteEndPoint.EndPointTest.userRepository;

import com.javaTesteEndPoint.EndPointTest.Usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <Usuario, Long> {
}
