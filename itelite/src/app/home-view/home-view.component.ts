import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AppService } from '../app.service';

import { HeaderComponent } from '@header';
import { MainContentComponent } from './main-content/main-content.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from '../footer/footer.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  providers: [ AppService ]
})
export class HomeViewComponent implements OnDestroy{
  
  route: any;

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,

    private activatedRoute: ActivatedRoute
  ){
    appService.componentsList = [HeaderComponent, MainContentComponent, HowItWorksComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
    HomeViewComponent.prototype.route = activatedRoute;
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
