import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [Store],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itelite';
  protected view: Observable<any> | undefined;

  constructor( @Inject(PLATFORM_ID) private platform: any, private store: Store<{MainView: any}>){

    this.view = store.select("MainView");
    this.view.subscribe((e) => {
      console.log(e)
    })

  }

}
