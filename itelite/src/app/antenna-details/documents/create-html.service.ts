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

  private previousHeight: number = 365;

  createList(header: string, arr: string[])
  {
    let text = "<h5 style='color: rgb(251, 187, 42); margin-top: 6px; margin-bottom: 4px; font-size: 5px; width: 150px;'>"+header+"</h5>";
    text += "<table style='border-collapse: collapse; color: #333333 !important;'>";

    arr
    .forEach((e, id) => {
      let val: string = e[1];
      const color: string = 'rgb(215, 213, 212)';

      const textLow = e[0].toLocaleLowerCase();

      textLow.includes('gain')? val = val + " dBi": val;
      textLow.includes('impedance')? val = val + " ohm": val;

      textLow.includes('front to back ratio') || textLow.includes('port isolation')? val = val + " dB": val;
      textLow.includes('frequency')? val = val + " GHz": val;

      textLow.includes('windload')? val = val + " km/h": val;
      val = val.replace('\\"', '');

      let border = `border-bottom: 1px solid ${color}; border-left: 1px solid ${color}; `;
      if(0 === id) border += `border-top: 1px solid ${color};`;

      const name = e[0].replace('Φ', "");

      text += `
      <tr style='font-size: 4px;'> 
        <td style='${border} padding: 1px 2px 2px 3px; width: 42px;'><b>${name}</b></td> 
        <td style='${border} border-right: 1px solid ${color}; padding: 1px 2px 2px 1px; width: 74px; text-align: center;'>${val}</td> 
      </tr>`;
    })

    text += "</table>";
    return text;
  }

  private counter: number = 0;

  public async getImages (images: string[] | any, title: string, flag: boolean)
  {

    if(!images || !images.length) return "";
    const that = this;

    const top: number = 370 - (this.previousHeight % 370);
    const replace = (url: string, protocol: string) => url.replace(protocol+'://itelite.net/wp-content/uploads', "")

    const getImg = (url: string): Promise<{base64: string, size: {height: number, width: number}}> =>
    {
      return new Promise((resolve) => {
        this.httpClient.get(url, { responseType: "blob" })
        .subscribe((e) => {

          const reader = new FileReader();
          reader.onload = async () => {

            const base64String = reader.result as string;
            const imgSizes = await createImageBitmap(e);

            resolve({base64: base64String, size: imgSizes});
          };
          
          reader.readAsDataURL(e);
        });
      }) 
    }

    if(flag) return (await getImg("https://itelite.net/wp-content/?file=" + replace(images[0], images[0].includes("https")? "https": "http"))).base64;

    let text = `
      <div style='width: 222px; padding: ${top}px 0px 4px 22px; overflow: visible;'>
      <h5 style='color: #1a2c3d; font-size: 7px; margin-top: -15px; margin-left: 2px; padding-bottom: 2px; position: relative; z-index: 4;'>${title}</h5>
    `;

    that.previousHeight = 0;

    let id = 0;
    async function setImages()
    {
      if(id == images?.length) return;
      const imgData = await getImg('https://itelite.net/wp-content/?file='+replace(images[id], images[id].includes("https")? "https": "http"));

      let bigger;
      let imgSizes = "width: 136px;";
      let marginTop: number = 3;

      if(imgData.size.height > imgData.size.width) bigger = {size: imgData.size.height, height: true};
      if(imgData.size.height < imgData.size.width) bigger = {size: imgData.size.width, width: true};
      
      if(bigger?.height) {
        imgSizes = `height: 140px; padding-left: ${(140 - ( 140 * (1 - imgData.size.width / imgData.size.height) )) / 2}px;`;
        that.previousHeight += 140;

        setPadding(8)
      };

      if(bigger?.width){
        const padding: number = (157 - ( 157 * (1 - imgData.size.height / imgData.size.width) )) / 3 - 8; 
        imgSizes = `width: 157px; padding-top: ${padding}px; padding-bottom: ${padding}px;`;

        const editHeight: number = Number((157 * imgData.size.width / imgData.size.height).toFixed(0));

        that.previousHeight += editHeight + padding * 2;
        setPadding(30);
      };

      if(!bigger){
        that.previousHeight += 140;
        setPadding(10);
      }

      function setPadding(value: number)
      {
        if(id % 2 !== 0 || id == 0) return;
        marginTop = value;
      }

      const linkImg = imgData.base64;
      text += `<img src='${linkImg}' style=' ${imgSizes} position: relative; z-index: 4; margin-right: 9px; margin-bottom: ${marginTop}px;'>`;

      id++;
      await setImages();
    }
    
    await setImages();

    text += "</div>";
    this.counter++;

    return text;
  }

  public async createHTML(): Promise<{html: string, antennaName: string}>
  {
    const getFeaturesList = () =>
    {
      const gather = this.antennaDetailsToDatasheet.applications?.split("\r\n").filter(e => e.length);

      let list = "";

      gather?.forEach((val) => {
        list += "<li style='color: #1a2c3d; font-size: 5px; border-bottom: 1px solid #e5e5e5; width: fit-content; padding-bottom: 1px; margin: auto; list-style-type: none !important; margin-top: 3px; text-align: center;'><b>"+val+"</b></li>";
      });

      return list;
    }

    this.subTitle = this.subTitle.replaceAll(" ,", ",")

    const html: string = `
    <header style='display: block; width: 250px; border-bottom: 1px solid #F5F5F5; padding: 5px 0px 2px 0px;'>
      <img style='width: 62px; height: auto; margin-left: 22px;' src='${this.logo}'>
    </header>

    <div style='padding-top: 8px;'>
      <div style='width: 230px; position: relative;'>

        <div style='display: inline-block; width: 205px;'>
          <h5 style='color: #1a2c3d; font-size: 9px; margin-top: 5px; text-align: center;'>${this.antennaDetailsToDatasheet.ant_name}</h5>
          <h6 style='color: #1a2c3d; font-size: 6px; margin-top: 3px; text-align: center;'>${this.subTitle}</h6>
          <img style='width: 130px; max-height: 160px; object-fit: fill; padding: 81px 0px 6px 37px;' src='${ await this.getImages([this.antennaDetailsToDatasheet.icon], "", true) }'>
        </div>

        <div style='display: inline-block; width: 90px; position: absolute; top: 38px; left: 56px;'>
            <h5 style='color: #1a2c3d; font-size: 7px !important; margin-top: 6px; padding-bottom: 2px; text-align: center;'>Key Features</h5>
            <ul>
              ${getFeaturesList()}
            </ul>
        </div>

      <div>

      <div style='width: 220px; padding-left: 10px; position: relative; font-size: 7px;'>
          <div style='display: inline-block; width: 127px; position: absolute; top: 25px; left: 38px;'>${this.createList("ELECTRICAL&nbsp; PROPERTIES", this.electricalProperties)}</div>
          <div style='display: inline-block; width: 127px; position: absolute; top: 235px; left: 38px;'>${this.createList("MECHANICAL PROPERTIES", this.mechanicalProperties)}</div>
          <div style='display: inline-block; width: 127px; position: absolute; top: 142px; left: 38px;'>${this.createList("ENCLOSURE &nbsp; PROPERTIES", this.enclosureProperties)}</div>
      </div>
    </div>
        
    <div style='width: 210px; display: block; position: relative; margin-top: 330px; overflow: visible;'>
      ${await this.getImages(this.plots, "PLOTS", false)}
      ${await this.getImages(this.dimensions, "DIMENSIONS", false)}
      ${await this.getImages(this.images, "IMAGES", false)}
    </div>
    
  `;

  this.previousHeight = 520;
  this.counter = 0;

  return { html, antennaName: this.antennaDetailsToDatasheet.ant_name};
  }
}
