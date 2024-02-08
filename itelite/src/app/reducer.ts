
import { createAction, createReducer, on, props } from "@ngrx/store";
import { View } from "@types";

export const sendMainViewElements = createAction("[App Component]", props<{ view: View } >());

export const homeView = createReducer(
    { header: null, main: null },
    on( sendMainViewElements, (state, { view }) => ({ ...state, view: {header: view.header, main: view.main, footer: view.footer} }) )
)