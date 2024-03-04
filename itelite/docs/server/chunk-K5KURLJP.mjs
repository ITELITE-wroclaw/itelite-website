import './polyfills.server.mjs';
import{b as c}from"./chunk-RFLASIOT.mjs";import{c as l,i as m,j as p}from"./chunk-H2Q6GOXY.mjs";import{C as s,F as o}from"./chunk-OYCGHAXO.mjs";var g=(()=>{let t=class t{constructor(r,a){this.apollo=r,this.store=a}resolve(r,a){let f=p`
      {
        allAntennas(skip: 0){
          ant_name
          ant_type
          ant_image_1
          radio_space
          flat_panel
          single_pol
          mimo_2x2
          mimox_3x3
          multi_mimo
          freq_name
          parameters1
          parameters2
          guid
        }
      }
    `;this.apollo.watchQuery({query:f}).valueChanges.subscribe(n=>{let i=n?.data?.allAntennas|n?.data?.filterAntennas;if(i)return this.store.dispatch(c({antennas:{antennas:[...i]}}))})}};t.\u0275fac=function(a){return new(a||t)(o(m),o(l))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{g as a};
