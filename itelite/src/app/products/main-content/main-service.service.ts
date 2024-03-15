import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAntennas } from '@reducer';
import { Antenna } from '@types';

import { Apollo, TypedDocumentNode, gql } from 'apollo-angular';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private apollo: Apollo, private store: Store<{provideAntennas: {antennas: any}}>, ) {}

  private skipAntennas: number = 0;
  private flag: boolean = false;

  public antennas: Antenna[] = [];

  private currentAntennasFilter = {
    type: '',
    feature: '',
    frequency: '',
    radio: '',
  }; //should by in same order as in reducer

  public isFilter: boolean = false;
  private readonly skipLimit: number = 24;

  public scrollSub!: Subscription;

  /* <--- Here begin code regarding with grqphQL ---> */

  private readonly antennaType: string = `
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
  `

  private getQuery = (query: TypedDocumentNode<unknown, unknown>) => this.apollo.watchQuery({ query }).valueChanges;

  public getAllAntennas(skip: number): Observable<unknown> {

    if (this.scrollSub.closed) this.restartScrollListener();

    const GET_ANTENNAS = gql`
      {
        allAntennas(skip: ${this.skipLimit * skip}){
          ${this.antennaType}
        }
      }
    `;

    return this.getQuery(GET_ANTENNAS);
  }

  public getFilterAntennas(filter: any): Observable<unknown> {
    this.flag = true;
    if (this.scrollSub.closed) this.restartScrollListener();

    JSON.stringify(filter) == JSON.stringify(this.currentAntennasFilter)? [this.skipAntennas = 0, this.antennas = [] ]: 
    [this.skipAntennas = 0, this.store.dispatch(setAntennas({antennas: {antennas: []}})), this.isFilter = true];

    const parameters = JSON.stringify( Object.entries(filter).filter((el) => !!el[1]) );
    this.currentAntennasFilter = filter;

    const GET_ANTENNAS = gql`
      {
        antennasFilter(
          parameters: ${parameters}, 
          skip: ${this.skipAntennas * this.skipLimit}
        )
        {
          ${this.antennaType}
        }
      }
    `;

    console.log(GET_ANTENNAS)

    return this.getQuery(GET_ANTENNAS);
  }

  /* <--- Here begin code regarding with scrollEvent ---> */

  async scrollEvent(that: any) {
    if (that.flag) return;

    const clousure: HTMLElement = document.querySelector('.clousure')!;
    if (!( clousure.clientHeight + clousure.offsetTop - window.outerHeight * 1.75 < window.scrollY )) return;

    that.flag = true;

    const newAntennas: Observable<Antenna[] | any> = that.isFilter? that.getFilterAntennas(that.currentAntennasFilter): that.getAllAntennas(that.skipAntennas);
    that.skipAntennas++;

    console.log(that.skipAntennas)

    newAntennas.subscribe(
      (e: { data: { allAntennas?: Antenna[]; antennasFilter?: Antenna[] } }) => {

        if (!e) return;
        const response: Antenna[] | any = e.data.allAntennas || e.data.antennasFilter;
        if(!response) return;

        if (response.length == 1 && !response[0].ant_name) return that.scrollSub.unsubscribe();
        if(response.length) this.store.dispatch(setAntennas({antennas: {antennas: response} }))

        if (response.length < 24) return that.scrollSub.unsubscribe();
        that.flag = false;
      }
    );
  }

  private restartScrollListener()
  {
    this.flag = false;
    this.scrollSub = fromEvent(window, 'scroll').subscribe((e) => this.scrollEvent(this) );
  }
}