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

  private readonly pdf_begin: string = files.antenna_details.pdf_begin;
  public plots: string[] | undefined;
  public images!: string[];
  public dimensions: string[] | undefined;

  public electricalProperties: any[] = [];
  public enclosureProperties: any[] = [];
  public mechanicalProperties: any[] = [];


  createList(header: string, arr: string[]): string
  {
    if(!arr.length) return "";

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
  private getImagesCall: number = 0;

  private arraysAmount: number;
  private currentArrayId: number = 1;

  public async getImages (images: string[] | any, title: string, flag: boolean)
  {
    if((!images || !images.length) || !images[0]) return "";

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

    console.log(images)
    if(flag) return (await getImg("https://itelite.net/wp-content/getAnImage.php/?file=" + replace(images[0], images[0].includes("https")? "https": "http"))).base64;

    let text = "<div style='width: 222px; padding: 0px 0px 0px 22px; box-sizing: border-box;'>";
    let id = 0;

    const that = this;

    async function setImages(): Promise<string | void>
    {
      
      if(id == images?.length) return;

      if(id % 2 == 0){
        text += "<div style='position: relative; border-box; height:297px !important; max-height: 297px !important;'>";
        if(id === 0) text += `<h5 style='position: absolute; top: 5px; color: #1a2c3d; font-size: 7px; margin-left: 2px; z-index: 999;'>${title}</h5>`;
      }

      const imgData = await getImg('https://itelite.net/wp-content/getAnImage.php/?file='+replace(images[id], images[id].includes("https")? "https": "http"));

      const rule = that.currentArrayId == that.arraysAmount && id >= images.length - 2
      let bigger;
      let imgSizes = rule? 
      "width: 92px; margin-top: 25px;" : "width: 120px; margin-top: 25px;";

      if(imgData.size.height > imgData.size.width) bigger = {size: imgData.size.height, height: true};
      if(imgData.size.height < imgData.size.width) bigger = {size: imgData.size.width, width: true};
      
      if(bigger?.height){
        rule? 
        imgSizes = `height: 91px; padding-left: 50px; padding-right: 50px; margin-top: 10px;`: imgSizes = `height: 127px; padding-left: 40px; padding-right: 40px; margin-top: 10px;`;
      }

      if(bigger?.width){
        rule? 
        imgSizes = `width: 107px; padding-left: 23px; margin-top: 25px;` :imgSizes = `width: 147px; padding-left: 10px; margin-top: 25px;`;
      }

      if(!bigger) rule? imgSizes += "padding-left: 34px;" : imgSizes += "padding-left: 19px;"

      const linkImg = imgData.base64;
      text += `<img src='${linkImg}' style=' ${imgSizes} position: relative; z-index: 4; margin-right: 9px;'>`;

      const modulo: number = id % 2;
      if( (modulo % 2 !== 0) || id + 1 == images.length ) text += `</div>`;
  
      id++;
      await setImages();
    }
    
    await setImages();

    text += "</div>";
    this.counter++;

    this.getImagesCall++;
    return text;
  }

  public async createHTML(): Promise<{html: string, antennaName: string}>
  {
    const getFeaturesList = () =>
    {
      const gather = this.antennaDetailsToDatasheet.applications?.split("\r\n").filter(e => e.length);
      let list = "";

      gather?.forEach((val) => list += "<li style='color: #203548; font-size: 5px; width: fit-content; padding-bottom: 1px; margin-top: 3px;'>"+val+"</li>");
      return list;
    }

    this.subTitle = this.subTitle.replaceAll(" ,", ",");
    const plotsLen: number = !!this.plots?.length? 1: 0;
    const dimensionsLen: number = !!this.dimensions?.length? 1: 0;
    const imagesLen: number = !!this.images.length? 1: 0;

    this.arraysAmount = plotsLen + dimensionsLen + imagesLen;

    const html: string = `
    <div style='postition: relative; padding-top: 8px; height: 288px;'>

        <img src='${this.pdf_begin}' style='position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 210px;'>
        <div style='display: inline-block; width: 205px;'>

          <div style=' position: absolute; width: 211px; height: 27px; padding-bottom: 3px; margin-top: 54px;'>
            <h5 style='color: #203548; font-size: 9px; margin-top: 1px; margin-left: 19px; padding-top: 3px;'>${this.antennaDetailsToDatasheet.ant_name}</h5>
            <p style='color: #203548; font-size: 5px; margin-top: 2px; margin-left: 19px; letter-spacing: 1px;'>${this.subTitle}</p>
          </div>
          
            <div style='display: inline-block; width: 90px; margin-top: 99px; padding-left: 111px; position: relative; z-index: 2; '>
              <h5 style='color: #203548; font-size: 8px !important; margin-top: 7px; padding-bottom: 2px;'>Key <span style='color: #324759;'>Features</span></h5>
              <ul style='list-style-type: disk !important;'>
                ${getFeaturesList()}
              </ul>
            </div>
          
          <img style='width: 100px; max-height: 130px; object-fit: fill; position: absolute; top: 91px; left: 3px;' src='${ await this.getImages([this.antennaDetailsToDatasheet.icon], "", true) }'>
        </div>
    </div>

    <div style='width: 220px; max-height: 298px; height: 298px; padding-left: 3px; position: relative; font-size: 7px;'>
      <div style='display: inline-block; width: 127px; margin-top: 15px; margin-left: 38px;'>${this.createList("ELECTRICAL&nbsp; PROPERTIES", this.electricalProperties)}</div>
      <div style='display: inline-block; width: 127px; margin-top: 15px; margin-left: 38px;'>${this.createList("MECHANICAL PROPERTIES", this.mechanicalProperties)}</div>
      <div style='display: inline-block; width: 127px; margin-top: 15px; margin-left: 38px;'>${this.createList("ENCLOSURE &nbsp; PROPERTIES", this.enclosureProperties)}</div>
    </div>

    <div style='width: 210px; display: block; position: relative;'>
      ${await this.getImages(this.plots, "PLOTS", false)}
      ${await this.getImages(this.dimensions, "DIMENSIONS", false)}
      ${await this.getImages(this.images, "IMAGES", false)}
    </div>
    
    <footer style='height: 31px; width: 211px; background-color: #203548; padding: 1px 0px; position: absolute; bottom: 0px;  color: white;'>
      <div class="information">
        <div class="logo">
            <img src="./assets/footer/white-logo.png" style='width: 33px; margin-left: 84px;' alt="ITELITE company logo.">
        </div>
        <div class="contact" style='font-size: 3px; display: flex; justify-content: space-around;'>
            <p>Email: <a style='color: white; text-decoration: none;' href="mailto: sales@itelite.net">sales@itelite.net</a></p>
            <p>Phone: +48.71.323.0180</p>
            <p>Address: ul.Terenowa 42, 52-231 Wroclaw Poland</p>
        </div>
        <div class="line"></div>
        <div class="rights" style='font-size: 3px; margin-top: 2px; display: flex; justify-content: space-around;'>
            <p style='text-align: center;'>&#64;2024 ITELITE | All Copy Right</p>
            <p style='text-align: center;'>www.itelite.net</p>
        </div>
      </div>
    </footer>
  `;

  this.counter = 0;
  return { html, antennaName: this.antennaDetailsToDatasheet.ant_name};
  }
}
