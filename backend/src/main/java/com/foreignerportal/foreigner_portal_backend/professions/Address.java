package com.foreignerportal.foreigner_portal_backend.professions;

import com.foreignerportal.foreigner_portal_backend.professions.enums.GermanStateEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


public class Address {

    @Id
    private String street;
    private String no;
    private int plz; // entspricht number in TS
    private String city;
    private GermanStateEnum germanStateEnum;

    public Address(String street, String no, int plz, String city, GermanStateEnum germanStateEnum) {
        this.street = street;
        this.no = no;
        this.plz = plz;
        this.city = city;
        this.germanStateEnum = germanStateEnum;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public int getPlz() {
        return plz;
    }

    public void setPlz(int plz) {
        this.plz = plz;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public GermanStateEnum getGermanStateEnum() {
        return germanStateEnum;
    }

    public void setGermanStateEnum(GermanStateEnum germanStateEnum) {
        this.germanStateEnum = germanStateEnum;
    }
}
