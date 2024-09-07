package com.example.idmservice.service.implementation;


import com.example.idmservice.domain.User;
import com.example.idmservice.domain.type.Role;
import com.example.idmservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserDetailServiceImplementation  implements UserDetailsService {

    @Autowired
    UserService userService;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User retrievedUser = userService.findByEmail(email);

        if(retrievedUser == null){
            throw  new UsernameNotFoundException(email);
        }
        List<Role> roles = retrievedUser.getRoles();
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

        for(Role role : roles){
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new org.springframework.security.core.userdetails.User(retrievedUser.getEmail(),retrievedUser.getPassword(), grantedAuthorities);
    }
}
