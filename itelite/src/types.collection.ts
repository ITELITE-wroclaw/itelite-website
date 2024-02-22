import { ViewContainerRef } from "@angular/core";

// header and main are angular ng-container elements, serve to dynamically component injection. They are supply through ngrx to components rendering during route event
export interface View{
    header: ViewContainerRef,
    main: ViewContainerRef,
    footer: ViewContainerRef
}

export interface Antenna{
    ant_name: string,
    ant_type: string,
    ant_image_1: number,
    ant_image_2: number,
    radio_space: boolean,
    flat_panel: boolean,
    single_pol: boolean,
    mimo_2x2: boolean,
    mimo_3x3: boolean,
    multi_mimo: boolean,
    freq_name: string
    parameters1: string
    parameters2: string
    guid: string
}

export interface FilterInterface{
    type?: string | undefined,
    frequency?: string,
    feature?: string,
    radio?: string
}