import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

import { AppService } from '@appService';
import { HeaderComponent } from '@header';

import { EnclosuresComponent } from './enclosures/enclosures.component';

@Component({
  selector: 'app-custom-antenna',
  standalone: true,
  imports: [],
  templateUrl: './custom-antenna.component.html',
  styleUrl: './custom-antenna.component.scss'
})
export class CustomAntennaComponent implements OnDestroy {

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [HeaderComponent, EnclosuresComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
  
}
