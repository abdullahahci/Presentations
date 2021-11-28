package com.ahci.dockersample;

import com.ahci.dockersample.model.User;
import com.ahci.dockersample.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Loader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired
    public Loader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(ApplicationArguments args) {
        userRepository.deleteAll();
        userRepository.save(new User("John Doe", "johndoe@example.com"));
        userRepository.save(new User("Jane Doe", "janedoe@example.com"));
        userRepository.save(new User("Jay Doe", "jaydoe@example.com"));
    }
}