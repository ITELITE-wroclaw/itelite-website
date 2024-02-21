import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

import { Antenna } from '@types';

@Injectable({
  providedIn: 'root'
})
export class AntennasGetterService {

  constructor(private apollo: Apollo) {}

  public getAllAntennas(skip: number): Promise<Antenna[]>
  {

    return new Promise((resolve) => {
      const GET_ANTENNAS = gql`
      {
        allAntennas(skip: ${skip * 28}){
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
    .subscribe( (e: any) =>  resolve(e.data.allAntennas || e.data.antennasFilter))
    })
    
  }
}