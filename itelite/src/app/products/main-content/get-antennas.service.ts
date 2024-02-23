import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Apollo, gql } from 'apollo-angular';
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from '@apollo/client/core';
import { Store } from '@ngrx/store';
import { setAntennas } from '@reducer';
import { server } from '@serverSettings';

@Injectable({
  providedIn: 'root',
})
export class GetAntennasService implements Resolve<any> {

  constructor(private apollo: Apollo, private store: Store<{provideAntennas: {antennas: any}}>) {
    const httpLink = new HttpLink({ uri: server.url }); // Dostosuj punkt końcowy GraphQL według potrzeb

    const apolloClientOptions: ApolloClientOptions<InMemoryCache> = {
      link: httpLink,
      cache: new InMemoryCache() as any,
    };

    this.apollo.create(apolloClientOptions);
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
    .subscribe( (e: any) => this.store.dispatch(setAntennas({antennas: {antennas: [ ...(e.data.allAntennas || e.data.filterAntennas) ]}})) )
  }
}
