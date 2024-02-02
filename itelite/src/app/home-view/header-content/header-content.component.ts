import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  protected readonly files = files;
}