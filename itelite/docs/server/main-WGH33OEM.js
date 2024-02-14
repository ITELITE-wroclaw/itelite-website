import"./chunk-OQGE5GTD.js";import{C as L,F as R,G as z,H as Q,I as T,J as F,K as H,L as v,M as D,N as q,P as U,Q as B,R as f,S as N,T as $,U as G,V as u,a as O,b as w,c as y,d as b,e as k,f as E,g as d,h as m,i as S,j as A,k as l,l as i,m as o,n as s,o as g,p as I,q as x,r as h,s as C,t as p,x as V,y as j}from"./chunk-CCU3GA7S.js";var M=[{path:"products",loadComponent:()=>import("./chunk-SPMFQQH6.js").then(t=>({default:t.ProductsComponent}))},{path:"**",loadComponent:()=>import("./chunk-EOTISIG6.js").then(t=>({default:t.HomeViewComponent}))}];var _=U("[App Component]",B()),J=G({state:null},$(_,(t,{view:e})=>w(O({},t),{view:{header:e.header,main:e.main,footer:e.footer}})));var K={providers:[v(M),T(),N({provideHomeView:J}),v(M)]};var X=["burgerMenu"];function Y(t,e){t&1&&(i(0,"div",7)(1,"ul")(2,"li",8),p(3,"Home"),o(),i(4,"li",9),p(5,"Products"),o(),i(6,"li"),p(7,"Custom Antenna"),o(),i(8,"li"),p(9,"Company"),o(),i(10,"li"),p(11,"Order"),o()(),i(12,"button",10),p(13,"Contact Us"),o()())}var P=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=b({type:e,selectors:[["","dockerElement",""]],inputs:{name:"name"},standalone:!0});let t=e;return t})(),W=(()=>{let e=class e{constructor(a,n,r){this.store=a,this.platform_id=n,this.appService=r,this.title="itelite",this.logo=q.nav,this.displayMenu={flag:!1}}ngAfterViewInit(){if(z(this.platform_id)){let a={header:null,main:null,footer:null};this.appService.navListAction(this.burgerMenu.nativeElement,this.displayMenu),this.docker_elements.forEach(n=>{let r=n.injector.get(P);a[`${r.name}`]=Object.freeze(n)}),this.store.dispatch(_({view:a}))}}toggleList(){this.displayMenu.flag=!this.displayMenu.flag}};e.\u0275fac=function(n){return new(n||e)(m(f),m(k),m(u))},e.\u0275cmp=y({type:e,selectors:[["app-root"]],viewQuery:function(n,r){if(n&1&&(x(X,5),x(P,5,S)),n&2){let c;h(c=C())&&(r.burgerMenu=c.first),h(c=C())&&(r.docker_elements=c)}},standalone:!0,features:[V([f,u]),j],decls:16,vars:5,consts:[["alt","Logo of ITELITE company",1,"logo",3,"src"],[1,"burger-menu",3,"click"],["burgerMenu",""],[1,"fa-solid","fa-bars"],["class","list",4,"ngIf"],["dockerElement","",3,"name"],["container",""],[1,"list"],["routerLink","/"],["routerLink","/products"],[1,"dark"]],template:function(n,r){n&1&&(i(0,"nav"),s(1,"img",0),i(2,"div",1,2),I("click",function(){return r.toggleList()}),s(4,"i",3),o(),A(5,Y,14,0,"div",4),o(),i(6,"header"),g(7,5,6),o(),i(9,"main"),g(10,5,6),o(),i(12,"footer"),g(13,5,6),o(),s(15,"router-outlet")),n&2&&(d(),l("src",r.logo,E),d(4),l("ngIf",r.displayMenu.flag),d(2),l("name","header"),d(3),l("name","main"),d(3),l("name","footer"))},dependencies:[R,L,F,D,H,P],styles:["nav[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;background:#fff;display:flex;justify-content:space-between;padding:27px 80px;z-index:5;box-sizing:border-box}nav[_ngcontent-%COMP%]   div.burger-menu[_ngcontent-%COMP%]{display:none;color:#fff;font-size:24px}nav[_ngcontent-%COMP%]   div.burger-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:40px;margin:auto;width:min-content;display:block}nav[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{width:212px;height:fit-content}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]{display:flex;gap:26px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;height:48px;list-style-type:none;gap:18px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 8px;line-height:48px}header[_ngcontent-%COMP%]{height:100%}header[_ngcontent-%COMP%]     img.background{position:absolute;width:100%;height:100%;z-index:-1;clip-path:polygon(0 0,100% 0,100% 89%,0 100%);object-fit:cover}header[_ngcontent-%COMP%]     .container{padding:242px 80px 0;position:relative;display:flex;flex-wrap:wrap;justify-content:center}header[_ngcontent-%COMP%]     .container   div.text{display:flex;flex-direction:column;max-width:763.836px;width:100%;height:fit-content;flex-shrink:0;gap:30px}header[_ngcontent-%COMP%]     .container   div.text p{max-width:622px}header[_ngcontent-%COMP%]     .container div.image{padding-top:100px}header[_ngcontent-%COMP%]     .container div.image img{max-width:560px;width:100%}main[_ngcontent-%COMP%]{padding:90px 80px 0}footer[_ngcontent-%COMP%]{margin-top:80px}@media (max-width: 1200px){nav[_ngcontent-%COMP%]{padding:27px 37px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]{gap:17px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{gap:7px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 8px;line-height:48px}}@media (max-width: 980px){nav[_ngcontent-%COMP%]   div.burger-menu[_ngcontent-%COMP%]{display:block;width:40px;height:40px;background-color:#1a2c3d;border-radius:10px;margin-top:4px}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]{position:fixed;top:55%;left:50%;background-color:#1a2c3d;transform:translate(-50%,-50%);flex-direction:column;gap:0px;padding:15px 65px 25px;-webkit-box-shadow:16px 15px 30px -9px rgb(0,0,0);-moz-box-shadow:16px 15px 30px -9px rgb(0,0,0);box-shadow:16px 15px 30px -9px #000}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column;height:fit-content;width:fit-content;color:#fff}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid white}nav[_ngcontent-%COMP%]   div.list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:0;margin-top:7px;border-bottom:1px solid white}}@media (max-width: 580px){  .container{padding:200px 35px 0!important}  .container div.text h1{font-size:42px!important}}"]});let t=e;return t})();Q(W,K).catch(t=>console.error(t));
