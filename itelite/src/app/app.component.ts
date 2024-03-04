import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';

import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeViewComponent } from './home-view/home-view.component';
import { AppService } from './app.service';

import { files } from '@files';
import { View } from '@types';

import { sendMainViewElements } from '@reducer';
import { ApolloService } from './apollo.service';

@Directive({
  standalone: true,
  selector: "[dockerElement]"
})
export class DockerElement{
  @Input() public name!: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [Store, AppService],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  imports: [CommonModule, RouterOutlet, HomeViewComponent, RouterModule, DockerElement ],
})
export class AppComponent implements AfterViewInit {
  title = 'itelite';

  protected readonly logo: string = files.nav;
  protected displayMenu: {flag: boolean} = {flag: false};

  @ViewChild('burgerMenu') private burgerMenu!: ElementRef;
  @ViewChildren(DockerElement, { read: ViewContainerRef }) private docker_elements!: ViewContainerRef[];

  constructor(
    private store: Store<{ provideHomeView: { view: View } }>,
    @Inject(PLATFORM_ID) private platform_id: string,
    private appService: AppService,
    private apolloService: ApolloService
  ) {}

  ngAfterViewInit(): void {

    if(isPlatformBrowser(this.platform_id)){
      const obj: {header: any, main: any, footer: any} | any = {header: null, main: null, footer: null};

      this.appService.navListAction(this.burgerMenu.nativeElement, this.displayMenu);
      this.docker_elements.forEach((e) => {

        const dockerElementInstance: DockerElement = e.injector.get(DockerElement);
        obj[`${dockerElementInstance.name}`] = Object.freeze(e);
        
      })

      this.store.dispatch(
        sendMainViewElements({
          view: obj,
        })
      )
    }
  }

  toggleList()
  {
    this.displayMenu.flag = !this.displayMenu.flag;
  }
}