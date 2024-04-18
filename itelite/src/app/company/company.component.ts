import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../footer/footer.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  route: any;

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,

    private activatedRoute: ActivatedRoute
  ){
    appService.componentsList = [ContentComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent();
    CompanyComponent.prototype.route = activatedRoute;
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
