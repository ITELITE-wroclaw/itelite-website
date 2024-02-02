import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeViewService } from './home-view.service';
import { HomeViewComponent } from "./home-view/home-view.component";

import { sendMainViewElements } from './reducer';

import { files } from '@files';
import { View } from '@types';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [Store, HomeViewService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeViewComponent]
})
export class AppComponent implements AfterViewInit{

  title = 'itelite';

  protected readonly logo: string = files.nav;

  @ViewChild('headerView', { read: ViewContainerRef, static: true }) private headerViewEl!: ViewContainerRef;
  @ViewChild('mainView', { read: ViewContainerRef, static: true }) private mainViewEl!: ViewContainerRef;

  constructor( private store: Store<{provideHomeView: {view: View} }> ){}

  ngAfterViewInit(): void {
    this.store.dispatch( 
      sendMainViewElements( {view: {header: Object.freeze(this.headerViewEl), main: Object.freeze(this.mainViewEl)} } ) 
    );
  }
  
}