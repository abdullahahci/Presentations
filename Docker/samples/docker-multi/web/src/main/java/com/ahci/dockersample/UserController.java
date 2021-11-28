package com.ahci.dockersample;

import com.ahci.dockersample.model.User;
import com.ahci.dockersample.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody User addNewUser (@RequestParam String name
            , @RequestParam String email) {

        User u = new User();
        u.setName(name);
        u.setEmail(email);
        userRepository.save(u);
        return u;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path="/user/{id}")
    public @ResponseBody
    Optional<User> getAllUsers(@PathVariable Integer id) {
        System.out.println("Returning user " + id);
        return userRepository.findById(id);
    }
}