import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { files } from '@files';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  protected readonly antenna: string = files.order;
  protected priceListForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.priceListForm = formBuilder.group({
      name: "",
      company: "",
      email: "",
      message: ""
    })
  }
}
