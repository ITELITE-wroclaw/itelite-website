import { ViewContainerRef } from "@angular/core";

// header and main are angular ng-container elements, serve to dynamically component injection. They are supply through ngrx to components rendering during route event
export interface View{
    header: ViewContainerRef,
    main: ViewContainerRef,
    footer: ViewContainerRef
}