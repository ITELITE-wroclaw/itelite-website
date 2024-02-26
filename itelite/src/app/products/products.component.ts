import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '../app.service';

import { HeaderComponent } from '@header';
import { MainContentComponent } from './main-content/main-content.component';

import { FooterComponent } from '../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

import { EnclosuresComponent } from './enclosures/enclosures.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string
  ){
    appService.componentsList = [HeaderComponent, MainContentComponent, EnclosuresComponent, AccessoriesComponent, FooterComponent];
    appService.init();
    
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
  
}