import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly logo: string = files.footer.logo;
}
