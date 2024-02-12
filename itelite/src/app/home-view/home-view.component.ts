import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

import { AppService } from '../app.service';
import { MainContentComponent } from './main-content/main-content.component';

import { isPlatformBrowser } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  providers: [ AppService ]
})
export class HomeViewComponent implements AfterViewInit, OnDestroy{
  
  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [HeaderContentComponent, MainContentComponent, HowItWorksComponent, FooterComponent];
    appService.init();
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platform_id)) this.appService.scrollEvent();
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
