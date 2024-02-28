import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './content/content.component';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [ContentComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
