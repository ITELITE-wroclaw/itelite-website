import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { files } from '@files';
import { images } from './images';
import { text } from './text';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  protected readonly homeText: {header: string | undefined, paragraph: string | undefined} = {header: undefined, paragraph: undefined};
  protected custom: boolean = false;

  protected homeView: boolean = false;

  constructor(private activatedRoute: ActivatedRoute){
    const data = activatedRoute.snapshot as any;
    const param: string = data['_routerState'].url.replace("/", "");

    if(param == "custom-antenna") this.custom = true;

    if(!param) [this.background = images['home'].background, this.product = images['home'].antenna, this.homeView = true, this.homeText.header = text['home'].header, this.homeText.paragraph = text['home'].paragraph];
    else [this.background = images[`${param}`].background, this.product = images[`${param}`].antenna, this.homeText.header = text[`${param}`].header, this.homeText.paragraph = text[`${param}`].paragraph ];
    
  }

  protected readonly background: string = files.products.header.backround;
  protected readonly product: string = files.products.header.product;

}
