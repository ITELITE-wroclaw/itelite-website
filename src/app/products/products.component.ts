import { AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from '../app.service';

import { HeaderComponent } from '@header';
import { MainContentComponent } from './main-content/main-content.component';

import { FooterComponent } from '../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

import { EnclosuresComponent } from './enclosures/enclosures.component';
import { AccessoriesComponent } from './accessories/accessories.component';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements AfterViewInit, OnInit
{

  route: any;
  public images: Map<number, HTMLImageElement> = new Map();

  @ViewChild(HeaderComponent, { read: ViewContainerRef, static: true })
  container!: HeaderComponent;

  private currentAntennaName: string = "Whitespace";

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platform_id: string,

    public activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,

    private viewContainerRef: ViewContainerRef
  )
  {
    appService.componentsList = [HeaderComponent, MainContentComponent, EnclosuresComponent, AccessoriesComponent, FooterComponent];
    appService.init();
    
    
    ProductsComponent.prototype.route = activatedRoute;
  }

  async ngOnInit(): Promise<void> {
    await this.getImages(1);
    document.getElementById("image").querySelector("img").src = this.images.get(1).src
    
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platform_id)) {
      document.getElementById("image").querySelector("img").style.mixBlendMode = "luminosity"
      this.rotateImage()

      this.changeAntenna(document.getElementsByClassName("antennas-images").item(0) as HTMLElement)
    }
  }

  rotateImage(): void {

    let x;
    let canRotate: boolean = false;

    const imageContainer = document.getElementById("image") as HTMLDivElement;

    imageContainer.addEventListener("mousedown", (e) => {x = e.clientX; canRotate = true})
    imageContainer.addEventListener("mousemove", action)

    imageContainer.addEventListener("mouseup", () => canRotate = false)
    imageContainer.addEventListener("mouseleave", () => x = canRotate = false)
    
    function action(e: MouseEvent)
    {
      if(!canRotate) return;
      const flag = e.clientX >= x + 10 || e.clientX <= x - 10;
      const direction = e.clientX >= x + 10;

      if(flag){
        let currentImg = Number(imageContainer.getAttribute("data-id"));
        if(isNaN(currentImg)) return;

        x = e.clientX;
        establishImg(x, direction? --currentImg: ++currentImg, imageContainer);
      }
    }

    const that = this;

    function establishImg(x: number, currentImg: number, imageContainer: HTMLDivElement)
    {
      const max = 54;
      const min = 1;

      let newImgNumber: number | string = currentImg;

      if(currentImg > max) newImgNumber = min;
      if(currentImg < min) newImgNumber = max;

      if(!that.images.has(currentImg - 14) || !that.images.has(currentImg + 14)) that.getImages(currentImg);

      imageContainer.querySelector("img").src = that.images.get(newImgNumber).src;
      imageContainer.setAttribute("data-id", newImgNumber.toString());
    }
  }

  async getImages(imgId: number): Promise<void> {

    let num = imgId - 15;

    const max = 54;
    const min = 1;

    for(let id=1; id<34; id++)
    {
      let currentId: number | string;
      currentId = num;

      if(currentId < min) currentId = max + currentId;
      if(currentId > max) currentId = currentId - max;
      
      if(this.images.has(currentId)) {
        num++;
        continue
      };

      const path = "/assets/products/header/"+this.currentAntennaName+"/"+this.currentAntennaName+"-"+currentId+".png";
      currentId = Number(currentId);

      const img = await (await fetch(path)).blob();
      const imgUrl = window.URL.createObjectURL(img);

      const imgElement = new Image();
      imgElement.src = imgUrl;

      this.images.set(currentId, imgElement)
      num++;
    }
  }

  private changeAntenna(antennasContainer: HTMLElement)
  {

    antennasContainer.addEventListener("click", (e) => {
      this.currentAntennaName = e.target['dataset'].name
      this.images.forEach((e) => URL.revokeObjectURL(e.src))
      this.images.clear()

      const id: number = 1;
      const path = "/assets/products/header/"+this.currentAntennaName+"/"+this.currentAntennaName+"-"+id+".png";

      const imageContainer = document.getElementById("image") as HTMLDivElement;
      imageContainer.setAttribute("data-id", `${id}`);

      Array.from(document.getElementsByClassName("thumbnail")).forEach((e) => e.classList.remove("highlighted"));
      e.target['parentElement'].classList.add("highlighted");
      imageContainer.querySelector("img").src = path;
      this.getImages(1)
    })
  } 

  ngOnDestroy(): void {
    this.appService.purgeSubscriptions();
  }
  
}