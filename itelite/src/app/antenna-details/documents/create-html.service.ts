import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { files } from '@files';
import { Antenna } from '@types';

@Injectable({
  providedIn: 'root'
})
export class CreateHTMLService {

  constructor(private httpClient: HttpClient) {}

  public antennaDetailsToDatasheet!: Antenna;
  public subTitle!: string;

  private readonly logo: string = files.nav;
  public plots: string[] | undefined;
  public images!: string[];
  public dimensions: string[] | undefined;

  public electricalProperties: any[] = [];
  public enclosureProperties: any[] = [];
  public mechanicalProperties: any[] = [];

  createList(header: string, arr: string[])
  {
    let text = "<h5 style='color: rgb(251, 187, 42); margin-top: 6px;'>"+header+"</h5>";

    text += "<ul style='margin-top: 5px;'>";
    arr
    .forEach((e) => {
      text += `<li style='font-size: 4px; list-style-type: disc !important; margin-top: 1px;'> <span>${e[0]}</span> <span>${e[1]}</span> </li>`;
    })

    text += "</ul>";
    return text;
  }

  private counter: number = 0;

  public async getImages (images: string[] | any, title: string, flag: boolean)
  {

    if(!images || !images.length) return "";

    const top: number = this.counter * 297;
    const replace = (url: string, protocol: string) => url.replace(protocol+'://itelite.net/wp-content/uploads', "")

    const getImg = (url: string): Promise<string> =>
    {
      return new Promise((resolve) => {
        this.httpClient.get(url, { responseType: "blob" })
        .subscribe((e) => {

          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result as string;
            resolve(base64String);
          };
          
          reader.readAsDataURL(e);
        });
      }) 
    }
    

    if(flag) return await getImg("https://itelite.net/wp-content/?file=" + replace(images[0], images[0].includes("https")? "https": "http"))

    

    let text = `
      <div style='width: 222px; padding-left: 15px; position: absolute; top: ${top}px;'>
      <h5 style='color: #1a2c3d; font-size: 7px; margin-top: 6px; margin-left: 2px; padding-bottom: 9px; position: relative; z-index: 4;'>${title}</h5>
    `;

    let id = 0;
    let potencialSize: number = images.length > 3? 49: 75;
    async function setImages()
    {
      if(id == images?.length) return;
      const linkImg = await getImg('https://itelite.net/wp-content/?file='+replace(images[id], images[id].includes("https")? "https": "http"));

      text += `<img src='${linkImg}' style='height: ${potencialSize}px; position: relative; z-index: 4; margin-right: 9px; margin-top: 5px;'>`;

      id++;
      await setImages();
    }
    
    await setImages();


    text += "</div>";
    this.counter++;

    return text;
  }

  public async createHTML(): Promise<string>
  {
    const getFeaturesList = () =>
    {
      const gather = this.antennaDetailsToDatasheet.applications?.split("\r\n").filter(e => e.length);

      let list = "";
      gather?.forEach((val) => list += "<li style='font-size: 4px; list-style-type: disc !important; margin-top: 2px;'>"+val+"</li>");

      return list;
    }

    const html: string = `
    <header style='display: block; width: 250px; border-bottom: 1px solid #F5F5F5; padding-bottom: 3px;'>
      <img style='width: 45px; height: auto; margin-left: 17px;' src='${this.logo}'>
    </header>

    <div>
      <div style='width: 230px; position: relative; border-bottom: 1px solid #F5F5F5;'>

        <div style='display: inline-block; width: 95px;'>
          <h5 style='color: #1a2c3d; font-size: 7px; margin-top: 6px; margin-left: 22px;'>${this.antennaDetailsToDatasheet.ant_name}</h5>
          <h6 style='color: #1a2c3d; font-size: 5px; margin-top: 2px; margin-left: 22px; width: 175px;'>${this.subTitle}</h6>
          <img style='width: 76px; max-height: 106px; object-fit: fill; padding: 7px 0px 13px 17px;' src='${ await this.getImages([this.antennaDetailsToDatasheet.icon], "", true) }'>
        </div>

        <div style='display: inline-block; width: 60px; position: absolute; top: 35px; left: 118px;'>
            <h5 style='color: #1a2c3d; font-size: 6px !important; margin-top: 6px; padding-bottom: 2px;'>Antenna Key Features</h5>
            <ul>
                ${getFeaturesList()}
            </ul>
        </div>

      <div>

      <div style='width: 220px; padding-left: 10px; position: relative; font-size: 6px;'>
          <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 10px; left: 8px;'>${this.createList("ELECTRICAL PROPERTIES", this.electricalProperties)}</div>
          <div style='display: inline-block; width: 60px; padding-right: 3px; position: absolute; top: 10px; left: 75px;'>${this.createList("MECHANICAL PROPERTIES", this.mechanicalProperties)}</div>
          <div style='display: inline-block; width: 60px; position: absolute; top: 10px; left: 148px;'>${this.createList("ENCLOSURE PROPERTIES", this.enclosureProperties)}</div>
      </div>
    </div>
        
    <div style='width: 210px; position: absolute; top: 280px;'>
      ${await this.getImages(this.images, "IMAGES", false)}
      ${await this.getImages(this.plots, "PLOTS", false)}
      ${await this.getImages(this.dimensions, "DIMENSIONS", false)}
    </div>
    
  `;

  this.counter = 0;
  return html;
  }
}
