import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  protected contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.contactForm = formBuilder.group({
      name: "",
      email: "",
      company: "",
      message: ""
    })
  }
}
