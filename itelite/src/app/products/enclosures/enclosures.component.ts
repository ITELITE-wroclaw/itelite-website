import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-enclosures',
  standalone: true,
  imports: [],
  templateUrl: './enclosures.component.html',
  styleUrl: './enclosures.component.scss'
})
export class EnclosuresComponent {
  protected readonly antenna: string = files.products.main.enclosures.antenna;
}
