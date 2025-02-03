import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '@appService';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  protected JSON = JSON;
  protected searchResults;

  constructor(
    protected appService: AppService, private reducer: Store<{provideSearchResults: any}>, 
  ){}

  ngOnInit(): void {

    this.reducer.select("provideSearchResults")
    .subscribe((e) => this.searchResults = e?.view.data );
  }

}