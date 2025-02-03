import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { files } from '@files';
import { server } from '@serverSettings';

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

  constructor(private formBuilder: FormBuilder, private changeDetRef: ChangeDetectorRef, private httpClient: HttpClient)
  {
    this.contactForm = formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      type: [this.antennaType[0], Validators.required],
      frequency: ["", Validators.required],
      amount_of_connection: ["", Validators.required],
      message: ["", Validators.required]
    })
  }

  ngAfterViewChecked(): void {
    this.changeDetRef.detectChanges();
  }

  sendEmail()
  {
    if(!this.contactForm.valid) return;

    const emailData = Object.assign({}, this.contactForm.value);
    emailData.action = "custom";

    this.httpClient.post(server.url+"mail", emailData)
    .subscribe((e: {send: boolean}) => {
      if(e.send) document.querySelector("form").classList.add("alternative");
    });
  }
}
