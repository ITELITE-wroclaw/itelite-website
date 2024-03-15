import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plots.component.html',
  styleUrl: './plots.component.scss'
})
export class PlotsComponent {

  protected plotsImages!: string[];

  constructor(private store: Store<{provideAntennaDetails: any}>){
    store
    .select("provideAntennaDetails")
    .subscribe((e) => {
      this.plotsImages = e.details.details.plots;
    })
  }
}
