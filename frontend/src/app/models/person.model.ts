import { Address } from "./address.model";

export interface Person {
    firstname: string;
    lastname: string;
    birthdate?: Date;
    address?: Address;
    cellphoneNumber: string;
}