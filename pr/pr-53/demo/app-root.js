(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function l(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Rt(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(m){try{h(n.next(m))}catch(g){o(g)}}function d(m){try{h(n.throw(m))}catch(g){o(g)}}function h(m){m.done?s(m.value):r(m.value).then(c,d)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=window,Bn=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hn=Symbol(),dr=new WeakMap;let qr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dr.set(t,e))}return e}toString(){return this.cssText}};const Ci=i=>new qr(typeof i=="string"?i:i+"",void 0,Hn),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new qr(t,i,Hn)},Mi=(i,e)=>{Bn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=Ct.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},ur=Bn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ci(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rn;const Mt=window,cr=Mt.trustedTypes,ki=cr?cr.emptyScript:"",hr=Mt.reactiveElementPolyfillSupport,$n={toAttribute(i,e){switch(e){case Boolean:i=i?ki:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Kr=(i,e)=>e!==i&&(e==e||i==i),an={attribute:!0,type:String,converter:$n,reflect:!1,hasChanged:Kr},Tn="finalized";let Fe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=an){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||an}static finalize(){if(this.hasOwnProperty(Tn))return!1;this[Tn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(ur(r))}else e!==void 0&&t.push(ur(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Mi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=an){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:$n).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:$n;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Kr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Fe[Tn]=!0,Fe.elementProperties=new Map,Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},hr==null||hr({ReactiveElement:Fe}),((rn=Mt.reactiveElementVersions)!==null&&rn!==void 0?rn:Mt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sn;const kt=window,ze=kt.trustedTypes,fr=ze?ze.createPolicy("lit-html",{createHTML:i=>i}):void 0,Sn="$lit$",ye=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+ye,Li=`<${Xr}>`,xe=document,Lt=()=>xe.createComment(""),at=i=>i===null||typeof i!="object"&&typeof i!="function",Zr=Array.isArray,Ni=i=>Zr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",on=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pr=/-->/g,mr=/>/g,Ae=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gr=/'/g,yr=/"/g,Jr=/^(?:script|style|textarea|title)$/i,je=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),wr=new WeakMap,Te=xe.createTreeWalker(xe,129,null,!1);function Qr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return fr!==void 0?fr.createHTML(e):e}const Ii=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=tt;for(let c=0;c<t;c++){const d=i[c];let h,m,g=-1,v=0;for(;v<d.length&&(o.lastIndex=v,m=o.exec(d),m!==null);)v=o.lastIndex,o===tt?m[1]==="!--"?o=pr:m[1]!==void 0?o=mr:m[2]!==void 0?(Jr.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=Ae):m[3]!==void 0&&(o=Ae):o===Ae?m[0]===">"?(o=r??tt,g=-1):m[1]===void 0?g=-2:(g=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?Ae:m[3]==='"'?yr:gr):o===yr||o===gr?o=Ae:o===pr||o===mr?o=tt:(o=Ae,r=void 0);const M=o===Ae&&i[c+1].startsWith("/>")?" ":"";s+=o===tt?d+Li:g>=0?(n.push(h),d.slice(0,g)+Sn+d.slice(g)+ye+M):d+ye+(g===-2?(n.push(void 0),c):M)}return[Qr(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Rn=class ei{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,d=this.parts,[h,m]=Ii(e,t);if(this.el=ei.createElement(h,n),Te.currentNode=this.el.content,t===2){const g=this.el.content,v=g.firstChild;v.remove(),g.append(...v.childNodes)}for(;(r=Te.nextNode())!==null&&d.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const v of r.getAttributeNames())if(v.endsWith(Sn)||v.startsWith(ye)){const M=m[o++];if(g.push(v),M!==void 0){const Ke=r.getAttribute(M.toLowerCase()+Sn).split(ye),ee=/([.?@])?(.*)/.exec(M);d.push({type:1,index:s,name:ee[2],strings:Ke,ctor:ee[1]==="."?Di:ee[1]==="?"?Bi:ee[1]==="@"?Hi:Pt})}else d.push({type:6,index:s})}for(const v of g)r.removeAttribute(v)}if(Jr.test(r.tagName)){const g=r.textContent.split(ye),v=g.length-1;if(v>0){r.textContent=ze?ze.emptyScript:"";for(let M=0;M<v;M++)r.append(g[M],Lt()),Te.nextNode(),d.push({type:2,index:++s});r.append(g[v],Lt())}}}else if(r.nodeType===8)if(r.data===Xr)d.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(ye,g+1))!==-1;)d.push({type:7,index:s}),g+=ye.length-1}s++}}static createElement(e,t){const n=xe.createElement("template");return n.innerHTML=e,n}};function Ve(i,e,t=i,n){var r,s,o,c;if(e===je)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=at(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((s=d==null?void 0:d._$AO)===null||s===void 0||s.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Ve(i,d._$AS(i,e.values),d,n)),e}let Oi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:xe).importNode(n,!0);Te.currentNode=s;let o=Te.nextNode(),c=0,d=0,h=r[0];for(;h!==void 0;){if(c===h.index){let m;h.type===2?m=new ti(o,o.nextSibling,this,e):h.type===1?m=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(m=new Fi(o,this,e)),this._$AV.push(m),h=r[++d]}c!==(h==null?void 0:h.index)&&(o=Te.nextNode(),c++)}return Te.currentNode=xe,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ti=class ni{constructor(e,t,n,r){var s;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),at(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==je&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ni(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&at(this._$AH)?this._$AA.nextSibling.data=e:this.$(xe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Rn.createElement(Qr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new Oi(s,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=wr.get(e.strings);return t===void 0&&wr.set(e.strings,t=new Rn(e)),t}T(e){Zr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ni(this.k(Lt()),this.k(Lt()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Pt=class{constructor(e,t,n,r,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=Ve(this,e,t,0),o=!at(e)||e!==this._$AH&&e!==je,o&&(this._$AH=e);else{const c=e;let d,h;for(e=s[0],d=0;d<s.length-1;d++)h=Ve(this,c[n+d],t,d),h===je&&(h=this._$AH[d]),o||(o=!at(h)||h!==this._$AH[d]),h===H?e=H:e!==H&&(e+=(h??"")+s[d+1]),this._$AH[d]=h}o&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Di=class extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}};const Pi=ze?ze.emptyScript:"";let Bi=class extends Pt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,Pi):this.element.removeAttribute(this.name)}},Hi=class extends Pt{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ve(this,e,t,0))!==null&&n!==void 0?n:H)===je)return;const r=this._$AH,s=e===H&&r!==H||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==H&&(r===H||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Fi=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}};const vr=kt.litHtmlPolyfillSupport;vr==null||vr(Rn,ti),((sn=kt.litHtmlVersions)!==null&&sn!==void 0?sn:kt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ln;const Nt=window,We=Nt.trustedTypes,br=We?We.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,ri="?"+we,Ui=`<${ri}>`,Ce=document,st=()=>Ce.createComment(""),ot=i=>i===null||typeof i!="object"&&typeof i!="function",ii=Array.isArray,zi=i=>ii(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dn=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_r=/-->/g,Ar=/>/g,Ee=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,$r=/"/g,ai=/^(?:script|style|textarea|title)$/i,si=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=si(1),Bt=si(2),Ge=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Tr=new WeakMap,Se=Ce.createTreeWalker(Ce,129,null,!1);function oi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return br!==void 0?br.createHTML(e):e}const ji=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=nt;for(let c=0;c<t;c++){const d=i[c];let h,m,g=-1,v=0;for(;v<d.length&&(o.lastIndex=v,m=o.exec(d),m!==null);)v=o.lastIndex,o===nt?m[1]==="!--"?o=_r:m[1]!==void 0?o=Ar:m[2]!==void 0?(ai.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=Ee):m[3]!==void 0&&(o=Ee):o===Ee?m[0]===">"?(o=r??nt,g=-1):m[1]===void 0?g=-2:(g=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?Ee:m[3]==='"'?$r:Er):o===$r||o===Er?o=Ee:o===_r||o===Ar?o=nt:(o=Ee,r=void 0);const M=o===Ee&&i[c+1].startsWith("/>")?" ":"";s+=o===nt?d+Ui:g>=0?(n.push(h),d.slice(0,g)+xn+d.slice(g)+we+M):d+we+(g===-2?(n.push(void 0),c):M)}return[oi(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class lt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,d=this.parts,[h,m]=ji(e,t);if(this.el=lt.createElement(h,n),Se.currentNode=this.el.content,t===2){const g=this.el.content,v=g.firstChild;v.remove(),g.append(...v.childNodes)}for(;(r=Se.nextNode())!==null&&d.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const v of r.getAttributeNames())if(v.endsWith(xn)||v.startsWith(we)){const M=m[o++];if(g.push(v),M!==void 0){const Ke=r.getAttribute(M.toLowerCase()+xn).split(we),ee=/([.?@])?(.*)/.exec(M);d.push({type:1,index:s,name:ee[2],strings:Ke,ctor:ee[1]==="."?Wi:ee[1]==="?"?Yi:ee[1]==="@"?qi:Ht})}else d.push({type:6,index:s})}for(const v of g)r.removeAttribute(v)}if(ai.test(r.tagName)){const g=r.textContent.split(we),v=g.length-1;if(v>0){r.textContent=We?We.emptyScript:"";for(let M=0;M<v;M++)r.append(g[M],st()),Se.nextNode(),d.push({type:2,index:++s});r.append(g[v],st())}}}else if(r.nodeType===8)if(r.data===ri)d.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(we,g+1))!==-1;)d.push({type:7,index:s}),g+=we.length-1}s++}}static createElement(e,t){const n=Ce.createElement("template");return n.innerHTML=e,n}}function Ye(i,e,t=i,n){var r,s,o,c;if(e===Ge)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=ot(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((s=d==null?void 0:d._$AO)===null||s===void 0||s.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Ye(i,d._$AS(i,e.values),d,n)),e}class Vi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ce).importNode(n,!0);Se.currentNode=s;let o=Se.nextNode(),c=0,d=0,h=r[0];for(;h!==void 0;){if(c===h.index){let m;h.type===2?m=new ut(o,o.nextSibling,this,e):h.type===1?m=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(m=new Ki(o,this,e)),this._$AV.push(m),h=r[++d]}c!==(h==null?void 0:h.index)&&(o=Se.nextNode(),c++)}return Se.currentNode=Ce,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ut{constructor(e,t,n,r){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),ot(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Ge&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):zi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&ot(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ce.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=lt.createElement(oi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new Vi(s,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Tr.get(e.strings);return t===void 0&&Tr.set(e.strings,t=new lt(e)),t}T(e){ii(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ut(this.k(st()),this.k(st()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ht{constructor(e,t,n,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=Ye(this,e,t,0),o=!ot(e)||e!==this._$AH&&e!==Ge,o&&(this._$AH=e);else{const c=e;let d,h;for(e=s[0],d=0;d<s.length-1;d++)h=Ye(this,c[n+d],t,d),h===Ge&&(h=this._$AH[d]),o||(o=!ot(h)||h!==this._$AH[d]),h===$?e=$:e!==$&&(e+=(h??"")+s[d+1]),this._$AH[d]=h}o&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wi extends Ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const Gi=We?We.emptyScript:"";class Yi extends Ht{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Gi):this.element.removeAttribute(this.name)}}class qi extends Ht{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ye(this,e,t,0))!==null&&n!==void 0?n:$)===Ge)return;const r=this._$AH,s=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==$&&(r===$||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ki{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}}const Sr=Nt.litHtmlPolyfillSupport;Sr==null||Sr(lt,ut),((ln=Nt.litHtmlVersions)!==null&&ln!==void 0?ln:Nt.litHtmlVersions=[]).push("2.8.0");const Xi=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new ut(e.insertBefore(st(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un,cn;class he extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ge}}he.finalized=!0,he._$litElement$=!0,(un=globalThis.litElementHydrateSupport)===null||un===void 0||un.call(globalThis,{LitElement:he});const Rr=globalThis.litElementPolyfillSupport;Rr==null||Rr({LitElement:he});((cn=globalThis.litElementVersions)!==null&&cn!==void 0?cn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ji=(i,e,t)=>{e.constructor.createProperty(t,i)};function A(i){return(e,t)=>t!==void 0?Ji(i,e,t):Zi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(i){return A({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(o.finisher=function(c){i(c,s)}),o}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function li(i,e){return Qi({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hn;((hn=window.HTMLSlotElement)===null||hn===void 0?void 0:hn.prototype.assignedElements)!=null;function p(i){let e,t,n;return e=i,(r,s,o)=>{if(o.value!=null)o.value=xr(o.value,e,t,n);else if(o.get!=null)o.get=xr(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const fn=new Map;function xr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...s){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[r];if(Array.isArray(n))for(const d of n)fn.has(d)?fn.get(d).push(c):fn.set(d,[c]);if(e||s.length>0||t>0){let d;e===!0?d=s.map(g=>g.toString()).join("!"):e?d=e.apply(this,s):d=s[0];const h=`${d}__timestamp`;let m=!1;if(t>0)if(!c.has(h))m=!0;else{let g=c.get(h);m=Date.now()-g>t}c.has(d)&&!m?o=c.get(d):(o=i.apply(this,s),c.set(d,o),t>0&&c.set(h,Date.now()))}else{const d=this;c.has(d)?o=c.get(d):(o=i.apply(this,s),c.set(d,o))}return o}}class Cn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Cn.shared=new Cn;class ve{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ve.shared=new ve;class It{parseValue(e){return ve.shared.parseValue(e)}}It.shared=new It;class dt{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}dt.shared=new dt;class Ot{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,s)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const d=60**(e.length-1-s);return o*Math.floor(d)}).reduce((r,s)=>r+s,0);return t?void 0:n}}Ot.shared=new Ot;class Mn{parseValue(e){if(typeof e=="string")return e}}Mn.shared=new Mn;class ea{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return n.forEach(s=>{s!==void 0&&r.push(s)}),r}}class kn{parseValue(e){if(typeof e=="string")return e}}kn.shared=new kn;class Dt{parseValue(e){return String(e)}}Dt.shared=new Dt;class ae{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([p()],ae.prototype,"values",null);l([p()],ae.prototype,"value",null);class ta extends ae{constructor(e){super(Cn.shared,e)}}class ge extends ae{constructor(e){super(dt.shared,e)}}class pn extends ae{constructor(e){super(Ot.shared,e)}}class q extends ae{constructor(e){super(ve.shared,e)}}class x extends ae{constructor(e){super(Dt.shared,e)}}class na extends ae{constructor(e){super(kn.shared,e)}}class Cr extends ae{constructor(e){super(It.shared,e)}}class ra extends ae{constructor(e){super(Mn.shared,e)}}class ia extends ae{constructor(e,t){super(t,e)}}class aa extends ia{constructor(e){const t=new ea(Dt.shared);super(e,t)}}class w{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ge(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new x(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new q(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new q(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new x(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new x(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Cr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new x(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new x(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new x(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new x(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ge(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new x(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new q(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new pn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new x(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new q(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ge(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new x(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new x(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new q(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Cr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new x(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new pn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new x(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new q(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new ra(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new ta(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new x(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new q(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new q(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new x(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new x(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new na(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new x(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new q(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ge(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new x(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ge(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new pn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new x(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new x(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ge(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ge(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ge(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new aa(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new x(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new x(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new x(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new q(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new x(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new x(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new q(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new x(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new x(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new q(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new q(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([p()],w.prototype,"addeddate",null);l([p()],w.prototype,"audio_codec",null);l([p()],w.prototype,"audio_sample_rate",null);l([p()],w.prototype,"avg_rating",null);l([p()],w.prototype,"collection",null);l([p()],w.prototype,"collections_raw",null);l([p()],w.prototype,"collection_size",null);l([p()],w.prototype,"contributor",null);l([p()],w.prototype,"coverage",null);l([p()],w.prototype,"creator",null);l([p()],w.prototype,"collection_layout",null);l([p()],w.prototype,"date",null);l([p()],w.prototype,"description",null);l([p()],w.prototype,"downloads",null);l([p()],w.prototype,"duration",null);l([p()],w.prototype,"external_identifier",null);l([p()],w.prototype,"files_count",null);l([p()],w.prototype,"indexdate",null);l([p()],w.prototype,"isbn",null);l([p()],w.prototype,"issue",null);l([p()],w.prototype,"item_count",null);l([p()],w.prototype,"item_size",null);l([p()],w.prototype,"language",null);l([p()],w.prototype,"length",null);l([p()],w.prototype,"lineage",null);l([p()],w.prototype,"month",null);l([p()],w.prototype,"mediatype",null);l([p()],w.prototype,"noindex",null);l([p()],w.prototype,"notes",null);l([p()],w.prototype,"num_favorites",null);l([p()],w.prototype,"num_reviews",null);l([p()],w.prototype,"openlibrary_edition",null);l([p()],w.prototype,"openlibrary_work",null);l([p()],w.prototype,"page_progression",null);l([p()],w.prototype,"partner",null);l([p()],w.prototype,"ppi",null);l([p()],w.prototype,"publicdate",null);l([p()],w.prototype,"publisher",null);l([p()],w.prototype,"reviewdate",null);l([p()],w.prototype,"runtime",null);l([p()],w.prototype,"scanner",null);l([p()],w.prototype,"source",null);l([p()],w.prototype,"start_localtime",null);l([p()],w.prototype,"start_time",null);l([p()],w.prototype,"stop_time",null);l([p()],w.prototype,"subject",null);l([p()],w.prototype,"taper",null);l([p()],w.prototype,"title",null);l([p()],w.prototype,"transferer",null);l([p()],w.prototype,"track",null);l([p()],w.prototype,"type",null);l([p()],w.prototype,"uploader",null);l([p()],w.prototype,"utc_offset",null);l([p()],w.prototype,"venue",null);l([p()],w.prototype,"volume",null);l([p()],w.prototype,"week",null);l([p()],w.prototype,"year",null);class qe{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?It.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Ot.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?ve.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?ve.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?ve.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([p()],qe.prototype,"size",null);l([p()],qe.prototype,"length",null);l([p()],qe.prototype,"height",null);l([p()],qe.prototype,"width",null);l([p()],qe.prototype,"track",null);class ie{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?dt.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?dt.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?ve.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([p()],ie.prototype,"reviewdate",null);l([p()],ie.prototype,"createdate",null);l([p()],ie.prototype,"stars",null);class sa{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new qe(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new w(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new ie(r))}}var Re;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Re||(Re={}));class Ln extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class oa{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,o)}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Re.networkError,c)}try{const o=await s.json(),c=o.error;if(c){const d=o.forensics;return this.getErrorResult(Re.searchEngineError,c,d)}else return{success:o}}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Re.decodingError,c)}}getErrorResult(e,t,n){return{error:new Ln(e,t,n)}}}class Mr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Ln(Re.itemNotFound)}:{success:new sa(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new Ln(Re.itemNotFound)}:{success:r.success.result}}}Mr.default=new Mr(new oa);let la=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function da(i){return new Promise(e=>setTimeout(e,i))}var ue;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(ue||(ue={}));const kr="lazyLoaderService";class ua{constructor(e){var t,n,r;this.emitter=la(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return Rt(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return Rt(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return Rt(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${ue.owner}='${kr}'][${ue.retryNumber}='${n}']`;let s=this.container.querySelector(r);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(s)),new Promise((o,c)=>{if(s.getAttribute(ue.dynamicImportLoaded)){o();return}const d=e.scriptBeingRetried,h=s.onload||(d==null?void 0:d.onload);s.onload=g=>{h==null||h(g),s.setAttribute(ue.dynamicImportLoaded,"true"),o()};const m=s.onerror||(d==null?void 0:d.onerror);s.onerror=g=>Rt(this,void 0,void 0,function*(){const v=s.getAttribute(ue.hasBeenRetried);if(n<this.retryCount&&!v){s.setAttribute(ue.hasBeenRetried,"true"),yield da(this.retryInterval*1e3);const M=n+1;this.emitter.emit("scriptLoadRetried",e.src,M),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:M,scriptBeingRetried:s}))}else v||this.emitter.emit("scriptLoadFailed",e.src,g),m==null||m(g),c(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),s=e.retryNumber;r.setAttribute(ue.owner,kr),r.setAttribute("src",n),r.setAttribute(ue.retryNumber,s.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(c=>{r.setAttribute(c,o[c])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class ca{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class ha{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new ua,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const s=await this.getRecaptchaLibrary(),o=new ca({siteKey:n,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=i=>typeof i!="string"&&"strTag"in i,pa=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma=i=>fa(i)?pa(i.strings,i.values):i;let S=ma;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ga{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ya=new ga;ya.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},va=i=>(...e)=>({_$litDirective$:i,values:e});class ba{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nn extends ba{constructor(e){if(super(e),this.et=H,e.type!==wa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===H||e==null)return this.ft=void 0,this.et=e;if(e===je)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Nn.directiveName="unsafeHTML",Nn.resultType=1;const di=va(Nn);/*! @license DOMPurify 3.4.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.8/LICENSE */function Lr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function _a(i){if(Array.isArray(i))return i}function Aa(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,s,o,c=[],d=!0,h=!1;try{if(s=(t=t.call(i)).next,e!==0)for(;!(d=(n=s.call(t)).done)&&(c.push(n.value),c.length!==e);d=!0);}catch(m){h=!0,r=m}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(h)throw r}}return c}}function Ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $a(i,e){return _a(i)||Aa(i,e)||Ta(i,e)||Ea()}function Ta(i,e){if(i){if(typeof i=="string")return Lr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Lr(i,e):void 0}}const ui=Object.entries,Nr=Object.setPrototypeOf,Sa=Object.isFrozen,Ra=Object.getPrototypeOf,xa=Object.getOwnPropertyDescriptor;let Y=Object.freeze,Z=Object.seal,Ue=Object.create,ci=typeof Reflect<"u"&&Reflect,In=ci.apply,On=ci.construct;Y||(Y=function(e){return e});Z||(Z=function(e){return e});In||(In=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return e.apply(t,r)});On||(On=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const $e=F(Array.prototype.forEach),Ca=F(Array.prototype.lastIndexOf),Ir=F(Array.prototype.pop),Pe=F(Array.prototype.push),Ma=F(Array.prototype.splice),G=Array.isArray,it=F(String.prototype.toLowerCase),mn=F(String.prototype.toString),Or=F(String.prototype.match),Be=F(String.prototype.replace),Dr=F(String.prototype.indexOf),ka=F(String.prototype.trim),La=F(Number.prototype.toString),Na=F(Boolean.prototype.toString),Pr=typeof BigInt>"u"?null:F(BigInt.prototype.toString),Br=typeof Symbol>"u"?null:F(Symbol.prototype.toString),L=F(Object.prototype.hasOwnProperty),rt=F(Object.prototype.toString),V=F(RegExp.prototype.test),He=Ia(TypeError);function F(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return In(i,e,n)}}function Ia(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return On(i,t)}}function _(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:it;if(Nr&&Nr(i,null),!G(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const s=t(r);s!==r&&(Sa(e)||(e[n]=s),r=s)}i[r]=!0}return i}function Oa(i){for(let e=0;e<i.length;e++)L(i,e)||(i[e]=null);return i}function W(i){const e=Ue(null);for(const n of ui(i)){var t=$a(n,2);const r=t[0],s=t[1];L(i,r)&&(G(s)?e[r]=Oa(s):s&&typeof s=="object"&&s.constructor===Object?e[r]=W(s):e[r]=s)}return e}function Da(i){switch(typeof i){case"string":return i;case"number":return La(i);case"boolean":return Na(i);case"bigint":return Pr?Pr(i):"0";case"symbol":return Br?Br(i):"Symbol()";case"undefined":return rt(i);case"function":case"object":{if(i===null)return rt(i);const e=i,t=de(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:rt(n)}return rt(i)}default:return rt(i)}}function de(i,e){for(;i!==null;){const n=xa(i,e);if(n){if(n.get)return F(n.get);if(typeof n.value=="function")return F(n.value)}i=Ra(i)}function t(){return null}return t}function Pa(i){try{return V(i,""),!0}catch{return!1}}const Hr=Y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),gn=Y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),yn=Y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ba=Y(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),wn=Y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ha=Y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fr=Y(["#text"]),Ur=Y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),vn=Y(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),zr=Y(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xt=Y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fa=Z(/{{[\w\W]*|^[\w\W]*}}/g),Ua=Z(/<%[\w\W]*|^[\w\W]*%>/g),za=Z(/\${[\w\W]*/g),ja=Z(/^data-[\-\w.\u00B7-\uFFFF]+$/),Va=Z(/^aria-[\-\w]+$/),jr=Z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Wa=Z(/^(?:\w+script|data):/i),Ga=Z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ya=Z(/^html$/i),qa=Z(/^[a-z][.\w]*(-[.\w]+)+$/i),le={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ka=function(){return typeof window>"u"?null:window},Xa=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Vr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function hi(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ka();const e=y=>hi(y);if(e.version="3.4.8",e.removed=[],!i||!i.document||i.document.nodeType!==le.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const s=i.HTMLTemplateElement,o=i.Node,c=i.Element,d=i.NodeFilter,h=i.NamedNodeMap;h===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const m=i.DOMParser,g=i.trustedTypes,v=c.prototype,M=de(v,"cloneNode"),Ke=de(v,"remove"),ee=de(v,"nextSibling"),ht=de(v,"childNodes"),ft=de(v,"parentNode"),pt=de(v,"shadowRoot"),pi=de(v,"attributes"),te=o&&o.prototype?de(o.prototype,"nodeType"):null,fe=o&&o.prototype?de(o.prototype,"nodeName"):null;if(typeof s=="function"){const y=t.createElement("template");y.content&&y.content.ownerDocument&&(t=y.content.ownerDocument)}let K,Xe="",Ft=0;const Me=function(a){if(Ft>0)throw He('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');Ft++;try{return K.createHTML(a)}finally{Ft--}},mt=t,Ut=mt.implementation,Fn=mt.createNodeIterator,mi=mt.createDocumentFragment,gi=mt.getElementsByTagName,yi=n.importNode;let z=Vr();e.isSupported=typeof ui=="function"&&typeof ft=="function"&&Ut&&Ut.createHTMLDocument!==void 0;const gt=Fa,yt=Ua,wt=za,wi=ja,vi=Va,bi=Wa,Un=Ga,_i=qa;let zn=jr,O=null;const zt=_({},[...Hr,...gn,...yn,...wn,...Fr]);let B=null;const jt=_({},[...Ur,...vn,...zr,...xt]);let D=Object.seal(Ue(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ze=null,vt=null;const pe=Object.seal(Ue(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let jn=!0,Vt=!0,Vn=!1,Wn=!0,me=!1,Je=!0,be=!1,Wt=!1,Gt=!1,ke=!1,bt=!1,_t=!1,Gn=!0,Yn=!1;const qn="user-content-";let Yt=!0,Qe=!1,Le={},se=null;const qt=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Kn=null;const Xn=_({},["audio","video","img","source","image","track"]);let Kt=null;const Zn=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),At="http://www.w3.org/1998/Math/MathML",Et="http://www.w3.org/2000/svg",oe="http://www.w3.org/1999/xhtml";let Ne=oe,Xt=!1,Zt=null;const Ai=_({},[At,Et,oe],mn);let Jt=_({},["mi","mo","mn","ms","mtext"]),Qt=_({},["annotation-xml"]);const Ei=_({},["title","style","font","a","script"]);let et=null;const $i=["application/xhtml+xml","text/html"],Ti="text/html";let P=null,Ie=null;const Si=t.createElement("form"),Jn=function(a){return a instanceof RegExp||a instanceof Function},en=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ie&&Ie===a)return;(!a||typeof a!="object")&&(a={}),a=W(a),et=$i.indexOf(a.PARSER_MEDIA_TYPE)===-1?Ti:a.PARSER_MEDIA_TYPE,P=et==="application/xhtml+xml"?mn:it,O=L(a,"ALLOWED_TAGS")&&G(a.ALLOWED_TAGS)?_({},a.ALLOWED_TAGS,P):zt,B=L(a,"ALLOWED_ATTR")&&G(a.ALLOWED_ATTR)?_({},a.ALLOWED_ATTR,P):jt,Zt=L(a,"ALLOWED_NAMESPACES")&&G(a.ALLOWED_NAMESPACES)?_({},a.ALLOWED_NAMESPACES,mn):Ai,Kt=L(a,"ADD_URI_SAFE_ATTR")&&G(a.ADD_URI_SAFE_ATTR)?_(W(Zn),a.ADD_URI_SAFE_ATTR,P):Zn,Kn=L(a,"ADD_DATA_URI_TAGS")&&G(a.ADD_DATA_URI_TAGS)?_(W(Xn),a.ADD_DATA_URI_TAGS,P):Xn,se=L(a,"FORBID_CONTENTS")&&G(a.FORBID_CONTENTS)?_({},a.FORBID_CONTENTS,P):qt,Ze=L(a,"FORBID_TAGS")&&G(a.FORBID_TAGS)?_({},a.FORBID_TAGS,P):W({}),vt=L(a,"FORBID_ATTR")&&G(a.FORBID_ATTR)?_({},a.FORBID_ATTR,P):W({}),Le=L(a,"USE_PROFILES")?a.USE_PROFILES&&typeof a.USE_PROFILES=="object"?W(a.USE_PROFILES):a.USE_PROFILES:!1,jn=a.ALLOW_ARIA_ATTR!==!1,Vt=a.ALLOW_DATA_ATTR!==!1,Vn=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Wn=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,me=a.SAFE_FOR_TEMPLATES||!1,Je=a.SAFE_FOR_XML!==!1,be=a.WHOLE_DOCUMENT||!1,ke=a.RETURN_DOM||!1,bt=a.RETURN_DOM_FRAGMENT||!1,_t=a.RETURN_TRUSTED_TYPE||!1,Gt=a.FORCE_BODY||!1,Gn=a.SANITIZE_DOM!==!1,Yn=a.SANITIZE_NAMED_PROPS||!1,Yt=a.KEEP_CONTENT!==!1,Qe=a.IN_PLACE||!1,zn=Pa(a.ALLOWED_URI_REGEXP)?a.ALLOWED_URI_REGEXP:jr,Ne=typeof a.NAMESPACE=="string"?a.NAMESPACE:oe,Jt=L(a,"MATHML_TEXT_INTEGRATION_POINTS")&&a.MATHML_TEXT_INTEGRATION_POINTS&&typeof a.MATHML_TEXT_INTEGRATION_POINTS=="object"?W(a.MATHML_TEXT_INTEGRATION_POINTS):_({},["mi","mo","mn","ms","mtext"]),Qt=L(a,"HTML_INTEGRATION_POINTS")&&a.HTML_INTEGRATION_POINTS&&typeof a.HTML_INTEGRATION_POINTS=="object"?W(a.HTML_INTEGRATION_POINTS):_({},["annotation-xml"]);const u=L(a,"CUSTOM_ELEMENT_HANDLING")&&a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING=="object"?W(a.CUSTOM_ELEMENT_HANDLING):Ue(null);if(D=Ue(null),L(u,"tagNameCheck")&&Jn(u.tagNameCheck)&&(D.tagNameCheck=u.tagNameCheck),L(u,"attributeNameCheck")&&Jn(u.attributeNameCheck)&&(D.attributeNameCheck=u.attributeNameCheck),L(u,"allowCustomizedBuiltInElements")&&typeof u.allowCustomizedBuiltInElements=="boolean"&&(D.allowCustomizedBuiltInElements=u.allowCustomizedBuiltInElements),me&&(Vt=!1),bt&&(ke=!0),Le&&(O=_({},Fr),B=Ue(null),Le.html===!0&&(_(O,Hr),_(B,Ur)),Le.svg===!0&&(_(O,gn),_(B,vn),_(B,xt)),Le.svgFilters===!0&&(_(O,yn),_(B,vn),_(B,xt)),Le.mathMl===!0&&(_(O,wn),_(B,zr),_(B,xt))),pe.tagCheck=null,pe.attributeCheck=null,L(a,"ADD_TAGS")&&(typeof a.ADD_TAGS=="function"?pe.tagCheck=a.ADD_TAGS:G(a.ADD_TAGS)&&(O===zt&&(O=W(O)),_(O,a.ADD_TAGS,P))),L(a,"ADD_ATTR")&&(typeof a.ADD_ATTR=="function"?pe.attributeCheck=a.ADD_ATTR:G(a.ADD_ATTR)&&(B===jt&&(B=W(B)),_(B,a.ADD_ATTR,P))),L(a,"ADD_URI_SAFE_ATTR")&&G(a.ADD_URI_SAFE_ATTR)&&_(Kt,a.ADD_URI_SAFE_ATTR,P),L(a,"FORBID_CONTENTS")&&G(a.FORBID_CONTENTS)&&(se===qt&&(se=W(se)),_(se,a.FORBID_CONTENTS,P)),L(a,"ADD_FORBID_CONTENTS")&&G(a.ADD_FORBID_CONTENTS)&&(se===qt&&(se=W(se)),_(se,a.ADD_FORBID_CONTENTS,P)),Yt&&(O["#text"]=!0),be&&_(O,["html","head","body"]),O.table&&(_(O,["tbody"]),delete Ze.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const f=K;K=a.TRUSTED_TYPES_POLICY;try{Xe=Me("")}catch(T){throw K=f,T}}else K===void 0&&a.TRUSTED_TYPES_POLICY!==null&&(K=Xa(g,r)),K&&typeof Xe=="string"&&(Xe=Me(""));(z.uponSanitizeElement.length>0||z.uponSanitizeAttribute.length>0)&&O===zt&&(O=W(O)),z.uponSanitizeAttribute.length>0&&B===jt&&(B=W(B)),Y&&Y(a),Ie=a},Qn=_({},[...gn,...yn,...Ba]),er=_({},[...wn,...Ha]),Ri=function(a){let u=ft(a);(!u||!u.tagName)&&(u={namespaceURI:Ne,tagName:"template"});const f=it(a.tagName),T=it(u.tagName);return Zt[a.namespaceURI]?a.namespaceURI===Et?u.namespaceURI===oe?f==="svg":u.namespaceURI===At?f==="svg"&&(T==="annotation-xml"||Jt[T]):!!Qn[f]:a.namespaceURI===At?u.namespaceURI===oe?f==="math":u.namespaceURI===Et?f==="math"&&Qt[T]:!!er[f]:a.namespaceURI===oe?u.namespaceURI===Et&&!Qt[T]||u.namespaceURI===At&&!Jt[T]?!1:!er[f]&&(Ei[f]||!Qn[f]):!!(et==="application/xhtml+xml"&&Zt[a.namespaceURI]):!1},ne=function(a){Pe(e.removed,{element:a});try{ft(a).removeChild(a)}catch{Ke(a)}},_e=function(a,u){try{Pe(e.removed,{attribute:u.getAttributeNode(a),from:u})}catch{Pe(e.removed,{attribute:null,from:u})}if(u.removeAttribute(a),a==="is")if(ke||bt)try{ne(u)}catch{}else try{u.setAttribute(a,"")}catch{}},tr=function(a){let u=null,f=null;if(Gt)a="<remove></remove>"+a;else{const R=Or(a,/^[\r\n\t ]+/);f=R&&R[0]}et==="application/xhtml+xml"&&Ne===oe&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const T=K?Me(a):a;if(Ne===oe)try{u=new m().parseFromString(T,et)}catch{}if(!u||!u.documentElement){u=Ut.createDocument(Ne,"template",null);try{u.documentElement.innerHTML=Xt?Xe:T}catch{}}const E=u.body||u.documentElement;return a&&f&&E.insertBefore(t.createTextNode(f),E.childNodes[0]||null),Ne===oe?gi.call(u,be?"html":"body")[0]:be?u.documentElement:E},nr=function(a){return Fn.call(a.ownerDocument||a,a,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},tn=function(a){var u,f;a.normalize();const T=Fn.call(a.ownerDocument||a,a,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let E=T.nextNode();for(;E;){let U=E.data;$e([gt,yt,wt],X=>{U=Be(U,X," ")}),E.data=U,E=T.nextNode()}const R=(u=(f=a.querySelectorAll)===null||f===void 0?void 0:f.call(a,"template"))!==null&&u!==void 0?u:[];$e(Array.from(R),U=>{Oe(U.content)&&tn(U.content)})},$t=function(a){const u=fe?fe(a):null;return typeof u!="string"||P(u)!=="form"?!1:typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||a.attributes!==pi(a)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function"||a.nodeType!==te(a)||a.childNodes!==ht(a)},Oe=function(a){if(!te||typeof a!="object"||a===null)return!1;try{return te(a)===le.documentFragment}catch{return!1}},Tt=function(a){if(!te||typeof a!="object"||a===null)return!1;try{return typeof te(a)=="number"}catch{return!1}};function ce(y,a,u){$e(y,f=>{f.call(e,a,u,Ie)})}const rr=function(a){let u=null;if(ce(z.beforeSanitizeElements,a,null),$t(a))return ne(a),!0;const f=P(fe?fe(a):a.nodeName);if(ce(z.uponSanitizeElement,a,{tagName:f,allowedTags:O}),Je&&a.hasChildNodes()&&!Tt(a.firstElementChild)&&V(/<[/\w!]/g,a.innerHTML)&&V(/<[/\w!]/g,a.textContent)||Je&&a.namespaceURI===oe&&f==="style"&&Tt(a.firstElementChild)||a.nodeType===le.progressingInstruction||Je&&a.nodeType===le.comment&&V(/<[/\w]/g,a.data))return ne(a),!0;if(Ze[f]||!(pe.tagCheck instanceof Function&&pe.tagCheck(f))&&!O[f]){if(!Ze[f]&&ar(f)&&(D.tagNameCheck instanceof RegExp&&V(D.tagNameCheck,f)||D.tagNameCheck instanceof Function&&D.tagNameCheck(f)))return!1;if(Yt&&!se[f]){const E=ft(a),R=ht(a);if(R&&E){const U=R.length;for(let X=U-1;X>=0;--X){const re=M(R[X],!0);E.insertBefore(re,ee(a))}}}return ne(a),!0}return(te?te(a):a.nodeType)===le.element&&!Ri(a)||(f==="noscript"||f==="noembed"||f==="noframes")&&V(/<\/no(script|embed|frames)/i,a.innerHTML)?(ne(a),!0):(me&&a.nodeType===le.text&&(u=a.textContent,$e([gt,yt,wt],E=>{u=Be(u,E," ")}),a.textContent!==u&&(Pe(e.removed,{element:a.cloneNode()}),a.textContent=u)),ce(z.afterSanitizeElements,a,null),!1)},ir=function(a,u,f){if(vt[u]||Gn&&(u==="id"||u==="name")&&(f in t||f in Si))return!1;const T=B[u]||pe.attributeCheck instanceof Function&&pe.attributeCheck(u,a);if(!(Vt&&!vt[u]&&V(wi,u))){if(!(jn&&V(vi,u))){if(!T||vt[u]){if(!(ar(a)&&(D.tagNameCheck instanceof RegExp&&V(D.tagNameCheck,a)||D.tagNameCheck instanceof Function&&D.tagNameCheck(a))&&(D.attributeNameCheck instanceof RegExp&&V(D.attributeNameCheck,u)||D.attributeNameCheck instanceof Function&&D.attributeNameCheck(u,a))||u==="is"&&D.allowCustomizedBuiltInElements&&(D.tagNameCheck instanceof RegExp&&V(D.tagNameCheck,f)||D.tagNameCheck instanceof Function&&D.tagNameCheck(f))))return!1}else if(!Kt[u]){if(!V(zn,Be(f,Un,""))){if(!((u==="src"||u==="xlink:href"||u==="href")&&a!=="script"&&Dr(f,"data:")===0&&Kn[a])){if(!(Vn&&!V(bi,Be(f,Un,"")))){if(f)return!1}}}}}}return!0},xi=_({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ar=function(a){return!xi[it(a)]&&V(_i,a)},sr=function(a){ce(z.beforeSanitizeAttributes,a,null);const u=a.attributes;if(!u||$t(a))return;const f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B,forceKeepAttr:void 0};let T=u.length;for(;T--;){const E=u[T],R=E.name,U=E.namespaceURI,X=E.value,re=P(R),nn=X;let j=R==="value"?nn:ka(nn);if(f.attrName=re,f.attrValue=j,f.keepAttr=!0,f.forceKeepAttr=void 0,ce(z.uponSanitizeAttribute,a,f),j=f.attrValue,Yn&&(re==="id"||re==="name")&&Dr(j,qn)!==0&&(_e(R,a),j=qn+j),Je&&V(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,j)){_e(R,a);continue}if(re==="attributename"&&Or(j,"href")){_e(R,a);continue}if(f.forceKeepAttr)continue;if(!f.keepAttr){_e(R,a);continue}if(!Wn&&V(/\/>/i,j)){_e(R,a);continue}me&&$e([gt,yt,wt],lr=>{j=Be(j,lr," ")});const or=P(a.nodeName);if(!ir(or,re,j)){_e(R,a);continue}if(K&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!U)switch(g.getAttributeType(or,re)){case"TrustedHTML":{j=Me(j);break}case"TrustedScriptURL":{j=K.createScriptURL(j);break}}if(j!==nn)try{U?a.setAttributeNS(U,R,j):a.setAttribute(R,j),$t(a)?ne(a):Ir(e.removed)}catch{_e(R,a)}}ce(z.afterSanitizeAttributes,a,null)},St=function(a){let u=null;const f=nr(a);for(ce(z.beforeSanitizeShadowDOM,a,null);u=f.nextNode();)if(ce(z.uponSanitizeShadowNode,u,null),rr(u),sr(u),Oe(u.content)&&St(u.content),(te?te(u):u.nodeType)===le.element){const E=pt?pt(u):u.shadowRoot;Oe(E)&&(De(E),St(E))}ce(z.afterSanitizeShadowDOM,a,null)},De=function(a){const u=te?te(a):a.nodeType;if(u===le.element){const E=pt?pt(a):a.shadowRoot;Oe(E)&&(De(E),St(E))}const f=ht?ht(a):a.childNodes;if(!f)return;const T=[];$e(f,E=>{Pe(T,E)});for(const E of T)De(E);if(u===le.element){const E=fe?fe(a):null;if(typeof E=="string"&&P(E)==="template"){const R=a.content;Oe(R)&&De(R)}}};return e.sanitize=function(y){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=null,f=null,T=null,E=null;if(Xt=!y,Xt&&(y="<!-->"),typeof y!="string"&&!Tt(y)&&(y=Da(y),typeof y!="string"))throw He("dirty is not a string, aborting");if(!e.isSupported)return y;if(Wt||en(a),e.removed=[],typeof y=="string"&&(Qe=!1),Qe){const X=fe?fe(y):y.nodeName;if(typeof X=="string"){const re=P(X);if(!O[re]||Ze[re])throw He("root node is forbidden and cannot be sanitized in-place")}if($t(y))throw He("root node is clobbered and cannot be sanitized in-place");De(y)}else if(Tt(y))u=tr("<!---->"),f=u.ownerDocument.importNode(y,!0),f.nodeType===le.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?u=f:u.appendChild(f),De(f);else{if(!ke&&!me&&!be&&y.indexOf("<")===-1)return K&&_t?Me(y):y;if(u=tr(y),!u)return ke?null:_t?Xe:""}u&&Gt&&ne(u.firstChild);const R=nr(Qe?y:u);for(;T=R.nextNode();)rr(T),sr(T),Oe(T.content)&&St(T.content);if(Qe)return me&&tn(y),y;if(ke){if(me&&tn(u),bt)for(E=mi.call(u.ownerDocument);u.firstChild;)E.appendChild(u.firstChild);else E=u;return(B.shadowroot||B.shadowrootmode)&&(E=yi.call(n,E,!0)),E}let U=be?u.outerHTML:u.innerHTML;return be&&O["!doctype"]&&u.ownerDocument&&u.ownerDocument.doctype&&u.ownerDocument.doctype.name&&V(Ya,u.ownerDocument.doctype.name)&&(U="<!DOCTYPE "+u.ownerDocument.doctype.name+`>
`+U),me&&$e([gt,yt,wt],X=>{U=Be(U,X," ")}),K&&_t?Me(U):U},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};en(y),Wt=!0},e.clearConfig=function(){Ie=null,Wt=!1},e.isValidAttribute=function(y,a,u){Ie||en({});const f=P(y),T=P(a);return ir(f,T,u)},e.addHook=function(y,a){typeof a=="function"&&Pe(z[y],a)},e.removeHook=function(y,a){if(a!==void 0){const u=Ca(z[y],a);return u===-1?void 0:Ma(z[y],u,1)[0]}return Ir(z[y])},e.removeHooks=function(y){z[y]=[]},e.removeAllHooks=function(){z=Vr()},e}var Dn=hi();const Wr=C`var(--white, #fff)`,Za=C`var(--ia-theme-link-color, #4b64ff)`,Ja=C`var(--primaryDisableCTAFill, #767676)`,Qa=C`var(--secondaryCTABorder, #999)`,es=C`var(--primaryCTAFill, #194880)`,bn=C`var(--primaryCTAFillRGB, 25, 72, 128)`,ts=C`var(--primaryCTABorder, #c5d1df)`,ns=C`var(--primaryErrorCTAFill, #d9534f)`,_n=C`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,rs=C`var(--primaryErrorCTABorder, #d43f3a)`,is=C`var(--secondaryCTAFill, #333)`,An=C`var(--secondaryCTAFillRGB, 51, 51, 51)`,as=C`var(--primaryCTABorder, #979797)`,ss=C`var(---primaryWarningFill, #ee8950)`,En=C`var(--primaryWarningFillRGB, 238, 137, 80)`,os=C`var(--primaryWarningBorder, #ec7939)`,fi=C`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Wr};
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
    outline-color: ${Wr};
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
    background-color: ${Ja};
    border: 1px solid ${Qa};
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
    background-color: ${es};
    border-color: ${ts};
  }
  .ia-button.primary:hover {
    background-color: rgba(${bn}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${bn}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${bn}, 0.7);
  }

  .ia-button.danger {
    background-color: ${ns};
    border-color: ${rs};
  }
  .ia-button.danger:hover {
    background-color: rgba(${_n}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${_n}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${_n}, 0.7);
  }

  .ia-button.warning {
    background-color: ${ss};
    border-color: ${os};
  }
  .ia-button.warning:hover {
    background-color: rgba(${En}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${En}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${En}, 0.7);
  }

  .ia-button.dark {
    background-color: ${is};
    border-color: ${as};
  }
  .ia-button.dark:hover {
    background-color: rgba(${An}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${An}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${An}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Za};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;C`
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
`;var Gr;(function(i){i.processing="processing",i.complete="complete"})(Gr||(Gr={}));let Pn=class extends he{constructor(){super(...arguments),this.mode="processing"}render(){return b`
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
    `}static get styles(){const e=C`var(--activityIndicatorCheckmarkColor, #31A481)`,t=C`var(--activityIndicatorCompletedRingColor, #31A481)`,n=C`var(--activityIndicatorLoadingRingColor, #333333)`,r=C`var(--activityIndicatorLoadingDotColor, #333333)`;return C`
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
    `}};l([A({type:String})],Pn.prototype,"mode",void 0);Pn=l([ct("ia-activity-indicator")],Pn);const ls=Bt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,ds=Bt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,us=Bt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Yr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return b`<span title="${i}">${t}</span>`}const cs=["a"];function hs(i){return Dn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Dn.sanitize(i,{ALLOWED_TAGS:cs})}function fs(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),s=r-e<=20;if(s&&r===i.length-1)return i;r!==-1&&s&&(n=r)}return ps(i,n,e)}function ps(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const s=n.match(/<\/a/gi);if(!s||s.length<r.length){const o=i.indexOf("</a>",e),c=o-t<=20;if(c&&i.length===o+4)return i;if(o!==-1&&c)n=i.slice(0,o+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const ms=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function gs(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(ms,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function ys(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const ws=Bt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let J=class extends he{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?b`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?b`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${ws}
                  </button>
                `:$}
            <div class="top-line">
              <b>${S("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${S("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?b`<i>${S(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:b`
          <div class="error">
            ${S("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return $;const n=hs(t),r=this.truncateContent(n,this.maxBodyLength);return b`${di(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,s,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(s=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?$:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return b`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${S("More...")}
      </button>
    `}get lessButtonTemplate(){return b`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${S("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?b`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Yr(this.review.reviewer)}
            </a>
          `:b`${Yr(this.review.reviewer)}`:$}get starsTemplate(){return!this.review||!this.review.stars?$:b`
      <div
        class="review-stars"
        title="${S(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>b`<div class="review-star">${us}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return $;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),s=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return S(`${s} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:fs(e,t)}prepReview(e){return ys(gs(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(S("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return C`
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
    `}};l([A({type:Object})],J.prototype,"review",void 0);l([A({type:String})],J.prototype,"identifier",void 0);l([A({type:Number})],J.prototype,"maxSubjectLength",void 0);l([A({type:Number})],J.prototype,"maxBodyLength",void 0);l([A({type:String})],J.prototype,"baseHost",void 0);l([A({type:String})],J.prototype,"csrfToken",void 0);l([A({type:Boolean})],J.prototype,"canDelete",void 0);l([A({type:Boolean})],J.prototype,"bypassTruncation",void 0);l([I()],J.prototype,"showTruncatedContent",void 0);l([I()],J.prototype,"deleteMsg",void 0);J=l([ct("ia-review")],J);let N=class extends he{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return b`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:b`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,s,o,c,d,h;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(s=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(h=(d=(c=this.oldReview)===null||c===void 0?void 0:c.reviewbody)===null||d===void 0?void 0:d.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?b`
          <div class="unrecoverable-error">
            <span class="error-msg">${S(this.unrecoverableError)}</span>
          </div>
        `:$}get recoverableErrorTemplate(){return this.recoverableError?b`
          <div class="recoverable-error">
            ${di(this.sanitizeErrorMsg(S(this.recoverableError)))}
          </div>
        `:$}get recaptchaMessageTemplate(){return this.bypassRecaptcha?$:b`
      <span class="recaptcha-disclaimer"
        >${S(b`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return b`
      <div class="form-heading rating">
        <label for="stars-field">${S("Rating (optional)")}</label>
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
          ${S("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return b`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${S("Subject")}</label>
        ${this.maxSubjectLength?b`<div class="char-count subject">
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
    />${this.maxSubjectLength?b`
            <div class="input-error">
              ${S(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:$}</div></span>
    `}get bodyInputTemplate(){var e,t;return b`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${S("Review")}</label>
          ${this.maxBodyLength?b`<div class="char-count body">
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
        ${this.maxBodyLength?b`
              <div class="input-error">
                ${S(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:$}
      </span>
    `}get hiddenInputsTemplate(){return b`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?b`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:$}
    `}get actionButtonsTemplate(){return b`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${S("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?b`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:S("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=S(`Rate ${e>1?`${e} stars`:"1 star"}`);return b`
      <button
        class="star star-${e}"
        title=${t?S("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?ls:ds}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Dn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const s=await this.getRecaptchaToken();if(!s)return this.handleRecaptchaError();n.append("g-recaptcha-response",s??"")}for(const s of new FormData(this.reviewForm))n.append(s[0],s[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const s=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:s});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,s,o;const c=new Date().toDateString();return new ie({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:c,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((s=this.oldReview)===null||s===void 0?void 0:s.createdate))!==null&&o!==void 0?o:c})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[fi,C`
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
      `]}};l([A({type:String})],N.prototype,"identifier",void 0);l([A({type:String})],N.prototype,"token",void 0);l([A({type:String})],N.prototype,"baseHost",void 0);l([A({type:String})],N.prototype,"endpointPath",void 0);l([A({type:String})],N.prototype,"submitterScreenname",void 0);l([A({type:String})],N.prototype,"submitterItemname",void 0);l([A({type:Object})],N.prototype,"oldReview",void 0);l([A({type:String})],N.prototype,"unrecoverableError",void 0);l([A({type:Number})],N.prototype,"maxSubjectLength",void 0);l([A({type:Number})],N.prototype,"maxBodyLength",void 0);l([A({type:Object})],N.prototype,"fetchHandler",void 0);l([A({type:Object})],N.prototype,"recaptchaManager",void 0);l([A({type:Boolean})],N.prototype,"bypassRecaptcha",void 0);l([I()],N.prototype,"currentStars",void 0);l([I()],N.prototype,"currentSubjectLength",void 0);l([I()],N.prototype,"currentBodyLength",void 0);l([I()],N.prototype,"recoverableError",void 0);l([I()],N.prototype,"formCanSubmit",void 0);l([I()],N.prototype,"submissionInProgress",void 0);l([li("#review-form")],N.prototype,"reviewForm",void 0);N=l([ct("ia-review-form")],N);class vs{constructor(e){var t,n,r,s;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(s=e==null?void 0:e.requireImagePing)!==null&&s!==void 0?s:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),s=Object.keys(n);return s.forEach(o=>{const c=n[o];r.searchParams.append(o,c)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${s.length+2}`),r}}class bs{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),s=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:s,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class _s{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new vs,this.analyticsHelpers=new bs(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function As(i){return new Promise(e=>setTimeout(e,i))}class Es{constructor(e){this.analyticsHandler=new _s({enableAnalytics:!0}),this.sleep=As,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,s=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,s,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,s,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class $s{constructor(e){this.fetchRetrier=new Es,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[s,o]of Object.entries(t))r.searchParams.set(s,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let k=class extends he{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new $s,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?b`
      <div class="reviews-list">
        ${this.reviewsFrozen?b`<div class="message">
              ${S("Reviews can no longer be added to this item.")}
            </div>`:$}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):$)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return b`<div class="message">
      ${S("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?b`
        <div class="message">
          ${S("Reviews cannot be added to this item.")}
        </div>
      `:b`
      <div class="message">
        ${S("There are no reviews yet.")}
        ${S(b`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return b`
      <div class="message">
        ${this.reviewsCount===1?S("There is 1 review for this item."):S(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${S(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?$:b`<div class="own-review-container">
      ${this.displayReviewForm?b`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?b`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:$}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[fi,C`
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
      `]}};l([A({type:String})],k.prototype,"identifier",void 0);l([A({type:Array})],k.prototype,"reviews",void 0);l([A({type:Boolean})],k.prototype,"reviewsDisabled",void 0);l([A({type:Boolean})],k.prototype,"reviewsFrozen",void 0);l([A({type:Boolean})],k.prototype,"canDelete",void 0);l([A({type:Boolean})],k.prototype,"displayReviewsByDefault",void 0);l([A({type:Number})],k.prototype,"maxSubjectLength",void 0);l([A({type:Number})],k.prototype,"maxBodyLength",void 0);l([A({type:String})],k.prototype,"baseHost",void 0);l([A({type:String})],k.prototype,"token",void 0);l([A({type:String})],k.prototype,"endpointPath",void 0);l([A({type:String})],k.prototype,"submitterScreenname",void 0);l([A({type:String})],k.prototype,"submitterItemname",void 0);l([A({type:Object})],k.prototype,"recaptchaManager",void 0);l([A({type:Boolean})],k.prototype,"bypassRecaptcha",void 0);l([A({type:String})],k.prototype,"reviewSubmissionError",void 0);l([A({type:Boolean})],k.prototype,"reviewAddEditRequested",void 0);l([A({type:Object})],k.prototype,"fetchHandler",void 0);l([I()],k.prototype,"displayReviewForm",void 0);l([I()],k.prototype,"displayReviews",void 0);l([I()],k.prototype,"filteredReviews",void 0);l([I()],k.prototype,"currentReview",void 0);l([I()],k.prototype,"reviewsCount",void 0);l([I()],k.prototype,"recaptchaActivated",void 0);k=l([ct("ia-reviews")],k);class Ts{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let Q=class extends he{constructor(){super(...arguments),this.mockOldReview=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new ie({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new ie({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new ie({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new Ts,this.mockRecaptchaManager=new ha({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return b` <h2>General settings</h2>
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
      </div>`}renderReviewToggle(e,t){return b`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};Q.styles=C`
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
  `;l([I()],Q.prototype,"bypassRecaptcha",void 0);l([I()],Q.prototype,"unrecoverableError",void 0);l([I()],Q.prototype,"useCharCounts",void 0);l([I()],Q.prototype,"allowDeletion",void 0);l([I()],Q.prototype,"useExistingReviews",void 0);l([I()],Q.prototype,"review",void 0);l([I()],Q.prototype,"reviewsDisabled",void 0);l([I()],Q.prototype,"reviewsFrozen",void 0);l([li("ia-reviews")],Q.prototype,"reviewsComponent",void 0);Q=l([ct("app-root")],Q);
