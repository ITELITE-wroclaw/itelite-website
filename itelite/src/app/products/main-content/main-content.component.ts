import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { files } from '@files';
import { GetAntennasService } from './get-antennas.service';

import { Store } from '@ngrx/store';
import { Antenna, FilterInterface } from '@types';

import { filter, fromEvent, of, switchMap } from 'rxjs';

import { MainService } from './main-service.service';
import { FilterDirective } from './filter-antennas.directive';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, FilterDirective],
  providers: [GetAntennasService],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit, OnDestroy{

  protected readonly bands_img = Object.entries(files.products.main.bands);
  protected readonly background_img: string = files.products.main.bands_background;

  protected readonly features_img = Object.entries(files.products.main.features);
  protected readonly radios_companies = [ 
    "Mikrotik", "Qualcomm", "Silicon Labs", 
    "NXP Semiconductors", "Texas Instruments", 
    "STMicroelectronics", "Skyworks Solutions"
  ]

  protected readonly frequecies = [
    "Multiband", "LTE", "WIFI 6E", 
    "2/3/4/5G", "800 MHz", "900 MHz", 
    "1.8 GHz", "2.2-2.5 GHz", "2.3 GHz", 
    "2.4 GHz", "2.5 GHz", "2.6 GHz", 
    "3.5 GHz", "3.7 GHz", "4.4 GHz", 
    "5 GHz", "6.4 GHz"
  ];

  protected readonly features = [ "Radio Space", "Flat Panel", "Single Pol", "MIMO 2X2", "MIMO 3X3", "Multi MIMO 3X3" ];
  protected JSON: JSON = JSON;

  protected antennas: Antenna[] = [];

  constructor(
      private store: Store<{provideAntennas: {antennas: any}, provideFilter: FilterInterface}>, 
      protected mainService: MainService | null
  ){}

  /* <--- Angular hooks ---> */

  ngOnInit(): void {
    this.store.select("provideAntennas")
    .subscribe((e) =>{!!e?.antennas?.length? this.antennas.push(...e.antennas): this.antennas = [];})

    if(this.mainService) this.mainService.scrollSub = fromEvent(window, "scroll")
    .subscribe( (e) => this.mainService?.scrollEvent(this.mainService))

    this.store
    .select("provideFilter")
    .pipe(
      switchMap((e: any): any => {
        if(!Object.values(e).some((value: any) => value && value.length > 0)) {
          this.antennas = [];
          if(this.mainService) this.mainService.isFilter = false;
          return this.mainService?.getAllAntennas(0);
        }
        return this.mainService?.getFilterAntennas(e);
      })
    )
    .subscribe((x: any) => {
      const antennas = x.data?.antennasFilter || x.data?.allAntennas;
      if(antennas) this.antennas.push(...antennas);
    })
    
  }

  ngOnDestroy(): void {
    this.mainService = null;
  }

  /* <--- function intend for ngFor directive ---> */
  trackByName = (id: number, antenna: Antenna) => antenna.ant_name;
}