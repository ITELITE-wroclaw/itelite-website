
import { ChangeDetectorRef, ComponentFactoryResolver, Injectable, Renderer2, ViewContainerRef, reflectComponentType } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, NavigationStart, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { View } from '@types';

import { Subject, Subscription, debounceTime, filter, fromEvent, merge } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { searchHTML } from '../searchAtWebsite';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public currentComponentID: number = 0;
  public componentsList: any[] = [];

  private availedComponents: any = {};

  private main!: ViewContainerRef;
  private footer!: ViewContainerRef;
  private header!: ViewContainerRef;

  private subscriptions!: Subscription[];
  private currentRoute: string | undefined;

  private inputContainValue: boolean = false;

  public searchResults: {id: number, text: string, path: string, data?: string}[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private changeDetRef: ChangeDetectorRef,
    private store: Store<{provideHomeView: {view: View } }>,

    private componentFactory: ComponentFactoryResolver,
    private router: Router,
    
    private apollo: Apollo,
    private renderer: Renderer2,

    private activatedRoute: ActivatedRoute
  ){
    this.subSearchSubject();
  }

  public init(): void
  {
    this.store.select("provideHomeView")
    .subscribe((data) => this.setElementsFromView(data));

    this.subscriptions = [];
    this.subscriptions?.push(this.routerSubscribe());
  }

  // after each router swap the view is purge
  private routerSubscribe(): Subscription
  {
    const ifClearView = (e: any) =>
    {
      this.header.clear()
      this.footer.clear();
      this.main.clear();

      this.componentsList = [];
      this.currentRoute = e.url;
    }

    return this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(ifClearView);
  }

  // here components from subscription are set and initial header component is inject
  private setElementsFromView(data: {view: View }): void
  {
    if(!data.view) return;
    const {header, main, footer} = {header: data.view.header, main: data.view.main, footer: data.view.footer};

    if(!header || !main || !footer) return;

    this.main = main;
    this.footer = footer;
    this.header = header;

    // header component
    const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[0]);
    const component = header.createComponent(_componentFactory);

    this.availedComponents['0'] = component;
  }

  // depends of window size way of displaing nav list is different
  public navListAction(burgerMenu: HTMLElement, displayMenu: {flag: boolean}): void
  {
    this.checkSize(displayMenu);
    var styles: string = window.getComputedStyle( burgerMenu ).display;

    displayMenu.flag = styles == 'block' ? false : true;
    this.changeDetRef.detectChanges();
  }

  private checkSize(displayMenu: {flag: boolean})
  {
    fromEvent(window, "resize")
    .subscribe(() => {
      displayMenu.flag = window.innerWidth > 980;
    })
  }

  // during user scroll event the components ough to be inject dynamically
  public scrollEvent()
  {
    merge(
      fromEvent(window, "wheel"),
      fromEvent(window, "touchmove"),
      fromEvent(window, "scroll")
    )
    .subscribe((e: WheelEvent | any) => {
      this.renderComponent(this.currentComponentID + 1, false);
    })

  }

  // dynamiczne generowanie komponentów
  private renderComponent(id: number, flag: boolean)
  {
    if(!id || !this.componentsList[`${id}`]) return;
    const body: HTMLElement = this.renderer.selectRootElement("body", true);

    if( !(body.getBoundingClientRect().bottom < window.innerHeight + 450) &&  !flag) return;
    this.currentComponentID++;

    const _componentFactory = this.componentFactory.resolveComponentFactory(this.componentsList[id]);
  
    const component = id == this.componentsList.length - 1? 
    this.footer?.createComponent(_componentFactory): this.main?.createComponent(_componentFactory);

    this.availedComponents[`${id}`] = component;
  }

  public purgeSubscriptions(): void
  {
    this.subscriptions?.forEach((e) => e.unsubscribe());
    this.currentComponentID = 0;
  }

  public showSearchElement(searchElement: HTMLElement)
  {
    searchElement.classList.add("show");
  }

  public hideTheSearchElement(searchElement: HTMLElement)
  {
    if(this.inputContainValue) return;
    searchElement.classList.remove("show");
  }

  public searchInputEvent(inputText: string)
  {
    this.inputContainValue = !!inputText.length;
    this.searchSubject.next(inputText);
  }

  private subSearchSubject()
  {

    this.searchSubject
    .pipe(debounceTime(300))
    .subscribe((inputText: string) => {
      this.searchResults = [];
      if(!inputText.length) return;

      this.inputContainValue = !!inputText.length;
      const componentsNames = Object.keys(searchHTML);
  
      componentsNames.forEach((e) => {
        const values: string | string[] = Object.keys(searchHTML[`${e}`]);
  
        const checkContent = (parentObjName: string, valueName: string) =>
        {
          const value = searchHTML[`${parentObjName}`][`${valueName}`];

          if(valueName.includes("_")) {
            value.forEach( (y: string) => {
              if( y.toLowerCase().includes(inputText.toLowerCase()) ) {
      
                const id: number = searchHTML[`${parentObjName}`][`${valueName.replace("_", "")}`];
                this.searchResults.push({id, text: parentObjName, path: valueName.replace("_", "") + " / " +y, data: y});
              }
            });
  
            return;
          }
    

          if(valueName.toLowerCase().includes(inputText.toLowerCase()) ) this.searchResults.push({id: value, text: parentObjName, path: valueName});
        }

        values.forEach((y) => {
          checkContent(e, y);
        })
  
      })

      this.changeDetRef.detectChanges();
    })
  }

  public revealComponents()
  {

   this.router.events.subscribe((e) => {

    if(e instanceof ChildActivationEnd)
    {
      const newComponent = e.snapshot.children[0].component;
      const id: number = Number(newComponent.prototype?.route?.snapshot.paramMap.get("id"));

      if( !isNaN(id) && id > 0 ) {

        for(let i=1; i<id+1; i++) setTimeout(() => {
          this.renderComponent(i, true);
        }, 10);

        setTimeout(() => {

          const selector = reflectComponentType(this.componentsList[id]).selector;
          const element: HTMLElement = document.getElementsByTagName(selector)[0] as HTMLElement;
          
          element.scrollIntoView({behavior: "smooth", block: "start"});
        }, 670);
      }
    }
    
   }) 
  }
}
