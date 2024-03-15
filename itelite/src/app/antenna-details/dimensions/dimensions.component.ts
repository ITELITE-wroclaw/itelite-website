import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dimensions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dimensions.component.html',
  styleUrl: './dimensions.component.scss'
})
export class DimensionsComponent {

  protected antennaDimensions: string[] | undefined;

  constructor(private store: Store<{provideAntennaDetails: any}>){
    store.select("provideAntennaDetails")
    .subscribe((e) => this.antennaDimensions = e.details.details.dimensions);
  }
}
