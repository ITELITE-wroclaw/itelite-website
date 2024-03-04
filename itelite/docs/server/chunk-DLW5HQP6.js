import{b as c}from"./chunk-NF5U3ZTJ.js";import{Ba as l,Ca as m,Fa as p,o as s,r as o}from"./chunk-GLTQQQSW.js";var g=(()=>{let t=class t{constructor(r,a){this.apollo=r,this.store=a}resolve(r,a){let f=m`
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
    `;this.apollo.watchQuery({query:f}).valueChanges.subscribe(n=>{let i=n?.data?.allAntennas|n?.data?.filterAntennas;if(i)return this.store.dispatch(c({antennas:{antennas:[...i]}}))})}};t.\u0275fac=function(a){return new(a||t)(o(l),o(p))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{g as a};
