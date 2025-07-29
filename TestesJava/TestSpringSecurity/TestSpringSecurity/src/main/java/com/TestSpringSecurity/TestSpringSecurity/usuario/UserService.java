package com.TestSpringSecurity.TestSpringSecurity.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/saveUser")
    public Usuario saveUser(@RequestBody Usuario usuario){
        return userRepository.save(usuario);
    }
}
