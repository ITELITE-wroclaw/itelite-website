import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { files } from '@files';

import { Store } from '@ngrx/store';
import { Antenna } from '@types';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  protected antenna!: string;
  protected applications: string[] | undefined; 

  protected readonly circles: string = files.antenna_details;

  constructor(private store: Store<{provideAntennaDetails: any}>){
    store.select("provideAntennaDetails")
    .subscribe((e) => this.neatData(e))
  }

  private neatData(e: any)
  {
    const gather: Antenna = e.details.details.antennasFilter[0];

    this.antenna = gather.guid;
    this.applications = gather.applications?.split("\r\n").filter(e => e.length);

    console.log(this.applications)
  }
}
