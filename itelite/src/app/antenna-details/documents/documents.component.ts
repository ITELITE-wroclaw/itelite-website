import { Component } from '@angular/core';
import { files } from '@files';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  protected readonly documentDownloadImage: string = files.antenna_details.download;
}
