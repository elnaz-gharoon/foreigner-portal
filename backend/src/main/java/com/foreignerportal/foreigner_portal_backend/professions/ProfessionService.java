package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessionService {

    private final List<Profession> professions = new ArrayList<>();

    // Hardcode some initial data
    public ProfessionService() {
        professions.add(new Profession("1", "Software Engineer", "Alice", "123-456"));
        professions.add(new Profession("2", "Project Manager", "Bob", "234-567"));
        professions.add(new Profession("3", "Designer", "Charlie", "345-678"));
        professions.add(new Profession("4", "Programmer", "Elnaz", "345-678-3366"));
        professions.add(new Profession("5", "UI designer", "Ramin", "345-678-998877"));
    }

    public List<Profession> getAllProfessions() {
        return professions;
    }

    public Optional<Profession> getProfessionById(String id) {
        return professions.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
    }

    public Profession createProfession(Profession profession) {
        professions.add(profession);
        return profession;
    }

    public Profession updateProfession(String id, Profession profession) {
        Optional<Profession> existingOpt = getProfessionById(id);
        if (existingOpt.isPresent()) {
            Profession existing = existingOpt.get();
            existing.setTitle(profession.getTitle());
            existing.setManager(profession.getManager());
            existing.setPhone(profession.getPhone());
            return existing;
        } else {
            throw new RuntimeException("Profession not found with id " + id);
        }
    }

    public void deleteProfession(String id) {
        professions.removeIf(p -> p.getId().equals(id));
    }
}
