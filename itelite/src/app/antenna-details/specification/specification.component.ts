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
      
      const details = e.details.details;

      this.electricalProperties = details.electricalProperties;
      this.enclosureProperties = details.enclosureProperties;
      this.mechanicalProperties = details.mechanicalProperties;

    });
  }
}
