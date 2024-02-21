
import { Routes } from '@angular/router';
import { GetAntennasService } from './products/main-content/get-antennas.service';

export const routes: Routes = [
    { path: "products", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent })) }
];
