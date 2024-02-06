import { Component, AfterViewInit, ComponentFactoryResolver, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

import { Store } from '@ngrx/store';
import { View } from '@types';

import { AppService } from '../app.service';
import { MainContentComponent } from './main-content/main-content.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  imports: [ HeaderContentComponent, MainContentComponent ],
  providers: [ AppService ]
})
export class HomeViewComponent implements AfterViewInit, OnInit{
  
  constructor(
    private componentFactory: ComponentFactoryResolver, 
    private store: Store<{provideHomeView: {view: View } }>,
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [HeaderContentComponent, MainContentComponent];
    appService.init();
  }

  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
    console.log(1)
    if(isPlatformBrowser(this.platform_id)) this.appService.scrollEvent()
  }
}
