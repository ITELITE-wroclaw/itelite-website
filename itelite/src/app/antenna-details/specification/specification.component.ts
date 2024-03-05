import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-specification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specification.component.html',
  styleUrl: './specification.component.scss'
})
export class SpecificationComponent {

  protected electricalProperties: any[] = [];
  protected enclosureProperties: any[] = [];
  protected mechanicalProperties: any[] = [];

  constructor(private store: Store<{provideAntennaDetails: any}>){
    store.select("provideAntennaDetails")
    .subscribe((e) => {

     const app: string[] = e.details.details.antennasFilter[0].parameters1.split(";");
     const des: string[] = e.details.details.antennasFilter[0].parameters2.split(";");

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

    });
  }
}
