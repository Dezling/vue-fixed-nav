package gdcau.backend.development.repositories;

import gdcau.backend.development.models.User; // Исправьте импорт
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
