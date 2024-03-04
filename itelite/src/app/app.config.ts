import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { antennas, currentAntenna, filter, homeView } from '@reducer';

import { Apollo } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideStore({provideHomeView: homeView, provideAntennas: antennas, provideFilter: filter, provideAntennaDetails: currentAntenna}),
    provideHttpClient(),
    provideRouter(routes), 
    {
      provide: Apollo,
      useClass: Apollo
    }
  ]
};
