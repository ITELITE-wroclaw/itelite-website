import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Apollo, gql } from 'apollo-angular';
import { Store } from '@ngrx/store';

import { setAntennas } from '@reducer';

@Injectable({
  providedIn: 'root',
})
export class GetAntennasService implements Resolve<any> {

  constructor(private apollo: Apollo, private store: Store<{provideAntennas: {antennas: any}}>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const GET_ANTENNAS = gql`
      {
        allAntennas(skip: 0){
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
        }
      }
    `;

    this.apollo
    .watchQuery({
      query: GET_ANTENNAS,
    })
    .valueChanges
    .subscribe( (e: any) => {
      const result: [] | any = e?.data?.allAntennas | e?.data?.filterAntennas; 
      if(!result) return;
      return this.store.dispatch(setAntennas({antennas: {antennas: [ ...result ]}})) })
  }
}
