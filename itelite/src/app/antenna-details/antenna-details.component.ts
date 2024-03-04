import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from '@appService';

import { HeaderComponent } from '@header';
import { FooterComponent } from '../footer/footer.component';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FeaturesComponent } from './features/features.component';

import { SpecificationComponent } from './specification/specification.component';
import { GainComponent } from './gain/gain.component';

import { DimensionsComponent } from './dimensions/dimensions.component';
import { PlotsComponent } from './plots/plots.component';

import { PicturesComponent } from './pictures/pictures.component';
import { DocumentsComponent } from './documents/documents.component';

import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { currentAntenna, currentAntennaDetails } from '@reducer';

@Component({
  selector: 'app-antenna-details',
  standalone: true,
  imports: [],
  templateUrl: './antenna-details.component.html',
  styleUrl: './antenna-details.component.scss'
})
export class AntennaDetailsComponent {
  constructor(
    private appService: AppService,
    private store: Store<{}>,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platform_id: string
  )
  {
    activatedRoute.data.subscribe((e: any) => store.dispatch(currentAntennaDetails({details: e.data.data})))

    appService.componentsList = [
      HeaderComponent, 
      FeaturesComponent, 
      SpecificationComponent, 
      GainComponent, 
      DimensionsComponent, 
      PlotsComponent, 
      PicturesComponent, 
      DocumentsComponent, 
      FooterComponent
    ];

    appService.init();
    if(isPlatformBrowser(platform_id)) this.appService.scrollEvent(); 
  }

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
}
