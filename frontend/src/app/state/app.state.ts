import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { AppStateModel } from "../models/app-state.model";
import { ConstantValues } from "../utils/constant-values";
import { Profession } from "../models/profession.model";

@State<AppStateModel>({
    name: 'appState',
    defaults: {
        professions: ConstantValues.mockProfessions,
    }
})
@Injectable()
export class AppState {

    @Selector()
    static getProfessions(state: AppStateModel): Profession[] {
        return state.professions;
    }
}