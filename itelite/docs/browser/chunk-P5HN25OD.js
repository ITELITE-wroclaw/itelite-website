import{Aa as ze,Ea as j,Fa as q,G as Pe,Ga as Ve,Ia as C,Ja as w,L as Te,La as X,M as xe,Ma as J,Oa as Ge,Pa as Q,R as Be,S as Y,Sa as ee,T as ke,Ta as te,U as p,V as Z,Va as m,Wa as a,Xa as l,Y as u,Ya as D,Z as d,_ as h,a as M,ab as ne,b as k,ba as F,ca as K,da as W,eb as g,f as L,fa as Le,fb as He,ha as Ne,i as _e,ib as E,j as N,k as Me,ka as je,la as $e,m as Oe,pa as Ue,qb as Ye,s as Ie,ua as I,xa as y,y as P,z as Re}from"./chunk-LAQD7MSC.js";var A=Object.freeze({nav:"/assets/nav/logo.webp",home:{header:{background:"/assets/home/header/background.webp",product:"/assets/home/header/antenna.webp"},main:{antennas:["/assets/home/main/antennas/antenna-1.webp","/assets/home/main/antennas/antenna-2.webp","/assets/home/main/antennas/antenna-3.webp","/assets/home/main/antennas/antenna-4.webp"],textBackgroundImage:"/assets/home/main/text/text-background.webp",gif:"/assets/home/main/how-it-works/how-it-works.webp"}},footer:{logo:"/assets/footer/white-logo.webp"}});var Ze=(()=>{let e=class e{constructor(){this.files=A}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F({type:e,selectors:[["app-header-content"]],standalone:!0,features:[E],decls:11,vars:2,consts:[["alt","Background image containing the antennas group",1,"background",3,"src"],[1,"container"],[1,"text"],[1,"dark"],[1,"image"],["alt","Image of state-of-the-art kind antenna.",3,"src"]],template:function(i,r){i&1&&(D(0,"img",0),a(1,"div",1)(2,"div",2)(3,"h1"),g(4,"Connect Beyond Boundaries To Your Signals with Antenna Excellence"),l(),a(5,"p"),g(6," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis eta sunt explicabo. "),l(),a(7,"button",3),g(8,"More Details"),l()(),a(9,"div",4),D(10,"img",5),l()()),i&2&&(m("src",r.files.home.header.background,y),C(10),m("src",r.files.home.header.product,y))},styles:["img.background[_ngcontent-%COMP%]{background-color:#f5b625}"]});let t=e;return t})();function ie(t,e){let s=!e?.manualCleanup;s&&!e?.injector&&Ue(ie);let n=s?e?.injector?.get(J)??h(J):null,i;e?.requireSync?i=q({kind:0}):i=q({kind:1,value:e?.initialValue});let r=t.subscribe({next:o=>i.set({kind:1,value:o}),error:o=>{if(e?.rejectErrors)throw o;i.set({kind:2,error:o})}});return n?.onDestroy(r.unsubscribe.bind(r)),j(()=>{let o=i();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new Y(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var oe={};function zn(t,e){if(oe[t]=(oe[t]||0)+1,typeof e=="function")return re(t,(...n)=>k(M({},e(...n)),{type:t}));switch(e?e._as:"empty"){case"empty":return re(t,()=>({type:t}));case"props":return re(t,n=>k(M({},n),{type:t}));default:throw new Error("Unexpected config.")}}function Vn(){return{_as:"props",_p:void 0}}function re(t,e){return Object.defineProperty(e,"type",{value:t,writable:!1})}var ot="@ngrx/store/init",R=(()=>{let e=class e extends N{constructor(){super({type:ot})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),Ot=[R],ut=new u("@ngrx/store Internal Root Guard"),Ke=new u("@ngrx/store Internal Initial State"),le=new u("@ngrx/store Initial State"),at=new u("@ngrx/store Reducer Factory"),We=new u("@ngrx/store Internal Reducer Factory Provider"),ct=new u("@ngrx/store Initial Reducers"),se=new u("@ngrx/store Internal Initial Reducers"),Gn=new u("@ngrx/store Store Features"),qe=new u("@ngrx/store Internal Store Reducers"),Hn=new u("@ngrx/store Internal Feature Reducers"),Yn=new u("@ngrx/store Internal Feature Configs"),Zn=new u("@ngrx/store Internal Store Features"),Kn=new u("@ngrx/store Internal Feature Reducers Token"),Wn=new u("@ngrx/store Feature Reducers"),Xe=new u("@ngrx/store User Provided Meta Reducers"),$=new u("@ngrx/store Meta Reducers"),Je=new u("@ngrx/store Internal Resolved Meta Reducers"),Qe=new u("@ngrx/store User Runtime Checks Config"),et=new u("@ngrx/store Internal User Runtime Checks Config"),T=new u("@ngrx/store Internal Runtime Checks"),dt=new u("@ngrx/store Check if Action types are unique"),tt=new u("@ngrx/store Root Store Provider"),qn=new u("@ngrx/store Feature State Provider");function It(t,e={}){let s=Object.keys(t),n={};for(let r=0;r<s.length;r++){let o=s[r];typeof t[o]=="function"&&(n[o]=t[o])}let i=Object.keys(n);return function(o,c){o=o===void 0?e:o;let f=!1,S={};for(let b=0;b<i.length;b++){let _=i[b],H=n[_],Se=o[_],be=H(Se,c);S[_]=be,f=f||be!==Se}return f?S:o}}function Rt(t,e){return Object.keys(t).filter(s=>s!==e).reduce((s,n)=>Object.assign(s,{[n]:t[n]}),{})}function lt(...t){return function(e){if(t.length===0)return e;let s=t[t.length-1];return t.slice(0,-1).reduceRight((i,r)=>r(i),s(e))}}function ft(t,e){return Array.isArray(e)&&e.length>0&&(t=lt.apply(null,[...e,t])),(s,n)=>{let i=t(s);return(r,o)=>(r=r===void 0?n:r,i(r,o))}}function Pt(t){let e=Array.isArray(t)&&t.length>0?lt(...t):s=>s;return(s,n)=>(s=e(s),(i,r)=>(i=i===void 0?n:i,s(i,r)))}var x=class extends L{},U=class extends R{},Tt="@ngrx/store/update-reducers",ue=(()=>{let e=class e extends N{get currentReducers(){return this.reducers}constructor(n,i,r,o){super(o(r,i)),this.dispatcher=n,this.initialState=i,this.reducers=r,this.reducerFactory=o}addFeature(n){this.addFeatures([n])}addFeatures(n){let i=n.reduce((r,{reducers:o,reducerFactory:c,metaReducers:f,initialState:S,key:b})=>{let _=typeof o=="function"?Pt(f)(o,S):ft(c,f)(o,S);return r[b]=_,r},{});this.addReducers(i)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(i=>i.key))}addReducer(n,i){this.addReducers({[n]:i})}addReducers(n){this.reducers=M(M({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(i=>{this.reducers=Rt(this.reducers,i)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Tt,features:n})}ngOnDestroy(){this.complete()}};e.\u0275fac=function(i){return new(i||e)(d(U),d(le),d(ct),d(at))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),xt=[ue,{provide:x,useExisting:ue},{provide:U,useExisting:R}],fe=(()=>{let e=class e extends _e{ngOnDestroy(){this.complete()}};e.\u0275fac=(()=>{let n;return function(r){return(n||(n=Le(e)))(r||e)}})(),e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),Bt=[fe],z=class extends L{},nt=(()=>{let e=class e extends N{constructor(n,i,r,o){super(o);let f=n.pipe(Oe(Me)).pipe(Be(i)),S={state:o},b=f.pipe(xe(kt,S));this.stateSubscription=b.subscribe(({state:_,action:H})=>{this.next(_),r.next(H)}),this.state=ie(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};e.INIT=ot,e.\u0275fac=function(i){return new(i||e)(d(R),d(x),d(fe),d(le))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})();function kt(t={state:void 0},[e,s]){let{state:n}=t;return{state:s(n,e),action:e}}var Lt=[nt,{provide:z,useExisting:nt}],B=(()=>{let e=class e extends L{constructor(n,i,r){super(),this.actionsObserver=i,this.reducerManager=r,this.source=n,this.state=n.state}select(n,...i){return jt.call(null,n,...i)(this)}selectSignal(n,i){return j(()=>n(this.state()),i)}lift(n){let i=new e(this,this.actionsObserver,this.reducerManager);return i.operator=n,i}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,i){this.reducerManager.addReducer(n,i)}removeReducer(n){this.reducerManager.removeReducer(n)}};e.\u0275fac=function(i){return new(i||e)(d(z),d(R),d(ue))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),Nt=[B];function jt(t,e,...s){return function(i){let r;if(typeof t=="string"){let o=[e,...s].filter(Boolean);r=i.pipe(Te(t,...o))}else if(typeof t=="function")r=i.pipe(Ie(o=>t(o,e)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return r.pipe(Pe())}}var he="https://ngrx.io/guide/store/configuration/runtime-checks";function it(t){return t===void 0}function rt(t){return t===null}function ht(t){return Array.isArray(t)}function $t(t){return typeof t=="string"}function Ut(t){return typeof t=="boolean"}function zt(t){return typeof t=="number"}function gt(t){return typeof t=="object"&&t!==null}function Vt(t){return gt(t)&&!ht(t)}function Gt(t){if(!Vt(t))return!1;let e=Object.getPrototypeOf(t);return e===Object.prototype||e===null}function ae(t){return typeof t=="function"}function Ht(t){return ae(t)&&t.hasOwnProperty("\u0275cmp")}function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zt(t){return t instanceof u?h(t):t}function Kt(t){return typeof t=="function"?t():t}function Wt(t,e){return t.concat(e)}function qt(){if(h(B,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Xt(t,e){return function(s,n){let i=e.action(n)?ce(n):n,r=t(s,i);return e.state()?ce(r):r}}function ce(t){Object.freeze(t);let e=ae(t);return Object.getOwnPropertyNames(t).forEach(s=>{if(!s.startsWith("\u0275")&&Yt(t,s)&&(!e||s!=="caller"&&s!=="callee"&&s!=="arguments")){let n=t[s];(gt(n)||ae(n))&&!Object.isFrozen(n)&&ce(n)}}),t}function Jt(t,e){return function(s,n){if(e.action(n)){let r=de(n);st(r,"action")}let i=t(s,n);if(e.state()){let r=de(i);st(r,"state")}return i}}function de(t,e=[]){return(it(t)||rt(t))&&e.length===0?{path:["root"],value:t}:Object.keys(t).reduce((n,i)=>{if(n)return n;let r=t[i];return Ht(r)?n:it(r)||rt(r)||zt(r)||Ut(r)||$t(r)||ht(r)?!1:Gt(r)?de(r,[...e,i]):{path:[...e,i],value:r}},!1)}function st(t,e){if(t===!1)return;let s=t.path.join("."),n=new Error(`Detected unserializable ${e} at "${s}". ${he}#strict${e}serializability`);throw n.value=t.value,n.unserializablePath=s,n}function Qt(t,e){return function(s,n){if(e.action(n)&&!Q.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${he}#strictactionwithinngzone`);return t(s,n)}}function en(t){return Ye()?M({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function tn({strictActionSerializability:t,strictStateSerializability:e}){return s=>t||e?Jt(s,{action:n=>t&&!ge(n),state:()=>e}):s}function nn({strictActionImmutability:t,strictStateImmutability:e}){return s=>t||e?Xt(s,{action:n=>t&&!ge(n),state:()=>e}):s}function ge(t){return t.type.startsWith("@ngrx")}function rn({strictActionWithinNgZone:t}){return e=>t?Qt(e,{action:s=>t&&!ge(s)}):e}function sn(t){return[{provide:et,useValue:t},{provide:Qe,useFactory:un,deps:[et]},{provide:T,deps:[Qe],useFactory:en},{provide:$,multi:!0,deps:[T],useFactory:nn},{provide:$,multi:!0,deps:[T],useFactory:tn},{provide:$,multi:!0,deps:[T],useFactory:rn}]}function on(){return[{provide:dt,multi:!0,deps:[T],useFactory:an}]}function un(t){return t}function an(t){if(!t.strictActionTypeUniqueness)return;let e=Object.entries(oe).filter(([,s])=>s>1).map(([s])=>s);if(e.length)throw new Error(`Action types are registered more than once, ${e.map(s=>`"${s}"`).join(", ")}. ${he}#strictactiontypeuniqueness`)}function cn(t={},e={}){return[{provide:ut,useFactory:qt},{provide:Ke,useValue:e.initialState},{provide:le,useFactory:Kt,deps:[Ke]},{provide:se,useValue:t},{provide:qe,useExisting:t instanceof u?t:se},{provide:ct,deps:[se,[new Ne(qe)]],useFactory:Zt},{provide:Xe,useValue:e.metaReducers?e.metaReducers:[]},{provide:Je,deps:[$,Xe],useFactory:Wt},{provide:We,useValue:e.reducerFactory?e.reducerFactory:It},{provide:at,deps:[We,Je],useFactory:ft},Ot,xt,Bt,Lt,Nt,sn(e.runtimeChecks),on()]}function dn(){h(R),h(x),h(fe),h(B),h(ut,{optional:!0}),h(dt,{optional:!0})}var ln=[{provide:tt,useFactory:dn},{provide:je,multi:!0,useFactory(){return()=>h(tt)}}];function Xn(t,e){return $e([...cn(t,e),ln])}function Jn(...t){let e=t.pop(),s=t.map(n=>n.type);return{reducer:e,types:s}}function Qn(t,...e){let s=new Map;for(let n of e)for(let i of n.types){let r=s.get(i);if(r){let o=(c,f)=>n.reducer(r(c,f),f);s.set(i,o)}else s.set(i,n.reducer)}return function(n=t,i){let r=s.get(i.type);return r?r(n,i):n}}var V=(()=>{let e=class e{constructor(n,i,r,o){this.platform_id=n,this.changeDetRef=i,this.store=r,this.componentFactory=o,this.currentComponentID=0,this.componentsList=[],this.availedComponents={}}init(){this.store.select("provideHomeView").subscribe(n=>{if(!n.view)return;let{header:i,main:r,footer:o}={header:n.view.header,main:n.view.main,footer:n.view.footer};if(!i||!r||!o)return;this.main=r,this.footer=o;let c=this.componentFactory.resolveComponentFactory(this.componentsList[0]),f=i.createComponent(c);this.availedComponents[0]=f})}navListAction(n,i){this.checkSize(i);var r=window.getComputedStyle(n).display;i.flag=r!="block",this.changeDetRef.detectChanges()}checkSize(n){P(window,"resize").subscribe(()=>{n.flag=window.innerWidth>980})}scrollEvent(){Re(P(window,"wheel"),P(window,"touchmove"),P(window,"scroll")).subscribe(n=>{this.renderComponent(this.currentComponentID+1)})}renderComponent(n){if(!n||!this.componentsList[`${n}`]||!(this.availedComponents[`${n-1}`].location.nativeElement.getBoundingClientRect().top<=window.innerHeight/2))return;this.currentComponentID++;let r=this.componentFactory.resolveComponentFactory(this.componentsList[n]),o=n==this.componentsList.length-1?this.footer?.createComponent(r):this.main?.createComponent(r);this.availedComponents[`${n}`]=o}};e.\u0275fac=function(i){return new(i||e)(d(I),d(X),d(B),d(ze))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var De=null;function pe(){return De}function zi(t){De||(De=t)}var pt=class{},Ee=new u("DocumentToken"),we=(()=>{let e=class e{historyGo(n){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:()=>h(Dn),providedIn:"platform"});let t=e;return t})(),Vi=new u("Location Initialized"),Dn=(()=>{let e=class e extends we{constructor(){super(),this._doc=h(Ee),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return pe().getBaseHref(this._doc)}onPopState(n){let i=pe().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=pe().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function ve(t,e){if(t.length==0)return e;if(e.length==0)return t;let s=0;return t.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?t+e.substring(1):s==1?t+e:t+"/"+e}function Dt(t){let e=t.match(/#|\?|$/),s=e&&e.index||t.length,n=s-(t[s-1]==="/"?1:0);return t.slice(0,n)+t.slice(s)}function v(t){return t&&t[0]!=="?"?"?"+t:t}var G=(()=>{let e=class e{historyGo(n){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:()=>h(mn),providedIn:"root"});let t=e;return t})(),Et=new u("appBaseHref"),mn=(()=>{let e=class e extends G{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??h(Ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ve(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+v(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,o){let c=this.prepareExternalUrl(r+v(o));this._platformLocation.pushState(n,i,c)}replaceState(n,i,r,o){let c=this.prepareExternalUrl(r+v(o));this._platformLocation.replaceState(n,i,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(d(we),d(Et,8))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Gi=(()=>{let e=class e extends G{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash;return i==null&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=ve(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,o){let c=this.prepareExternalUrl(r+v(o));c.length==0&&(c=this._platformLocation.pathname),this._platformLocation.pushState(n,i,c)}replaceState(n,i,r,o){let c=this.prepareExternalUrl(r+v(o));c.length==0&&(c=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(d(we),d(Et,8))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),Cn=(()=>{let e=class e{constructor(n){this._subject=new Ge,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=En(Dt(mt(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+v(i))}normalize(n){return e.stripTrailingSlash(Fn(this._basePath,mt(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+v(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+v(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};e.normalizeQueryParams=v,e.joinWithSlash=ve,e.stripTrailingSlash=Dt,e.\u0275fac=function(i){return new(i||e)(d(G))},e.\u0275prov=p({token:e,factory:()=>yn(),providedIn:"root"});let t=e;return t})();function yn(){return new Cn(d(G))}function Fn(t,e){if(!t||!e.startsWith(t))return e;let s=e.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function mt(t){return t.replace(/\/index.html$/,"")}function En(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}function Hi(t,e){e=encodeURIComponent(e);for(let s of t.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var me=class{constructor(e,s,n,i){this.$implicit=e,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},wt=(()=>{let e=class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,o,c)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new me(r.item,this._ngForOf,-1,-1),c===null?void 0:c);else if(c==null)i.remove(o===null?void 0:o);else if(o!==null){let f=i.get(o);i.move(f,c),Ct(f,r)}});for(let r=0,o=i.length;r<o;r++){let f=i.get(r).context;f.index=r,f.count=o,f.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Ct(o,r)})}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(w(ee),w(ne),w(Ve))},e.\u0275dir=W({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function Ct(t,e){t.context.$implicit=e.item}var Yi=(()=>{let e=class e{constructor(n,i){this._viewContainer=n,this._context=new Ce,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){yt("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){yt("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(w(ee),w(ne))},e.\u0275dir=W({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),Ce=class{constructor(){this.$implicit=null,this.ngIf=null}};function yt(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${ke(e)}'.`)}var vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=K({type:e}),e.\u0275inj=Z({});let t=e;return t})(),wn="browser",vn="server";function Ae(t){return t===wn}function Zi(t){return t===vn}var Ki=(()=>{let e=class e{};e.\u0275prov=p({token:e,providedIn:"root",factory:()=>Ae(h(I))?new ye(h(Ee),window):new Fe});let t=e;return t})(),ye=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=An(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function An(t,e){let s=t.getElementById(e)||t.getElementsByName(e)[0];if(s)return s;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}i=n.nextNode()}}return null}var Fe=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Ft=class{};function bn(t,e){if(t&1&&(a(0,"div"),D(1,"img",6),l()),t&2){let s=e.$implicit;C(),m("src",s,y)}}function _n(t,e){if(t&1&&(a(0,"div"),D(1,"img",6),l()),t&2){let s=e.$implicit;C(),m("src",s,y)}}var At=(()=>{let e=class e{constructor(){this.files=A.home.main}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F({type:e,selectors:[["app-main-content"]],standalone:!0,features:[E],decls:15,vars:3,consts:[[1,"products"],[1,"antennas"],[1,"antennas-img"],[4,"ngFor","ngForOf"],[1,"description"],["alt","Background image with assemblied antennas.",3,"src"],["alt","Antenna image",3,"src"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"h2"),g(2,"Range of Exceptional "),D(3,"br"),a(4,"span"),g(5,"Antennas"),l()(),a(6,"div",1)(7,"div",2),te(8,bn,2,1,"div",3),l(),a(9,"div",2),te(10,_n,2,1,"div",3),l()()(),a(11,"div",4),D(12,"img",5),a(13,"p"),g(14,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "),l()()),i&2&&(C(8),m("ngForOf",r.files.antennas),C(2),m("ngForOf",r.files.antennas),C(2),m("src",r.files.textBackgroundImage,y))},dependencies:[vt,wt],styles:['.products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:1320px;margin:auto}.products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8bf3c}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-wrap:wrap;justify-content:center}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto;grid-template-areas:"row-1-1 row-1-2 row-1-3 row-1-4" "row-2-1 row-2-2 row-2-3 row-2-4" "row-3-1 row-3-2 row-3-3 row-3-4" "row-4-1 row-4-2 row-4-3 row-4-4"}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1){grid-area:row-1-1}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){grid-area:row-1-2}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(3){grid-area:row-1-3}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(4){grid-area:row-1-4}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:28px 14px}.products[_ngcontent-%COMP%]   .antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:"Antenna name";display:block;text-align:center;margin-top:15px}.description[_ngcontent-%COMP%]{margin-top:45px;height:330px;position:relative}.description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:-80px;height:315px;width:calc(100vw - 17px);object-fit:cover;background-color:#203548;clip-path:polygon(0 18%,100% 0,100% 100%,0% 100%)}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;color:#fff;top:50%;transform:translateY(-50%);right:0;line-height:27px;font-weight:400;width:1320px;margin:auto}.work[_ngcontent-%COMP%]{display:flex}@media (max-width: 1500px){.products[_ngcontent-%COMP%]{max-width:763.836px;margin:auto}.products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1){grid-area:row-1-1!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){grid-area:row-1-2!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(3){grid-area:row-2-1!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(4){grid-area:row-2-2!important}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%}}@media (max-width: 980px){.products[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:240px}.description[_ngcontent-%COMP%]{height:auto;padding-bottom:45px;padding-top:5px}.description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:160px;transform:unset!important}}@media (max-width: 680px){.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1){grid-area:row-1-1!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){grid-area:row-2-1!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(3){grid-area:row-3-1!important}.antennas[_ngcontent-%COMP%]   .antennas-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(4){grid-area:row-4-1!important}}']});let t=e;return t})();var St=(()=>{let e=class e{constructor(){this.gifImage=A.home.main.gif}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F({type:e,selectors:[["app-how-it-works"]],standalone:!0,features:[E],decls:12,vars:1,consts:[[1,"work"],[1,"text"],[1,"video"],["alt","Gif record with presentation how our antennas work.",3,"src"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"div",1)(2,"h2"),g(3,"How our "),a(4,"span"),g(5,"antennas work"),l()(),a(6,"p"),g(7," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, "),D(8,"br"),g(9," totam rem aperiam, eaque ipsa quae ab "),l()(),a(10,"div",2),D(11,"img",3),l()()),i&2&&(C(11),m("src",r.gifImage,y))},styles:['.work[_ngcontent-%COMP%]{position:relative;margin-top:75px}.work[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center}.work[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbbb2a}.work[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px}.work[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:45px auto 0;width:100%;max-width:1060px}.work[_ngcontent-%COMP%]:after{content:"";clip-path:polygon(0 74%,100% 50%,100% 100%,0 100%);background-color:#fbbb2a;position:absolute;display:block;height:120%;left:-80px;bottom:-25px;right:-80px;z-index:-1}@media (max-width: 980px){.work[_ngcontent-%COMP%]:after{height:95%}}']});let t=e;return t})();var bt=(()=>{let e=class e{constructor(){this.logo=A.footer.logo}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F({type:e,selectors:[["app-footer"]],standalone:!0,features:[E],decls:18,vars:1,consts:[[1,"information"],[1,"logo"],["alt","ITELITE company logo.",3,"src"],[1,"contact"],["href","mailto: sales@itelite.net"],[1,"line"],[1,"rights"],[1,"socials"],[1,"fa-brands","fa-linkedin"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"div",1),D(2,"img",2),l(),a(3,"div",3)(4,"p"),g(5,"Email: "),a(6,"a",4),g(7,"sales@itelite.net"),l()(),a(8,"p"),g(9,"Phone: +48.71.323.0180"),l(),a(10,"p"),g(11,"Address: ul.Terenowa 42, 52-231 Wroclaw Poland"),l()(),D(12,"div",5),a(13,"div",6)(14,"p"),g(15,"@2023 ITELITE | All Copy Right"),l(),a(16,"div",7),D(17,"i",8),l()()()),i&2&&(C(2),m("src",r.logo,y))},styles:[".information[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff}.information[_ngcontent-%COMP%]{min-height:230px;background-color:#203548;padding:45px 0;box-sizing:border-box}.information[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto}.information[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:flex;justify-content:space-between;max-width:1020px;margin:25px auto 10px;padding:0 35px;line-height:33px}.information[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.information[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{height:1px;background-color:#ffffff25}.information[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%]{display:flex;margin:15px auto 0;justify-content:space-between;max-width:1020px;padding:0 35px}.information[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:32px}@media (max-width: 980px){.information[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{flex-direction:column;width:fit-content}}"]});let t=e;return t})();var fr=(()=>{let e=class e{constructor(n,i){this.appService=n,this.platform_id=i,n.componentsList=[Ze,At,St,bt],n.init()}ngAfterViewInit(){Ae(this.platform_id)&&this.appService.scrollEvent()}};e.\u0275fac=function(i){return new(i||e)(w(V),w(I))},e.\u0275cmp=F({type:e,selectors:[["app-home-view"]],standalone:!0,features:[He([V]),E],decls:0,vars:0,template:function(i,r){}});let t=e;return t})();export{pe as a,zi as b,pt as c,Ee as d,Vi as e,G as f,mn as g,Gi as h,Cn as i,Hi as j,Yi as k,vt as l,wn as m,Ae as n,Zi as o,Ki as p,Ft as q,A as r,zn as s,Vn as t,B as u,Xn as v,Jn as w,Qn as x,V as y,fr as z};
