import { Injectable } from '@angular/core';
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from '@apollo/client/core';

import { server } from '@serverSettings';
import { Apollo } from 'apollo-angular';


@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) {
    const httpLink = new HttpLink({ uri: server.url }); // Dostosuj punkt końcowy GraphQL według potrzeb

    const apolloClientOptions: ApolloClientOptions<InMemoryCache> = {
      link: httpLink,
      cache: new InMemoryCache() as any,
    };

    this.apollo.create(apolloClientOptions);
   }
}
