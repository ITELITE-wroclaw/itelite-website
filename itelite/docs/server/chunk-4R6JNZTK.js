import{d as dr}from"./chunk-CWTPBX7D.js";var Tr=dr((Ue,He)=>{(function(g,x){typeof Ue=="object"&&typeof He<"u"?He.exports=x():typeof define=="function"&&define.amd?define(x):(g=typeof globalThis<"u"?globalThis:g||self,g.DOMPurify=x())})(Ue,function(){"use strict";function g(r){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(r)}function x(r,n){return x=Object.setPrototypeOf||function(s,c){return s.__proto__=c,s},x(r,n)}function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K(r,n,o){return ht()?K=Reflect.construct:K=function(c,S,y){var D=[null];D.push.apply(D,S);var j=Function.bind.apply(c,D),Y=new j;return y&&x(Y,y.prototype),Y},K.apply(null,arguments)}function O(r){return _t(r)||At(r)||Et(r)||yt()}function _t(r){if(Array.isArray(r))return fe(r)}function At(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Et(r,n){if(r){if(typeof r=="string")return fe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return fe(r,n)}}function fe(r,n){(n==null||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}function yt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gt=Object.hasOwnProperty,ze=Object.setPrototypeOf,bt=Object.isFrozen,St=Object.getPrototypeOf,Ot=Object.getOwnPropertyDescriptor,_=Object.freeze,R=Object.seal,Rt=Object.create,Ge=typeof Reflect<"u"&&Reflect,Z=Ge.apply,ce=Ge.construct;Z||(Z=function(n,o,s){return n.apply(o,s)}),_||(_=function(n){return n}),R||(R=function(n){return n}),ce||(ce=function(n,o){return K(n,O(o))});var Lt=b(Array.prototype.forEach),We=b(Array.prototype.pop),$=b(Array.prototype.push),J=b(String.prototype.toLowerCase),me=b(String.prototype.toString),Nt=b(String.prototype.match),L=b(String.prototype.replace),Dt=b(String.prototype.indexOf),Mt=b(String.prototype.trim),A=b(RegExp.prototype.test),pe=wt(TypeError);function b(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];return Z(r,n,s)}}function wt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ce(r,o)}}function l(r,n,o){var s;o=(s=o)!==null&&s!==void 0?s:J,ze&&ze(r,null);for(var c=n.length;c--;){var S=n[c];if(typeof S=="string"){var y=o(S);y!==S&&(bt(n)||(n[c]=y),S=y)}r[S]=!0}return r}function k(r){var n=Rt(null),o;for(o in r)Z(gt,r,[o])===!0&&(n[o]=r[o]);return n}function Q(r,n){for(;r!==null;){var o=Ot(r,n);if(o){if(o.get)return b(o.get);if(typeof o.value=="function")return b(o.value)}r=St(r)}function s(c){return console.warn("fallback value for",c),null}return s}var Be=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),de=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Te=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ct=_(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ve=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),It=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$e=_(["#text"]),je=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),he=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ye=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xt=R(/\{\{[\w\W]*|[\w\W]*\}\}/gm),kt=R(/<%[\w\W]*|[\w\W]*%>/gm),Pt=R(/\${[\w\W]*}/gm),Ft=R(/^data-[\-\w.\u00B7-\uFFFF]/),Ut=R(/^aria-[\-\w]+$/),Ht=R(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zt=R(/^(?:\w+script|data):/i),Gt=R(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=R(/^html$/i),Bt=function(){return typeof window>"u"?null:window},$t=function(n,o){if(g(n)!=="object"||typeof n.createPolicy!="function")return null;var s=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(s=o.currentScript.getAttribute(c));var S="dompurify"+(s?"#"+s:"");try{return n.createPolicy(S,{createHTML:function(D){return D},createScriptURL:function(D){return D}})}catch{return console.warn("TrustedTypes policy "+S+" could not be created."),null}};function Ve(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bt(),n=function(e){return Ve(e)};if(n.version="2.4.7",n.removed=[],!r||!r.document||r.document.nodeType!==9)return n.isSupported=!1,n;var o=r.document,s=r.document,c=r.DocumentFragment,S=r.HTMLTemplateElement,y=r.Node,D=r.Element,j=r.NodeFilter,Y=r.NamedNodeMap,Yt=Y===void 0?r.NamedNodeMap||r.MozNamedAttrMap:Y,Vt=r.HTMLFormElement,Xt=r.DOMParser,te=r.trustedTypes,re=D.prototype,qt=Q(re,"cloneNode"),Kt=Q(re,"nextSibling"),Zt=Q(re,"childNodes"),_e=Q(re,"parentNode");if(typeof S=="function"){var Ae=s.createElement("template");Ae.content&&Ae.content.ownerDocument&&(s=Ae.content.ownerDocument)}var N=$t(te,o),Ee=N?N.createHTML(""):"",ae=s,ye=ae.implementation,Jt=ae.createNodeIterator,Qt=ae.createDocumentFragment,er=ae.getElementsByTagName,tr=o.importNode,Xe={};try{Xe=k(s).documentMode?s.documentMode:{}}catch{}var M={};n.isSupported=typeof _e=="function"&&ye&&ye.createHTMLDocument!==void 0&&Xe!==9;var ge=xt,be=kt,Se=Pt,rr=Ft,ar=Ut,nr=zt,qe=Gt,Oe=Ht,m=null,Ke=l({},[].concat(O(Be),O(de),O(Te),O(ve),O($e))),p=null,Ze=l({},[].concat(O(je),O(he),O(Ye),O(ee))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,Re=null,Je=!0,Le=!0,Qe=!1,et=!0,U=!1,P=!1,Ne=!1,De=!1,H=!1,ne=!1,ie=!1,tt=!0,rt=!1,ir="user-content-",Me=!0,X=!1,z={},G=null,at=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,it=l({},["audio","video","img","source","image","track"]),we=null,ot=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",w="http://www.w3.org/1999/xhtml",W=w,Ce=!1,Ie=null,or=l({},[oe,le,w],me),F,lr=["application/xhtml+xml","text/html"],sr="text/html",d,B=null,ur=s.createElement("form"),lt=function(e){return e instanceof RegExp||e instanceof Function},xe=function(e){B&&B===e||((!e||g(e)!=="object")&&(e={}),e=k(e),F=lr.indexOf(e.PARSER_MEDIA_TYPE)===-1?F=sr:F=e.PARSER_MEDIA_TYPE,d=F==="application/xhtml+xml"?me:J,m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,d):Ke,p="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,d):Ze,Ie="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,me):or,we="ADD_URI_SAFE_ATTR"in e?l(k(ot),e.ADD_URI_SAFE_ATTR,d):ot,nt="ADD_DATA_URI_TAGS"in e?l(k(it),e.ADD_DATA_URI_TAGS,d):it,G="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,d):at,V="FORBID_TAGS"in e?l({},e.FORBID_TAGS,d):{},Re="FORBID_ATTR"in e?l({},e.FORBID_ATTR,d):{},z="USE_PROFILES"in e?e.USE_PROFILES:!1,Je=e.ALLOW_ARIA_ATTR!==!1,Le=e.ALLOW_DATA_ATTR!==!1,Qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,et=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,U=e.SAFE_FOR_TEMPLATES||!1,P=e.WHOLE_DOCUMENT||!1,H=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,tt=e.SANITIZE_DOM!==!1,rt=e.SANITIZE_NAMED_PROPS||!1,Me=e.KEEP_CONTENT!==!1,X=e.IN_PLACE||!1,Oe=e.ALLOWED_URI_REGEXP||Oe,W=e.NAMESPACE||w,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),U&&(Le=!1),ne&&(H=!0),z&&(m=l({},O($e)),p=[],z.html===!0&&(l(m,Be),l(p,je)),z.svg===!0&&(l(m,de),l(p,he),l(p,ee)),z.svgFilters===!0&&(l(m,Te),l(p,he),l(p,ee)),z.mathMl===!0&&(l(m,ve),l(p,Ye),l(p,ee))),e.ADD_TAGS&&(m===Ke&&(m=k(m)),l(m,e.ADD_TAGS,d)),e.ADD_ATTR&&(p===Ze&&(p=k(p)),l(p,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&l(we,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(G===at&&(G=k(G)),l(G,e.FORBID_CONTENTS,d)),Me&&(m["#text"]=!0),P&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete V.tbody),_&&_(e),B=e)},st=l({},["mi","mo","mn","ms","mtext"]),ut=l({},["foreignobject","desc","title","annotation-xml"]),fr=l({},["title","style","font","a","script"]),se=l({},de);l(se,Te),l(se,Ct);var ke=l({},ve);l(ke,It);var cr=function(e){var t=_e(e);(!t||!t.tagName)&&(t={namespaceURI:W,tagName:"template"});var a=J(e.tagName),u=J(t.tagName);return Ie[e.namespaceURI]?e.namespaceURI===le?t.namespaceURI===w?a==="svg":t.namespaceURI===oe?a==="svg"&&(u==="annotation-xml"||st[u]):!!se[a]:e.namespaceURI===oe?t.namespaceURI===w?a==="math":t.namespaceURI===le?a==="math"&&ut[u]:!!ke[a]:e.namespaceURI===w?t.namespaceURI===le&&!ut[u]||t.namespaceURI===oe&&!st[u]?!1:!ke[a]&&(fr[a]||!se[a]):!!(F==="application/xhtml+xml"&&Ie[e.namespaceURI]):!1},C=function(e){$(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ee}catch{e.remove()}}},Pe=function(e,t){try{$(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!p[e])if(H||ne)try{C(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ft=function(e){var t,a;if(De)e="<remove></remove>"+e;else{var u=Nt(e,/^[\r\n\t ]+/);a=u&&u[0]}F==="application/xhtml+xml"&&W===w&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=N?N.createHTML(e):e;if(W===w)try{t=new Xt().parseFromString(E,F)}catch{}if(!t||!t.documentElement){t=ye.createDocument(W,"template",null);try{t.documentElement.innerHTML=Ce?Ee:E}catch{}}var h=t.body||t.documentElement;return e&&a&&h.insertBefore(s.createTextNode(a),h.childNodes[0]||null),W===w?er.call(t,P?"html":"body")[0]:P?t.documentElement:h},ct=function(e){return Jt.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,null,!1)},mr=function(e){return e instanceof Vt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Yt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},q=function(e){return g(y)==="object"?e instanceof y:e&&g(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},I=function(e,t,a){M[e]&&Lt(M[e],function(u){u.call(n,t,a,B)})},mt=function(e){var t;if(I("beforeSanitizeElements",e,null),mr(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return C(e),!0;var a=d(e.nodeName);if(I("uponSanitizeElement",e,{tagName:a,allowedTags:m}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||a==="select"&&A(/<template/i,e.innerHTML))return C(e),!0;if(!m[a]||V[a]){if(!V[a]&&dt(a)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a)))return!1;if(Me&&!G[a]){var u=_e(e)||e.parentNode,E=Zt(e)||e.childNodes;if(E&&u)for(var h=E.length,v=h-1;v>=0;--v)u.insertBefore(qt(E[v],!0),Kt(e))}return C(e),!0}return e instanceof D&&!cr(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&A(/<\/no(script|embed|frames)/i,e.innerHTML)?(C(e),!0):(U&&e.nodeType===3&&(t=e.textContent,t=L(t,ge," "),t=L(t,be," "),t=L(t,Se," "),e.textContent!==t&&($(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},pt=function(e,t,a){if(tt&&(t==="id"||t==="name")&&(a in s||a in ur))return!1;if(!(Le&&!Re[t]&&A(rr,t))){if(!(Je&&A(ar,t))){if(!p[t]||Re[t]){if(!(dt(e)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&A(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a))))return!1}else if(!we[t]){if(!A(Oe,L(a,qe,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Dt(a,"data:")===0&&nt[e])){if(!(Qe&&!A(nr,L(a,qe,"")))){if(a)return!1}}}}}}return!0},dt=function(e){return e.indexOf("-")>0},Tt=function(e){var t,a,u,E;I("beforeSanitizeAttributes",e,null);var h=e.attributes;if(h){var v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};for(E=h.length;E--;){t=h[E];var ue=t,T=ue.name,Fe=ue.namespaceURI;if(a=T==="value"?t.value:Mt(t.value),u=d(T),v.attrName=u,v.attrValue=a,v.keepAttr=!0,v.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,v),a=v.attrValue,!v.forceKeepAttr&&(Pe(T,e),!!v.keepAttr)){if(!et&&A(/\/>/i,a)){Pe(T,e);continue}U&&(a=L(a,ge," "),a=L(a,be," "),a=L(a,Se," "));var vt=d(e.nodeName);if(pt(vt,u,a)){if(rt&&(u==="id"||u==="name")&&(Pe(T,e),a=ir+a),N&&g(te)==="object"&&typeof te.getAttributeType=="function"&&!Fe)switch(te.getAttributeType(vt,u)){case"TrustedHTML":{a=N.createHTML(a);break}case"TrustedScriptURL":{a=N.createScriptURL(a);break}}try{Fe?e.setAttributeNS(Fe,T,a):e.setAttribute(T,a),We(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},pr=function i(e){var t,a=ct(e);for(I("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)I("uponSanitizeShadowNode",t,null),!mt(t)&&(t.content instanceof c&&i(t.content),Tt(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,a,u,E,h;if(Ce=!i,Ce&&(i="<!-->"),typeof i!="string"&&!q(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw pe("dirty is not a string, aborting")}else throw pe("toString is not a function");if(!n.isSupported){if(g(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ne||xe(e),n.removed=[],typeof i=="string"&&(X=!1),X){if(i.nodeName){var v=d(i.nodeName);if(!m[v]||V[v])throw pe("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof y)t=ft("<!---->"),a=t.ownerDocument.importNode(i,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?t=a:t.appendChild(a);else{if(!H&&!U&&!P&&i.indexOf("<")===-1)return N&&ie?N.createHTML(i):i;if(t=ft(i),!t)return H?null:ie?Ee:""}t&&De&&C(t.firstChild);for(var ue=ct(X?i:t);u=ue.nextNode();)u.nodeType===3&&u===E||mt(u)||(u.content instanceof c&&pr(u.content),Tt(u),E=u);if(E=null,X)return i;if(H){if(ne)for(h=Qt.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return(p.shadowroot||p.shadowrootmod)&&(h=tr.call(o,h,!0)),h}var T=P?t.outerHTML:t.innerHTML;return P&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(Wt,t.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+T),U&&(T=L(T,ge," "),T=L(T,be," "),T=L(T,Se," ")),N&&ie?N.createHTML(T):T},n.setConfig=function(i){xe(i),Ne=!0},n.clearConfig=function(){B=null,Ne=!1},n.isValidAttribute=function(i,e,t){B||xe({});var a=d(i),u=d(e);return pt(a,u,t)},n.addHook=function(i,e){typeof e=="function"&&(M[i]=M[i]||[],$(M[i],e))},n.removeHook=function(i){if(M[i])return We(M[i])},n.removeHooks=function(i){M[i]&&(M[i]=[])},n.removeAllHooks=function(){M={}},n}var jt=Ve();return jt})});export default Tr();
