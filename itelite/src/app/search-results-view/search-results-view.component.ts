import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AppService } from '@appService';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-results-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results-view.component.html',
  styleUrl: './search-results-view.component.scss'
})
export class SearchResultsViewComponent implements OnInit{

  protected JSON = JSON;
  protected searchResults;

  constructor(protected appService: AppService, private reducer: Store<{provideSearchResults: any}>){}

  ngOnInit(): void {
    this.reducer.select("provideSearchResults")
    .subscribe((e) => this.searchResults = e?.view.data);
  }
}
