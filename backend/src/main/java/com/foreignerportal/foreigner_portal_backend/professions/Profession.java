package com.foreignerportal.foreigner_portal_backend.professions;

public class Profession {

    private String title;
    private String description;
    private String manager;
    private String phone;
    private Person Manager;
    private Address address;
    private String phoneNumber;
    private String email;
    private OpeningHours openingHours;

    public Profession(String title, String description, String manager, String phone, Person manager1, Address address, String phoneNumber, String email, OpeningHours openingHours) {
        this.title = title;
        this.description = description;
        this.manager = manager;
        this.phone = phone;
        Manager = manager1;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.openingHours = openingHours;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(Person manager) {
        Manager = manager;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public OpeningHours getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(OpeningHours openingHours) {
        this.openingHours = openingHours;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}


