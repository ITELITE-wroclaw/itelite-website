import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './content/content.component';

import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  route: any;

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,

    private activatedRoute: ActivatedRoute
  ){
    appService.componentsList = [ContentComponent, FooterComponent];
    appService.init();
    
    OrderComponent.prototype.route = activatedRoute;
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
