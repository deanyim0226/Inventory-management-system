package com.example.idmservice.controller;

import com.example.idmservice.component.IDMJwtManager;
import com.example.idmservice.domain.User;
import com.example.idmservice.model.request.LoginRequest;
import com.example.idmservice.model.request.RegisterRequest;
import com.example.idmservice.model.response.LoginResponse;
import com.example.idmservice.model.response.RegisterResponse;
import com.example.idmservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    IDMJwtManager jwtManager;


    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody User user){

        User existingUser = userService.findByEmail(user.getEmail());

        if(existingUser != null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(user);
        }

        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){

        User user = userService.findByEmail(request.getEmail());

        if(user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(request);
        }

        if(!userService.checkUser(user, request.getPassword())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(request);
        }

        String accessToken = jwtManager.buildAccessToken(user);

        LoginResponse response = new LoginResponse();
        response.setAccessToken(accessToken);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
