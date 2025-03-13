package gdcau.backend.development.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Conf implements WebMvcConfigurer {
    @SuppressWarnings("null")
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Разрешить все пути
                .allowedOrigins("http://localhost:5173") // Разрешить ваш Vue проект
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Разрешить эти методы
                .allowCredentials(true); // Разрешить учетные данные
    }
}
