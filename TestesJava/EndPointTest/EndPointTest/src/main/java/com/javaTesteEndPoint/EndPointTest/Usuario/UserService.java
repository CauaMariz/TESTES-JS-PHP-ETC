package com.javaTesteEndPoint.EndPointTest.Usuario;

import com.javaTesteEndPoint.EndPointTest.userRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/cadastrarUser")
    public Usuario saveUser(@RequestBody Usuario usuario){
        return userRepository.save(usuario);
    }
}
