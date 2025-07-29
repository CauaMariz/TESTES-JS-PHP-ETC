package com.TestSpringSecurity.TestSpringSecurity.userController;


import com.TestSpringSecurity.TestSpringSecurity.usuario.UserService;
import com.TestSpringSecurity.TestSpringSecurity.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/usuario")
public class UserControler {
    @Autowired
    UserService userService;

    @PostMapping(value = "/saveUser")
    public Usuario saveUser(@RequestBody Usuario usuario){
        return userService.saveUser(usuario);
    }

}
