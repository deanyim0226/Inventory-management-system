package com.example.idmservice.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class SecurityConfig {


    private final String URL = "http://localhost:9091";

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http.httpBasic().and().cors().and().csrf().disable();

        return http.build();
    }
}
