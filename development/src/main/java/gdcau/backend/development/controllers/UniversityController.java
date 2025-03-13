package gdcau.backend.development.controllers;

import gdcau.backend.development.models.University;
import gdcau.backend.development.repositories.UniversityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/universities")
public class UniversityController {
    private final UniversityRepository universityRepository;

    public UniversityController(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }

    @GetMapping
    public List<University> getAllUniversities() {
        return universityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<University> getUniversityById(@PathVariable Long id) {
        Optional<University> university = universityRepository.findById(id);
        return university.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public University createUniversity(@RequestBody University university) {
        return universityRepository.save(university);
    }

    @PutMapping("/{id}")
    public ResponseEntity<University> updateUniversity(@PathVariable Long id, @RequestBody University updatedUniversity) {
        return universityRepository.findById(id)
                .map(university -> {
                    university.setName(updatedUniversity.getName());
                    university.setLogoUrl(updatedUniversity.getLogoUrl());
                    university.setWebsiteUrl(updatedUniversity.getWebsiteUrl());
                    university.setCountry(updatedUniversity.getCountry());
                    return ResponseEntity.ok(universityRepository.save(university));
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUniversity(@PathVariable Long id) {
        if (universityRepository.existsById(id)) {
            universityRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}