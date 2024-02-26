
import { Routes } from '@angular/router';
import { GetAntennasService } from './products/main-content/get-antennas.service';

export const routes: Routes = [
    { path: "products", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "custom-antenna", loadComponent: () => import("../app/custom-antenna/custom-antenna.component").then(c => ({default: c.CustomAntennaComponent}) )  },
    { path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent })) }
];
