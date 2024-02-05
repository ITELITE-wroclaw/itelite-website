import { Component, AfterViewInit, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

import { Store } from '@ngrx/store';
import { View } from '@types';

import { AppService } from '../app.service';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  imports: [ HeaderContentComponent ],
  providers: [ AppService ]
})
export class HomeViewComponent implements AfterViewInit, OnInit{
  
  constructor( 
    private componentFactory: ComponentFactoryResolver, 
    private store: Store<{provideHomeView: {view: View } }>,
    private appService: AppService
  ){
    appService.componentsList = [HeaderContentComponent, MainContentComponent];
    appService.init();
  }

  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
    this.appService.scrollEvent()
  }
}
