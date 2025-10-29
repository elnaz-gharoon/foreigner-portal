import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { AppStateModel } from "../models/app-state.model";
import { ConstantValues } from "../utils/constant-values";

@State<AppStateModel>({
    name: 'appState',
    defaults: {
        professions: ConstantValues.mockProfessions,
    }
})
@Injectable()
export class AppState {

}