import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { debounceTime, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAntennasByAnyService {

  constructor(private apollo: Apollo){}

  public getAntennasByAnyProperty(findByText: string)
  {
    const GET_ANTENNAS = gql`
      {
        getAntennaByAny(parameter: "${findByText}"){
          ant_name
          ant_type
          ant_image_1
          radio_space
          flat_panel
          single_pol
          mimo_2x2
          mimo_3x3
          multi_mimo
          freq_name
          guid
        }
      }
    `;

    return this.apollo
    .watchQuery({
      query: GET_ANTENNAS,
    })
    .valueChanges
    .pipe(
      debounceTime(300),
      switchMap(of)
    )
  }
}
