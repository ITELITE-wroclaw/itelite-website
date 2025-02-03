import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { files } from '@files';
import { server } from '@serverSettings';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  protected readonly antenna: string = files.order;
  protected priceListForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient){
    this.priceListForm = formBuilder.group({
      name: ["", Validators.required],
      company:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required]
    })
  }

  sendEmail()
  {
    if(!this.priceListForm.valid) return;
    const emailData = Object.assign({}, this.priceListForm.value);

    emailData.action = "main";
    emailData.form = "PRICE LIST";

    this.httpClient.post(server.url+"mail", emailData)
    .subscribe((e: {send: boolean}) => {
      if(e.send) document.querySelector("form").classList.add("alternative");
    });;
  }
}
