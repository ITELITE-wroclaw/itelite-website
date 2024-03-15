import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { HeaderComponent } from '@header';
import { FooterComponent } from '../footer/footer.component';

import { isPlatformBrowser } from '@angular/common';
import { FeaturesComponent } from './features/features.component';

import { SpecificationComponent } from './specification/specification.component';
import { GainComponent } from './gain/gain.component';

import { DimensionsComponent } from './dimensions/dimensions.component';
import { PlotsComponent } from './plots/plots.component';

import { PicturesComponent } from './pictures/pictures.component';
import { DocumentsComponent } from './documents/documents.component';

import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { currentAntennaDetails } from '@reducer';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-antenna-details',
  standalone: true,
  imports: [],
  templateUrl: './antenna-details.component.html',
  styleUrl: './antenna-details.component.scss'
})
export class AntennaDetailsComponent {

  private readonly optionalComponents:{ [key: string]: [number, any]} | any = {
    "gain": GainComponent,
    "dimensions":  DimensionsComponent,

    "plots": PlotsComponent,
    "images":  PicturesComponent
  }

  constructor(
    private appService: AppService,
    private store: Store<{}>,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platform_id: string
  )
  {
    appService.componentsList = [
      HeaderComponent, 
      FeaturesComponent, 
      SpecificationComponent,
      GainComponent,
      DimensionsComponent,
      PlotsComponent,
      PicturesComponent,
      DocumentsComponent,
      FooterComponent
    ];

    activatedRoute.data
    .pipe(
      map((e: any) => {
        const details = Object.assign({}, e.data.data.antennasFilter[0]);
        console.log(details)

        const electricalProperties: any[] = [];
        const enclosureProperties: any[] = [];
        const mechanicalProperties: any[] = [];

        const app: string[] = details.parameters1.split(";");
        const des: string[] = details.parameters2.split(";");

        const map = app.reduce((acc: any, item) => {
          const [key, value] = item.split(':');
          acc[key] = value;
          return acc;
        }, {});
  
        const propertiesArray = des.map(item => {
          const [key, value ]= item.split(':');
          return map[key] ? [ Number(key), value, map[key] ] : undefined;
        });

        propertiesArray
        .forEach((element: any) => {
          if(!element) return;

            if(element[0] <14) electricalProperties.push([element[1], element[2]]);
            if(element[0] < 22 && element[0] > 13) enclosureProperties.push([element[1], element[2]]);
            if(element[0] > 21) mechanicalProperties.push([element[1], element[2]]);
        })

        details.plots = details.plots?.split(";");
        details.images = details.images?.split(";");
        details.dimensions = details.dimensions?.split(";")

        details.electricalProperties = electricalProperties;
        details.enclosureProperties = enclosureProperties;
        details.mechanicalProperties = mechanicalProperties;

        const keys: string[] = ["flat_panel", "radio_space", "single_pol", "mimo_2x2", "mimo_3x3", "multi_mimo"];

        const parameters1: string[] = details.electricalProperties.find((x: string[]) => x[0].toLowerCase() == "frequency");
        let text = "";

        keys
        .forEach((_key: string) => {
          if(details[`${_key}`] === true) text += ", "+_key.replace("_", " ");
        });

        details.titleExtended = `${parameters1[1]} GHZ, ${details.ant_type} ${text}`.toUpperCase();
          return details;
        })
    )
    .subscribe((data: any) => {

      store.dispatch(currentAntennaDetails({details: data}));

      Object.keys(this.optionalComponents)
      .forEach((e: any) => {

        if(!data[`${e}`] || data[`${e}`] == null) appService.componentsList.splice( appService.componentsList.findIndex((x) => x == this.optionalComponents[`${e}`]), 1); 
      })
      
    })

    

    appService.init();
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
