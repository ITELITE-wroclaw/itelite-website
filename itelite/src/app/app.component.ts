import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeViewService } from './home-view.service';
import { HomeViewComponent } from "./home-view/home-view.component";

import { sendMainViewElements } from './reducer';

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

  @ViewChild('headerView', { read: ViewContainerRef, static: true }) headerViewEl!: ViewContainerRef;
  @ViewChild('mainView', { read: ViewContainerRef, static: true }) mainViewEl!: ViewContainerRef;

  constructor( private store: Store<{provideHomeView: {view: any} }> ){}

  ngAfterViewInit(): void {
    this.store.dispatch( sendMainViewElements( {view: {header: Object.freeze(this.headerViewEl), main: Object.freeze(this.mainViewEl)} } ) );
  }
}
