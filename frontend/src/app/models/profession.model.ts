import { Address } from "./address.model";
import { OpeningHours } from "./opening-hours.model";
import { Person } from "./person.model";

export interface Profession {
    title: string;
    description: string;
    manager: Person;
    address: Address;
    phoneNumber?: string;
    email: string;
    openingHours: OpeningHours;
}