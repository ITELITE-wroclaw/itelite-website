import { Injectable } from '@angular/core';
import { Antenna } from '@types';

import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private apollo: Apollo) {}

  private skipAntennas: number = 0;
  private flag: boolean = false;

  public antennas: Antenna[] = [];
  private currentAntennasFilter = {type: "", feature: "", frequency: "", radio: "" }; //should by in same order as in reducer

  public isFilter: boolean = false;

  public getAllAntennas(skip: number): Observable<unknown> {

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

      return this.apollo
        .watchQuery({
          query: GET_ANTENNAS,
        })
      .valueChanges
  }

  public getFilterAntennas(filter: any): Observable<unknown> {

    JSON.stringify(filter) == JSON.stringify(this.currentAntennasFilter)? this.skipAntennas++: [this.skipAntennas = 0, this.antennas = [], this.isFilter = true];
    const parameters = JSON.stringify(Object.entries(filter).filter(el => !!el[1]));

    const GET_ANTENNAS = gql`
      {
        antennasFilter(
          parameters: ${parameters}, 
          skip: ${this.skipAntennas * 28}
        )
        {
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

    return this.apollo.watchQuery({
      query: GET_ANTENNAS,
    }).valueChanges;
  }

  async scrollEvent(scrollValues: any) {
    if (this.flag) return;

    const clousure: HTMLElement = document.querySelector('.clousure')!;
    if (
      clousure.clientHeight + clousure.offsetTop - window.outerHeight * 1.75 <
      window.scrollY
    ) {
      this.flag = true;

      const newAntennas: Observable<Antenna[] | any> = this.isFilter? this.getFilterAntennas(this.currentAntennasFilter): this.getAllAntennas(this.skipAntennas);
      this.skipAntennas++;

      newAntennas.subscribe((e: {data:{ allAntennas?: Antenna[], antennasFilter?: Antenna[]}}) => {
        const response: Antenna[] | any = e.data.allAntennas || e.data.antennasFilter;
        this.antennas.push(response);

        if (response.length < 28) scrollValues.scrollEvent.unsubscribe();
        this.flag = false;
      })

      
    }
  }
}
