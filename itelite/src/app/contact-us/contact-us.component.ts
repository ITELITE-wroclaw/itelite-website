import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './content/content.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import * as leaflet from 'leaflet';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements AfterViewInit{

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,
    private activatedRoute: ActivatedRoute
  ){
    appService.componentsList = [ContentComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent();
  }

  protected map!: leaflet.Map;

  ngAfterViewInit(): void {
    this.activatedRoute.data.subscribe( (e: any) => {
      const locationData = e.data.results[0];

      this.map = leaflet.map('map', {
        center: [ 51.0709584, 17.0514672 ],
        zoom: 16
      });

      const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
      leaflet.marker([ 51.0699784, 17.0486672]).addTo(this.map);
    })
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
