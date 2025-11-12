package com.foreignerportal.foreigner_portal_backend.professions;

import com.foreignerportal.foreigner_portal_backend.professions.enums.GermanStateEnum;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessionService {

    private final List<Profession> professions = new ArrayList<>();

    public ProfessionService() {
        // Beispielhafte Daten initialisieren
        Address address1 = new Address(
                "Main Street", "10A", 60311, "Frankfurt", GermanStateEnum.HE
        );

        Address address2 = new Address(
                "Königsallee", "45", 40212, "Düsseldorf", GermanStateEnum.NW
        );

        Person manager1 = new Person("Anna", "Schmidt", LocalDate.of(2015,11,12), Optional.empty(), "017698765432");
        Person manager2 = new Person("Markus", "Weber", LocalDate.of(2017, 01, 17), Optional.empty(),  "017698765432");

        // Öffnungszeiten
        TimeRange weekdayHours = new TimeRange(LocalTime.of(9, 0), LocalTime.of(17, 0));
        TimeRange saturdayHours = new TimeRange(LocalTime.of(10, 0), LocalTime.of(14, 0));

        OpeningHours openingHours1 = new OpeningHours(weekdayHours, weekdayHours, weekdayHours, weekdayHours, weekdayHours, saturdayHours, null);
        OpeningHours openingHours2 = new OpeningHours(weekdayHours, weekdayHours, weekdayHours, weekdayHours, weekdayHours, null, null);

        Profession profession1 = new Profession(
                "Software Development",
                "We develop enterprise applications and offer IT consulting.",
                "Anna Schmidt",
                "0691234567",
                manager1,
                address1,
                "0691234567",
                "contact@softdev.com",
                openingHours1
        );

        Profession profession2 = new Profession(
                "Architecture Office",
                "Modern architecture and sustainable building design.",
                "Markus Weber",
                "0211123456",
                manager2,
                address2,
                "0211123456",
                "info@archweber.de",
                openingHours2
        );

        professions.add(profession1);
        professions.add(profession2);
    }

    public List<Profession> getAllProfessions() {
        return new ArrayList<>(professions);
    }

    public Optional<Profession> getProfessionByTitle(String title) {
        return professions.stream()
                .filter(p -> p.getTitle().equalsIgnoreCase(title))
                .findFirst();
    }

    public Profession addProfession(Profession profession) {
        professions.add(profession);
        return profession;
    }

    public boolean deleteProfession(String title) {
        return professions.removeIf(p -> p.getTitle().equalsIgnoreCase(title));
    }

    public Profession updateProfession(String title, Profession updatedProfession) {
        for (int i = 0; i < professions.size(); i++) {
            if (professions.get(i).getTitle().equalsIgnoreCase(title)) {
                professions.set(i, updatedProfession);
                return updatedProfession;
            }
        }
        throw new RuntimeException("Profession with title '" + title + "' not found");
    }
}
