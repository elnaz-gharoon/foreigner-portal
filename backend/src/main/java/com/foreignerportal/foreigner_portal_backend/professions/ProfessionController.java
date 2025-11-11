package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/professions")
public class ProfessionController {

    @Autowired
    private ProfessionService service;

    @GetMapping
    public List<Profession> getAll() {
        return service.getAllProfessions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profession> getById(@PathVariable String id) {
        return service.getProfessionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Profession create(@RequestBody Profession profession) {
        return service.createProfession(profession);
    }

    @PutMapping("/{id}")
    public Profession update(@PathVariable String id, @RequestBody Profession profession) {
        return service.updateProfession(id, profession);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.deleteProfession(id);
        return ResponseEntity.noContent().build();
    }
}
