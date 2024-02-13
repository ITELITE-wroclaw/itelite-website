import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  protected readonly files = Object.entries(files.products.main.bands);
  protected readonly background: string = files.products.main.bands_background;

  constructor(){
    console.log(this.files)
  }
}
