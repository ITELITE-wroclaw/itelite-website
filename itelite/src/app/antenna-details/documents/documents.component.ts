import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { files } from '@files';
import { Store } from '@ngrx/store';

import { Antenna } from '@types';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

  protected readonly documentDownloadImage: string = files.antenna_details.download;
  private antennaDetailsToDatasheet!: Antenna;

  private readonly logo: string = files.nav;
  private subTitle!: string;

  private electricalProperties: any[] = [];
  private enclosureProperties: any[] = [];
  private mechanicalProperties: any[] = [];

  private plots!: string[];
  private images!: string[];
  private mainImg!: string;

  constructor(private store: Store<{provideAntennaDetails: any}>, private httpClient: HttpClient){
    store.select("provideAntennaDetails")
    .subscribe((e) => this.neatSpecifications(e));
  }

  neatSpecifications(e: any)
  {
    const details = e.details.details;
    this.antennaDetailsToDatasheet = details;

    const images = JSON.parse(this.antennaDetailsToDatasheet.data_values);

    this.mainImg = images.file;
    this.plots = images.plots;
    this.images = images.images;

    this.electricalProperties = details.electricalProperties;
    this.enclosureProperties = details.enclosureProperties;
    this.mechanicalProperties = details.mechanicalProperties;

    this.subTitle = details.titleExtended;
  }

  createDatasheet()
  {
    const doc = new jsPDF();

    const getFeaturesList = () =>
    {
      const gather = this.antennaDetailsToDatasheet.applications?.split("\r\n").filter(e => e.length);

      let list = "";
      gather?.forEach((val) => list += "<li style='font-size: 4px; list-style-type: disc !important; margin-top: 2px;'>"+val+"</li>");

      return list;
    }

    const getImages = (images: string[], title: string) => {

      if(!images.length) return "";

      let text = `
        <div style='width: 220px; padding-top: 10px; position: relative;'>
        <h5>${title}</h5>
      `;

      images
      .forEach((img) => {
        console.log(img)
        text += `<img src='image/png; base64, ${img}' style='width: 80px; height: auto;'>`;
      });

      text += "</div>";

      return text;
    }

    doc.html(
      `
        <header style='display: block; width: 250px; border-bottom: 1px solid #F5F5F5; padding-bottom: 3px;'>
          <img style='width: 45px; height: auto; margin-left: 17px;' src='${this.logo}'>
        </header>

        <div style='height: 730px;'>
          <div style='width: 230px; position: relative; border-bottom: 1px solid #F5F5F5;'>

            <div style='display: inline-block; width: 95px;'>
              <h5 style='color: #1a2c3d; font-size: 7px; margin-top: 6px; margin-left: 22px;'>${this.antennaDetailsToDatasheet.ant_name}</h5>
              <h6 style='color: #1a2c3d; font-size: 5px; margin-top: 2px; margin-left: 22px; width: 175px;'>${this.subTitle}</h6>
              <img style='width: 85px; height: 85px; padding: 7px 0px 13px 17px;' src='data:image/png; base64, ${this.mainImg}'>
            </div>

            <div style='display: inline-block; width: 60px; position: absolute; top: 35px; left: 118px;'>
                <h5 style='color: #1a2c3d; font-size: 6px !important; margin-top: 6px; padding-bottom: 2px;'>Antenna Key Features</h5>
                <ul>
                    ${getFeaturesList()}
                </ul>
            </div>

          <div>

          <div style='width: 220px; padding-left: 10px; position: relative; font-size: 6px;'>
              <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 10px; left: 8px;'>${this.createList("ELECTRICAL PROPERTIES", this.electricalProperties)}</div>
              <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 10px; left: 75px;'>${this.createList("MECHANICAL PROPERTIES", this.mechanicalProperties)}</div>
              <div style='display: inline-block; width: 60px; position: absolute; top: 10px; left: 148px;'>${this.createList("ENCLOSURE PROPERTIES", this.enclosureProperties)}</div>
          </div>
        </div>

        ${getImages(this.plots, "PLOTS")}
        
        ${getImages(this.images, "IMAGES")}
            
      `, 
      {autoPaging: true, width: 180}
    )
    .then((e) => {
      doc.save()
    })
    
  }

  createList(header: string, arr: string[])
  {
    let text = "<h5 style='color: rgb(251, 187, 42); margin-top: 6px;'>"+header+"</h5>";

    text += "<ul style='margin-top: 5px;'>"
    arr
    .forEach((e) => {
      text += `<li style='font-size: 4px; list-style-type: disc !important; margin-top: 1px;'> <span>${e[0]}</span> <span>${e[1]}</span> </li>`;
    })

    text += "</ul>";
    return text;
  }
}
