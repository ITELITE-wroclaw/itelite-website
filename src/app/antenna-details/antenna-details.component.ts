import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';

import { currentAntennaDetails } from '@reducer';
import { Subscription, fromEvent, map, merge } from 'rxjs';

@Component({
  selector: 'app-antenna-details',
  standalone: true,
  imports: [],
  templateUrl: './antenna-details.component.html',
  styleUrl: './antenna-details.component.scss'
})
export class AntennaDetailsComponent implements AfterViewInit, OnDestroy{

  route: any;

  private readonly optionalComponents:{ [key: string]: [number, any]} | any = {
    "gain": GainComponent,
    "dimensions":  DimensionsComponent,

    "plots": PlotsComponent,
    "images":  PicturesComponent
  }

  private subscription: Subscription = new Subscription();
  private imgDisplay: HTMLElement;

  constructor(
    private appService: AppService,
    private store: Store<{}>,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platform_id: string,
    private renderer: Renderer2,
    private router: Router
  )
  {
    AntennaDetailsComponent.prototype.route = activatedRoute;

    appService.originComponentsList = [
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

        const electricalProperties: any[] = [];
        const enclosureProperties: any[] = [];
        const mechanicalProperties: any[] = [];

        const app: string[] = details.parameters1.split(";");
        let des: string[] = details.parameters2.split(";");

        des = des.map((x: string) => {
          if(x.includes("Gwarancja")) x = x.replace("Gwarancja", "Warranty");
          return x;
        });

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

        details.titleExtended = `${parameters1[1]} GHz, ${details.ant_type} ${text}`;
        details.titleExtended = details.titleExtended.replaceAll(" ,", ",");
        
        return details;
      })
    )
    .subscribe((data: any) => {

      store.dispatch(currentAntennaDetails({details: data}));
      appService.componentsList = [].concat(appService.originComponentsList);

      Object.keys(this.optionalComponents)
      .forEach((e: any) => {
        if(!data[`${e}`] || data[`${e}`] == null) appService.componentsList.splice( appService.componentsList.findIndex((x) => x == this.optionalComponents[`${e}`]), 1); 
      })
      
    })

    appService.init();
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }
  
  ngAfterViewInit(): void {
    this.subscription = fromEvent(document.body, "click")
    .subscribe((e) => {
      if(!( e.target instanceof HTMLImageElement && e.target.classList.contains("peep") ) || this.imgDisplay) return this.removeImgList(e.target as HTMLElement);

      const imagesCollection = Array.from(e.target.parentElement.parentElement.querySelectorAll("img")).map((img) => img.src);
      const id: number = imagesCollection.findIndex((imgSrc: string) => imgSrc == e.target['src']);

      this.investigateImg(imagesCollection, id);
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.appService.purgeSubscriptions();

    if(this.imgDisplay) this.imgDisplay.remove();
  }

  removeImgList(element: HTMLElement) {
    if(element.classList.contains("imgDisplay")) return;
    let e = element;

    for(let i=0; i<6; i++)
    {
      e = e.parentElement;
      if(e == null) break;
      if( e.classList.contains("imgDisplay") ) break;

    }

    if(e?.classList.contains("imgDisplay")) return;

    this.imgDisplay?.remove();
    this.imgDisplay = undefined;
  };

  investigateImg(images: string[], id: number)
  {
    let currentID: number = id;

    const imgDisplay = document.createElement("div");
    imgDisplay.classList.add("imgDisplay");

    const img = document.createElement("img");
    img.src = images[id];

    const leftArrow = document.createElement("div");
    leftArrow.setAttribute("data-arrow", "left");
    leftArrow.classList.add("left");

    const rightArrow = document.createElement("div");
    rightArrow.setAttribute("data-arrow", "right");
    rightArrow.classList.add("right");

    document.body.appendChild(imgDisplay);

    imgDisplay.appendChild(leftArrow);
    leftArrow.insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#537793" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>');

    imgDisplay.appendChild(rightArrow);
    rightArrow.insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#537793" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>');

    imgDisplay.appendChild(img);

    this.imgDisplay = this.renderer.selectRootElement(".imgDisplay", true);

    merge(
      fromEvent(rightArrow, "click"),
      fromEvent(leftArrow, "click")
    )
    .subscribe((e: any) => {

      let element: HTMLElement = e.target;
      for(let i=0; i<4; i++)
      {
        const thatElement = element.getAttribute("data-arrow") || element.parentElement.getAttribute("data-arrow");
        if( thatElement ) 
        {
          var direction = thatElement;
          break;
        }

        element = element.parentElement;
      };

      direction == "left"? currentID-- : currentID++;
      if(currentID < 0) currentID = images.length - 1;
      if(currentID == images.length) currentID = 0;

      img.src = images[currentID];
    });
  }
}
