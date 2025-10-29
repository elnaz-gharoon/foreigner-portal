import { Address } from "./address.model";

export interface Person {
    firstname: string;
    lastname: string;
    birthdate?: Date;
    Adress?: Address;
}