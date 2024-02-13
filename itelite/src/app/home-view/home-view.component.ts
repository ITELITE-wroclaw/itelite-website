import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AppService } from '../app.service';

import { HeaderContentComponent } from './header-content/header-content.component';
import { MainContentComponent } from './main-content/main-content.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from '../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  providers: [ AppService ]
})
export class HomeViewComponent implements OnDestroy{
  
  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [HeaderContentComponent, MainContentComponent, HowItWorksComponent, FooterComponent];
    appService.init();
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
