import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { files } from '@files';
import { Store } from '@ngrx/store';

import { Antenna } from '@types';
import jsPDF from 'jspdf';
import { CreateHTMLService } from './create-html.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

  protected readonly documentDownloadImage: string = files.antenna_details.download;

  constructor(private store: Store<{provideAntennaDetails: any}>, private createHTMLService: CreateHTMLService){
    store.select("provideAntennaDetails")
    .subscribe((e) => this.neatSpecifications(e));
  }

  neatSpecifications(e: any)
  {
    const details = e.details.details;
    this.createHTMLService.antennaDetailsToDatasheet = details;

    this.createHTMLService.electricalProperties = details.electricalProperties;
    this.createHTMLService.enclosureProperties = details.enclosureProperties;
    this.createHTMLService.mechanicalProperties = details.mechanicalProperties;

    this.createHTMLService.subTitle = details.titleExtended;

    this.createHTMLService.plots = this.createHTMLService.antennaDetailsToDatasheet?.plots;
    this.createHTMLService.images = this.createHTMLService.antennaDetailsToDatasheet?.images;
    this.createHTMLService.dimensions = this.createHTMLService.antennaDetailsToDatasheet?.dimensions
  }

  async createDatasheet()
  {
    const doc = new jsPDF();
    const text: string = await this.createHTMLService.createHTML();

    doc.html(
      text
      , 
      {
        autoPaging: true, 
        width: 175
      }
    )
    .then((e) => {
      doc.save()
    })
    
  }

}
