import { Directive, HostListener, Renderer2 } from "@angular/core";
import { Store } from "@ngrx/store";

import { antennasFilter } from "@reducer";
import { FilterInterface } from "@types";

@Directive({
    selector: "[filter]",
    standalone: true
  })
  export class FilterDirective{
  
    constructor(private renderer: Renderer2, private store: Store<{provideFilter: FilterInterface}>){}
  
    private filterObj: FilterInterface | any = {bands: "", feature: "", frequency: "", radio: ""};
    private filterToSend!: FilterInterface;
  
    // catch click events call by customer inner filter element
    @HostListener("click", ['$event']) handelClick(e: Event)
    {
      const html: HTMLElement = e.target as HTMLElement;
      const createDispatch = <Attribute extends Record<string, any>>(attribute: Attribute & { param: string }, target: HTMLElement) => { 

        this.filterObj[`${attribute['param']}`] == attribute['value']? 
        [this.filterObj[`${attribute['param']}`] = "", this.removeStyles(target)]: 
        [this.filterObj[`${attribute['param']}`] = attribute['value'], this.removeStyles(target), this.addStyles(target)];


        this.filterToSend = Object.assign({}, this.filterObj);
      }
      
      let count: number = 0;
  
      function isAttribute(this: any, targetHTML: HTMLElement): void
      {
        if(count == 3) return;
        count++;
  
        targetHTML.hasAttribute("data-filter")? 
        [ createDispatch( JSON.parse(targetHTML.getAttribute("data-filter")!), targetHTML ), this.store.dispatch( antennasFilter({ filter: this.filterToSend }) ) ]: 
        isAttribute.call(this, targetHTML.parentElement!)
      }
  
      isAttribute.call(this, html);
    }

    addStyles(targetHTML: HTMLElement | any)
    {
      this.removeStyles(targetHTML)
      this.renderer.addClass(targetHTML, 'active');
    }

    removeStyles(element: HTMLElement | any)
    {
      const childElementsArray =  element.parentElement.getElementsByClassName("child");

      Array.from(childElementsArray)
      .forEach((el: any) => el.classList.remove("active"));
    }
  
  }