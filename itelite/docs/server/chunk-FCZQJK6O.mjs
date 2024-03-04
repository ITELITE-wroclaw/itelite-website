import './polyfills.server.mjs';
import{d as E}from"./chunk-RFLASIOT.mjs";import{a as P}from"./chunk-OFL46KEI.mjs";import{c as v,k as w,l as O,m as b}from"./chunk-H2Q6GOXY.mjs";import{Ab as D,I as a,Ia as s,Ka as y,Ma as p,W as h,Z as g,hb as M,ia as f,ja as m,kb as F,mb as S,qa as x,sa as d,ua as o,va as r,wa as u}from"./chunk-OYCGHAXO.mjs";import"./chunk-VVCT4QZE.mjs";function B(n,e){if(n&1&&(o(0,"li"),s(1),r()),n&2){let L=e.$implicit;f(),y(" ",L," ")}}var T=(()=>{let e=class e{constructor(i){this.store=i,this.circles=O.antenna_details,i.select("provideAntennaDetails").subscribe(t=>this.neatData(t))}neatData(i){let t=i.details.details.antennasFilter[0];this.antenna=t.guid,this.applications=t.applications?.split(`\r
`).filter(c=>c.length),console.log(this.applications)}};e.\u0275fac=function(t){return new(t||e)(m(v))},e.\u0275cmp=a({type:e,selectors:[["app-features"]],standalone:!0,features:[p],decls:12,vars:3,consts:[["alt","Image with circles.",1,"circle",3,"src"],[1,"box","features"],[1,"antenna"],["alt","Antenna image.",3,"src"],[1,"features_list"],[4,"ngFor","ngForOf"]],template:function(t,c){t&1&&(u(0,"img",0),o(1,"div",1)(2,"div",2),u(3,"img",3),r(),o(4,"div",4)(5,"h3"),s(6,"Antenna "),u(7,"br"),o(8,"span"),s(9,"Key Features"),r()(),o(10,"ul"),x(11,B,2,1,"li",5),r()()()),t&2&&(d("src",c.circles,g),f(3),d("src",c.antenna,g),f(8),d("ngForOf",c.applications))},dependencies:[F,M],styles:["[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;z-index:-2;left:-75px;top:450px}.features[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;margin-top:180px;gap:65px}.features[_ngcontent-%COMP%]   .antenna[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{mix-blend-mode:multiply;max-width:480px}.features[_ngcontent-%COMP%]   .features_list[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.features[_ngcontent-%COMP%]   .features_list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbbb2a}"]});let n=e;return n})();var I=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-specification"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"specification works!"),r())}});let n=e;return n})();var j=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-gain"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"gain works!"),r())}});let n=e;return n})();var A=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-dimensions"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"dimensions works!"),r())}});let n=e;return n})();var k=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-plots"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"plots works!"),r())}});let n=e;return n})();var _=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-pictures"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"pictures works!"),r())}});let n=e;return n})();var z=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-documents"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,c){t&1&&(o(0,"p"),s(1,"documents works!"),r())}});let n=e;return n})();var de=(()=>{let e=class e{constructor(i,t,c,C){this.appService=i,this.store=t,this.activatedRoute=c,this.platform_id=C,c.data.subscribe(R=>t.dispatch(E({details:R.data.data}))),i.componentsList=[P,T,I,j,A,k,_,z,b],i.init(),S(C)&&this.appService.scrollEvent()}ngOnDestroy(){this.appService.purgeSubscriptions()}};e.\u0275fac=function(t){return new(t||e)(m(w),m(v),m(D),m(h))},e.\u0275cmp=a({type:e,selectors:[["app-antenna-details"]],standalone:!0,features:[p],decls:0,vars:0,template:function(t,c){}});let n=e;return n})();export{de as AntennaDetailsComponent};
