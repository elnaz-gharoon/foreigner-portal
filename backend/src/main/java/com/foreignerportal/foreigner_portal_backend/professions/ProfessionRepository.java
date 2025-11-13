package com.foreignerportal.foreigner_portal_backend.professions;

import com.foreignerportal.foreigner_portal_backend.professions.enums.GermanStateEnum;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class ProfessionRepository {
    private final List<Profession> professions = new ArrayList<>();

    public ProfessionRepository() {
        Address professionAddress1 = new Address("Str Aaa", "2", 69874, "Stuttgart", GermanStateEnum.BE);
        Address professionAddress2 = new Address("Str BBB", "21", 87451, "Berlin", GermanStateEnum.BE);
        Optional<Address> optionalAddress1 = Optional.of(new Address( "Main Street", "10A", 60311, "Frankfurt", GermanStateEnum.HE));
        Optional<Address> optionalAddress2 = Optional.of(new Address(
                "Königsallee", "45", 40212, "Düsseldorf", GermanStateEnum.NW
        ));
        // Beispielhafte Daten initialisieren

        Person manager1 = new Person("Anna", "Schmidt", LocalDate.of(2015,11,12), optionalAddress1, "017698765432");
        Person manager2 = new Person("Markus", "Weber", LocalDate.of(2017, 01, 17), optionalAddress2,  "017698765432");

        // Öffnungszeiten
        TimeRange weekdayHours = new TimeRange(LocalTime.of(9, 0), LocalTime.of(17, 0));
        TimeRange saturdayHours = new TimeRange(LocalTime.of(10, 0), LocalTime.of(14, 0));

        OpeningHours openingHours1 = new OpeningHours(weekdayHours, weekdayHours, weekdayHours, weekdayHours, weekdayHours, saturdayHours, null);
        OpeningHours openingHours2 = new OpeningHours(weekdayHours, weekdayHours, weekdayHours, weekdayHours, weekdayHours, null, null);

        Profession profession1 = new Profession(
                 12, "Software Development",
                "We develop enterprise applications and offer IT consulting.",
                "Anna Schmidt",
                "0691234567",
                manager1,
                professionAddress1,
                "0691234567",
                "contact@softdev.com",
                openingHours1
        );

        Profession profession2 = new Profession(
                15, "Architecture Office",
                "Modern architecture and sustainable building design.",
                "Markus Weber",
                "0211123456",
                manager2,
                professionAddress2,
                "0211123456",
                "info@archweber.de",
                openingHours2
        );

        professions.add(profession1);
        professions.add(profession2);
    }

    public List<Profession> getProfessions() {
        return professions;
    }

    public Optional<Profession> getProfessionByTitle(String title) {
        return this.professions.stream()
                .filter(p -> p.getTitle().equalsIgnoreCase(title))
                .findFirst();
    }

    public void addProfession(Profession profession) {
        this.professions.add(profession);
    }

    public boolean deleteProfession(int id) {
        return professions.removeIf(p -> p.getId() == id);
    }
}
