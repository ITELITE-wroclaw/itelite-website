import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { debounceTime, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAntennasByAnyService {

  constructor(private apollo: Apollo){}

  private featuresList: string[] = ["flat_panel", "radio_space", "single_pol", "mimo_2x2", "mimo_3x3", "multi_mimo"];

  public getAntennasByAnyProperty(findByText: string)
  {
    if(!findByText) return of([]);

    const newAntennasArray = [];

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
      map((e: any) => { 
        e.data.getAntennaByAny.forEach( (x) => {
          const found = this.featuresList.find((key: string) => x[`${key}`] === true).replaceAll("_", " "); 
          const {ant_name, ant_type, freq_name, guid } = x;
          
          newAntennasArray.push({ant_name, ant_type, freq_name, guid, feature: found });
        } ); }),
      switchMap( (x) => of(newAntennasArray))
    )
  }
}
