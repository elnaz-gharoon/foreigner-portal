import { GermanStateEnum } from "./enum/german-state.enum";

export interface Address {
    street: string;
    no: string;
    plz: number;
    city: string;
    state: GermanStateEnum;
}