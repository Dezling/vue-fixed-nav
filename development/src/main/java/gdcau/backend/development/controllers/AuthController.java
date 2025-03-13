package gdcau.backend.development.controllers;

import gdcau.backend.development.models.User; // Импортируйте свой класс User
import gdcau.backend.development.service.JwtService;
import gdcau.backend.development.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private JwtService jwtService;

    @Autowired
    private UserService userService; // Используйте UserService вместо User

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
    );
    
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    String jwt = jwtService.generateToken(userDetails);
    
    return ResponseEntity.ok(Map.of(
        "token", jwt,
        "username", userDetails.getUsername()
    ));
}

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.save(user);
    }
}
