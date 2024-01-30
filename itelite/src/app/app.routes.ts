import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';

export const routes: Routes = [
    {path: "**", component: HomeViewComponent}
];
