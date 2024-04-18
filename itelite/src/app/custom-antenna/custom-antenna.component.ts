import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

import { AppService } from '@appService';
import { HeaderComponent } from '@header';

import { EnclosuresComponent } from './enclosures/enclosures.component';
import { AntennasCollectionComponent } from './antennas-collection/antennas-collection.component';

import { FooterComponent } from '../footer/footer.component';
import { MountingComponent } from './mounting/mounting.component';

import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-antenna',
  standalone: true,
  imports: [],
  templateUrl: './custom-antenna.component.html',
  styleUrl: './custom-antenna.component.scss'
})
export class CustomAntennaComponent implements OnDestroy {

  route: any;

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,

    private activatedRoute: ActivatedRoute
  ){
    appService.componentsList = [HeaderComponent, EnclosuresComponent, AntennasCollectionComponent, MountingComponent, ContactComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
    CustomAntennaComponent.prototype.route = activatedRoute;
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
  
}
