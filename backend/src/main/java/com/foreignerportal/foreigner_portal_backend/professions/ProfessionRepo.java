package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ProfessionRepo extends JpaRepository<ProfessionEntity, Integer> {
    Optional<ProfessionEntity> findByTitleIgnoreCase(String title);
}
