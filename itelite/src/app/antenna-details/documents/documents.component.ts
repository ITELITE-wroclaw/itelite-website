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

  protected electricalProperties: any[] = [];
  protected enclosureProperties: any[] = [];
  protected mechanicalProperties: any[] = [];

  constructor(private store: Store<{provideAntennaDetails: any}>, private httpClient: HttpClient){
    store.select("provideAntennaDetails")
    .subscribe( (e) => {this.antennaDetailsToDatasheet = e.details.details; this.neatSpecifications(e.details.details)});

  }

  neatSpecifications(details: any)
  {

     const app: string[] = details.parameters1.split(";");
     const des: string[] = details.parameters2.split(";");

      const map = app.reduce((acc: any, item) => {
        const [key, value] = item.split(':');
        acc[key] = value;
        return acc;
      }, {});

      const propertiesArray = des.map(item => {
        const [key, value ]= item.split(':');
        return map[key] ? [ Number(key), value, map[key] ] : undefined;
      });

      propertiesArray
      .forEach((element: any) => {
        if(!element) return;

          if(element[0] <14) this.electricalProperties.push([element[1], element[2]]);
          if(element[0] <22 && element[0] > 13) this.enclosureProperties.push([element[1], element[2]]);
          if(element[0] > 21) this.mechanicalProperties.push([element[1], element[2]]);
      })
  }

  createDatasheet()
  {
    const doc = new jsPDF();

    const getFeaturesList = () =>
    {
      const gather = this.antennaDetailsToDatasheet.applications?.split("\r\n").filter(e => e.length);

      let list = "";
      gather?.forEach((val) => list += "<li style='font-size: 4px; list-style-type: disc !important;'>"+val+"</li>");

      return list;
    }

    doc.html(
      `
        <header style='display: block; width: 250px; border-bottom: 1px solid #F5F5F5; padding-bottom: 3px;'>
          <img style='width: 45px; height: auto; margin-left: 17px;' src='${this.logo}'>
        </header>

        <div>
          <div style='width: 230px; position: relative;' >

            <div style='display: inline-block; width: 95px;'>
              <h5 style='color: #1a2c3d; font-size: 7px; margin-top: 6px; margin-left: 17px;'>${this.antennaDetailsToDatasheet.ant_name}</h5>
              <img style='width: 85px; height: 85px; padding: 8px 0px 13px 0px;' src='data:image/png; base64, ${this.antennaDetailsToDatasheet.photo_value}'>
            </div>

            <div style='display: inline-block; width: 60px; position: absolute; top: 26px; left: 107px;'>
                <h5 style='color: #1a2c3d; font-size: 6px !important; margin-top: 6px;'>Antenna Key Features</h5>
                <ul>
                    ${getFeaturesList()}
                </ul>
            </div>

          <div>

          <div style='width: 220px; padding-left: 10px; position: relative;'>
              <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 0; left: 8px;'>${this.createList("ELECTRICAL PROPERTIES", this.electricalProperties)}</div>
              <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 0; left: 78px;'>${this.createList("MECHANICAL PROPERTIES", this.mechanicalProperties)}</div>
              <div style='display: inline-block; width: 60px; position: absolute; top: 0; left: 149px;'>${this.createList("ENCLOSURE PROPERTIES", this.enclosureProperties)}</div>
          </div>
        </div>

        
            
      `, 
      {autoPaging: true, width: 180}
    )
    .then((e) => {
      doc.save()
    })
    
  }

  createList(header: string, arr: string[])
  {
    let text = "<h5 style='color: #1a2c3d; font-size: 6px; margin-top: 6px;'>"+header+"</h5>";

    text += "<ul style='margin-top: 5px;'>"
    arr
    .forEach((e) => {
      text += `<li style='font-size: 4px; list-style-type: disc !important; margin-top: 1px;'> <span>${e[0]}</span> <span>${e[1]}</span> </li>`;
    })

    text += "</ul>";
    return text;
  }
}
