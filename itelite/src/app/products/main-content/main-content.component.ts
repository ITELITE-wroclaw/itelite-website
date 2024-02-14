import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { files } from '@files';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
[x: string]: any;

  protected readonly bands_img = Object.entries(files.products.main.bands);
  protected readonly background_img: string = files.products.main.bands_background;

  protected readonly features_img = Object.entries(files.products.main.features);
  protected readonly radios_companies = [ 
    "Mikrotik", "Qualcomm", "Silicon Labs", 
    "NXP Semiconductors", "Texas Instruments", 
    "STMicroelectronics", "Skyworks Solutions"
  ]

  protected readonly frequecies = [
    "Multiband", "LTE", "WIFI 6E", 
    "2/3/4/5G", "800 MHz", "900 MHz", 
    "1.8 GHz", "2.2-2.5 GHz", "2.3 GHz", 
    "2.4 GHz", "2.5 GHz", "2.6 GHz", 
    "3.5 GHz", "3.7 GHz", "4.4 GHz", 
    "5 GHz", "6.4 GHz"
  ];

  protected readonly features = [ "Radio Space", "Flat Panel", "Single Pol", "MIMO 2X2", "MIMO 3X3", "Multi MIMO 3X3" ];

  protected readonly antennas = [
    {name: "Xyz", data: { frequency: "0.65-1.0 / 1.6-2.8 GHz", gain: "5-8 dBi", "HW/VW": "60° @ -3dB / 60° @ -3dB", polarization: "Linear. H&V or Slant+/-45°"}}
  ]

  constructor(){}

  propertiesToArray(properties: {frequency: string, gain: string, polarization: string}): [string, string][]
  {
    return Object.entries(properties);
  }

  test: ((e: any) => {}) | undefined
}
