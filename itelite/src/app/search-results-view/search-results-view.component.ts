import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { AppService } from '@appService';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-search-results-view',
  standalone: true,
  imports: [],
  templateUrl: './search-results-view.component.html',
  styleUrl: './search-results-view.component.scss'
})
export class SearchResultsViewComponent {
  
  constructor(
    protected appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,
  ){
    appService.componentsList = [ContentComponent, FooterComponent ];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

}
