import { ChangeDetectorRef, ComponentFactoryResolver, Inject, Injectable, PLATFORM_ID, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';

import { View } from '@types';
import { Subscription, filter, fromEvent, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public currentComponentID: number = 0;
  public componentsList: any[] = [];

  private availedComponents: any = {};

  private main!: ViewContainerRef;
  private footer!: ViewContainerRef;

  private subscriptions!: Subscription[];

  constructor(
    @Inject(PLATFORM_ID) private platform_id: string, 
    private changeDetRef: ChangeDetectorRef,
    private store: Store<{provideHomeView: {view: View } }>,
    private componentFactory: ComponentFactoryResolver,
    private router: Router
  ){}

  public init(): void
  {
    this.store.select("provideHomeView")
    .subscribe((data) => this.setElementsFromMainView(data));

    this.subscriptions = [];
    this.subscriptions?.push(this.routerSubscribe());
  }

  private routerSubscribe(): Subscription
  {

    function ifClearView(_route: any)
    {
      console.log(_route)
    }

    return this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(ifClearView)
  }

  private setElementsFromMainView(data: {view: View }): void
  {
    if(!data.view) return;
    const {header, main, footer} = {header: data.view.header, main: data.view.main, footer: data.view.footer};

    if(!header || !main || !footer) return;

    this.main = main;
    this.footer = footer;

    // header component
    const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[0]);
    const component = header.createComponent(_componentFactory);

    this.availedComponents['0'] = component;
  }

  public navListAction(burgerMenu: HTMLElement, displayMenu: {flag: boolean}): void
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
      this.renderComponent(this.currentComponentID + 1)
    })

  }

  private renderComponent(id: number)
  {    

    if(!id || !this.componentsList[`${id}`]) return;
    const previousEl: HTMLElement = this.availedComponents[`${id-1}`].location.nativeElement;

    if( !(previousEl.getBoundingClientRect().top <= window.innerHeight / 2) ) return;
    this.currentComponentID++;

    const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[id]);
    
    const component = id == this.componentsList.length - 1? 
    this.footer?.createComponent(_componentFactory): this.main?.createComponent(_componentFactory);

    this.availedComponents[`${id}`] = component;
  }

  public purgeSubscriptions(): void
  {
    this.subscriptions
    ?.forEach((e) => {
      e.unsubscribe()
    })
    
  }
}
