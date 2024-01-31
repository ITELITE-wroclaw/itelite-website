import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeViewService } from './home-view.service';
import { HomeViewComponent } from './home-view/home-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeViewComponent],
  providers: [Store, HomeViewService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'itelite';

  constructor(){

  }

}
