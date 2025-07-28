package com.javaTesteEndPoint.EndPointTest.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/usuario")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/cadastrarUser")
    public Usuario saveUser(@RequestBody Usuario usuario){
        return userService.saveUser(usuario);
    }
}
