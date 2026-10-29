(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function u(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var p=i.length-1;p>=0;p--)(o=i[p])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function It(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function p(y){try{m(n.next(y))}catch(g){o(g)}}function d(y){try{m(n.throw(y))}catch(g){o(g)}}function m(y){y.done?a(y.value):r(y.value).then(p,d)}m((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=window,or=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lr=Symbol(),zr=new WeakMap;let Ci=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(or&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=zr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&zr.set(t,e))}return e}toString(){return this.cssText}};const ks=i=>new Ci(typeof i=="string"?i:i+"",void 0,lr),L=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new Ci(t,i,lr)},Ms=(i,e)=>{or?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=Pt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Vr=or?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ks(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $n;const Bt=window,jr=Bt.trustedTypes,Ls=jr?jr.emptyScript:"",Wr=Bt.reactiveElementPolyfillSupport,Yn={toAttribute(i,e){switch(e){case Boolean:i=i?Ls:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ki=(i,e)=>e!==i&&(e==e||i==i),En={attribute:!0,type:String,converter:Yn,reflect:!1,hasChanged:ki},qn="finalized";let qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=En){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||En}static finalize(){if(this.hasOwnProperty(qn))return!1;this[qn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Vr(r))}else e!==void 0&&t.push(Vr(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ms(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=En){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Yn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),p=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Yn;this._$El=a,this[a]=p.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ki)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};qe[qn]=!0,qe.elementProperties=new Map,qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},Wr==null||Wr({ReactiveElement:qe}),(($n=Bt.reactiveElementVersions)!==null&&$n!==void 0?$n:Bt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sn;const Ht=window,Ze=Ht.trustedTypes,Gr=Ze?Ze.createPolicy("lit-html",{createHTML:i=>i}):void 0,Kn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,Mi="?"+be,Ns=`<${Mi}>`,Ie=document,Ut=()=>Ie.createComment(""),wt=i=>i===null||typeof i!="object"&&typeof i!="function",Li=Array.isArray,Os=i=>Li(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Tn=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yr=/-->/g,qr=/>/g,Ce=RegExp(`>|${Tn}(?:([^\\s"'>=/]+)(${Tn}*=${Tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kr=/'/g,Xr=/"/g,Ni=/^(?:script|style|textarea|title)$/i,Je=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Zr=new WeakMap,Le=Ie.createTreeWalker(Ie,129,null,!1);function Oi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(e):e}const Is=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=ct;for(let p=0;p<t;p++){const d=i[p];let m,y,g=-1,E=0;for(;E<d.length&&(o.lastIndex=E,y=o.exec(d),y!==null);)E=o.lastIndex,o===ct?y[1]==="!--"?o=Yr:y[1]!==void 0?o=qr:y[2]!==void 0?(Ni.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=Ce):y[3]!==void 0&&(o=Ce):o===Ce?y[0]===">"?(o=r??ct,g=-1):y[1]===void 0?g=-2:(g=o.lastIndex-y[2].length,m=y[1],o=y[3]===void 0?Ce:y[3]==='"'?Xr:Kr):o===Xr||o===Kr?o=Ce:o===Yr||o===qr?o=ct:(o=Ce,r=void 0);const C=o===Ce&&i[p+1].startsWith("/>")?" ":"";a+=o===ct?d+Ns:g>=0?(n.push(m),d.slice(0,g)+Kn+d.slice(g)+be+C):d+be+(g===-2?(n.push(void 0),p):C)}return[Oi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Xn=class Ii{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const p=e.length-1,d=this.parts,[m,y]=Is(e,t);if(this.el=Ii.createElement(m,n),Le.currentNode=this.el.content,t===2){const g=this.el.content,E=g.firstChild;E.remove(),g.append(...E.childNodes)}for(;(r=Le.nextNode())!==null&&d.length<p;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const E of r.getAttributeNames())if(E.endsWith(Kn)||E.startsWith(be)){const C=y[o++];if(g.push(E),C!==void 0){const Pe=r.getAttribute(C.toLowerCase()+Kn).split(be),ie=/([.?@])?(.*)/.exec(C);d.push({type:1,index:a,name:ie[2],strings:Pe,ctor:ie[1]==="."?Ps:ie[1]==="?"?Hs:ie[1]==="@"?Us:Wt})}else d.push({type:6,index:a})}for(const E of g)r.removeAttribute(E)}if(Ni.test(r.tagName)){const g=r.textContent.split(be),E=g.length-1;if(E>0){r.textContent=Ze?Ze.emptyScript:"";for(let C=0;C<E;C++)r.append(g[C],Ut()),Le.nextNode(),d.push({type:2,index:++a});r.append(g[E],Ut())}}}else if(r.nodeType===8)if(r.data===Mi)d.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(be,g+1))!==-1;)d.push({type:7,index:a}),g+=be.length-1}a++}}static createElement(e,t){const n=Ie.createElement("template");return n.innerHTML=e,n}};function Qe(i,e,t=i,n){var r,a,o,p;if(e===Je)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const m=wt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==m&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),m===void 0?d=void 0:(d=new m(i),d._$AT(i,t,n)),n!==void 0?((o=(p=t)._$Co)!==null&&o!==void 0?o:p._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Qe(i,d._$AS(i,e.values),d,n)),e}let Ds=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ie).importNode(n,!0);Le.currentNode=a;let o=Le.nextNode(),p=0,d=0,m=r[0];for(;m!==void 0;){if(p===m.index){let y;m.type===2?y=new Di(o,o.nextSibling,this,e):m.type===1?y=new m.ctor(o,m.name,m.strings,this,e):m.type===6&&(y=new Fs(o,this,e)),this._$AV.push(y),m=r[++d]}p!==(m==null?void 0:m.index)&&(o=Le.nextNode(),p++)}return Le.currentNode=Ie,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Di=class Pi{constructor(e,t,n,r){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qe(this,e,t),wt(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Os(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ie.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Xn.createElement(Oi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new Ds(a,this),p=o.u(this.options);o.v(n),this.$(p),this._$AH=o}}_$AC(e){let t=Zr.get(e.strings);return t===void 0&&Zr.set(e.strings,t=new Xn(e)),t}T(e){Li(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Pi(this.k(Ut()),this.k(Ut()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Wt=class{constructor(e,t,n,r,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Qe(this,e,t,0),o=!wt(e)||e!==this._$AH&&e!==Je,o&&(this._$AH=e);else{const p=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=Qe(this,p[n+d],t,d),m===Je&&(m=this._$AH[d]),o||(o=!wt(m)||m!==this._$AH[d]),m===U?e=U:e!==U&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}o&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ps=class extends Wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const Bs=Ze?Ze.emptyScript:"";let Hs=class extends Wt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,Bs):this.element.removeAttribute(this.name)}},Us=class extends Wt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Qe(this,e,t,0))!==null&&n!==void 0?n:U)===Je)return;const r=this._$AH,a=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Fs=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};const Jr=Ht.litHtmlPolyfillSupport;Jr==null||Jr(Xn,Di),((Sn=Ht.litHtmlVersions)!==null&&Sn!==void 0?Sn:Ht.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn;const Ft=window,et=Ft.trustedTypes,Qr=et?et.createPolicy("lit-html",{createHTML:i=>i}):void 0,Zn="$lit$",_e=`lit$${(Math.random()+"").slice(9)}$`,Bi="?"+_e,zs=`<${Bi}>`,De=document,yt=()=>De.createComment(""),vt=i=>i===null||typeof i!="object"&&typeof i!="function",Hi=Array.isArray,Vs=i=>Hi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",xn=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ei=/-->/g,ti=/>/g,ke=RegExp(`>|${xn}(?:([^\\s"'>=/]+)(${xn}*=${xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ni=/'/g,ri=/"/g,Ui=/^(?:script|style|textarea|title)$/i,Fi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=Fi(1),Gt=Fi(2),tt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ii=new WeakMap,Ne=De.createTreeWalker(De,129,null,!1);function zi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qr!==void 0?Qr.createHTML(e):e}const js=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=ht;for(let p=0;p<t;p++){const d=i[p];let m,y,g=-1,E=0;for(;E<d.length&&(o.lastIndex=E,y=o.exec(d),y!==null);)E=o.lastIndex,o===ht?y[1]==="!--"?o=ei:y[1]!==void 0?o=ti:y[2]!==void 0?(Ui.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=ke):y[3]!==void 0&&(o=ke):o===ke?y[0]===">"?(o=r??ht,g=-1):y[1]===void 0?g=-2:(g=o.lastIndex-y[2].length,m=y[1],o=y[3]===void 0?ke:y[3]==='"'?ri:ni):o===ri||o===ni?o=ke:o===ei||o===ti?o=ht:(o=ke,r=void 0);const C=o===ke&&i[p+1].startsWith("/>")?" ":"";a+=o===ht?d+zs:g>=0?(n.push(m),d.slice(0,g)+Zn+d.slice(g)+_e+C):d+_e+(g===-2?(n.push(void 0),p):C)}return[zi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class bt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const p=e.length-1,d=this.parts,[m,y]=js(e,t);if(this.el=bt.createElement(m,n),Ne.currentNode=this.el.content,t===2){const g=this.el.content,E=g.firstChild;E.remove(),g.append(...E.childNodes)}for(;(r=Ne.nextNode())!==null&&d.length<p;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const E of r.getAttributeNames())if(E.endsWith(Zn)||E.startsWith(_e)){const C=y[o++];if(g.push(E),C!==void 0){const Pe=r.getAttribute(C.toLowerCase()+Zn).split(_e),ie=/([.?@])?(.*)/.exec(C);d.push({type:1,index:a,name:ie[2],strings:Pe,ctor:ie[1]==="."?Gs:ie[1]==="?"?qs:ie[1]==="@"?Ks:Yt})}else d.push({type:6,index:a})}for(const E of g)r.removeAttribute(E)}if(Ui.test(r.tagName)){const g=r.textContent.split(_e),E=g.length-1;if(E>0){r.textContent=et?et.emptyScript:"";for(let C=0;C<E;C++)r.append(g[C],yt()),Ne.nextNode(),d.push({type:2,index:++a});r.append(g[E],yt())}}}else if(r.nodeType===8)if(r.data===Bi)d.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(_e,g+1))!==-1;)d.push({type:7,index:a}),g+=_e.length-1}a++}}static createElement(e,t){const n=De.createElement("template");return n.innerHTML=e,n}}function nt(i,e,t=i,n){var r,a,o,p;if(e===tt)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const m=vt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==m&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),m===void 0?d=void 0:(d=new m(i),d._$AT(i,t,n)),n!==void 0?((o=(p=t)._$Co)!==null&&o!==void 0?o:p._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=nt(i,d._$AS(i,e.values),d,n)),e}class Ws{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:De).importNode(n,!0);Ne.currentNode=a;let o=Ne.nextNode(),p=0,d=0,m=r[0];for(;m!==void 0;){if(p===m.index){let y;m.type===2?y=new At(o,o.nextSibling,this,e):m.type===1?y=new m.ctor(o,m.name,m.strings,this,e):m.type===6&&(y=new Xs(o,this,e)),this._$AV.push(y),m=r[++d]}p!==(m==null?void 0:m.index)&&(o=Ne.nextNode(),p++)}return Ne.currentNode=De,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class At{constructor(e,t,n,r){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),vt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==tt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Vs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.$(De.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=bt.createElement(zi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new Ws(a,this),p=o.u(this.options);o.v(n),this.$(p),this._$AH=o}}_$AC(e){let t=ii.get(e.strings);return t===void 0&&ii.set(e.strings,t=new bt(e)),t}T(e){Hi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new At(this.k(yt()),this.k(yt()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Yt{constructor(e,t,n,r,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=nt(this,e,t,0),o=!vt(e)||e!==this._$AH&&e!==tt,o&&(this._$AH=e);else{const p=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=nt(this,p[n+d],t,d),m===tt&&(m=this._$AH[d]),o||(o=!vt(m)||m!==this._$AH[d]),m===T?e=T:e!==T&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}o&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gs extends Yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const Ys=et?et.emptyScript:"";class qs extends Yt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,Ys):this.element.removeAttribute(this.name)}}class Ks extends Yt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=nt(this,e,t,0))!==null&&n!==void 0?n:T)===tt)return;const r=this._$AH,a=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==T&&(r===T||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Xs{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}}const si=Ft.litHtmlPolyfillSupport;si==null||si(bt,At),((Rn=Ft.litHtmlVersions)!==null&&Rn!==void 0?Rn:Ft.litHtmlVersions=[]).push("2.8.0");const Zs=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const p=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new At(e.insertBefore(yt(),p),p,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cn,kn;class pe extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return tt}}pe.finalized=!0,pe._$litElement$=!0,(Cn=globalThis.litElementHydrateSupport)===null||Cn===void 0||Cn.call(globalThis,{LitElement:pe});const ai=globalThis.litElementPolyfillSupport;ai==null||ai({LitElement:pe});((kn=globalThis.litElementVersions)!==null&&kn!==void 0?kn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Qs=(i,e,t)=>{e.constructor.createProperty(t,i)};function $(i){return(e,t)=>t!==void 0?Qs(i,e,t):Js(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(i){return $({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(p){i(p,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(i,e){return Vi({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ea(i){return Vi({descriptor:e=>({get(){var t,n;return(n=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(i))!==null&&n!==void 0?n:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mn;((Mn=window.HTMLSlotElement)===null||Mn===void 0?void 0:Mn.prototype.assignedElements)!=null;function w(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=oi(o.value,e,t,n);else if(o.get!=null)o.get=oi(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ln=new Map;function oi(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let p=this[r];if(Array.isArray(n))for(const d of n)Ln.has(d)?Ln.get(d).push(p):Ln.set(d,[p]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(g=>g.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const m=`${d}__timestamp`;let y=!1;if(t>0)if(!p.has(m))y=!0;else{let g=p.get(m);y=Date.now()-g>t}p.has(d)&&!y?o=p.get(d):(o=i.apply(this,a),p.set(d,o),t>0&&p.set(m,Date.now()))}else{const d=this;p.has(d)?o=p.get(d):(o=i.apply(this,a),p.set(d,o))}return o}}class Jn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Jn.shared=new Jn;class Ae{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ae.shared=new Ae;class zt{parseValue(e){return Ae.shared.parseValue(e)}}zt.shared=new zt;class _t{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}_t.shared=new _t;class Vt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const d=60**(e.length-1-a);return o*Math.floor(d)}).reduce((r,a)=>r+a,0);return t?void 0:n}}Vt.shared=new Vt;class Qn{parseValue(e){if(typeof e=="string")return e}}Qn.shared=new Qn;class ta{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class er{parseValue(e){if(typeof e=="string")return e}}er.shared=new er;class jt{parseValue(e){return String(e)}}jt.shared=new jt;class ae{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}u([w()],ae.prototype,"values",null);u([w()],ae.prototype,"value",null);class na extends ae{constructor(e){super(Jn.shared,e)}}class ye extends ae{constructor(e){super(_t.shared,e)}}class Nn extends ae{constructor(e){super(Vt.shared,e)}}class J extends ae{constructor(e){super(Ae.shared,e)}}class M extends ae{constructor(e){super(jt.shared,e)}}class ra extends ae{constructor(e){super(er.shared,e)}}class li extends ae{constructor(e){super(zt.shared,e)}}class ia extends ae{constructor(e){super(Qn.shared,e)}}class sa extends ae{constructor(e,t){super(t,e)}}class aa extends sa{constructor(e){const t=new ta(jt.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ye(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new M(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new J(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new J(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new M(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new M(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new li(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new M(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new M(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new M(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new M(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ye(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new M(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new J(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Nn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new M(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new J(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ye(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new M(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new M(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new J(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new li(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new M(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Nn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new M(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new J(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new ia(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new na(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new M(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new J(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new J(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new M(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new M(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new ra(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new M(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new J(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ye(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new M(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ye(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Nn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new M(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new M(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ye(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ye(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ye(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new aa(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new M(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new M(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new M(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new J(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new M(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new M(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new J(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new M(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new M(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new J(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new J(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}u([w()],v.prototype,"addeddate",null);u([w()],v.prototype,"audio_codec",null);u([w()],v.prototype,"audio_sample_rate",null);u([w()],v.prototype,"avg_rating",null);u([w()],v.prototype,"collection",null);u([w()],v.prototype,"collections_raw",null);u([w()],v.prototype,"collection_size",null);u([w()],v.prototype,"contributor",null);u([w()],v.prototype,"coverage",null);u([w()],v.prototype,"creator",null);u([w()],v.prototype,"collection_layout",null);u([w()],v.prototype,"date",null);u([w()],v.prototype,"description",null);u([w()],v.prototype,"downloads",null);u([w()],v.prototype,"duration",null);u([w()],v.prototype,"external_identifier",null);u([w()],v.prototype,"files_count",null);u([w()],v.prototype,"indexdate",null);u([w()],v.prototype,"isbn",null);u([w()],v.prototype,"issue",null);u([w()],v.prototype,"item_count",null);u([w()],v.prototype,"item_size",null);u([w()],v.prototype,"language",null);u([w()],v.prototype,"length",null);u([w()],v.prototype,"lineage",null);u([w()],v.prototype,"month",null);u([w()],v.prototype,"mediatype",null);u([w()],v.prototype,"noindex",null);u([w()],v.prototype,"notes",null);u([w()],v.prototype,"num_favorites",null);u([w()],v.prototype,"num_reviews",null);u([w()],v.prototype,"openlibrary_edition",null);u([w()],v.prototype,"openlibrary_work",null);u([w()],v.prototype,"page_progression",null);u([w()],v.prototype,"partner",null);u([w()],v.prototype,"ppi",null);u([w()],v.prototype,"publicdate",null);u([w()],v.prototype,"publisher",null);u([w()],v.prototype,"reviewdate",null);u([w()],v.prototype,"runtime",null);u([w()],v.prototype,"scanner",null);u([w()],v.prototype,"source",null);u([w()],v.prototype,"start_localtime",null);u([w()],v.prototype,"start_time",null);u([w()],v.prototype,"stop_time",null);u([w()],v.prototype,"subject",null);u([w()],v.prototype,"taper",null);u([w()],v.prototype,"title",null);u([w()],v.prototype,"transferer",null);u([w()],v.prototype,"track",null);u([w()],v.prototype,"type",null);u([w()],v.prototype,"uploader",null);u([w()],v.prototype,"utc_offset",null);u([w()],v.prototype,"venue",null);u([w()],v.prototype,"volume",null);u([w()],v.prototype,"week",null);u([w()],v.prototype,"year",null);class rt{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?zt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Vt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?Ae.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?Ae.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?Ae.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}u([w()],rt.prototype,"size",null);u([w()],rt.prototype,"length",null);u([w()],rt.prototype,"height",null);u([w()],rt.prototype,"width",null);u([w()],rt.prototype,"track",null);class re{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?_t.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?_t.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?Ae.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}u([w()],re.prototype,"reviewdate",null);u([w()],re.prototype,"createdate",null);u([w()],re.prototype,"stars",null);class oa{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new rt(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new re(r))}}var Oe;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Oe||(Oe={}));class tr extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class la{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const p=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Oe.networkError,p)}try{const o=await a.json(),p=o.error;if(p){const d=o.forensics;return this.getErrorResult(Oe.searchEngineError,p,d)}else return{success:o}}catch(o){const p=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Oe.decodingError,p)}}getErrorResult(e,t,n){return{error:new tr(e,t,n)}}}class ui{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new tr(Oe.itemNotFound)}:{success:new oa(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new tr(Oe.itemNotFound)}:{success:r.success.result}}}ui.default=new ui(new la);let ua=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function da(i){return new Promise(e=>setTimeout(e,i))}var de;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(de||(de={}));const di="lazyLoaderService";class ca{constructor(e){var t,n,r;this.emitter=ua(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return It(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return It(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return It(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${de.owner}='${di}'][${de.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,p)=>{if(a.getAttribute(de.dynamicImportLoaded)){o();return}const d=e.scriptBeingRetried,m=a.onload||(d==null?void 0:d.onload);a.onload=g=>{m==null||m(g),a.setAttribute(de.dynamicImportLoaded,"true"),o()};const y=a.onerror||(d==null?void 0:d.onerror);a.onerror=g=>It(this,void 0,void 0,function*(){const E=a.getAttribute(de.hasBeenRetried);if(n<this.retryCount&&!E){a.setAttribute(de.hasBeenRetried,"true"),yield da(this.retryInterval*1e3);const C=n+1;this.emitter.emit("scriptLoadRetried",e.src,C),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:C,scriptBeingRetried:a}))}else E||this.emitter.emit("scriptLoadFailed",e.src,g),y==null||y(g),p(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(de.owner,di),r.setAttribute("src",n),r.setAttribute(de.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(p=>{r.setAttribute(p,o[p])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class ha{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class fa{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new ca,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new ha({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=(i,...e)=>({strTag:!0,strings:i,values:e}),ma=pa,ga=i=>typeof i!="string"&&"strTag"in i,wa=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=i=>ga(i)?wa(i.strings,i.values):i;let x=ya;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class va{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ba=new va;ba.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Aa=i=>(...e)=>({_$litDirective$:i,values:e});class $a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nr extends $a{constructor(e){if(super(e),this.et=U,e.type!==_a.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this.ft=void 0,this.et=e;if(e===Je)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}nr.directiveName="unsafeHTML",nr.resultType=1;const ji=Aa(nr);/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function ci(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Ea(i){if(Array.isArray(i))return i}function Sa(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,p=[],d=!0,m=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(p.push(n.value),p.length!==e);d=!0);}catch(y){m=!0,r=y}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(m)throw r}}return p}}function Ta(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Ra(i,e){return Ea(i)||Sa(i,e)||xa(i,e)||Ta()}function xa(i,e){if(i){if(typeof i=="string")return ci(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ci(i,e):void 0}}const Wi=Object.entries,hi=Object.setPrototypeOf,Ca=Object.isFrozen,Gi=Object.getPrototypeOf,Yi=Object.getOwnPropertyDescriptor;let V=Object.freeze,W=Object.seal,Ke=Object.create,qi=typeof Reflect<"u"&&Reflect,rr=qi.apply,ir=qi.construct;V||(V=function(e){return e});W||(W=function(e){return e});rr||(rr=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});ir||(ir=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const he=D(Array.prototype.forEach),ka=D(Array.prototype.lastIndexOf),fi=D(Array.prototype.pop),ft=D(Array.prototype.push),Ma=D(Array.prototype.slice),La=D(Array.prototype.splice),Xe=Array.isArray,On=Ki(Set),In=D(Set.prototype.add),pt=D(Set.prototype.has),Me=D(String.prototype.toLowerCase),Dn=D(String.prototype.toString),pi=D(String.prototype.match),mt=D(String.prototype.replace),mi=D(String.prototype.indexOf),Na=D(String.prototype.trim),Oa=D(Number.prototype.toString),Ia=D(Boolean.prototype.toString),gi=typeof BigInt>"u"?null:D(BigInt.prototype.toString),wi=typeof Symbol>"u"?null:D(Symbol.prototype.toString),X=D(Object.prototype.hasOwnProperty),gt=D(Object.prototype.toString),j=D(RegExp.prototype.test),fe=Ki(TypeError);function D(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return rr(i,e,n)}}function Ki(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ir(i,t)}}function R(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Me;if(hi&&hi(i,null),!Xe(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(Ca(e)||(e[n]=a),r=a)}i[r]=!0}return i}function Da(i){for(let e=0;e<i.length;e++)X(i,e)||(i[e]=null);return i}function Q(i){const e=Ke(null);for(const n of Wi(i)){var t=Ra(n,2);const r=t[0],a=t[1];X(i,r)&&(Xe(a)?e[r]=Da(a):a&&typeof a=="object"&&a.constructor===Object?e[r]=Q(a):e[r]=a)}return e}function Pa(i){switch(typeof i){case"string":return i;case"number":return Oa(i);case"boolean":return Ia(i);case"bigint":return gi?gi(i):"0";case"symbol":return wi?wi(i):"Symbol()";case"undefined":return gt(i);case"function":case"object":{if(i===null)return gt(i);const e=i,t=ne(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:gt(n)}return gt(i)}default:return gt(i)}}function ne(i,e){for(;i!==null;){const n=Yi(i,e);if(n){if(n.get)return D(n.get);if(typeof n.value=="function")return D(n.value)}i=Gi(i)}function t(){return null}return t}function Ba(i,e){for(;i!==null;){const t=Yi(i,e);if(t)return t.get?D(t.get):null;i=Gi(i)}return null}function Ha(i){try{return j(i,""),!0}catch{return!1}}const yi=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Pn=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bn=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ua=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Hn=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Fa=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),vi=V(["#text"]),bi=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Un=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_i=V(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Dt=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),za=W(/{{[\w\W]*|^[\w\W]*}}/g),Va=W(/<%[\w\W]*|^[\w\W]*%>/g),ja=W(/\${[\w\W]*/g),Wa=W(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ga=W(/^aria-[\-\w]+$/),Ai=W(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ya=W(/^(?:\w+script|data):/i),qa=W(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ka=W(/^html$/i),Xa=W(/^[a-z][.\w]*(-[.\w]+)+$/i),Fn=W(/<[/\w!]/g),$i=W(/<[/\w]/g),Za=W(/<\/no(script|embed|frames)/i),Ei=W(/\/>/i),F={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ja=V(R({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Qa=function(){return typeof window>"u"?null:window},eo=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Si=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ve=function(e,t,n,r){return X(e,t)&&Xe(e[t])?R(r.base?Q(r.base):{},e[t],r.transform):n},zn=function(e,t,n){const r=X(e,t)?e[t]:void 0;return r&&typeof r=="object"?Q(r):n()};function Xi(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qa();const e=f=>Xi(f);if(e.version="3.4.17",e.removed=[],!i||!i.document||i.document.nodeType!==F.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const a=i.HTMLTemplateElement,o=i.Node,p=i.Element,d=i.NodeFilter;i.NamedNodeMap===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const m=i.DOMParser,y=i.trustedTypes,g=p.prototype,E=ne(g,"cloneNode"),C=ne(g,"remove"),Pe=ne(g,"removeAttributeNode"),ie=ne(g,"nextSibling"),it=ne(g,"childNodes"),Be=ne(g,"parentNode"),Kt=ne(g,"shadowRoot"),Xt=ne(g,"attributes"),$e=o&&o.prototype?ne(o.prototype,"nodeType"):null,He=o&&o.prototype?ne(o.prototype,"nodeName"):null,Et=o&&o.prototype?ne(o.prototype,"ownerDocument"):null,te=function(s){return $e?$e(s):s.nodeType},st=function(s){return He?He(s):s.nodeName},ur=Ba(g,"namespaceURI"),Zt=function(s){return ur?ur(s):s.namespaceURI};if(typeof a=="function"){const f=t.createElement("template");f.content&&f.content.ownerDocument&&(t=f.content.ownerDocument)}let Y,Ee="",Jt,dr=!1,at=0;const cr=function(){if(at>0)throw fe('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Ue=function(s){cr(),at++;try{return Y.createHTML(s)}finally{at--}},Ji=function(s){cr(),at++;try{return Y.createScriptURL(s)}finally{at--}},Qi=function(){return dr||(Jt=eo(y,r),dr=!0),Jt},St=t,Qt=St.implementation,hr=St.createNodeIterator,es=St.createDocumentFragment,ts=St.getElementsByTagName,ns=n.importNode;let N=Si();e.isSupported=typeof Wi=="function"&&typeof Be=="function"&&Qt&&Qt.createHTMLDocument!==void 0;const rs=za,is=Va,ss=ja,as=Wa,os=Ga,ls=Ya,fr=qa,us=Xa;let pr=Ai,O=null;const en=R({},[...yi,...Pn,...Bn,...Hn,...vi]);let I=null;const tn=R({},[...bi,...Un,..._i,...Dt]);let oe=Object.seal(Ke(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ot=null,mr=null;const me=Object.seal(Ke(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let gr=!0,nn=!0,wr=!1,rn=!0,ce=!1,Se=!0,Te=!1,sn=!1,Tt=null,Rt=null,an=!1,Fe=!1,xt=!1,Ct=!1,yr=!0,vr=!1;const br="user-content-";let on=!0,ln=!1,Re=null,ze={},xe=null;const _r=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Ar=null;const $r=R({},["audio","video","img","source","image","track"]);let Er=null;const Sr=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),kt="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let Ve=le,un=!1,dn=null;const ds=R({},[kt,Mt,le],Dn),Tr=V(["mi","mo","mn","ms","mtext"]);let cn=R({},Tr);const Rr=V(["annotation-xml"]);let hn=R({},Rr);const cs=R({},["title","style","font","a","script"]);let lt=null;const hs=["application/xhtml+xml","text/html"],fs="text/html";let H=null,je=null;const ps=t.createElement("form"),xr=function(s){return s instanceof RegExp||s instanceof Function},fn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(je&&je===s)return;(!s||typeof s!="object")&&(s={}),s=Q(s),lt=hs.indexOf(s.PARSER_MEDIA_TYPE)===-1?fs:s.PARSER_MEDIA_TYPE,H=lt==="application/xhtml+xml"?Dn:Me,O=ve(s,"ALLOWED_TAGS",en,{transform:H}),I=ve(s,"ALLOWED_ATTR",tn,{transform:H}),dn=ve(s,"ALLOWED_NAMESPACES",ds,{transform:Dn}),Er=ve(s,"ADD_URI_SAFE_ATTR",Sr,{transform:H,base:Sr}),Ar=ve(s,"ADD_DATA_URI_TAGS",$r,{transform:H,base:$r}),xe=ve(s,"FORBID_CONTENTS",_r,{transform:H}),ot=ve(s,"FORBID_TAGS",Q({}),{transform:H}),mr=ve(s,"FORBID_ATTR",Q({}),{transform:H}),ze=X(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?Q(s.USE_PROFILES):s.USE_PROFILES:!1,gr=s.ALLOW_ARIA_ATTR!==!1,nn=s.ALLOW_DATA_ATTR!==!1,wr=s.ALLOW_UNKNOWN_PROTOCOLS||!1,rn=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ce=s.SAFE_FOR_TEMPLATES||!1,Se=s.SAFE_FOR_XML!==!1,Te=s.WHOLE_DOCUMENT||!1,Fe=s.RETURN_DOM||!1,xt=s.RETURN_DOM_FRAGMENT||!1,Ct=s.RETURN_TRUSTED_TYPE||!1,an=s.FORCE_BODY||!1,yr=s.SANITIZE_DOM!==!1,vr=s.SANITIZE_NAMED_PROPS||!1,on=s.KEEP_CONTENT!==!1,ln=s.IN_PLACE||!1,pr=Ha(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:Ai,Ve=typeof s.NAMESPACE=="string"?s.NAMESPACE:le,cn=zn(s,"MATHML_TEXT_INTEGRATION_POINTS",()=>R({},Tr)),hn=zn(s,"HTML_INTEGRATION_POINTS",()=>R({},Rr));const l=zn(s,"CUSTOM_ELEMENT_HANDLING",()=>Ke(null));if(oe=Ke(null),X(l,"tagNameCheck")&&xr(l.tagNameCheck)&&(oe.tagNameCheck=l.tagNameCheck),X(l,"attributeNameCheck")&&xr(l.attributeNameCheck)&&(oe.attributeNameCheck=l.attributeNameCheck),X(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(oe.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),W(oe),ce&&(nn=!1),xt&&(Fe=!0),ze&&(O=R({},vi),I=Ke(null),ze.html===!0&&(R(O,yi),R(I,bi)),ze.svg===!0&&(R(O,Pn),R(I,Un),R(I,Dt)),ze.svgFilters===!0&&(R(O,Bn),R(I,Un),R(I,Dt)),ze.mathMl===!0&&(R(O,Hn),R(I,_i),R(I,Dt))),me.tagCheck=null,me.attributeCheck=null,X(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?me.tagCheck=s.ADD_TAGS:Xe(s.ADD_TAGS)&&(O===en&&(O=Q(O)),R(O,s.ADD_TAGS,H))),X(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?me.attributeCheck=s.ADD_ATTR:Xe(s.ADD_ATTR)&&(I===tn&&(I=Q(I)),R(I,s.ADD_ATTR,H))),X(s,"ADD_FORBID_CONTENTS")&&Xe(s.ADD_FORBID_CONTENTS)&&(xe===_r&&(xe=Q(xe)),R(xe,s.ADD_FORBID_CONTENTS,H)),on&&(O["#text"]=!0),Te&&R(O,["html","head","body"]),O.table&&(R(O,["tbody"]),delete ot.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw fe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const c=Y;Y=s.TRUSTED_TYPES_POLICY;try{Ee=Ue("")}catch(h){throw Y=c,h}}else s.TRUSTED_TYPES_POLICY===null?(Y=void 0,Ee=""):(Y===void 0&&(Y=Qi()),Y&&typeof Ee=="string"&&(Ee=Ue("")));V&&V(s),je=s},Cr=R({},[...Pn,...Bn,...Ua]),kr=R({},[...Hn,...Fa]),ms=function(s,l,c){return l.namespaceURI===le?s==="svg":l.namespaceURI===kt?s==="svg"&&(c==="annotation-xml"||cn[c]):!!Cr[s]},gs=function(s,l,c){return l.namespaceURI===le?s==="math":l.namespaceURI===Mt?s==="math"&&hn[c]:!!kr[s]},ws=function(s,l,c){return l.namespaceURI===Mt&&!hn[c]||l.namespaceURI===kt&&!cn[c]?!1:!kr[s]&&(cs[s]||!Cr[s])},ys=function(s){const l=Zt(s),c=Me(st(s)),h=Be(s);let b,_;return h&&te(h)===F.element?(b={namespaceURI:Zt(h)},_=Me(st(h))):(b={namespaceURI:Ve},_="template"),dn[l]?l===Mt?ms(c,b,_):l===kt?gs(c,b,_):l===le?ws(c,b,_):!!(lt==="application/xhtml+xml"&&dn[l]):!1},ge=function(s){ft(e.removed,{element:s});try{Be(s).removeChild(s)}catch{if(C(s),!Be(s))throw fe("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Mr=function(s,l,c){try{Pe(s,l)}catch{try{s.removeAttribute(c)}catch{}}},pn=function(s){gn(s);const l=it(s);l&&he(Ma(l),h=>{try{C(h)}catch{}});const c=te(s)===F.element?Xt(s):null;if(c)for(let h=c.length-1;h>=0;--h){const b=c[h],_=b&&b.name;typeof _=="string"&&Mr(s,b,_)}},We=function(s,l,c){if(!c)try{c=l.getAttributeNode(s)}catch{c=null}ft(e.removed,{attribute:c||null,from:l});try{c?Pe(l,c):l.removeAttribute(s)}catch{try{l.removeAttribute(s)}catch{}}if(s==="is")if(Fe||xt)try{ge(l)}catch{}else try{l.setAttribute(s,"")}catch{}},Lr=function(s){const l=Xt(s);if(l)for(let c=l.length-1;c>=0;--c){const h=l[c],b=h&&h.name;typeof b!="string"||I[H(b)]||Mr(s,h,b)}},mn=function(s,l){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const h=[s];for(;h.length>0;){const b=h.pop();if(l(b)===!1)continue;if(c&&te(b)===F.element){const S=Kt(b);we(S)&&h.push(S)}const _=it(b);if(_)for(let S=_.length-1;S>=0;--S)h.push(_[S])}},gn=function(s){mn(s,l=>{te(l)===F.element&&Lr(l)})},wn=function(s){const l=[];return mn(s,c=>{l.push(c)},!0),l},vs=function(s,l){const c=On();he(wn(s),h=>{te(h)===F.element&&In(c,h)}),he(l,h=>{te(h)===F.element&&!pt(c,h)&&Lr(h)})},Nr=function(s,l){let c=!1;return he(e.removed,h=>{h.element&&(c=c||h.element===s,gn(h.element))}),vs(s,l),c},bs=8,_s=function(s,l){const c=Re;let h=null;const b=()=>(h||(h=On(),he(l,_=>{In(h,_)})),h);for(let _=0;;_++){const S=wn(s),z=[s];let ue=!1;if(he(S,G=>{te(G)===F.documentFragment?ft(z,G):!ue&&!pt(c,G)&&(ue=pt(b(),G))}),!ue)return;if(_>=bs)throw fe("the tree kept changing during in-place sanitization; refusing to return it");he(z,(G,q)=>{As(G,q>0,s,b())})}},As=function(s,l,c,h){const b=yn(s);let _;for(;_=b.nextNode();)!pt(h,_)||pt(Re,_)||(l&&se(N.uponSanitizeShadowNode,_,null),bn(_,c),_n(_,c),we(_.content)&&dt(_.content))},$s=function(s){Re&&In(Re,s)},Or=function(s,l){return Se?s==="patchsrc"?!0:s==="for"&&l!=="label"&&l!=="output":!1},Es=function(s){Se&&mn(s,l=>{const c=te(l);if(c===F.processingInstruction||c===F.comment&&j($i,l.data)){try{C(l)}catch{}return!1}if(c===F.element){const h=l,b=H(st(l));try{h.hasAttribute&&h.hasAttribute("patchsrc")&&h.removeAttribute("patchsrc"),h.hasAttribute&&h.hasAttribute("for")&&Or("for",b)&&h.removeAttribute("for")}catch{}}return!0})},Ir=function(s){let l=null,c=null;if(an)s="<remove></remove>"+s;else{const _=pi(s,/^[\r\n\t ]+/);c=_&&_[0]}lt==="application/xhtml+xml"&&Ve===le&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const h=Y?Ue(s):s;if(Ve===le)try{l=new m().parseFromString(h,lt)}catch{}if(!l||!l.documentElement){l=Qt.createDocument(Ve,"template",null);try{l.documentElement.innerHTML=un?Ee:h}catch{}}const b=l.body||l.documentElement;return s&&c&&b.insertBefore(t.createTextNode(c),b.childNodes[0]||null),Ve===le?ts.call(l,Te?"html":"body")[0]:Te?l.documentElement:b},yn=function(s){const l=Et?Et(s):s.ownerDocument;return hr.call(l||s,s,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Lt=function(s){return s=mt(s,rs," "),s=mt(s,is," "),s=mt(s,ss," "),s},vn=function(s){var l;Dr(s);const c=(l=s.querySelectorAll)===null||l===void 0?void 0:l.call(s,"template");c&&he(c,h=>{we(h.content)&&vn(h.content)})},Dr=function(s){s.normalize();const l=Et?Et(s):s.ownerDocument,c=hr.call(l||s,s,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let h=c.nextNode();for(;h;)h.data=Lt(h.data),h=c.nextNode()},Nt=function(s){const l=He?He(s):null;return typeof l!="string"||H(l)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==Xt(s)||typeof s.removeAttribute!="function"||typeof s.removeAttributeNode!="function"||typeof s.getAttributeNode!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==$e(s)||s.childNodes!==it(s)},we=function(s){if(!$e||typeof s!="object"||s===null)return!1;try{return $e(s)===F.documentFragment}catch{return!1}},ut=function(s){if(!$e||typeof s!="object"||s===null)return!1;try{return typeof $e(s)=="number"}catch{return!1}};function se(f,s,l){f.length!==0&&he(f,c=>{c.call(e,s,l,je)})}const Ss=function(s,l){return!!(Se&&s.hasChildNodes()&&!ut(s.firstElementChild)&&j(Fn,s.textContent)&&j(Fn,s.innerHTML)||Se&&Ja[l]&&te(s)===F.element&&Zt(s)===le&&(ut(s.firstElementChild)||typeof s.textContent=="string"&&j(Fn,s.textContent))||s.nodeType===F.processingInstruction||Se&&s.nodeType===F.comment&&j($i,s.data))},Ot=function(s,l){if(s instanceof RegExp)return j(s,l);if(s instanceof Function){for(var c=arguments.length,h=new Array(c>2?c-2:0),b=2;b<c;b++)h[b-2]=arguments[b];return!!s(l,...h)}return!1},Ts=function(s,l,c){if(!ot[l]&&Hr(l)&&Ot(oe.tagNameCheck,l))return!1;if(on&&!xe[l]&&!xe[Me(l)]){const h=Be(s),b=it(s);if(b&&h){const _=b.length;for(let S=_-1;S>=0;--S){const z=s===c?E(b[S],!0):b[S];h.insertBefore(z,ie(s))}}}return ge(s),!0},Pr=function(s,l,c,h){return s.length===0?l:l===c||l===h?Q(l):l},Ge=function(s,l){return s===l||Be(s)!==null?!1:(ln&&gn(s),!0)},bn=function(s,l){if($s(s),se(N.beforeSanitizeElements,s,null),Ge(s,l))return!0;if(Nt(s))return ge(s),!0;const c=H(st(s));if(O=Pr(N.uponSanitizeElement,O,en,Tt),se(N.uponSanitizeElement,s,{tagName:c,allowedTags:O}),Ge(s,l))return!0;if(Ss(s,c))return ge(s),!0;if(ot[c]||!(me.tagCheck instanceof Function&&me.tagCheck(c))&&!O[c]){const h=Ts(s,c,l);return h===!1&&(se(N.afterSanitizeElements,s,null),Ge(s,l))?!0:h}if(te(s)===F.element&&!ys(s)||(c==="noscript"||c==="noembed"||c==="noframes")&&j(Za,s.innerHTML))return ge(s),!0;if(ce&&s.nodeType===F.text){const h=Lt(s.textContent);s.textContent!==h&&(ft(e.removed,{element:s.cloneNode()}),s.textContent=h)}return se(N.afterSanitizeElements,s,null),Ge(s,l)},Br=function(s,l,c){if(mr[l]||Or(l,s)||yr&&(l==="id"||l==="name")&&(c in t||c in ps))return!1;const h=I[l]||me.attributeCheck instanceof Function&&me.attributeCheck(l,s);return nn&&j(as,l)||gr&&j(os,l)?!0:h?Er[l]||j(pr,mt(c,fr,""))||(l==="src"||l==="xlink:href"||l==="href")&&s!=="script"&&mi(c,"data:")===0&&Ar[s]||wr&&!j(ls,mt(c,fr,""))?!0:!c:Hr(s)&&Ot(oe.tagNameCheck,s)&&Ot(oe.attributeNameCheck,l,s)||l==="is"&&oe.allowCustomizedBuiltInElements&&Ot(oe.tagNameCheck,c)},Rs=R({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Hr=function(s){return!Rs[Me(s)]&&j(us,s)},xs=function(s,l,c,h){if(Y&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!c)switch(y.getAttributeType(s,l)){case"TrustedHTML":return Ue(h);case"TrustedScriptURL":return Ji(h)}return h},Cs=function(s,l,c,h){try{return c?s.setAttributeNS(c,l,h):s.setAttribute(l,h),Nt(s)?(ge(s),!1):!0}catch{return We(l,s),!1}},Ur=function(s,l){return Se&&j(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,l)?!0:Me(s)==="attributename"&&pi(l,"href")!==null},_n=function(s,l){if(se(N.beforeSanitizeAttributes,s,null),Ge(s,l))return;const c=s.attributes;if(!c||Nt(s))return;I=Pr(N.uponSanitizeAttribute,I,tn,Rt);const h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0};let b=c.length;const _=H(s.nodeName);for(;b--;){const S=c[b],z=S.name,ue=S.namespaceURI,G=S.value,q=H(z),Ye=G;let K=z==="value"?Ye:Na(Ye),Fr=!1;if(h.attrName=q,h.attrValue=K,h.keepAttr=!0,h.forceKeepAttr=void 0,se(N.uponSanitizeAttribute,s,h),K=h.attrValue,vr&&(q==="id"||q==="name")&&mi(K,br)!==0&&(We(z,s,S),K=br+K,Fr=!0),Ur(z,K)){We(z,s,S);continue}if(!h.forceKeepAttr){if(!h.keepAttr){We(z,s,S);continue}if(!rn&&j(Ei,K)){We(z,s,S);continue}if(ce&&(K=Lt(K)),!Br(_,q,K)){We(z,s,S);continue}K=xs(_,q,ue,K),K!==Ye&&Cs(s,z,ue,K)&&Fr&&fi(e.removed)}}se(N.afterSanitizeAttributes,s,null),Ge(s,l)},dt=function(s){let l=null;const c=yn(s);for(se(N.beforeSanitizeShadowDOM,s,null);l=c.nextNode();)if(se(N.uponSanitizeShadowNode,l,null),bn(l,s),_n(l,s),we(l.content)&&dt(l.content),te(l)===F.element){const h=Kt(l);we(h)&&(An(h),dt(h))}ce&&Dr(s),se(N.afterSanitizeShadowDOM,s,null)},An=function(s){const l=[{node:s,shadow:null}];for(;l.length>0;){const c=l.pop();if(c.shadow){dt(c.shadow);continue}const h=c.node,b=te(h)===F.element,_=it(h);if(_)for(let S=_.length-1;S>=0;--S)l.push({node:_[S],shadow:null});if(b){const S=He?He(h):null;if(typeof S=="string"&&H(S)==="template"){const z=h.content;we(z)&&l.push({node:z,shadow:null})}}if(b){const S=Kt(h);we(S)&&l.push({node:null,shadow:S},{node:S,shadow:null})}}};return e.sanitize=function(f){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,h=null,b=null;if(un=!f,un&&(f="<!-->"),typeof f!="string"&&!ut(f)&&(f=Pa(f),typeof f!="string"))throw fe("dirty is not a string, aborting");if(!e.isSupported)return f;sn?(O=Tt,I=Rt):fn(s),(N.uponSanitizeElement.length>0||N.uponSanitizeAttribute.length>0)&&(O=Q(O)),N.uponSanitizeAttribute.length>0&&(I=Q(I)),e.removed=[];const _=ln&&typeof f!="string"&&ut(f);let S=[];const z=Re;if(_){Es(f);const q=st(f);if(typeof q=="string"){const Ye=H(q);if(!O[Ye]||ot[Ye])throw pn(f),fe("root node is forbidden and cannot be sanitized in-place")}if(Nt(f))throw pn(f),fe("root node is clobbered and cannot be sanitized in-place");S=wn(f),Re=On()}else if(ut(f))l=Ir("<!---->"),c=l.ownerDocument.importNode(f,!0),c.nodeType===F.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c),An(l);else{if(!Fe&&!ce&&!Te&&f.indexOf("<")===-1)return Y&&Ct?Ue(f):f;if(l=Ir(f),!l)return Fe?null:Ct?Ee:""}l&&an&&ge(l.firstChild);const ue=_?f:l;try{_&&An(f);const q=yn(ue);for(;h=q.nextNode();)bn(h,ue),_n(h,ue),we(h.content)&&dt(h.content);_&&_s(f,S)}catch(q){throw _&&(pn(f),Nr(f,S)),q}finally{Re=z}if(_){if(Nr(f,S))throw fe("a node selected for removal could not be safely returned; refusing to sanitize in place");return ce&&vn(f),f}if(Fe){if(ce&&vn(l),xt)for(b=es.call(l.ownerDocument);l.firstChild;)b.appendChild(l.firstChild);else b=l;return(I.shadowroot||I.shadowrootmode)&&(b=ns.call(n,b,!0)),b}let G=Te?l.outerHTML:l.innerHTML;return Te&&O["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&j(Ka,l.ownerDocument.doctype.name)&&(G="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+G),ce&&(G=Lt(G)),Y&&Ct?Ue(G):G},e.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fn(f),sn=!0,Tt=O,Rt=I},e.clearConfig=function(){je=null,sn=!1,Tt=null,Rt=null,Y=Jt,Ee=""},e.isValidAttribute=function(f,s,l){je||fn({});const c=H(f),h=H(s);return typeof l=="string"&&(Ur(s,l)||!rn&&j(Ei,l))?!1:Br(c,h,l)},e.addHook=function(f,s){typeof s=="function"&&X(N,f)&&ft(N[f],s)},e.removeHook=function(f,s){if(X(N,f)){if(s!==void 0){const l=ka(N[f],s);return l===-1?void 0:La(N[f],l,1)[0]}return fi(N[f])}},e.removeHooks=function(f){X(N,f)&&(N[f]=[])},e.removeAllHooks=function(){N=Si()},e}var sr=Xi();const Ti=L`var(--white, #fff)`,to=L`var(--ia-theme-link-color, #4b64ff)`,no=L`var(--primaryDisableCTAFill, #767676)`,ro=L`var(--secondaryCTABorder, #999)`,io=L`var(--primaryCTAFill, #194880)`,Vn=L`var(--primaryCTAFillRGB, 25, 72, 128)`,so=L`var(--primaryCTABorder, #c5d1df)`,ao=L`var(--primaryErrorCTAFill, #d9534f)`,jn=L`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,oo=L`var(--primaryErrorCTABorder, #d43f3a)`,lo=L`var(--secondaryCTAFill, #333)`,Wn=L`var(--secondaryCTAFillRGB, 51, 51, 51)`,uo=L`var(--primaryCTABorder, #979797)`,co=L`var(---primaryWarningFill, #ee8950)`,Gn=L`var(--primaryWarningFillRGB, 238, 137, 80)`,ho=L`var(--primaryWarningBorder, #ec7939)`,Zi=L`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Ti};
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
    outline-color: ${Ti};
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
    background-color: ${no};
    border: 1px solid ${ro};
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
    background-color: ${io};
    border-color: ${so};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Vn}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Vn}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Vn}, 0.7);
  }

  .ia-button.danger {
    background-color: ${ao};
    border-color: ${oo};
  }
  .ia-button.danger:hover {
    background-color: rgba(${jn}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${jn}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${jn}, 0.7);
  }

  .ia-button.warning {
    background-color: ${co};
    border-color: ${ho};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Gn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Gn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Gn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${lo};
    border-color: ${uo};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Wn}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Wn}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Wn}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${to};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;L`
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
`;var Ri;(function(i){i.processing="processing",i.complete="complete"})(Ri||(Ri={}));let ar=class extends pe{constructor(){super(...arguments),this.mode="processing"}render(){return A`
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
    `}static get styles(){const e=L`var(--activityIndicatorCheckmarkColor, #31A481)`,t=L`var(--activityIndicatorCompletedRingColor, #31A481)`,n=L`var(--activityIndicatorLoadingRingColor, #333333)`,r=L`var(--activityIndicatorLoadingDotColor, #333333)`;return L`
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
    `}};u([$({type:String})],ar.prototype,"mode",void 0);ar=u([$t("ia-activity-indicator")],ar);const fo=Gt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,po=Gt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=i=>i??U,go=Gt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function xi(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return A`<span title="${i}">${t}</span>`}const wo=["a"];function yo(i){return sr.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),sr.sanitize(i,{ALLOWED_TAGS:wo})}function vo(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return bo(i,n,e)}function bo(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),p=o-t<=20;if(p&&i.length===o+4)return i;if(o!==-1&&p)n=i.slice(0,o+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const _o=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Ao(i){return i.replace(/href="([^"]+)"/,(n,r)=>`href="${r.replace(".","__DOT__")}"`).replace(_o,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function $o(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Eo=Gt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let Z=class extends pe{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?A`
          <article
            class="review"
            id=${this.generateDomId()}
            tabindex=${mo(this.hasReviewerLink?void 0:"-1")}
          >
            ${this.canDelete?A`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Eo}
                  </button>
                `:T}
            <div class="top-line">
              <b>${x("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${x("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?A`<i>${x(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:A`
          <div class="error">
            ${x("This review cannot be displayed at this time.")}
          </div>
        `}focus(e){var t,n;(n=(t=this.reviewerLink)!==null&&t!==void 0?t:this.reviewArticle)===null||n===void 0||n.focus(e)}get hasReviewerLink(){var e;return!!(!((e=this.review)===null||e===void 0)&&e.reviewer_itemname)}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return T;const n=yo(t),r=this.truncateContent(n,this.maxBodyLength);return A`${ji(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?T:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return A`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${x("More...")}
      </button>
    `}get lessButtonTemplate(){return A`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${x("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.hasReviewerLink?A`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${xi(this.review.reviewer)}
            </a>
          `:A`${xi(this.review.reviewer)}`:T}get starsTemplate(){return!this.review||!this.review.stars?T:A`
      <div
        class="review-stars"
        title="${x(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>A`<div class="review-star">${go}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return T;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return x(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:vo(e,t)}prepReview(e){return $o(Ao(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(x("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return L`
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
    `}};u([$({type:Object})],Z.prototype,"review",void 0);u([$({type:String})],Z.prototype,"identifier",void 0);u([$({type:Number})],Z.prototype,"maxSubjectLength",void 0);u([$({type:Number})],Z.prototype,"maxBodyLength",void 0);u([$({type:String})],Z.prototype,"baseHost",void 0);u([$({type:String})],Z.prototype,"csrfToken",void 0);u([$({type:Boolean})],Z.prototype,"canDelete",void 0);u([$({type:Boolean})],Z.prototype,"bypassTruncation",void 0);u([P()],Z.prototype,"showTruncatedContent",void 0);u([P()],Z.prototype,"deleteMsg",void 0);u([qt(".reviewer-link")],Z.prototype,"reviewerLink",void 0);u([qt("article.review")],Z.prototype,"reviewArticle",void 0);Z=u([$t("ia-review")],Z);let B=class extends pe{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return A`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:A`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,o,p,d,m;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(m=(d=(p=this.oldReview)===null||p===void 0?void 0:p.reviewbody)===null||d===void 0?void 0:d.length)!==null&&m!==void 0?m:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?A`
          <div class="unrecoverable-error">
            <span class="error-msg">${x(this.unrecoverableError)}</span>
          </div>
        `:T}get recoverableErrorTemplate(){return this.recoverableError?A`
          <div class="recoverable-error">
            ${ji(this.sanitizeErrorMsg(x(this.recoverableError)))}
          </div>
        `:T}get recaptchaMessageTemplate(){return this.bypassRecaptcha?T:A`
      <span class="recaptcha-disclaimer"
        >${x(A`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return A`
      <div class="form-heading rating">
        <label for="stars-field">${x("Rating (optional)")}</label>
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
          ${x("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return A`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${x("Subject")}</label>
        ${this.maxSubjectLength?A`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:T}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?A`
            <div class="input-error">
              ${x(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:T}</div></span>
    `}get bodyInputTemplate(){var e,t;return A`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${x("Review")}</label>
          ${this.maxBodyLength?A`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:T}
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
        ${this.maxBodyLength?A`
              <div class="input-error">
                ${x(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:T}
      </span>
    `}get hiddenInputsTemplate(){return A`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:T}
    `}get actionButtonsTemplate(){return A`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${x("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?A`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:x("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=x(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?x("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?fo:po}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return sr.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,o;const p=new Date().toDateString();return new re({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:p,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&o!==void 0?o:p})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Zi,L`
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
      `]}};u([$({type:String})],B.prototype,"identifier",void 0);u([$({type:String})],B.prototype,"token",void 0);u([$({type:String})],B.prototype,"baseHost",void 0);u([$({type:String})],B.prototype,"endpointPath",void 0);u([$({type:String})],B.prototype,"submitterScreenname",void 0);u([$({type:String})],B.prototype,"submitterItemname",void 0);u([$({type:Object})],B.prototype,"oldReview",void 0);u([$({type:String})],B.prototype,"unrecoverableError",void 0);u([$({type:Number})],B.prototype,"maxSubjectLength",void 0);u([$({type:Number})],B.prototype,"maxBodyLength",void 0);u([$({type:Object})],B.prototype,"fetchHandler",void 0);u([$({type:Object})],B.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],B.prototype,"bypassRecaptcha",void 0);u([P()],B.prototype,"currentStars",void 0);u([P()],B.prototype,"currentSubjectLength",void 0);u([P()],B.prototype,"currentBodyLength",void 0);u([P()],B.prototype,"recoverableError",void 0);u([P()],B.prototype,"formCanSubmit",void 0);u([P()],B.prototype,"submissionInProgress",void 0);u([qt("#review-form")],B.prototype,"reviewForm",void 0);B=u([$t("ia-review-form")],B);class So{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(o=>{const p=n[o];r.searchParams.append(o,p)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class To{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Ro{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new So,this.analyticsHelpers=new To(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function xo(i){return new Promise(e=>setTimeout(e,i))}class Co{constructor(e){this.analyticsHandler=new Ro({enableAnalytics:!0}),this.sleep=xo,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class ko{constructor(e){this.fetchRetrier=new Co,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,o]of Object.entries(t))r.searchParams.set(a,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let k=class extends pe{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.maxInitialReviews=5,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new ko,this.displayReviewForm=!1,this.showAllReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:A`
      <div class="reviews-list">
        ${this.reviewsFrozen?A`<div class="message">
              ${x("Reviews can no longer be added to this item.")}
            </div>`:T}
        ${this.editableCurrentReviewTemplate}
        ${this.visibleReviews.map(e=>this.renderReview(e))}
        ${this.showMoreButtonTemplate}
      </div>
    `}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0)}get visibleReviews(){return this.showAllReviews||this.displayReviewsByDefault?this.filteredReviews:this.filteredReviews.slice(0,this.maxInitialReviews)}get reviewsDisabledTemplate(){return A`<div class="message">
      ${x("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?A`
        <div class="message">
          ${x("Reviews cannot be added to this item.")}
        </div>
      `:A`
      <div class="message">
        ${x("There are no reviews yet.")}
        ${x(A`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get showMoreButtonTemplate(){const e=this.filteredReviews.length-this.visibleReviews.length;return e<=0?T:A`
      <button
        class="ia-button link show-more-btn"
        @click=${this.showMoreReviews}
      >
        ${x(e===1?"Show 1 more review":ma`Show ${e} more reviews`)}
      </button>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?T:A`<div class="own-review-container">
      ${this.displayReviewForm?A`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{n.reviewer_itemname!==this.submitterItemname?t.push(n):e||(e=n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?A`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:T}async showMoreReviews(){var e;const t=this.visibleReviews.length;this.showAllReviews=!0,await this.updateComplete;const n=(e=this.listedReviews)===null||e===void 0?void 0:e[t];await(n==null?void 0:n.updateComplete),n==null||n.focus()}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1}static get styles(){return[Zi,L`
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

        /* Two classes, to outrank .ia-button.link's padding */
        .reviews-list .show-more-btn {
          padding: 0;
          font-weight: 600;
          outline-color: currentColor;
          outline-offset: 2px;
        }
      `]}};u([$({type:String})],k.prototype,"identifier",void 0);u([$({type:Array})],k.prototype,"reviews",void 0);u([$({type:Boolean})],k.prototype,"reviewsDisabled",void 0);u([$({type:Boolean})],k.prototype,"reviewsFrozen",void 0);u([$({type:Boolean})],k.prototype,"canDelete",void 0);u([$({type:Boolean})],k.prototype,"displayReviewsByDefault",void 0);u([$({type:Number})],k.prototype,"maxInitialReviews",void 0);u([$({type:Number})],k.prototype,"maxSubjectLength",void 0);u([$({type:Number})],k.prototype,"maxBodyLength",void 0);u([$({type:String})],k.prototype,"baseHost",void 0);u([$({type:String})],k.prototype,"token",void 0);u([$({type:String})],k.prototype,"endpointPath",void 0);u([$({type:String})],k.prototype,"submitterScreenname",void 0);u([$({type:String})],k.prototype,"submitterItemname",void 0);u([$({type:Object})],k.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],k.prototype,"bypassRecaptcha",void 0);u([$({type:String})],k.prototype,"reviewSubmissionError",void 0);u([$({type:Boolean})],k.prototype,"reviewAddEditRequested",void 0);u([$({type:Object})],k.prototype,"fetchHandler",void 0);u([P()],k.prototype,"displayReviewForm",void 0);u([P()],k.prototype,"showAllReviews",void 0);u([P()],k.prototype,"filteredReviews",void 0);u([P()],k.prototype,"currentReview",void 0);u([P()],k.prototype,"reviewsCount",void 0);u([P()],k.prototype,"recaptchaActivated",void 0);u([ea(".reviews-list > ia-review")],k.prototype,"listedReviews",void 0);k=u([$t("ia-reviews")],k);class Mo{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let ee=class extends pe{constructor(){super(...arguments),this.mockOldReview=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new re({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new re({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new re({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.manyReviews=Array.from({length:8},(e,t)=>new re({stars:t%5+1,reviewtitle:`Extra review ${t+1}`,reviewbody:"Here are some more thoughts on this item.",reviewer:`Reviewer ${t+1}`,reviewdate:`03/${String(28-t).padStart(2,"0")}/2025`,createdate:`03/${String(28-t).padStart(2,"0")}/2025`,reviewer_itemname:`@reviewer-${t+1}`})),this.fetchHandler=new Mo,this.mockRecaptchaManager=new fa({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.useManyReviews=!1,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return A` <h2>General settings</h2>
      <button
        @click=${()=>this.useExistingReviews=!this.useExistingReviews}
      >
        ${this.useExistingReviews?"Remove":"Show"} existing reviews
      </button>
      <button @click=${()=>this.useManyReviews=!this.useManyReviews}>
        ${this.useManyReviews?"Use few":"Use many"} reviews
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
          .reviews=${this.existingReviews}
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
      </div>`}get existingReviews(){return this.useExistingReviews?(this.useManyReviews?this.reviews.concat(this.manyReviews):this.reviews).concat(this.review):[]}renderReviewToggle(e,t){return A`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};ee.styles=L`
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
  `;u([P()],ee.prototype,"bypassRecaptcha",void 0);u([P()],ee.prototype,"unrecoverableError",void 0);u([P()],ee.prototype,"useCharCounts",void 0);u([P()],ee.prototype,"allowDeletion",void 0);u([P()],ee.prototype,"useExistingReviews",void 0);u([P()],ee.prototype,"useManyReviews",void 0);u([P()],ee.prototype,"review",void 0);u([P()],ee.prototype,"reviewsDisabled",void 0);u([P()],ee.prototype,"reviewsFrozen",void 0);u([qt("ia-reviews")],ee.prototype,"reviewsComponent",void 0);ee=u([$t("app-root")],ee);
