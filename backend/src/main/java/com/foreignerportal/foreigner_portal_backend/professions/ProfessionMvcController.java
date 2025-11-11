package com.foreignerportal.foreigner_portal_backend.professions;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ProfessionMvcController {
    @GetMapping("/mvc/professions")
    public String getProfessions(Model model) {
        List<Profession> professions = new ArrayList<>();
        professions.add(new Profession("100", "Arzt", "Tim", "465232"));
        professions.add(new Profession("200", "Lehrer", "Tommy", "123211"));

        model.addAttribute("professions", professions);
        return "professions";
    }
}
