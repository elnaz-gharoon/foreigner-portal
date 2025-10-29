import { Person } from "./person.model";

export interface ProfessionModel {
    title: string;
    description: string;
    manager: Person;
}