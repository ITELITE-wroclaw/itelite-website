import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { files } from '@files';
import { GetAntennasService } from './get-antennas.service';

import { Store } from '@ngrx/store';
import { Antenna } from '@types';

import { Subscription, fromEvent } from 'rxjs';
import { AntennasGetterService } from './antennas-getter.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  providers: [GetAntennasService],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit{

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

  private skipAntennas: number = 1;
  private flag: boolean = false;

  private scrollEventListener!: Subscription;

  protected readonly features = [ "Radio Space", "Flat Panel", "Single Pol", "MIMO 2X2", "MIMO 3X3", "Multi MIMO 3X3" ];
  protected antennas: Antenna[] = [];

  constructor(
      private store: Store<{provideAntennas: {antennas: any}}>, 
      private getAntennas: AntennasGetterService
    ){}

  ngOnInit(): void {
    this.store.select("provideAntennas")
    .subscribe((e) => this.antennas.push(...e.antennas))

    this.scrollEventListener = fromEvent(window, "scroll")
    .subscribe( (e) => this.scrollEvent(e))
  }

  async scrollEvent(e: Event)
  {
    if(this.flag) return;

    const clousure: HTMLElement = document.querySelector(".clousure")!;
    if(clousure.clientHeight + clousure.offsetTop - window.outerHeight * 1.75 < window.scrollY )  {

      this.flag = true;

      const newAntennas: Antenna[] = await this.getAntennas.getAllAntennas(this.skipAntennas);
      this.skipAntennas++;

      this.antennas.push(...newAntennas);

      if(newAntennas.length < 28) this.scrollEventListener.unsubscribe();
      this.flag = false;
    }
  }

  propertiesToArray(properties: {frequency: string, gain: string, polarization: string}): [string, string][]
  {
    return Object.entries(properties);
  }

  trackByName(id: number, antenna: Antenna)
  {
    return antenna.ant_name;
  }
}
