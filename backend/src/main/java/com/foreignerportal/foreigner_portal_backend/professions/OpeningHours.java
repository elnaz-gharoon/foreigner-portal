package com.foreignerportal.foreigner_portal_backend.professions;

public class OpeningHours {
private TimeRange monday;
private TimeRange tuesday;
private TimeRange wednesday;
private TimeRange thursday;
private TimeRange friday;
private TimeRange saturday;
private TimeRange sunday;

    public OpeningHours(TimeRange monday, TimeRange tuesday, TimeRange wednesday, TimeRange thursday, TimeRange friday, TimeRange saturday, TimeRange sunday) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    public TimeRange getMonday() {
        return monday;
    }

    public void setMonday(TimeRange monday) {
        this.monday = monday;
    }

    public TimeRange getTuesday() {
        return tuesday;
    }

    public void setTuesday(TimeRange tuesday) {
        this.tuesday = tuesday;
    }

    public TimeRange getWednesday() {
        return wednesday;
    }

    public void setWednesday(TimeRange wednesday) {
        this.wednesday = wednesday;
    }

    public TimeRange getThursday() {
        return thursday;
    }

    public void setThursday(TimeRange thursday) {
        this.thursday = thursday;
    }

    public TimeRange getFriday() {
        return friday;
    }

    public void setFriday(TimeRange friday) {
        this.friday = friday;
    }

    public TimeRange getSaturday() {
        return saturday;
    }

    public void setSaturday(TimeRange saturday) {
        this.saturday = saturday;
    }

    public TimeRange getSunday() {
        return sunday;
    }

    public void setSunday(TimeRange sunday) {
        this.sunday = sunday;
    }
}
