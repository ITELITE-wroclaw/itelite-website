import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../footer/footer.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ContentComponent as _contentComponentContactUs } from '../contact-us/content/content.component';

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

    appService.componentsList = [ContentComponent, AboutUsComponent, _contentComponentContactUs, FooterComponent];
    appService.init();
    
    CompanyComponent.prototype.route = activatedRoute;

  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
