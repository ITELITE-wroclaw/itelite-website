import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { antennas, filter, homeView } from './reducer';

import { Apollo } from 'apollo-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideStore({provideHomeView: homeView, provideAntennas: antennas, provideFilter: filter}), 
    provideRouter(routes), 
    {
      provide: Apollo,
      useClass: Apollo
    }
  ]
};
