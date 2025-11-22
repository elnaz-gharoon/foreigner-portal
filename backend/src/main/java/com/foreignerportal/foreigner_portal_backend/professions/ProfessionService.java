package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionService {

    @Autowired
    private ProfessionRepo professionRepo;

    public ProfessionService() {}

    public List<ProfessionEntity> getAllProfessions() {
        return professionRepo.findAll();
    }

    public Optional<ProfessionEntity> getProfessionByTitle(String title) {
        return this.professionRepo.findByTitleIgnoreCase(title);
    }

    public void addProfession(ProfessionEntity professionEntity) {
        professionRepo.save(professionEntity);
    }

    public void deleteProfession(int id) {
        professionRepo.deleteById(id);
    }

    public void updateProfession(String title, ProfessionEntity updatedProfession) {

    }
}
