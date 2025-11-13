package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionService {

    @Autowired
    private ProfessionRepository professionRepository;

    public ProfessionService() {}

    public List<Profession> getAllProfessions() {
        return professionRepository.getProfessions();
    }

    public Optional<Profession> getProfessionByTitle(String title) {
        return this.professionRepository.getProfessionByTitle(title);
    }

    public void addProfession(Profession profession) {
        professionRepository.addProfession(profession);
    }

    public boolean deleteProfession(int id) {
       return professionRepository.deleteProfession(id);
    }

    public void updateProfession(String title, Profession updatedProfession) {

    }
}
