import { ChangeDetectorRef, ComponentFactoryResolver, Inject, Injectable, PLATFORM_ID, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { View } from '@types';
import { from, fromEvent, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public currentComponentID: number = 0;
  public componentsList: any[] = [];

  private availedComponents: any = {};

  private main: ViewContainerRef | undefined;
  private header: ViewContainerRef | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platform_id: string, 
    private changeDetRef: ChangeDetectorRef,
    private store: Store<{provideHomeView: {view: View } }>,
    private componentFactory: ComponentFactoryResolver, 
  ){}

  public init()
  {
    this.store.select("provideHomeView")
    .subscribe((data: {view: {header: ViewContainerRef, main: ViewContainerRef} }) => {

      if(!data.view) return;
      const {header, main} = {header: data.view.header, main: data.view.main};
      if(!header || !main) return;

      this.header = header;
      this.main = main;

      // header component
      const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[0]);
      header.createComponent(_componentFactory);

      this.availedComponents['0'] = true;
      //main component

    })
  }

  public navListAction(burgerMenu: HTMLElement, displayMenu: {flag: boolean})
  {
    this.checkSize(displayMenu);

    var styles: string = window.getComputedStyle(
      burgerMenu
    ).display;

    displayMenu.flag = styles == 'block' ? false : true;
    this.changeDetRef.detectChanges();
  }

  private checkSize(displayMenu: {flag: boolean}) {

    fromEvent(window, "resize")
    .subscribe(() => {
      displayMenu.flag = window.innerWidth > 980;
    })
  }

  public scrollEvent()
  {
    merge(
      fromEvent(window, "wheel"),
      fromEvent(window, "touchmove"),
      fromEvent(window, "scroll")
    )
    .subscribe((e: WheelEvent | any) => {
      console.log(e)
      const id = e.deltaY > 0? this.currentComponentID + 1: this.currentComponentID - 1;
      this.renderComponent(id < 0? 0: id)
    })

  }

  private renderComponent(id: number)
  {
    if(!id || this.availedComponents[`${id}`]) return;
    this.availedComponents[`${id}`] = true;

    const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[id]);
    this.main?.createComponent(_componentFactory);
  }

}
