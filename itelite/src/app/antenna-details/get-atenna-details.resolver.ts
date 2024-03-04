import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class GetAntennaDetails{

  
  constructor(private apollo: Apollo, private store: Store<{provideAntennas: {antennas: any}}>, private router: Router, @Inject(PLATFORM_ID) private platform_id: string) {}

  resolve(route: ActivatedRouteSnapshot) {

    const GET_ANTENNAS = gql`
      {
        antennasFilter(parameters: [ [ "ant_name", "${route.params['antena-name']}"] ], skip: 0){
          ant_name
          ant_type
          ant_image_1
          radio_space
          flat_panel
          single_pol
          mimo_2x2
          mimox_3x3
          multi_mimo
          freq_name
          parameters1
          parameters2
          guid
          descriptions
          applications
        }
      }
    `;

    return this.apollo
    .watchQuery({
      query: GET_ANTENNAS,
    })
    .valueChanges
    .pipe(
      switchMap(of)
    )
    
  }
}