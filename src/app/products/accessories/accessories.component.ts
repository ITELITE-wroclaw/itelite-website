import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})
export class AccessoriesComponent {
  protected readonly topImages: string[] = files.products.main.accessories.top;
  protected readonly contentImages: string[] = files.products.main.accessories.content.thumbnails;

  protected readonly mainImage: string = files.products.main.accessories.content.main;
}
