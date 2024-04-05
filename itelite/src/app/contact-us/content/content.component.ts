import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { server } from '@serverSettings';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  protected contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient)
  {
    this.contactForm = formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      company: ["", Validators.required],
      message: ["", Validators.required]
    })

    this.contactForm.addValidators(() => {
      return null;
    })
  }

  sendContactMail()
  {
    const formData = Object.assign({}, this.contactForm.value);

    formData.action = "main";
    formData.form = "CONTACT";

    if(this.contactForm.valid) this.httpClient.post(server.url+"mail", formData)
    .subscribe((e: {send: boolean}) => {
      if(e.send) document.querySelector("form").classList.add("alternative");
    });
  }
}
