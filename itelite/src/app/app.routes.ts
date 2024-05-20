
import { Routes } from '@angular/router';
import { GetAntennasService } from './products/main-content/get-antennas.service';

import { GetMapResolver } from './contact-us/get-map.resolver';
import { GetAntennaDetails } from './antenna-details/get-atenna-details.resolver';

export const routes: Routes = [
    { path: "products/:id/:value", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "products/:id", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "products", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },

    { path: "custom-antenna/:id", loadComponent: () => import("./custom-antenna/custom-antenna.component").then(c => ({default: c.CustomAntennaComponent}) )  },
    { path: "custom-antenna", loadComponent: () => import("./custom-antenna/custom-antenna.component").then(c => ({default: c.CustomAntennaComponent}) )  },

    { path: "company/:id", loadComponent: () => import("./company/company.component").then(c => ({default: c.CompanyComponent}) )  },
    { path: "company", loadComponent: () => import("./company/company.component").then(c => ({default: c.CompanyComponent}) )  },

    { path: "order/:id", loadComponent: () => import("./order/order.component").then(c => ({default: c.OrderComponent}) )  },
    { path: "order", loadComponent: () => import("./order/order.component").then(c => ({default: c.OrderComponent}) )  },

    { path: "search", loadComponent: () => import("./search-results-view/search-results-view.component").then((c) => c.SearchResultsViewComponent) },
    { path: "antenna-details/:antena-name", resolve: {data: GetAntennaDetails}, loadComponent: () => import("./antenna-details/antenna-details.component").then(c => ({default: c.AntennaDetailsComponent}) ) },

    { path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent })) }
];
