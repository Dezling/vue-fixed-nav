package gdcau.backend.development.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gdcau.backend.development.models.University;

public interface UniversityRepository extends JpaRepository<University, Long> {
}