import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { files } from '@files';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly form_background: string = files.custom_antenna.main.contact.background;
  protected contactForm!: FormGroup;

  protected antennaType: string[] = ["Omnidirectional", "Sector", "Dish", "Directional"];

  constructor(private formBuilder: FormBuilder)
  {
    this.contactForm = formBuilder.group({
      name: "",
      email: "",
      type: this.antennaType[0],
      frequency: "",
      amount_of_connection: 0,
      message: ""
    })
  }
}
