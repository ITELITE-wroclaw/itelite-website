import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAntennasByAnyService {

  constructor(private apollo: Apollo){}

  public getAntennasByAnyProperty(findByText: string)
  {
    const GET_ANTENNAS = gql`
      {
        getAntennaByAny(parameters: [ [ "ant_name", ""] ], skip: 0){
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
          guid
          images
          icon
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
