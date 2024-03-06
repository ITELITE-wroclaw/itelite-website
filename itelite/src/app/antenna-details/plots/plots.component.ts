import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plots',
  standalone: true,
  imports: [],
  templateUrl: './plots.component.html',
  styleUrl: './plots.component.scss'
})
export class PlotsComponent {
  constructor(private store: Store<{provideAntennasDetails: any}>){
    store
    .select("provideAntennasDetails")
    .subscribe((e) => {
      const plots = e.details.details
      console.log(plots)
    })
  }
}
