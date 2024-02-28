import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  protected readonly antenna: string = files.company;
}
