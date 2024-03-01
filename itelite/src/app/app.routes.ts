
import { Routes } from '@angular/router';
import { GetAntennasService } from './products/main-content/get-antennas.service';

import { GetMapResolver } from './contact-us/get-map.resolver';

export const routes: Routes = [
    { path: "products", resolve: {data: GetAntennasService}, loadComponent: () => import("./products/products.component").then(c => ({default: c.ProductsComponent})) },
    { path: "custom-antenna", loadComponent: () => import("./custom-antenna/custom-antenna.component").then(c => ({default: c.CustomAntennaComponent}) )  },
    
    { path: "company", loadComponent: () => import("./company/company.component").then(c => ({default: c.CompanyComponent}) )  },
    { path: "order", loadComponent: () => import("./order/order.component").then(c => ({default: c.OrderComponent}) )  },

    { path: "contact-us", resolve: {data: GetMapResolver}, loadComponent: () => import("../app/contact-us/contact-us.component").then(c => ({default: c.ContactUsComponent}) )  },
    { path: "antenna-details/:antena-name", loadComponent: () => import("./antenna-details/antenna-details.component").then(c => ({default: c.AntennaDetailsComponent}) )  },
    
    { path: "**", loadComponent: () => import('./home-view/home-view.component').then(c => ({ default: c.HomeViewComponent })) }
];
