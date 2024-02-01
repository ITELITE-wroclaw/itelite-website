import { ViewContainerRef } from "@angular/core";
import { createAction, createReducer, on, props } from "@ngrx/store";

export const sendMainViewElements = createAction("[App Component]", props<{ view: {header: ViewContainerRef, main: ViewContainerRef} } >());

export const homeView = createReducer(
    { header: null, main: null },
    on(sendMainViewElements, (state, { view }) => ({ ...state, view: {header: view.header, main: view.main} })))