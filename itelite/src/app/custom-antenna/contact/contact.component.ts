import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { files } from '@files';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewChecked{
  protected readonly form_background: string = files.custom_antenna.main.contact.background;
  protected contactForm!: FormGroup;

  protected antennaType: string[] = ["Omnidirectional", "Sector", "Dish", "Directional"];

  constructor(private formBuilder: FormBuilder, private changeDetRef: ChangeDetectorRef)
  {
    this.contactForm = formBuilder.group({
      name: "",
      email: "",
      type: this.antennaType[0],
      frequency: "",
      amount_of_connection: "",
      message: ""
    })
  }

  ngAfterViewChecked(): void {
    this.changeDetRef.detectChanges();
    console.log("hej")
  }
}
