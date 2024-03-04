
import { createAction, createReducer, on, props } from "@ngrx/store";
import { FilterInterface, View } from "@types";

export const sendMainViewElements = createAction("[App Component]", props<{ view: View } >());
export const setAntennas = createAction("[App Products]", props<{antennas: any}>())

export const antennasFilter = createAction("[Products Component", props<{filter: FilterInterface}>())
export const currentAntennaDetails = createAction("[Antenna Details]", props<{details: any}>())

export const homeView = createReducer(
    {state: null},
    on( sendMainViewElements, (state, { view }) => ({ ...state, view: {header: view.header, main: view.main, footer: view.footer} }) )
)

export const antennas = createReducer(
    null,
    on(setAntennas, (state, data) => data.antennas)
)

export const filter = createReducer(
    {type: "", feature: "", frequency: "", radio: "" },
    on(antennasFilter, (state, data) => ( { type: data.filter.type!, feature: data.filter.feature!, frequency: data.filter.frequency!, radio: data.filter.radio! }))
)

export const currentAntenna = createReducer(
    {details: {}},
    on(currentAntennaDetails, (state, data) => ({details: data}))
)