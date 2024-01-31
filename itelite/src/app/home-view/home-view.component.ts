import { Component, AfterViewInit, Renderer2, ViewContainerRef } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss', //to nie błąd durniu
  template: `
    <header #headerEl></header>
    <main #main></main>
  `
})
export class HomeViewComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private componentFactory: ViewContainerRef) {}

  ngAfterViewInit(): void {
    const header = this.renderer.selectRootElement("header");
    const component = this.componentFactory.createComponent(HeaderContentComponent);

  }
}
