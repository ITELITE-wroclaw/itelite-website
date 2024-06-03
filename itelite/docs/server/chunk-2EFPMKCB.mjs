import './polyfills.server.mjs';
import{a as l,d as m,l as p,m as c}from"./chunk-3BFKUKRW.mjs";import{E as s,H as o}from"./chunk-GXZTA576.mjs";var g=(()=>{let t=class t{constructor(r,a){this.apollo=r,this.store=a}resolve(r,a){let f=c`
      {
        allAntennas(skip: 0){
          ant_name
          ant_type
          ant_image_1
          radio_space
          flat_panel
          single_pol
          mimo_2x2
          mimo_3x3
          multi_mimo
          freq_name
          parameters1
          parameters2
          guid
        }
      }
    `;this.apollo.watchQuery({query:f}).valueChanges.subscribe(n=>{let i=n?.data?.allAntennas|n?.data?.filterAntennas;if(i)return this.store.dispatch(m({antennas:{antennas:[...i]}}))})}};t.\u0275fac=function(a){return new(a||t)(o(p),o(l))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{g as a};
