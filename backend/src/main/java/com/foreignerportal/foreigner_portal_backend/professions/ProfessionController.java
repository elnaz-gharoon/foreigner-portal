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
    public List<ProfessionEntity> getAll() {
        return service.getAllProfessions();
    }

    @GetMapping("/{title}")
    public ResponseEntity<ProfessionEntity> getByTitle(@PathVariable String title) {
        return service.getProfessionByTitle(title)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public void createProfession(@RequestBody ProfessionEntity profession) {
        service.addProfession(profession);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody ProfessionEntity profession) {
        service.updateProfession(id, profession);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        service.deleteProfession(id);
        return ResponseEntity.noContent().build();
    }
}
