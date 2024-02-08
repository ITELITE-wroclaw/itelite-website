
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "products", loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent })) }
];
