package gdcau.backend.development.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gdcau.backend.development.models.News;

public interface NewsRepository extends JpaRepository<News, Long> {
    List<News> findAllByOrderByDateDesc();
}