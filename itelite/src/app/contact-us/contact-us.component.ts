import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './content/content.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import tt from '@tomtom-international/web-sdk-maps';


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

  ngAfterViewInit(): void {
    this.activatedRoute.data.subscribe( (e: any) => {
      const locationData = e.data.results[0];

      const map = tt.map({
        key: 'V3jauwxXfg3CH5O7cZEKQe5OpkI5y7Vn',
        container: 'map',
        center: [17.0514652, 51.0704564],
        zoom: 14.6
      });

      new tt.Marker({anchor: "center"})
      .setLngLat([17.0489672, 51.0787584])
      .addTo(map);

      // Tworzymy niestandardowy znacznik jako element HTML
      const customMarker = document.createElement('div');
      customMarker.className = 'custom-marker';
      // Możesz dodać tutaj dowolne niestandardowe style lub zawartość do znacznika

      // Dodajemy znacznik do mapy jako element HTML
      map.getCanvasContainer().appendChild(customMarker);

      // Ustawiamy współrzędne dla niestandardowego znacznika (w pikselach)
      const markerLngLat = new tt.LngLat(17.0489672, 51.0787584);

      customMarker.style.left = markerLngLat.lat + 'px';
      customMarker.style.top = markerLngLat.lng + 'px';
  })

   
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
