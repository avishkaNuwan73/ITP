package com.example.itp_backend.security.config;

import com.example.itp_backend.appUser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig {
    private final AppUserService appUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .antMatchers("/api/v*/registration/**").permitAll()// Allow registration endpoints without authentication
                                .anyRequest().authenticated()
                )
                .formLogin(withDefaults()); // Enable form-based login

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return appUserService; // Corrected the UserDetailsService bean definition
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return bCryptPasswordEncoder; // Corrected the PasswordEncoder bean definition
    }
}
