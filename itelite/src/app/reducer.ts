import { createAction, createReducer, on, props } from "@ngrx/store";

export const currentHTMLContent = createAction("[App Component]", props<{data: any}>());

export const currentView = createReducer(
    {data: false},
    on(currentHTMLContent, (state, action) => action.data )
);