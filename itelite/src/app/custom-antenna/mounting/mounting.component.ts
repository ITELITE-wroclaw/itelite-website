import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-mounting',
  standalone: true,
  imports: [],
  templateUrl: './mounting.component.html',
  styleUrl: './mounting.component.scss'
})
export class MountingComponent {
  protected readonly mounting: string = files.custom_antenna.main.mounting;
}
