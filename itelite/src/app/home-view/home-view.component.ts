import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';

import { currentHTMLContent } from '../reducer';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [],
  providers: [Store],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

  private readonly homeViewContent: any = {
    header: {
      div: {
        h1: 'Connect Beyond Boundaries To Your Signals with Antenna Excellence',
        p: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis eta sunt explicabo.'
      }
    }
  }

  constructor(private store: Store<{MainView: any}>, @Inject(PLATFORM_ID) private platform: any){
    
    store.dispatch(currentHTMLContent({data: this.homeViewContent}))
    
  }

}