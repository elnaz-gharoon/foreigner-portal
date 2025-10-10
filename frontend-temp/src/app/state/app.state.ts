import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

@State<any>({
    name: 'appState',
    defaults: {
        appTitle: 'My App',
        myData: 'Elnaz data'
    }
})
@Injectable()
export class AppState {

}