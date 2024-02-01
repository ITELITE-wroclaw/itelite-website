import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent }))}
];
