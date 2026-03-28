(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function l(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var u=i.length-1;u>=0;u--)(s=i[u])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function ut(i,e,t,n){function r(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function u(p){try{h(n.next(p))}catch(g){s(g)}}function d(p){try{h(n.throw(p))}catch(g){s(g)}}function h(p){p.done?a(p.value):r(p.value).then(u,d)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=window,$n=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,En=Symbol(),Kn=new WeakMap;let Cr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==En)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($n&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Kn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Kn.set(t,e))}return e}toString(){return this.cssText}};const mi=i=>new Cr(typeof i=="string"?i:i+"",void 0,En),R=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new Cr(t,i,En)},gi=(i,e)=>{$n?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=ft.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Xn=$n?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return mi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const gt=window,Zn=gt.trustedTypes,wi=Zn?Zn.emptyScript:"",Jn=gt.reactiveElementPolyfillSupport,dn={toAttribute(i,e){switch(e){case Boolean:i=i?wi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Mr=(i,e)=>e!==i&&(e==e||i==i),zt={attribute:!0,type:String,converter:dn,reflect:!1,hasChanged:Mr},un="finalized";let Ce=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=zt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||zt}static finalize(){if(this.hasOwnProperty(un))return!1;this[un]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Xn(r))}else e!==void 0&&t.push(Xn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=zt){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:dn).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=r.getPropertyOptions(a),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:dn;this._$El=a,this[a]=u.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Mr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ce[un]=!0,Ce.elementProperties=new Map,Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},Jn==null||Jn({ReactiveElement:Ce}),((Ft=gt.reactiveElementVersions)!==null&&Ft!==void 0?Ft:gt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt;const wt=window,Me=wt.trustedTypes,Qn=Me?Me.createPolicy("lit-html",{createHTML:i=>i}):void 0,cn="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,kr="?"+ce,yi=`<${kr}>`,_e=document,yt=()=>_e.createComment(""),qe=i=>i===null||typeof i!="object"&&typeof i!="function",Lr=Array.isArray,vi=i=>Lr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",jt=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,er=/-->/g,tr=/>/g,ge=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nr=/'/g,rr=/"/g,Nr=/^(?:script|style|textarea|title)$/i,ke=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),ir=new WeakMap,ye=_e.createTreeWalker(_e,129,null,!1);function Dr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qn!==void 0?Qn.createHTML(e):e}const bi=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=Fe;for(let u=0;u<t;u++){const d=i[u];let h,p,g=-1,_=0;for(;_<d.length&&(s.lastIndex=_,p=s.exec(d),p!==null);)_=s.lastIndex,s===Fe?p[1]==="!--"?s=er:p[1]!==void 0?s=tr:p[2]!==void 0?(Nr.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=ge):p[3]!==void 0&&(s=ge):s===ge?p[0]===">"?(s=r??Fe,g=-1):p[1]===void 0?g=-2:(g=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?ge:p[3]==='"'?rr:nr):s===rr||s===nr?s=ge:s===er||s===tr?s=Fe:(s=ge,r=void 0);const S=s===ge&&i[u+1].startsWith("/>")?" ":"";a+=s===Fe?d+yi:g>=0?(n.push(h),d.slice(0,g)+cn+d.slice(g)+ce+S):d+ce+(g===-2?(n.push(void 0),u):S)}return[Dr(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let hn=class Ir{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const u=e.length-1,d=this.parts,[h,p]=bi(e,t);if(this.el=Ir.createElement(h,n),ye.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=ye.nextNode())!==null&&d.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(cn)||_.startsWith(ce)){const S=p[s++];if(g.push(_),S!==void 0){const ie=r.getAttribute(S.toLowerCase()+cn).split(ce),X=/([.?@])?(.*)/.exec(S);d.push({type:1,index:a,name:X[2],strings:ie,ctor:X[1]==="."?Ai:X[1]==="?"?Ei:X[1]==="@"?Si:$t})}else d.push({type:6,index:a})}for(const _ of g)r.removeAttribute(_)}if(Nr.test(r.tagName)){const g=r.textContent.split(ce),_=g.length-1;if(_>0){r.textContent=Me?Me.emptyScript:"";for(let S=0;S<_;S++)r.append(g[S],yt()),ye.nextNode(),d.push({type:2,index:++a});r.append(g[_],yt())}}}else if(r.nodeType===8)if(r.data===kr)d.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(ce,g+1))!==-1;)d.push({type:7,index:a}),g+=ce.length-1}a++}}static createElement(e,t){const n=_e.createElement("template");return n.innerHTML=e,n}};function Le(i,e,t=i,n){var r,a,s,u;if(e===ke)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=qe(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Le(i,d._$AS(i,e.values),d,n)),e}let _i=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:_e).importNode(n,!0);ye.currentNode=a;let s=ye.nextNode(),u=0,d=0,h=r[0];for(;h!==void 0;){if(u===h.index){let p;h.type===2?p=new Or(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new Ti(s,this,e)),this._$AV.push(p),h=r[++d]}u!==(h==null?void 0:h.index)&&(s=ye.nextNode(),u++)}return ye.currentNode=_e,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Or=class Pr{constructor(e,t,n,r){var a;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),qe(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):vi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==D&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(_e.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=hn.createElement(Dr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new _i(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=ir.get(e.strings);return t===void 0&&ir.set(e.strings,t=new hn(e)),t}T(e){Lr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Pr(this.k(yt()),this.k(yt()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},$t=class{constructor(e,t,n,r,a){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=Le(this,e,t,0),s=!qe(e)||e!==this._$AH&&e!==ke,s&&(this._$AH=e);else{const u=e;let d,h;for(e=a[0],d=0;d<a.length-1;d++)h=Le(this,u[n+d],t,d),h===ke&&(h=this._$AH[d]),s||(s=!qe(h)||h!==this._$AH[d]),h===D?e=D:e!==D&&(e+=(h??"")+a[d+1]),this._$AH[d]=h}s&&!r&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ai=class extends $t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}};const $i=Me?Me.emptyScript:"";let Ei=class extends $t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==D?this.element.setAttribute(this.name,$i):this.element.removeAttribute(this.name)}},Si=class extends $t{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Le(this,e,t,0))!==null&&n!==void 0?n:D)===ke)return;const r=this._$AH,a=e===D&&r!==D||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==D&&(r===D||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Ti=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}};const ar=wt.litHtmlPolyfillSupport;ar==null||ar(hn,Or),((Vt=wt.litHtmlVersions)!==null&&Vt!==void 0?Vt:wt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;const vt=window,Ne=vt.trustedTypes,sr=Ne?Ne.createPolicy("lit-html",{createHTML:i=>i}):void 0,fn="$lit$",he=`lit$${(Math.random()+"").slice(9)}$`,Br="?"+he,Ri=`<${Br}>`,Ae=document,Ke=()=>Ae.createComment(""),Xe=i=>i===null||typeof i!="object"&&typeof i!="function",Hr=Array.isArray,xi=i=>Hr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Gt=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,lr=/>/g,we=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dr=/'/g,ur=/"/g,Ur=/^(?:script|style|textarea|title)$/i,Fr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),v=Fr(1),Et=Fr(2),De=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),cr=new WeakMap,ve=Ae.createTreeWalker(Ae,129,null,!1);function zr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return sr!==void 0?sr.createHTML(e):e}const Ci=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=ze;for(let u=0;u<t;u++){const d=i[u];let h,p,g=-1,_=0;for(;_<d.length&&(s.lastIndex=_,p=s.exec(d),p!==null);)_=s.lastIndex,s===ze?p[1]==="!--"?s=or:p[1]!==void 0?s=lr:p[2]!==void 0?(Ur.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=we):p[3]!==void 0&&(s=we):s===we?p[0]===">"?(s=r??ze,g=-1):p[1]===void 0?g=-2:(g=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?we:p[3]==='"'?ur:dr):s===ur||s===dr?s=we:s===or||s===lr?s=ze:(s=we,r=void 0);const S=s===we&&i[u+1].startsWith("/>")?" ":"";a+=s===ze?d+Ri:g>=0?(n.push(h),d.slice(0,g)+fn+d.slice(g)+he+S):d+he+(g===-2?(n.push(void 0),u):S)}return[zr(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Ze{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const u=e.length-1,d=this.parts,[h,p]=Ci(e,t);if(this.el=Ze.createElement(h,n),ve.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=ve.nextNode())!==null&&d.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(fn)||_.startsWith(he)){const S=p[s++];if(g.push(_),S!==void 0){const ie=r.getAttribute(S.toLowerCase()+fn).split(he),X=/([.?@])?(.*)/.exec(S);d.push({type:1,index:a,name:X[2],strings:ie,ctor:X[1]==="."?ki:X[1]==="?"?Ni:X[1]==="@"?Di:St})}else d.push({type:6,index:a})}for(const _ of g)r.removeAttribute(_)}if(Ur.test(r.tagName)){const g=r.textContent.split(he),_=g.length-1;if(_>0){r.textContent=Ne?Ne.emptyScript:"";for(let S=0;S<_;S++)r.append(g[S],Ke()),ve.nextNode(),d.push({type:2,index:++a});r.append(g[_],Ke())}}}else if(r.nodeType===8)if(r.data===Br)d.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(he,g+1))!==-1;)d.push({type:7,index:a}),g+=he.length-1}a++}}static createElement(e,t){const n=Ae.createElement("template");return n.innerHTML=e,n}}function Ie(i,e,t=i,n){var r,a,s,u;if(e===De)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=Xe(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Ie(i,d._$AS(i,e.values),d,n)),e}class Mi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ae).importNode(n,!0);ve.currentNode=a;let s=ve.nextNode(),u=0,d=0,h=r[0];for(;h!==void 0;){if(u===h.index){let p;h.type===2?p=new Qe(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new Ii(s,this,e)),this._$AV.push(p),h=r[++d]}u!==(h==null?void 0:h.index)&&(s=ve.nextNode(),u++)}return ve.currentNode=Ae,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Qe{constructor(e,t,n,r){var a;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),Xe(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==De&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ae.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ze.createElement(zr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new Mi(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=cr.get(e.strings);return t===void 0&&cr.set(e.strings,t=new Ze(e)),t}T(e){Hr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Qe(this.k(Ke()),this.k(Ke()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class St{constructor(e,t,n,r,a){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=Ie(this,e,t,0),s=!Xe(e)||e!==this._$AH&&e!==De,s&&(this._$AH=e);else{const u=e;let d,h;for(e=a[0],d=0;d<a.length-1;d++)h=Ie(this,u[n+d],t,d),h===De&&(h=this._$AH[d]),s||(s=!Xe(h)||h!==this._$AH[d]),h===$?e=$:e!==$&&(e+=(h??"")+a[d+1]),this._$AH[d]=h}s&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ki extends St{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const Li=Ne?Ne.emptyScript:"";class Ni extends St{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Li):this.element.removeAttribute(this.name)}}class Di extends St{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ie(this,e,t,0))!==null&&n!==void 0?n:$)===De)return;const r=this._$AH,a=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==$&&(r===$||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ii{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}}const hr=vt.litHtmlPolyfillSupport;hr==null||hr(Ze,Qe),((Wt=vt.litHtmlVersions)!==null&&Wt!==void 0?Wt:vt.litHtmlVersions=[]).push("2.8.0");const Oi=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const u=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=s=new Qe(e.insertBefore(Ke(),u),u,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt,qt;class le extends Ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return De}}le.finalized=!0,le._$litElement$=!0,(Yt=globalThis.litElementHydrateSupport)===null||Yt===void 0||Yt.call(globalThis,{LitElement:le});const fr=globalThis.litElementPolyfillSupport;fr==null||fr({LitElement:le});((qt=globalThis.litElementVersions)!==null&&qt!==void 0?qt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Bi=(i,e,t)=>{e.constructor.createProperty(t,i)};function b(i){return(e,t)=>t!==void 0?Bi(i,e,t):Pi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(s.finisher=function(u){i(u,a)}),s}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vr(i,e){return Hi({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;((Kt=window.HTMLSlotElement)===null||Kt===void 0?void 0:Kt.prototype.assignedElements)!=null;function f(i){let e,t,n;return e=i,(r,a,s)=>{if(s.value!=null)s.value=pr(s.value,e,t,n);else if(s.get!=null)s.get=pr(s.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Xt=new Map;function pr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let u=this[r];if(Array.isArray(n))for(const d of n)Xt.has(d)?Xt.get(d).push(u):Xt.set(d,[u]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(g=>g.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const h=`${d}__timestamp`;let p=!1;if(t>0)if(!u.has(h))p=!0;else{let g=u.get(h);p=Date.now()-g>t}u.has(d)&&!p?s=u.get(d):(s=i.apply(this,a),u.set(d,s),t>0&&u.set(h,Date.now()))}else{const d=this;u.has(d)?s=u.get(d):(s=i.apply(this,a),u.set(d,s))}return s}}class pn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}pn.shared=new pn;class fe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}fe.shared=new fe;class bt{parseValue(e){return fe.shared.parseValue(e)}}bt.shared=new bt;class Je{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Je.shared=new Je;class _t{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const d=60**(e.length-1-a);return s*Math.floor(d)}).reduce((r,a)=>r+a,0);return t?void 0:n}}_t.shared=new _t;class mn{parseValue(e){if(typeof e=="string")return e}}mn.shared=new mn;class Ui{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class gn{parseValue(e){if(typeof e=="string")return e}}gn.shared=new gn;class At{parseValue(e){return String(e)}}At.shared=new At;class Q{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([f()],Q.prototype,"values",null);l([f()],Q.prototype,"value",null);class Fi extends Q{constructor(e){super(pn.shared,e)}}class ue extends Q{constructor(e){super(Je.shared,e)}}class Zt extends Q{constructor(e){super(_t.shared,e)}}class G extends Q{constructor(e){super(fe.shared,e)}}class T extends Q{constructor(e){super(At.shared,e)}}class zi extends Q{constructor(e){super(gn.shared,e)}}class mr extends Q{constructor(e){super(bt.shared,e)}}class Vi extends Q{constructor(e){super(mn.shared,e)}}class ji extends Q{constructor(e,t){super(t,e)}}class Wi extends ji{constructor(e){const t=new Ui(At.shared);super(e,t)}}class w{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ue(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new T(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new G(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new G(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new T(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new T(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new mr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new T(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new T(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new T(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new T(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ue(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new T(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new G(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Zt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new T(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new G(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ue(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new T(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new T(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new G(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new mr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new T(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Zt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new T(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new G(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Vi(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Fi(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new T(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new G(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new G(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new T(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new T(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new zi(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new T(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new G(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ue(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new T(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ue(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Zt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new T(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new T(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ue(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ue(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ue(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Wi(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new T(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new T(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new T(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new G(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new T(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new T(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new G(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new T(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new T(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new G(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new G(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([f()],w.prototype,"addeddate",null);l([f()],w.prototype,"audio_codec",null);l([f()],w.prototype,"audio_sample_rate",null);l([f()],w.prototype,"avg_rating",null);l([f()],w.prototype,"collection",null);l([f()],w.prototype,"collections_raw",null);l([f()],w.prototype,"collection_size",null);l([f()],w.prototype,"contributor",null);l([f()],w.prototype,"coverage",null);l([f()],w.prototype,"creator",null);l([f()],w.prototype,"collection_layout",null);l([f()],w.prototype,"date",null);l([f()],w.prototype,"description",null);l([f()],w.prototype,"downloads",null);l([f()],w.prototype,"duration",null);l([f()],w.prototype,"external_identifier",null);l([f()],w.prototype,"files_count",null);l([f()],w.prototype,"indexdate",null);l([f()],w.prototype,"isbn",null);l([f()],w.prototype,"issue",null);l([f()],w.prototype,"item_count",null);l([f()],w.prototype,"item_size",null);l([f()],w.prototype,"language",null);l([f()],w.prototype,"length",null);l([f()],w.prototype,"lineage",null);l([f()],w.prototype,"month",null);l([f()],w.prototype,"mediatype",null);l([f()],w.prototype,"noindex",null);l([f()],w.prototype,"notes",null);l([f()],w.prototype,"num_favorites",null);l([f()],w.prototype,"num_reviews",null);l([f()],w.prototype,"openlibrary_edition",null);l([f()],w.prototype,"openlibrary_work",null);l([f()],w.prototype,"page_progression",null);l([f()],w.prototype,"partner",null);l([f()],w.prototype,"ppi",null);l([f()],w.prototype,"publicdate",null);l([f()],w.prototype,"publisher",null);l([f()],w.prototype,"reviewdate",null);l([f()],w.prototype,"runtime",null);l([f()],w.prototype,"scanner",null);l([f()],w.prototype,"source",null);l([f()],w.prototype,"start_localtime",null);l([f()],w.prototype,"start_time",null);l([f()],w.prototype,"stop_time",null);l([f()],w.prototype,"subject",null);l([f()],w.prototype,"taper",null);l([f()],w.prototype,"title",null);l([f()],w.prototype,"transferer",null);l([f()],w.prototype,"track",null);l([f()],w.prototype,"type",null);l([f()],w.prototype,"uploader",null);l([f()],w.prototype,"utc_offset",null);l([f()],w.prototype,"venue",null);l([f()],w.prototype,"volume",null);l([f()],w.prototype,"week",null);l([f()],w.prototype,"year",null);class Oe{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?bt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?_t.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?fe.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?fe.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?fe.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([f()],Oe.prototype,"size",null);l([f()],Oe.prototype,"length",null);l([f()],Oe.prototype,"height",null);l([f()],Oe.prototype,"width",null);l([f()],Oe.prototype,"track",null);class Z{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Je.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Je.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?fe.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([f()],Z.prototype,"reviewdate",null);l([f()],Z.prototype,"createdate",null);l([f()],Z.prototype,"stars",null);class Gi{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Oe(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new w(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new Z(r))}}var be;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(be||(be={}));class wn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Yi{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const s=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,s)}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(be.networkError,u)}try{const s=await a.json(),u=s.error;if(u){const d=s.forensics;return this.getErrorResult(be.searchEngineError,u,d)}else return{success:s}}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(be.decodingError,u)}}getErrorResult(e,t,n){return{error:new wn(e,t,n)}}}class gr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new wn(be.itemNotFound)}:{success:new Gi(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new wn(be.itemNotFound)}:{success:r.success.result}}}gr.default=new gr(new Yi);let qi=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Ki(i){return new Promise(e=>setTimeout(e,i))}var re;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(re||(re={}));const wr="lazyLoaderService";class Xi{constructor(e){var t,n,r;this.emitter=qi(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return ut(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return ut(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return ut(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${re.owner}='${wr}'][${re.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((s,u)=>{if(a.getAttribute(re.dynamicImportLoaded)){s();return}const d=e.scriptBeingRetried,h=a.onload||(d==null?void 0:d.onload);a.onload=g=>{h==null||h(g),a.setAttribute(re.dynamicImportLoaded,"true"),s()};const p=a.onerror||(d==null?void 0:d.onerror);a.onerror=g=>ut(this,void 0,void 0,function*(){const _=a.getAttribute(re.hasBeenRetried);if(n<this.retryCount&&!_){a.setAttribute(re.hasBeenRetried,"true"),yield Ki(this.retryInterval*1e3);const S=n+1;this.emitter.emit("scriptLoadRetried",e.src,S),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:S,scriptBeingRetried:a}))}else _||this.emitter.emit("scriptLoadFailed",e.src,g),p==null||p(g),u(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(re.owner,wr),r.setAttribute("src",n),r.setAttribute(re.retryNumber,a.toString()),r.async=!0;const s=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(s).forEach(u=>{r.setAttribute(u,s[u])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Zi{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Ji{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Xi,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),s=new Zi({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=s,s}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=i=>typeof i!="string"&&"strTag"in i,ea=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=i=>Qi(i)?ea(i.strings,i.values):i;let E=ta;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class na{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ra=new na;ra.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},aa=i=>(...e)=>({_$litDirective$:i,values:e});class sa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yn extends sa{constructor(e){if(super(e),this.et=D,e.type!==ia.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===D||e==null)return this.ft=void 0,this.et=e;if(e===ke)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}yn.directiveName="unsafeHTML",yn.resultType=1;const jr=aa(yn);/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */const{entries:Wr,setPrototypeOf:yr,isFrozen:oa,getPrototypeOf:la,getOwnPropertyDescriptor:da}=Object;let{freeze:V,seal:q,create:pt}=Object,{apply:vn,construct:bn}=typeof Reflect<"u"&&Reflect;V||(V=function(e){return e});q||(q=function(e){return e});vn||(vn=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});bn||(bn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const ct=j(Array.prototype.forEach),ua=j(Array.prototype.lastIndexOf),vr=j(Array.prototype.pop),Ve=j(Array.prototype.push),ca=j(Array.prototype.splice),mt=j(String.prototype.toLowerCase),Jt=j(String.prototype.toString),Qt=j(String.prototype.match),je=j(String.prototype.replace),ha=j(String.prototype.indexOf),fa=j(String.prototype.trim),Y=j(Object.prototype.hasOwnProperty),z=j(RegExp.prototype.test),We=pa(TypeError);function j(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vn(i,e,n)}}function pa(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bn(i,t)}}function A(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:mt;yr&&yr(i,null);let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(oa(e)||(e[n]=a),r=a)}i[r]=!0}return i}function ma(i){for(let e=0;e<i.length;e++)Y(i,e)||(i[e]=null);return i}function ne(i){const e=pt(null);for(const[t,n]of Wr(i))Y(i,t)&&(Array.isArray(n)?e[t]=ma(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=ne(n):e[t]=n);return e}function Ge(i,e){for(;i!==null;){const n=da(i,e);if(n){if(n.get)return j(n.get);if(typeof n.value=="function")return j(n.value)}i=la(i)}function t(){return null}return t}const br=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),en=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),tn=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ga=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),nn=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),wa=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),_r=V(["#text"]),Ar=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),rn=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$r=V(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ht=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ya=q(/\{\{[\w\W]*|[\w\W]*\}\}/gm),va=q(/<%[\w\W]*|[\w\W]*%>/gm),ba=q(/\$\{[\w\W]*/gm),_a=q(/^data-[\-\w.\u00B7-\uFFFF]+$/),Aa=q(/^aria-[\-\w]+$/),Gr=q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$a=q(/^(?:\w+script|data):/i),Ea=q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Yr=q(/^html$/i),Sa=q(/^[a-z][.\w]*(-[.\w]+)+$/i);var Er=Object.freeze({__proto__:null,ARIA_ATTR:Aa,ATTR_WHITESPACE:Ea,CUSTOM_ELEMENT:Sa,DATA_ATTR:_a,DOCTYPE_NAME:Yr,ERB_EXPR:va,IS_ALLOWED_URI:Gr,IS_SCRIPT_OR_DATA:$a,MUSTACHE_EXPR:ya,TMPLIT_EXPR:ba});const Ye={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ta=function(){return typeof window>"u"?null:window},Ra=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Sr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function qr(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ta();const e=y=>qr(y);if(e.version="3.3.2",e.removed=[],!i||!i.document||i.document.nodeType!==Ye.document||!i.Element)return e.isSupported=!1,e;let{document:t}=i;const n=t,r=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:u,Element:d,NodeFilter:h,NamedNodeMap:p=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:g,DOMParser:_,trustedTypes:S}=i,ie=d.prototype,X=Ge(ie,"cloneNode"),Xr=Ge(ie,"remove"),Zr=Ge(ie,"nextSibling"),Jr=Ge(ie,"childNodes"),tt=Ge(ie,"parentNode");if(typeof s=="function"){const y=t.createElement("template");y.content&&y.content.ownerDocument&&(t=y.content.ownerDocument)}let U,Pe="";const{implementation:Tt,createNodeIterator:Qr,createDocumentFragment:ei,getElementsByTagName:ti}=t,{importNode:ni}=n;let F=Sr();e.isSupported=typeof Wr=="function"&&typeof tt=="function"&&Tt&&Tt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Rt,ERB_EXPR:xt,TMPLIT_EXPR:Ct,DATA_ATTR:ri,ARIA_ATTR:ii,IS_SCRIPT_OR_DATA:ai,ATTR_WHITESPACE:Sn,CUSTOM_ELEMENT:si}=Er;let{IS_ALLOWED_URI:Tn}=Er,O=null;const Rn=A({},[...br,...en,...tn,...nn,..._r]);let P=null;const xn=A({},[...Ar,...rn,...$r,...ht]);let L=Object.seal(pt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Be=null,nt=null;const de=Object.seal(pt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Cn=!0,Mt=!0,Mn=!1,kn=!0,$e=!1,rt=!0,pe=!1,kt=!1,Lt=!1,Ee=!1,it=!1,at=!1,Ln=!0,Nn=!1;const oi="user-content-";let Nt=!0,He=!1,Se={},ee=null;const Dt=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Dn=null;const In=A({},["audio","video","img","source","image","track"]);let It=null;const On=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),st="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml";let Te=ae,Ot=!1,Pt=null;const li=A({},[st,ot,ae],Jt);let lt=A({},["mi","mo","mn","ms","mtext"]),dt=A({},["annotation-xml"]);const di=A({},["title","style","font","a","script"]);let Ue=null;const ui=["application/xhtml+xml","text/html"],ci="text/html";let I=null,Re=null;const hi=t.createElement("form"),Pn=function(o){return o instanceof RegExp||o instanceof Function},Bt=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Re&&Re===o)){if((!o||typeof o!="object")&&(o={}),o=ne(o),Ue=ui.indexOf(o.PARSER_MEDIA_TYPE)===-1?ci:o.PARSER_MEDIA_TYPE,I=Ue==="application/xhtml+xml"?Jt:mt,O=Y(o,"ALLOWED_TAGS")?A({},o.ALLOWED_TAGS,I):Rn,P=Y(o,"ALLOWED_ATTR")?A({},o.ALLOWED_ATTR,I):xn,Pt=Y(o,"ALLOWED_NAMESPACES")?A({},o.ALLOWED_NAMESPACES,Jt):li,It=Y(o,"ADD_URI_SAFE_ATTR")?A(ne(On),o.ADD_URI_SAFE_ATTR,I):On,Dn=Y(o,"ADD_DATA_URI_TAGS")?A(ne(In),o.ADD_DATA_URI_TAGS,I):In,ee=Y(o,"FORBID_CONTENTS")?A({},o.FORBID_CONTENTS,I):Dt,Be=Y(o,"FORBID_TAGS")?A({},o.FORBID_TAGS,I):ne({}),nt=Y(o,"FORBID_ATTR")?A({},o.FORBID_ATTR,I):ne({}),Se=Y(o,"USE_PROFILES")?o.USE_PROFILES:!1,Cn=o.ALLOW_ARIA_ATTR!==!1,Mt=o.ALLOW_DATA_ATTR!==!1,Mn=o.ALLOW_UNKNOWN_PROTOCOLS||!1,kn=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$e=o.SAFE_FOR_TEMPLATES||!1,rt=o.SAFE_FOR_XML!==!1,pe=o.WHOLE_DOCUMENT||!1,Ee=o.RETURN_DOM||!1,it=o.RETURN_DOM_FRAGMENT||!1,at=o.RETURN_TRUSTED_TYPE||!1,Lt=o.FORCE_BODY||!1,Ln=o.SANITIZE_DOM!==!1,Nn=o.SANITIZE_NAMED_PROPS||!1,Nt=o.KEEP_CONTENT!==!1,He=o.IN_PLACE||!1,Tn=o.ALLOWED_URI_REGEXP||Gr,Te=o.NAMESPACE||ae,lt=o.MATHML_TEXT_INTEGRATION_POINTS||lt,dt=o.HTML_INTEGRATION_POINTS||dt,L=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Pn(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Pn(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$e&&(Mt=!1),it&&(Ee=!0),Se&&(O=A({},_r),P=pt(null),Se.html===!0&&(A(O,br),A(P,Ar)),Se.svg===!0&&(A(O,en),A(P,rn),A(P,ht)),Se.svgFilters===!0&&(A(O,tn),A(P,rn),A(P,ht)),Se.mathMl===!0&&(A(O,nn),A(P,$r),A(P,ht))),Y(o,"ADD_TAGS")||(de.tagCheck=null),Y(o,"ADD_ATTR")||(de.attributeCheck=null),o.ADD_TAGS&&(typeof o.ADD_TAGS=="function"?de.tagCheck=o.ADD_TAGS:(O===Rn&&(O=ne(O)),A(O,o.ADD_TAGS,I))),o.ADD_ATTR&&(typeof o.ADD_ATTR=="function"?de.attributeCheck=o.ADD_ATTR:(P===xn&&(P=ne(P)),A(P,o.ADD_ATTR,I))),o.ADD_URI_SAFE_ATTR&&A(It,o.ADD_URI_SAFE_ATTR,I),o.FORBID_CONTENTS&&(ee===Dt&&(ee=ne(ee)),A(ee,o.FORBID_CONTENTS,I)),o.ADD_FORBID_CONTENTS&&(ee===Dt&&(ee=ne(ee)),A(ee,o.ADD_FORBID_CONTENTS,I)),Nt&&(O["#text"]=!0),pe&&A(O,["html","head","body"]),O.table&&(A(O,["tbody"]),delete Be.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');U=o.TRUSTED_TYPES_POLICY,Pe=U.createHTML("")}else U===void 0&&(U=Ra(S,r)),U!==null&&typeof Pe=="string"&&(Pe=U.createHTML(""));V&&V(o),Re=o}},Bn=A({},[...en,...tn,...ga]),Hn=A({},[...nn,...wa]),fi=function(o){let c=tt(o);(!c||!c.tagName)&&(c={namespaceURI:Te,tagName:"template"});const m=mt(o.tagName),C=mt(c.tagName);return Pt[o.namespaceURI]?o.namespaceURI===ot?c.namespaceURI===ae?m==="svg":c.namespaceURI===st?m==="svg"&&(C==="annotation-xml"||lt[C]):!!Bn[m]:o.namespaceURI===st?c.namespaceURI===ae?m==="math":c.namespaceURI===ot?m==="math"&&dt[C]:!!Hn[m]:o.namespaceURI===ae?c.namespaceURI===ot&&!dt[C]||c.namespaceURI===st&&!lt[C]?!1:!Hn[m]&&(di[m]||!Bn[m]):!!(Ue==="application/xhtml+xml"&&Pt[o.namespaceURI]):!1},te=function(o){Ve(e.removed,{element:o});try{tt(o).removeChild(o)}catch{Xr(o)}},me=function(o,c){try{Ve(e.removed,{attribute:c.getAttributeNode(o),from:c})}catch{Ve(e.removed,{attribute:null,from:c})}if(c.removeAttribute(o),o==="is")if(Ee||it)try{te(c)}catch{}else try{c.setAttribute(o,"")}catch{}},Un=function(o){let c=null,m=null;if(Lt)o="<remove></remove>"+o;else{const N=Qt(o,/^[\r\n\t ]+/);m=N&&N[0]}Ue==="application/xhtml+xml"&&Te===ae&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const C=U?U.createHTML(o):o;if(Te===ae)try{c=new _().parseFromString(C,Ue)}catch{}if(!c||!c.documentElement){c=Tt.createDocument(Te,"template",null);try{c.documentElement.innerHTML=Ot?Pe:C}catch{}}const H=c.body||c.documentElement;return o&&m&&H.insertBefore(t.createTextNode(m),H.childNodes[0]||null),Te===ae?ti.call(c,pe?"html":"body")[0]:pe?c.documentElement:H},Fn=function(o){return Qr.call(o.ownerDocument||o,o,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Ht=function(o){return o instanceof g&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof p)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},zn=function(o){return typeof u=="function"&&o instanceof u};function se(y,o,c){ct(y,m=>{m.call(e,o,c,Re)})}const Vn=function(o){let c=null;if(se(F.beforeSanitizeElements,o,null),Ht(o))return te(o),!0;const m=I(o.nodeName);if(se(F.uponSanitizeElement,o,{tagName:m,allowedTags:O}),rt&&o.hasChildNodes()&&!zn(o.firstElementChild)&&z(/<[/\w!]/g,o.innerHTML)&&z(/<[/\w!]/g,o.textContent)||o.nodeType===Ye.progressingInstruction||rt&&o.nodeType===Ye.comment&&z(/<[/\w]/g,o.data))return te(o),!0;if(!(de.tagCheck instanceof Function&&de.tagCheck(m))&&(!O[m]||Be[m])){if(!Be[m]&&Wn(m)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,m)||L.tagNameCheck instanceof Function&&L.tagNameCheck(m)))return!1;if(Nt&&!ee[m]){const C=tt(o)||o.parentNode,H=Jr(o)||o.childNodes;if(H&&C){const N=H.length;for(let W=N-1;W>=0;--W){const oe=X(H[W],!0);oe.__removalCount=(o.__removalCount||0)+1,C.insertBefore(oe,Zr(o))}}}return te(o),!0}return o instanceof d&&!fi(o)||(m==="noscript"||m==="noembed"||m==="noframes")&&z(/<\/no(script|embed|frames)/i,o.innerHTML)?(te(o),!0):($e&&o.nodeType===Ye.text&&(c=o.textContent,ct([Rt,xt,Ct],C=>{c=je(c,C," ")}),o.textContent!==c&&(Ve(e.removed,{element:o.cloneNode()}),o.textContent=c)),se(F.afterSanitizeElements,o,null),!1)},jn=function(o,c,m){if(nt[c]||Ln&&(c==="id"||c==="name")&&(m in t||m in hi))return!1;if(!(Mt&&!nt[c]&&z(ri,c))){if(!(Cn&&z(ii,c))){if(!(de.attributeCheck instanceof Function&&de.attributeCheck(c,o))){if(!P[c]||nt[c]){if(!(Wn(o)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,o)||L.tagNameCheck instanceof Function&&L.tagNameCheck(o))&&(L.attributeNameCheck instanceof RegExp&&z(L.attributeNameCheck,c)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(c,o))||c==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,m)||L.tagNameCheck instanceof Function&&L.tagNameCheck(m))))return!1}else if(!It[c]){if(!z(Tn,je(m,Sn,""))){if(!((c==="src"||c==="xlink:href"||c==="href")&&o!=="script"&&ha(m,"data:")===0&&Dn[o])){if(!(Mn&&!z(ai,je(m,Sn,"")))){if(m)return!1}}}}}}}return!0},Wn=function(o){return o!=="annotation-xml"&&Qt(o,si)},Gn=function(o){se(F.beforeSanitizeAttributes,o,null);const{attributes:c}=o;if(!c||Ht(o))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0};let C=c.length;for(;C--;){const H=c[C],{name:N,namespaceURI:W,value:oe}=H,xe=I(N),Ut=oe;let B=N==="value"?Ut:fa(Ut);if(m.attrName=xe,m.attrValue=B,m.keepAttr=!0,m.forceKeepAttr=void 0,se(F.uponSanitizeAttribute,o,m),B=m.attrValue,Nn&&(xe==="id"||xe==="name")&&(me(N,o),B=oi+B),rt&&z(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,B)){me(N,o);continue}if(xe==="attributename"&&Qt(B,"href")){me(N,o);continue}if(m.forceKeepAttr)continue;if(!m.keepAttr){me(N,o);continue}if(!kn&&z(/\/>/i,B)){me(N,o);continue}$e&&ct([Rt,xt,Ct],qn=>{B=je(B,qn," ")});const Yn=I(o.nodeName);if(!jn(Yn,xe,B)){me(N,o);continue}if(U&&typeof S=="object"&&typeof S.getAttributeType=="function"&&!W)switch(S.getAttributeType(Yn,xe)){case"TrustedHTML":{B=U.createHTML(B);break}case"TrustedScriptURL":{B=U.createScriptURL(B);break}}if(B!==Ut)try{W?o.setAttributeNS(W,N,B):o.setAttribute(N,B),Ht(o)?te(o):vr(e.removed)}catch{me(N,o)}}se(F.afterSanitizeAttributes,o,null)},pi=function y(o){let c=null;const m=Fn(o);for(se(F.beforeSanitizeShadowDOM,o,null);c=m.nextNode();)se(F.uponSanitizeShadowNode,c,null),Vn(c),Gn(c),c.content instanceof a&&y(c.content);se(F.afterSanitizeShadowDOM,o,null)};return e.sanitize=function(y){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,m=null,C=null,H=null;if(Ot=!y,Ot&&(y="<!-->"),typeof y!="string"&&!zn(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw We("dirty is not a string, aborting")}else throw We("toString is not a function");if(!e.isSupported)return y;if(kt||Bt(o),e.removed=[],typeof y=="string"&&(He=!1),He){if(y.nodeName){const oe=I(y.nodeName);if(!O[oe]||Be[oe])throw We("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof u)c=Un("<!---->"),m=c.ownerDocument.importNode(y,!0),m.nodeType===Ye.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?c=m:c.appendChild(m);else{if(!Ee&&!$e&&!pe&&y.indexOf("<")===-1)return U&&at?U.createHTML(y):y;if(c=Un(y),!c)return Ee?null:at?Pe:""}c&&Lt&&te(c.firstChild);const N=Fn(He?y:c);for(;C=N.nextNode();)Vn(C),Gn(C),C.content instanceof a&&pi(C.content);if(He)return y;if(Ee){if(it)for(H=ei.call(c.ownerDocument);c.firstChild;)H.appendChild(c.firstChild);else H=c;return(P.shadowroot||P.shadowrootmode)&&(H=ni.call(n,H,!0)),H}let W=pe?c.outerHTML:c.innerHTML;return pe&&O["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&z(Yr,c.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+W),$e&&ct([Rt,xt,Ct],oe=>{W=je(W,oe," ")}),U&&at?U.createHTML(W):W},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bt(y),kt=!0},e.clearConfig=function(){Re=null,kt=!1},e.isValidAttribute=function(y,o,c){Re||Bt({});const m=I(y),C=I(o);return jn(m,C,c)},e.addHook=function(y,o){typeof o=="function"&&Ve(F[y],o)},e.removeHook=function(y,o){if(o!==void 0){const c=ua(F[y],o);return c===-1?void 0:ca(F[y],c,1)[0]}return vr(F[y])},e.removeHooks=function(y){F[y]=[]},e.removeAllHooks=function(){F=Sr()},e}var _n=qr();const Tr=R`var(--white, #fff)`,xa=R`var(--ia-theme-link-color, #4b64ff)`,Ca=R`var(--primaryDisableCTAFill, #767676)`,Ma=R`var(--secondaryCTABorder, #999)`,ka=R`var(--primaryCTAFill, #194880)`,an=R`var(--primaryCTAFillRGB, 25, 72, 128)`,La=R`var(--primaryCTABorder, #c5d1df)`,Na=R`var(--primaryErrorCTAFill, #d9534f)`,sn=R`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Da=R`var(--primaryErrorCTABorder, #d43f3a)`,Ia=R`var(--secondaryCTAFill, #333)`,on=R`var(--secondaryCTAFillRGB, 51, 51, 51)`,Oa=R`var(--primaryCTABorder, #979797)`,Pa=R`var(---primaryWarningFill, #ee8950)`,ln=R`var(--primaryWarningFillRGB, 238, 137, 80)`,Ba=R`var(--primaryWarningBorder, #ec7939)`,Kr=R`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Tr};
    line-height: normal;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border: 1px solid transparent;
    white-space: nowrap;
    appearance: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: all 0.1s ease 0s;
    vertical-align: middle;
    padding: 0 3rem;
    outline-color: ${Tr};
    outline-offset: -4px;
    user-select: none;
    text-decoration: none;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
  .ia-button:focus-visible {
    outline-style: double;
  }
  .ia-button:disabled {
    cursor: not-allowed;
    background-color: ${Ca};
    border: 1px solid ${Ma};
  }
  .ia-button.transparent {
    background-color: transparent;
  }

  .ia-button.primary:disabled,
  .ia-button.danger:disabled,
  .ia-button.warning:disabled,
  .ia-button.dark:disabled {
    opacity: 0.5;
  }

  .ia-button.primary {
    background-color: ${ka};
    border-color: ${La};
  }
  .ia-button.primary:hover {
    background-color: rgba(${an}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${an}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${an}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Na};
    border-color: ${Da};
  }
  .ia-button.danger:hover {
    background-color: rgba(${sn}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${sn}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${sn}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Pa};
    border-color: ${Ba};
  }
  .ia-button.warning:hover {
    background-color: rgba(${ln}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${ln}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${ln}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Ia};
    border-color: ${Oa};
  }
  .ia-button.dark:hover {
    background-color: rgba(${on}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${on}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${on}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${xa};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;R`
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    user-select: none !important;
  }
`;var Rr;(function(i){i.processing="processing",i.complete="complete"})(Rr||(Rr={}));let An=class extends le{constructor(){super(...arguments),this.mode="processing"}render(){return v`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=R`var(--activityIndicatorCheckmarkColor, #31A481)`,t=R`var(--activityIndicatorCompletedRingColor, #31A481)`,n=R`var(--activityIndicatorLoadingRingColor, #333333)`,r=R`var(--activityIndicatorLoadingDotColor, #333333)`;return R`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${n};
      }

      #activity-dots {
        fill: ${r};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}};l([b({type:String})],An.prototype,"mode",void 0);An=l([et("ia-activity-indicator")],An);const Ha=Et`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ua=Et`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Fa=Et`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function xr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return v`<span title="${i}">${t}</span>`}const za=["a"];function Va(i){return _n.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),_n.sanitize(i,{ALLOWED_TAGS:za})}function ja(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return Wa(i,n,e)}function Wa(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const s=i.indexOf("</a>",e),u=s-t<=20;if(u&&i.length===s+4)return i;if(s!==-1&&u)n=i.slice(0,s+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const Ga=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Ya(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Ga,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function qa(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Ka=Et`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let J=class extends le{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?v`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?v`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Ka}
                  </button>
                `:$}
            <div class="top-line">
              <b>${E("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${E("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?v`<i>${E(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:v`
          <div class="error">
            ${E("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return $;const n=Va(t),r=this.truncateContent(n,this.maxBodyLength);return v`${jr(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,s;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((s=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0)<=this.maxBodyLength?$:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return v`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${E("More...")}
      </button>
    `}get lessButtonTemplate(){return v`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${E("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?v`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${xr(this.review.reviewer)}
            </a>
          `:v`${xr(this.review.reviewer)}`:$}get starsTemplate(){return!this.review||!this.review.stars?$:v`
      <div
        class="review-stars"
        title="${E(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>v`<div class="review-star">${Fa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return $;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),s=n.getTime()!==r.getTime()?"(edited)":"";return E(`${a} ${s}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:ja(e,t)}prepReview(e){return qa(Ya(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(E("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return R`
      :host {
        font-family: var(
          --ia-font-stack,
          'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif
        );

        font-size: inherit;
        --container-bg-color: #fbfbfd;
        --container-border-color: #999999;
      }

      .review {
        position: relative;
        padding-right: 30px;
      }

      .error {
        color: var(--error-color, #cc0000);
      }

      .top-line {
        margin-bottom: 0.5rem;
      }

      .top-line > * {
        display: inline-block;
      }

      .review-star {
        width: 1rem;
        display: inline-block;
      }

      .simple-link,
      .body a {
        color: var(--link-color, #4b64ff);
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0px;
      }

      .simple-link:hover,
      .body a:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .subject {
        margin-bottom: 0.5rem;
      }

      .delete-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        background: none;
        border: 0;
      }

      .delete-btn:hover {
        cursor: pointer;
      }

      .delete-icon {
        width: 20px;
        mix-blend-mode: multiply;
      }
    `}};l([b({type:Object})],J.prototype,"review",void 0);l([b({type:String})],J.prototype,"identifier",void 0);l([b({type:Number})],J.prototype,"maxSubjectLength",void 0);l([b({type:Number})],J.prototype,"maxBodyLength",void 0);l([b({type:String})],J.prototype,"baseHost",void 0);l([b({type:Boolean})],J.prototype,"canDelete",void 0);l([b({type:Boolean})],J.prototype,"bypassTruncation",void 0);l([k()],J.prototype,"showTruncatedContent",void 0);l([k()],J.prototype,"deleteMsg",void 0);J=l([et("ia-review")],J);let M=class extends le{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return v`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:v`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,s,u,d,h;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(s=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0,this.currentBodyLength=(h=(d=(u=this.oldReview)===null||u===void 0?void 0:u.reviewbody)===null||d===void 0?void 0:d.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?v`
          <div class="unrecoverable-error">
            <span class="error-msg">${E(this.unrecoverableError)}</span>
          </div>
        `:$}get recoverableErrorTemplate(){return this.recoverableError?v`
          <div class="recoverable-error">
            ${jr(this.sanitizeErrorMsg(E(this.recoverableError)))}
          </div>
        `:$}get recaptchaMessageTemplate(){return this.bypassRecaptcha?$:v`
      <span class="recaptcha-disclaimer"
        >${E(v`This site is protected by reCAPTCHA and the Google
            <a
              target="_blank"
              class="inline-link"
              href="https://policies.google.com/privacy"
              >Privacy Policy</a
            >
            and
            <a
              target="_blank"
              class="inline-link"
              href="https://policies.google.com/terms"
              >Terms of Service</a
            >
            apply.`)}</span
      >
    `}get starsInputTemplate(){return v`
      <div class="form-heading rating">
        <label for="stars-field">${E("Rating (optional)")}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars.toString()}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(e=>this.renderStar(e))}
        <button
          type="button"
          class="clear-stars-btn"
          @click=${this.handleClearBtnClicked}
        >
          ${E("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return v`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${E("Subject")}</label>
        ${this.maxSubjectLength?v`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:$}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?v`
            <div class="input-error">
              ${E(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:$}</div></span>
    `}get bodyInputTemplate(){var e,t;return v`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${E("Review")}</label>
          ${this.maxBodyLength?v`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:$}
        </div>
        <textarea
          name="field_reviewbody"
          id="field_reviewbody"
          .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
          rows="10"
          cols="50"
          required
          @input=${this.handleBodyChanged}
        ></textarea>
        ${this.maxBodyLength?v`
              <div class="input-error">
                ${E(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:$}
      </span>
    `}get hiddenInputsTemplate(){return v`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?v`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:$}
    `}get actionButtonsTemplate(){return v`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${E("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?v`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:E("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=E(`Rate ${e>1?`${e} stars`:"1 star"}`);return v`
      <button
        class="star star-${e}"
        title=${t?E("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?Ha:Ua}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return _n.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),s=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(s)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,s;const u=new Date().toDateString();return new Z({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:u,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(s=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&s!==void 0?s:u})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Kr,R`
        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 15px;
        }

        .form-heading.rating {
          padding-top: 0;
        }

        .form-heading label {
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'],
        .unrecoverable-error {
          padding: 5px;
          width: calc(100% - 10px);
          font-family: inherit;
          border-radius: 5px;
          border: 1px solid var(--container-border-color, #999999);
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--container-error-color, #ea0202);
        }

        .input-box.error .char-count,
        .input-error,
        .unrecoverable-error,
        .recoverable-error {
          color: var(--container-error-color, #ea0202);
        }

        .input-error {
          display: none;
        }

        .input-box.error .input-error {
          display: block;
          text-align: right;
          padding-top: 5px;
        }

        .inline-link {
          color: var(--container-link-color, #4f65f5);
          text-decoration: none;
        }

        .inline-link:hover {
          text-decoration: underline;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 2px;
          align-items: center;
        }

        .star {
          all: unset;
          height: 30px;
          width: 30px;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn,
        .recoverable-error a {
          padding: 0 5px;
          color: var(--container-link-color, #4f65f5);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 5px;
        }

        .clear-stars-btn:hover,
        .recoverable-error a:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 15px;
        }

        .ia-button:disabled {
          opacity: 0.75;
        }

        .ia-button:disabled:hover {
          cursor: not-allowed;
        }

        .unrecoverable-error {
          min-height: 50px;
          padding: 5px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: var(--container-bg-color, #fbfbfd);
        }

        .loading-indicator {
          display: block;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          --activityIndicatorLoadingRingColor: #fff;
          --activityIndicatorLoadingDotColor: #fff;
        }

        .recaptcha-disclaimer {
          font-size: 1.2rem;
        }

        @media only screen and (max-width: 350px) {
          .action-btns {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `]}};l([b({type:String})],M.prototype,"identifier",void 0);l([b({type:String})],M.prototype,"token",void 0);l([b({type:String})],M.prototype,"baseHost",void 0);l([b({type:String})],M.prototype,"endpointPath",void 0);l([b({type:String})],M.prototype,"submitterScreenname",void 0);l([b({type:String})],M.prototype,"submitterItemname",void 0);l([b({type:Object})],M.prototype,"oldReview",void 0);l([b({type:String})],M.prototype,"unrecoverableError",void 0);l([b({type:Number})],M.prototype,"maxSubjectLength",void 0);l([b({type:Number})],M.prototype,"maxBodyLength",void 0);l([b({type:Object})],M.prototype,"fetchHandler",void 0);l([b({type:Object})],M.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],M.prototype,"bypassRecaptcha",void 0);l([k()],M.prototype,"currentStars",void 0);l([k()],M.prototype,"currentSubjectLength",void 0);l([k()],M.prototype,"currentBodyLength",void 0);l([k()],M.prototype,"recoverableError",void 0);l([k()],M.prototype,"formCanSubmit",void 0);l([k()],M.prototype,"submissionInProgress",void 0);l([Vr("#review-form")],M.prototype,"reviewForm",void 0);M=l([et("ia-review-form")],M);class Xa{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(s=>{const u=n[s];r.searchParams.append(s,u)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class Za{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",s=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:s})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Ja{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Xa,this.analyticsHelpers=new Za(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Qa(i){return new Promise(e=>setTimeout(e,i))}class es{constructor(e){this.analyticsHandler=new Ja({enableAnalytics:!0}),this.sleep=Qa,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const s=await fetch(e,t);return s.ok?s:s.status===404?(this.log404Event(r),s):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,s.statusText,s.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,s.status),s)}catch(s){if(this.isContentBlockerError(s))throw this.logContentBlockingEvent(r,s),s;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,s,s),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,s),s}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class ts{constructor(e){this.fetchRetrier=new es,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,s]of Object.entries(t))r.searchParams.set(a,s);return typeof e=="string"?r.href:new Request(r.href,e)}}let x=class extends le{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new ts,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?v`
      <div class="reviews-list">
        ${this.reviewsFrozen?v`<div class="message">
              ${E("Reviews can no longer be added to this item.")}
            </div>`:$}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):$)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return v`<div class="message">
      ${E("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?v`
        <div class="message">
          ${E("Reviews cannot be added to this item.")}
        </div>
      `:v`
      <div class="message">
        ${E("There are no reviews yet.")}
        ${E(v`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return v`
      <div class="message">
        ${this.reviewsCount===1?E("There is 1 review for this item."):E(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${E(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?$:v`<div class="own-review-container">
      ${this.displayReviewForm?v`<ia-review-form
            .identifier=${this.identifier}
            .oldReview=${this.currentReview}
            .baseHost=${this.baseHost}
            .endpointPath=${this.endpointPath}
            .submitterItemname=${this.submitterItemname}
            .submitterScreenname=${this.submitterScreenname}
            .maxSubjectLength=${this.maxSubjectLength}
            .maxBodyLength=${this.maxBodyLength}
            .token=${this.token}
            .unrecoverableError=${this.reviewSubmissionError}
            .fetchHandler=${this.fetchHandler}
            .recaptchaManager=${this.recaptchaActivated?this.recaptchaManager:void 0}
            ?bypassRecaptcha=${this.bypassRecaptcha}
            @reviewUpdated=${this.handleReviewUpdate}
            @reviewEditCanceled=${this.handleEditCanceled}
          ></ia-review-form>`:this.renderReview(this.currentReview)}
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?v`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
      .baseHost=${this.baseHost}
    ></ia-review>`:$}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[Kr,R`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .own-review-container {
          --error-color: var(--container-error-color, #ea0202);
          --link-color: var(--container-link-color, #4f65f5);
          --container-error-color: #ea0202;
          --container-link-color: #4f65f5;
          --container-bg-color: #fbfbfd;
          --container-border-color: #999999;

          border: 2px solid var(--container-border-color, #999999);
          border-radius: 5px;
          background-color: var(--container-bg-color, #fbfbfd);
          padding: 10px;
        }

        .message {
          font-weight: 200;
        }

        .message .ia-button {
          display: inline;
          vertical-align: baseline;
          padding: 0;
          font-weight: 600;
        }
      `]}};l([b({type:String})],x.prototype,"identifier",void 0);l([b({type:Array})],x.prototype,"reviews",void 0);l([b({type:Boolean})],x.prototype,"reviewsDisabled",void 0);l([b({type:Boolean})],x.prototype,"reviewsFrozen",void 0);l([b({type:Boolean})],x.prototype,"canDelete",void 0);l([b({type:Boolean})],x.prototype,"displayReviewsByDefault",void 0);l([b({type:Number})],x.prototype,"maxSubjectLength",void 0);l([b({type:Number})],x.prototype,"maxBodyLength",void 0);l([b({type:String})],x.prototype,"baseHost",void 0);l([b({type:String})],x.prototype,"token",void 0);l([b({type:String})],x.prototype,"endpointPath",void 0);l([b({type:String})],x.prototype,"submitterScreenname",void 0);l([b({type:String})],x.prototype,"submitterItemname",void 0);l([b({type:Object})],x.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],x.prototype,"bypassRecaptcha",void 0);l([b({type:String})],x.prototype,"reviewSubmissionError",void 0);l([b({type:Boolean})],x.prototype,"reviewAddEditRequested",void 0);l([b({type:Object})],x.prototype,"fetchHandler",void 0);l([k()],x.prototype,"displayReviewForm",void 0);l([k()],x.prototype,"displayReviews",void 0);l([k()],x.prototype,"filteredReviews",void 0);l([k()],x.prototype,"currentReview",void 0);l([k()],x.prototype,"reviewsCount",void 0);l([k()],x.prototype,"recaptchaActivated",void 0);x=l([et("ia-reviews")],x);class ns{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let K=class extends le{constructor(){super(...arguments),this.mockOldReview=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new Z({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new Z({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new Z({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new ns,this.mockRecaptchaManager=new Ji({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return v` <h2>General settings</h2>
      <button
        @click=${()=>this.useExistingReviews=!this.useExistingReviews}
      >
        ${this.useExistingReviews?"Remove":"Show"} existing reviews
      </button>
      <button @click=${()=>this.reviewsDisabled=!this.reviewsDisabled}>
        ${this.reviewsDisabled?"Enable":"Disable"} reviews
      </button>
      <button @click=${()=>this.reviewsFrozen=!this.reviewsFrozen}>
        ${this.reviewsFrozen?"Unfreeze":"Freeze"} reviews
      </button>
      <button @click=${()=>this.allowDeletion=!this.allowDeletion}>
        ${this.allowDeletion?"Prevent":"Allow"} deletion
      </button>
      <h2>Review form settings</h2>
      <button
        @click=${()=>this.unrecoverableError=!this.unrecoverableError}
      >
        ${this.unrecoverableError?"Hide":"Show"} unrecoverable error
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <h2>Own review settings</h2>
      ${this.renderReviewToggle(this.longReview,"long review")}
      ${this.renderReviewToggle(this.reviewWithLink,"review with link")}
      ${this.renderReviewToggle(this.reviewWithTextLink,"review with text link")}
      <br />
      <br />
      <hr />
      <button @click=${()=>this.reviewsComponent.displayReviewForm=!0}>
        Add or edit review
      </button>
      <div class="container">
        <ia-reviews
          .identifier=${"goody"}
          .reviews=${this.useExistingReviews?this.reviews.concat(this.review):[]}
          .recaptchaManager=${this.mockRecaptchaManager}
          .submitterItemname=${"@foo-bar"}
          .submitterScreenname=${"Foo Bar"}
          .reviewSubmissionError=${this.unrecoverableError?"You must be logged in to write reviews.":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?reviewsDisabled=${this.reviewsDisabled}
          ?reviewsFrozen=${this.reviewsFrozen}
        ></ia-reviews>
      </div>`}renderReviewToggle(e,t){return v`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};K.styles=R`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
      margin-top: 50px;
    }

    h2,
    textarea {
      font-family: 'Helvetica', sans-serif;
    }

    .review-body-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .review-body-form textarea {
      width: 400px;
      height: 100px;
    }
  `;l([k()],K.prototype,"bypassRecaptcha",void 0);l([k()],K.prototype,"unrecoverableError",void 0);l([k()],K.prototype,"useCharCounts",void 0);l([k()],K.prototype,"allowDeletion",void 0);l([k()],K.prototype,"useExistingReviews",void 0);l([k()],K.prototype,"review",void 0);l([k()],K.prototype,"reviewsDisabled",void 0);l([k()],K.prototype,"reviewsFrozen",void 0);l([Vr("ia-reviews")],K.prototype,"reviewsComponent",void 0);K=l([et("app-root")],K);
