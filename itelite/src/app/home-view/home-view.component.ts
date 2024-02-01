import { Component, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  imports: [ HeaderContentComponent ]
})
export class HomeViewComponent implements AfterViewInit {
  
  constructor( 
    private componentFactory: ComponentFactoryResolver, 
    private store: Store<{provideHomeView: {view: {header: ViewContainerRef, main: ViewContainerRef} } }>
  ){}

  ngAfterViewInit(): void {
    this.store.select("provideHomeView")
    .subscribe((data: {view: {header: ViewContainerRef, main: ViewContainerRef} }) => {

      console.log(data)

      if(!data) return;
      const {header, main} = {header: data.view.header, main: data.view.main};

      if(!header || main) return;
      const _componentFactory = this.componentFactory.resolveComponentFactory(HeaderContentComponent);

      header.createComponent(_componentFactory);

      //main component
    })
  }
}
