package com.foreignerportal.foreigner_portal_backend.professions;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity  //  Annotation direkt vor der Klassendefinition
@Table(name = "profession") // Name der Tabelle in DB
public class ProfessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String description;

    private String manager_firstname;
    private String manager_lastname;
    private LocalDate manager_birthdate;
    private String manager_cellphone;

    private String street;
    private String street_no;
    private Integer plz;
    private String city;
    private String german_state;

    private String phone;
    private String email;

    private String opening_monday;
    private String opening_tuesday;
    private String opening_wednesday;
    private String opening_thursday;
    private String opening_friday;
    private String opening_saturday;
    private String opening_sunday;

    // Getter und Setter für alle Felder
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getManager_firstname() { return manager_firstname; }
    public void setManager_firstname(String manager_firstname) { this.manager_firstname = manager_firstname; }

    public String getManager_lastname() { return manager_lastname; }
    public void setManager_lastname(String manager_lastname) { this.manager_lastname = manager_lastname; }

    public LocalDate getManager_birthdate() { return manager_birthdate; }
    public void setManager_birthdate(LocalDate manager_birthdate) { this.manager_birthdate = manager_birthdate; }

    public String getManager_cellphone() { return manager_cellphone; }
    public void setManager_cellphone(String manager_cellphone) { this.manager_cellphone = manager_cellphone; }

    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }

    public String getStreet_no() { return street_no; }
    public void setStreet_no(String street_no) { this.street_no = street_no; }

    public Integer getPlz() { return plz; }
    public void setPlz(Integer plz) { this.plz = plz; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getGerman_state() { return german_state; }
    public void setGerman_state(String german_state) { this.german_state = german_state; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getOpening_monday() { return opening_monday; }
    public void setOpening_monday(String opening_monday) { this.opening_monday = opening_monday; }

    public String getOpening_tuesday() { return opening_tuesday; }
    public void setOpening_tuesday(String opening_tuesday) { this.opening_tuesday = opening_tuesday; }

    public String getOpening_wednesday() { return opening_wednesday; }
    public void setOpening_wednesday(String opening_wednesday) { this.opening_wednesday = opening_wednesday; }

    public String getOpening_thursday() { return opening_thursday; }
    public void setOpening_thursday(String opening_thursday) { this.opening_thursday = opening_thursday; }

    public String getOpening_friday() { return opening_friday; }
    public void setOpening_friday(String opening_friday) { this.opening_friday = opening_friday; }

    public String getOpening_saturday() { return opening_saturday; }
    public void setOpening_saturday(String opening_saturday) { this.opening_saturday = opening_saturday; }

    public String getOpening_sunday() { return opening_sunday; }
    public void setOpening_sunday(String opening_sunday) { this.opening_sunday = opening_sunday; }
}
