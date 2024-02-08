import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeViewComponent } from './home-view/home-view.component';
import { sendMainViewElements } from './reducer';

import { files } from '@files';
import { View } from '@types';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [Store, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, HomeViewComponent, RouterModule ],
})
export class AppComponent implements AfterViewInit {
  title = 'itelite';

  protected readonly logo: string = files.nav;
  protected displayMenu: {flag: boolean} = {flag: false};

  @ViewChild('burgerMenu') private burgerMenu!: ElementRef;

  @ViewChild('headerView', { read: ViewContainerRef, static: true })
  private headerViewEl!: ViewContainerRef;

  @ViewChild('mainView', { read: ViewContainerRef, static: true })
  private mainViewEl!: ViewContainerRef;

  @ViewChild('footerView', { read: ViewContainerRef, static: true })
  private footerViewEl!: ViewContainerRef;

  constructor(
    private store: Store<{ provideHomeView: { view: View } }>,
    @Inject(PLATFORM_ID) private platform_id: string,
    private appService: AppService
  ) {}

  ngAfterViewInit(): void {

    if(isPlatformBrowser(this.platform_id)) this.appService.navListAction(this.burgerMenu.nativeElement, this.displayMenu)

    this.store.dispatch(
      sendMainViewElements({
        view: {
          header: Object.freeze(this.headerViewEl),
          main: Object.freeze(this.mainViewEl),
          footer: Object.freeze(this.footerViewEl)
        },
      })
    );
  }

  toggleList()
  {
    this.displayMenu.flag = !this.displayMenu.flag;
  }
}