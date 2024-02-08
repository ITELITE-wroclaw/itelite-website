import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  protected readonly gifImage: string = files.home.main.gif;
}
