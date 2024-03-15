import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.scss'
})
export class PicturesComponent {

  protected images!: string[];

  constructor(private store: Store<{provideAntennaDetails: any}>){
    store.select("provideAntennaDetails")
    .subscribe((e) => {
      this.images = e.details.details.images;
    })
  }
}
