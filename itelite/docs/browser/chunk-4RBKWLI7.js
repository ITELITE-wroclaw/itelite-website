import{$ as k,A as g,D as r,E as f,Fa as w,J as v,Ja as t,L as a,N as u,O as c,P as h,da as x,ja as C,la as T,na as y,t as b,ta as _,z as l}from"./chunk-GLTQQQSW.js";var s={home:{background:t.home.header.background,antenna:t.home.header.product},products:{background:t.products.header.backround,antenna:t.products.header.product},"antenna-details":{background:t.products.header.backround,antenna:t.products.header.product},"custom-antenna":{background:t.custom_antenna.header.backround,antenna:t.custom_antenna.header.antenna}};var m={home:{header:"Connect Beyond Boundaries To Your Signals with Antenna Excellence",paragraph:`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis eta sunt explicabo.`},products:{header:"Explore Every <br> Angle of <span>Excellence with Our Antenna</span>",paragraph:`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis eta sunt explicabo.`},"custom-antenna":{header:"Innovation Behind<br> Our Antenna & <span>How Its Build</span>",paragraph:`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis eta sunt explicabo.`}};function q(d,n){d&1&&(u(0,"button",7),k(1,"More Details"),c())}var F=(()=>{let n=class n{constructor(p,i){this.activatedRoute=p,this.store=i,this.homeText={header:void 0,paragraph:void 0},this.custom=!1,this.homeView=!1,this.background=t.products.header.backround,this.product=t.products.header.product;let e=p.snapshot,o=e._routerState.url.split("/")[1],M=e._routerState.url.split("/")[2];o?o=="antenna-details"?(this.background=s[`${o}`].background,this.homeText.header=M,this.custom=!0,this.product=!1,i.select("provideAntennaDetails").subscribe(S=>{this.product=S.details.details.antennasFilter[0].guid})):(this.background=s[`${o}`].background,this.custom=!0,this.product=s[`${o}`].antenna,this.homeText.header=m[`${o}`].header,this.homeText.paragraph=m[`${o}`].paragraph):(this.background=s.home.background,this.product=s.home.antenna,this.homeView=!0,this.homeText.header=m.home.header,this.homeText.paragraph=m.home.paragraph)}};n.\u0275fac=function(i){return new(i||n)(f(_),f(w))},n.\u0275cmp=b({type:n,selectors:[["app-header"]],standalone:!0,features:[x],decls:8,vars:9,consts:[["alt","Background image containing the antennas group",1,"background",3,"src","ngClass"],[1,"container"],[1,"text",3,"ngClass"],[3,"innerHTML"],["class","dark",4,"ngIf"],[1,"image",3,"ngClass"],["alt","Image of state-of-the-art kind antenna.",3,"ngClass","src"],[1,"dark"]],template:function(i,e){i&1&&(h(0,"img",0),u(1,"div",1)(2,"div",2),h(3,"h1",3)(4,"p",3),v(5,q,2,0,"button",4),c(),u(6,"div",5),h(7,"img",6),c()()),i&2&&(a("src",e.background,g)("ngClass",e.homeView?"homeView":""),r(2),a("ngClass",e.homeView?"":"textTop"),r(),a("innerHTML",e.homeText.header,l),r(),a("innerHTML",e.homeText.paragraph,l),r(),a("ngIf",e.homeView),r(),a("ngClass",e.homeView?"home_image":""),r(),a("ngClass",e.custom?"custom":"")("src",e.product,g))},dependencies:[y,C,T],styles:[".homeView[_ngcontent-%COMP%]{background-color:#f5b625}.custom[_ngcontent-%COMP%]{mix-blend-mode:multiply}.home_image[_ngcontent-%COMP%]{padding-top:100px}.textTop[_ngcontent-%COMP%]{margin-top:100px}@media (max-width: 1500px){.home_image[_ngcontent-%COMP%]{padding-top:0}.textTop[_ngcontent-%COMP%]{margin-top:0;padding-bottom:45px}}"]});let d=n;return d})();export{F as a};
