
import { createAction, createReducer, on, props } from "@ngrx/store";
import { View } from "@types";

export const sendMainViewElements = createAction("[App Component]", props<{ view: View } >());
export const setAntennas = createAction("[App Products]", props<{antennas: any}>())

export const homeView = createReducer(
    {state: null},
    on( sendMainViewElements, (state, { view }) => ({ ...state, view: {header: view.header, main: view.main, footer: view.footer} }) )
)

export const antennas = createReducer(
    null,
    on(setAntennas, (state, data) => data.antennas)
)