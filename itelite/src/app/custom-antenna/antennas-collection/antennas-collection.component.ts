import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-antennas-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './antennas-collection.component.html',
  styleUrl: './antennas-collection.component.scss'
})
export class AntennasCollectionComponent {
  protected readonly antennasImages: [string, string][] = Object.entries(files.custom_antenna.main.antennas);
}
