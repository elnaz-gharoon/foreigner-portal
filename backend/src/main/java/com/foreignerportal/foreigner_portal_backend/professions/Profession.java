package com.foreignerportal.foreigner_portal_backend.professions;

public class Profession {
    private String id;
    private String title;
    private String manager;
    private String phone;

    public Profession(String id, String title, String manager, String phone) {
        this.id = id;
        this.title = title;
        this.manager = manager;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getManager() {
        return manager;
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

    @Override
    public String toString() {
        return "Profession{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", manager='" + manager + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
