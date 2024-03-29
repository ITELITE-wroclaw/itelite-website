import { isPlatformBrowser } from "@angular/common";
import { DomElementSchemaRegistry } from "@angular/compiler";
import { AfterViewInit, Directive, HostListener, Inject, PLATFORM_ID, Renderer2 } from "@angular/core";
import { Store } from "@ngrx/store";

import { antennasFilter } from "@reducer";
import { FilterInterface } from "@types";

import { Subject, debounceTime } from "rxjs";

@Directive({
    selector: "[filter]",
    standalone: true
  })
  export class FilterDirective implements AfterViewInit{
  
    private filterObj: FilterInterface | any = { name: "", bands: [], feature: [], frequency: [], type: [] };
    private filterToSend!: FilterInterface;

    private startTime!: number | null;
    private flag: boolean = false;

    private firstBunch: boolean = true;
    private inputSubject: Subject<string> = new Subject<string>();
  
    constructor(private renderer: Renderer2, private store: Store<{provideFilter: FilterInterface}>, @Inject(PLATFORM_ID) private platform_id: string){
      this.inputSubject.pipe(debounceTime(450))
      .subscribe((e: string) => {
        this.filterObj.name = e;
        this.filterToSend = Object.assign({}, this.filterObj);

        this.store.dispatch( antennasFilter({ filter: this.filterToSend }) );
      });
      
    }

    ngAfterViewInit(): void {
      this.store
      .select("provideFilter")
      .subscribe((e) => {
       

        if(!isPlatformBrowser(this.platform_id)) return;
        if(!this.firstBunch) return;
        
        this.filterObj = Object.assign({}, e);
        this.firstBunch = false;
       
        Object.keys(e)
        .forEach((val) => {

          e[`${val}`] instanceof Array? e[`${val}`].forEach((x) => {
            const thatFilterElement: HTMLElement = document.querySelector(`[data-filter="{\\\"param\\\":\\\"${val}\\\",\\\"value\\\":\\\"${x}\\\"}"]`);

            thatFilterElement.classList.add("active")
          }):  document.querySelector(".filter input")['value'] = e[`${val}`] ;
        })
      });
    }

    // catch click events call by customer inner filter element
    @HostListener("click", ['$event']) handelClick(e: Event)
    {
      const html: HTMLElement = e.target as HTMLElement;
      const createDispatch = <Attribute extends Record<string, any>>(attribute: Attribute & { param: string }, target: HTMLElement) => {

        this.filterObj[`${attribute['param']}`] == attribute['value']?
        [this.filterObj[`${attribute['param']}`] = "", this.removeStyles(target)]: 
        [this.filterObj[`${attribute['param']}`] = [...this.filterObj[`${attribute['param']}`], attribute['value'] ], this.removeStyles(target), this.addStyles(target)];

        this.filterToSend = Object.assign({}, this.filterObj);
      };
      
      let count: number = 0;
  
      function isAttribute(this: any, targetHTML: HTMLElement): void
      {
        if(count == 3) return;
        count++;

        console.log(this);
        console.log(targetHTML);

        targetHTML.hasAttribute("data-filter") || targetHTML.hasAttribute("data-arrow")? 
        [targetHTML.hasAttribute("data-filter")? 
          [ createDispatch( JSON.parse(targetHTML.getAttribute("data-filter")!), targetHTML ), this.store.dispatch( antennasFilter({ filter: this.filterToSend }) ) ]:
          this.moveScroll(targetHTML.parentElement, targetHTML.getAttribute("data-arrow"))
        ]:
        isAttribute.call(this, targetHTML.parentElement!)
      };
  
      isAttribute.call(this, html);
    }

    addStyles(targetHTML: HTMLElement | any)
    {
      this.removeStyles(targetHTML)
      this.renderer.addClass(targetHTML, 'active');
    }

    removeStyles(element: HTMLElement | any)
    {
      if(element.classList.contains("active")) element.classList.remove("active")
    }

    moveScroll(element: HTMLElement, direction: string)
    {
      if(this.flag) return;

      this.flag = true;
      const scrollElement: HTMLElement = element.querySelector(".list-elements")!;

      const widthToScroll: number = Number((element.getBoundingClientRect().width / 1.5).toFixed(0));
      let currentScrollX: number = scrollElement.scrollLeft;
      
      const pointX = direction == "left"? widthToScroll : widthToScroll + currentScrollX;
      direction == "left"? this.animateScroll(scrollElement, currentScrollX - pointX) :this.animateScroll(scrollElement, pointX);
    }

    animateScroll(scrollContainer: HTMLElement, targetScroll: number) {
      if (!this.startTime) this.startTime = performance.now();
      const progress = performance.now() - this.startTime;

      const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
      
      const currentScrollLeft = scrollContainer.scrollLeft;
      const distance = targetScroll - currentScrollLeft;

      const scrollLeft = easeInOutQuad(progress, currentScrollLeft, distance, 2900);
      scrollContainer.scrollLeft = scrollLeft;

      if (progress < 680) {
          window.requestAnimationFrame( (timestamp) => {
              this.animateScroll(scrollContainer, targetScroll);
          });
      } else {
          this.startTime = null;
          this.flag = false;
      }
  }
  
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.inputSubject.next(value);
  }
}