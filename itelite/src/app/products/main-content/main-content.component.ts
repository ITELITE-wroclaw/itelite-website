import { CommonModule } from '@angular/common';
import { Component, Directive, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { files } from '@files';
import { GetAntennasService } from './get-antennas.service';

import { Store } from '@ngrx/store';
import { Antenna, FilterInterface } from '@types';

import { Observable, Subscription, first, fromEvent, mergeMap, of, switchMap } from 'rxjs';

import { antennasFilter } from '../../reducer';
import { MainService } from './main-service.service';

@Directive({
  selector: "[filter]",
  standalone: true
})
export class FilterDirective{

  constructor(private renderer: Renderer2, private store: Store<{provideFilter: FilterInterface}>){}

  private filterObj: FilterInterface | any = {bands: "", feature: "", frequency: "", radio: ""};
  private filterToSend!: FilterInterface;

  @HostListener("click", ['$event']) handelClick(e: Event)
  {
    const html: HTMLElement = e.target as HTMLElement;
    const createDispatch = <Attribute extends Record<string, any>>(attribute: Attribute & { param: string }) => { 
      this.filterObj[`${attribute['param']}`] = attribute['value'];
      this.filterToSend = Object.assign({}, this.filterObj);
    }
    
    let count: number = 0;

    function isAttribute(this: any, targetHTML: HTMLElement): void
    {
      if(count == 3) return;
      count++;

      targetHTML.hasAttribute("data-filter")? 
      [ createDispatch( JSON.parse(targetHTML.getAttribute("data-filter")!) ), this.renderer.addClass(targetHTML, 'active'), this.store.dispatch( antennasFilter({ filter: this.filterToSend }) ) ]: 
      isAttribute.call(this, targetHTML.parentElement!)
    }

    isAttribute.call(this, html);
  }

}

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


  private scrollValues = {
    flag: false,
    skipAntennas: 1,
    scrollEvent: new Subscription()
  }

  protected readonly features = [ "Radio Space", "Flat Panel", "Single Pol", "MIMO 2X2", "MIMO 3X3", "Multi MIMO 3X3" ];
  protected JSON: JSON = JSON;

  constructor(
      private store: Store<{provideAntennas: {antennas: any}, provideFilter: FilterInterface}>, 
      protected mainService: MainService | null
  ){}

  ngOnInit(): void {
    this.store.select("provideAntennas")
    .subscribe((e) => this.mainService?.antennas.push(...e.antennas))

    this.scrollValues.scrollEvent = fromEvent(window, "scroll")
    .subscribe( (e) => this.mainService?.scrollEvent(this.scrollValues))

    this.store
    .select("provideFilter")
    .pipe(
      switchMap((e: any): any => {
        if(!Object.values(e).some((value: any) => value.length > 0)) return of(0);
        return this.mainService?.getFilterAntennas(e);
      })
    )
    .subscribe((x: any) => {
      if(x.data?.antennasFilter) this.mainService?.antennas.push(x.data.antennasFilter);
    })
    
  }

  ngOnDestroy(): void {
    this.mainService = null;
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
