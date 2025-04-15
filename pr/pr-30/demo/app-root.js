(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function l(i,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,r);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}function oe(i,e,t,r){function n(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function d(h){try{u(r.next(h))}catch(f){a(f)}}function o(h){try{u(r.throw(h))}catch(f){a(f)}}function u(h){h.done?s(h.value):n(h.value).then(d,o)}u((r=r.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=window,We=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),Ge=new WeakMap;let vt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(We&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ge.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ge.set(t,e))}return e}toString(){return this.cssText}};const Nt=i=>new vt(typeof i=="string"?i:i+"",void 0,Ke),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new vt(t,i,Ke)},Pt=(i,e)=>{We?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),n=le.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)})},Ze=We?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Nt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const de=window,Je=de.trustedTypes,Ht=Je?Je.emptyScript:"",Xe=de.reactiveElementPolyfillSupport,Pe={toAttribute(i,e){switch(e){case Boolean:i=i?Ht:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},$t=(i,e)=>e!==i&&(e==e||i==i),$e={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:$t},He="finalized";let F=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$e}static finalize(){if(this.hasOwnProperty(He))return!1;this[He]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Ze(n))}else e!==void 0&&t.push(Ze(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=$e){var n;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const a=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:Pe).toAttribute(t,r.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=n.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:Pe;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||$t)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};F[He]=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Xe==null||Xe({ReactiveElement:F}),((ve=de.reactiveElementVersions)!==null&&ve!==void 0?ve:de.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const ue=window,W=ue.trustedTypes,Qe=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ie="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+L,It=`<${_t}>`,U=document,ce=()=>U.createComment(""),ee=i=>i===null||typeof i!="object"&&typeof i!="function",At=Array.isArray,Vt=i=>At(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,et=/>/g,H=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,rt=/"/g,xt=/^(?:script|style|textarea|title)$/i,te=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),nt=new WeakMap,V=U.createTreeWalker(U,129,null,!1);function St(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}const Ot=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",a=Q;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===Q?h[1]==="!--"?a=Ye:h[1]!==void 0?a=et:h[2]!==void 0?(xt.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=H):h[3]!==void 0&&(a=H):a===H?h[0]===">"?(a=n??Q,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?H:h[3]==='"'?rt:tt):a===rt||a===tt?a=H:a===Ye||a===et?a=Q:(a=H,n=void 0);const v=a===H&&i[d+1].startsWith("/>")?" ":"";s+=a===Q?o+It:f>=0?(r.push(u),o.slice(0,f)+Ie+o.slice(f)+L+v):o+L+(f===-2?(r.push(void 0),d):v)}return[St(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let Ve=class Et{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=Ot(e,t);if(this.el=Et.createElement(u,r),V.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=V.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(Ie)||g.startsWith(L)){const v=h[a++];if(f.push(g),v!==void 0){const be=n.getAttribute(v.toLowerCase()+Ie).split(L),R=/([.?@])?(.*)/.exec(v);o.push({type:1,index:s,name:R[2],strings:be,ctor:R[1]==="."?Ut:R[1]==="?"?zt:R[1]==="@"?Ft:me})}else o.push({type:6,index:s})}for(const g of f)n.removeAttribute(g)}if(xt.test(n.tagName)){const f=n.textContent.split(L),g=f.length-1;if(g>0){n.textContent=W?W.emptyScript:"";for(let v=0;v<g;v++)n.append(f[v],ce()),V.nextNode(),o.push({type:2,index:++s});n.append(f[g],ce())}}}else if(n.nodeType===8)if(n.data===_t)o.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(L,f+1))!==-1;)o.push({type:7,index:s}),f+=L.length-1}s++}}static createElement(e,t){const r=U.createElement("template");return r.innerHTML=e,r}};function K(i,e,t=i,r){var n,s,a,d;if(e===te)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=ee(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=K(i,o._$AS(i,e.values),o,r)),e}let jt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(r,!0);V.currentNode=s;let a=V.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new Mt(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new Wt(a,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(a=V.nextNode(),d++)}return V.currentNode=U,s}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Mt=class kt{constructor(e,t,r,n){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),ee(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==te&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Vt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ve.createElement(St(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{const a=new jt(s,this),d=a.u(this.options);a.v(r),this.$(d),this._$AH=a}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new Ve(e)),t}T(e){At(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new kt(this.k(ce()),this.k(ce()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},me=class{constructor(e,t,r,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let a=!1;if(s===void 0)e=K(this,e,t,0),a=!ee(e)||e!==this._$AH&&e!==te,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=K(this,d[r+o],t,o),u===te&&(u=this._$AH[o]),a||(a=!ee(u)||u!==this._$AH[o]),u===A?e=A:e!==A&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ut=class extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}};const Dt=W?W.emptyScript:"";let zt=class extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Dt):this.element.removeAttribute(this.name)}},Ft=class extends me{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=K(this,e,t,0))!==null&&r!==void 0?r:A)===te)return;const n=this._$AH,s=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Wt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};const it=ue.litHtmlPolyfillSupport;it==null||it(Ve,Mt),((_e=ue.litHtmlVersions)!==null&&_e!==void 0?_e:ue.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const he=window,q=he.trustedTypes,st=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Oe="$lit$",B=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+B,Kt=`<${Ct}>`,D=document,re=()=>D.createComment(""),ne=i=>i===null||typeof i!="object"&&typeof i!="function",Rt=Array.isArray,qt=i=>Rt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ot=/>/g,I=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Lt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),y=Lt(1),qe=Lt(2),G=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ut=new WeakMap,O=D.createTreeWalker(D,129,null,!1);function Bt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(e):e}const Gt=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",a=Y;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===Y?h[1]==="!--"?a=at:h[1]!==void 0?a=ot:h[2]!==void 0?(Tt.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=I):h[3]!==void 0&&(a=I):a===I?h[0]===">"?(a=n??Y,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?I:h[3]==='"'?dt:lt):a===dt||a===lt?a=I:a===at||a===ot?a=Y:(a=I,n=void 0);const v=a===I&&i[d+1].startsWith("/>")?" ":"";s+=a===Y?o+Kt:f>=0?(r.push(u),o.slice(0,f)+Oe+o.slice(f)+B+v):o+B+(f===-2?(r.push(void 0),d):v)}return[Bt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class ie{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=Gt(e,t);if(this.el=ie.createElement(u,r),O.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=O.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(Oe)||g.startsWith(B)){const v=h[a++];if(f.push(g),v!==void 0){const be=n.getAttribute(v.toLowerCase()+Oe).split(B),R=/([.?@])?(.*)/.exec(v);o.push({type:1,index:s,name:R[2],strings:be,ctor:R[1]==="."?Jt:R[1]==="?"?Qt:R[1]==="@"?Yt:ye})}else o.push({type:6,index:s})}for(const g of f)n.removeAttribute(g)}if(Tt.test(n.tagName)){const f=n.textContent.split(B),g=f.length-1;if(g>0){n.textContent=q?q.emptyScript:"";for(let v=0;v<g;v++)n.append(f[v],re()),O.nextNode(),o.push({type:2,index:++s});n.append(f[g],re())}}}else if(n.nodeType===8)if(n.data===Ct)o.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(B,f+1))!==-1;)o.push({type:7,index:s}),f+=B.length-1}s++}}static createElement(e,t){const r=D.createElement("template");return r.innerHTML=e,r}}function Z(i,e,t=i,r){var n,s,a,d;if(e===G)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=ne(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=Z(i,o._$AS(i,e.values),o,r)),e}class Zt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:D).importNode(r,!0);O.currentNode=s;let a=O.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new ae(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new er(a,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(a=O.nextNode(),d++)}return O.currentNode=D,s}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ae{constructor(e,t,r,n){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ne(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):qt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.$(D.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ie.createElement(Bt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{const a=new Zt(s,this),d=a.u(this.options);a.v(r),this.$(d),this._$AH=a}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new ie(e)),t}T(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new ae(this.k(re()),this.k(re()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ye{constructor(e,t,r,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let a=!1;if(s===void 0)e=Z(this,e,t,0),a=!ne(e)||e!==this._$AH&&e!==G,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=Z(this,d[r+o],t,o),u===G&&(u=this._$AH[o]),a||(a=!ne(u)||u!==this._$AH[o]),u===m?e=m:e!==m&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!n&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Jt extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Xt=q?q.emptyScript:"";class Qt extends ye{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Xt):this.element.removeAttribute(this.name)}}class Yt extends ye{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:m)===G)return;const n=this._$AH,s=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==m&&(n===m||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class er{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ct=he.litHtmlPolyfillSupport;ct==null||ct(ie,ae),((xe=he.litHtmlVersions)!==null&&xe!==void 0?xe:he.litHtmlVersions=[]).push("2.8.0");const tr=(i,e,t)=>{var r,n;const s=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let a=s._$litPart$;if(a===void 0){const d=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=a=new ae(e.insertBefore(re(),d),d,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee,Me;class N extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return G}}N.finalized=!0,N._$litElement$=!0,(Ee=globalThis.litElementHydrateSupport)===null||Ee===void 0||Ee.call(globalThis,{LitElement:N});const ht=globalThis.litElementPolyfillSupport;ht==null||ht({LitElement:N});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=i=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(i,e):((t,r)=>{const{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},nr=(i,e,t)=>{e.constructor.createProperty(t,i)};function x(i){return(e,t)=>t!==void 0?nr(i,e,t):rr(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i){return x({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=({finisher:i,descriptor:e})=>(t,r)=>{var n;if(r===void 0){const s=(n=t.originalKey)!==null&&n!==void 0?n:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(d){i(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),i==null||i(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(i,e){return ir({descriptor:t=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;((ke=window.HTMLSlotElement)===null||ke===void 0?void 0:ke.prototype.assignedElements)!=null;function c(i){let e,t,r;return e=i,(n,s,a)=>{if(a.value!=null)a.value=pt(a.value,e,t,r);else if(a.get!=null)a.get=pt(a.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ce=new Map;function pt(i,e,t=0,r){const n=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[n];if(Array.isArray(r))for(const o of r)Ce.has(o)?Ce.get(o).push(d):Ce.set(o,[d]);if(e||s.length>0||t>0){let o;e===!0?o=s.map(f=>f.toString()).join("!"):e?o=e.apply(this,s):o=s[0];const u=`${o}__timestamp`;let h=!1;if(t>0)if(!d.has(u))h=!0;else{let f=d.get(u);h=Date.now()-f>t}d.has(o)&&!h?a=d.get(o):(a=i.apply(this,s),d.set(o,a),t>0&&d.set(u,Date.now()))}else{const o=this;d.has(o)?a=d.get(o):(a=i.apply(this,s),d.set(o,a))}return a}}class je{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}je.shared=new je;class P{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}P.shared=new P;class pe{parseValue(e){return P.shared.parseValue(e)}}pe.shared=new pe;class se{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}se.shared=new se;class fe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((n,s)=>{const a=parseFloat(n);if(Number.isNaN(a))return t=!0,0;const o=60**(e.length-1-s);return a*Math.floor(o)}).reduce((n,s)=>n+s,0);return t?void 0:r}}fe.shared=new fe;class Ue{parseValue(e){if(typeof e=="string")return e}}Ue.shared=new Ue;class ar{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const n of this.separators)if(r=t.split(n),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),n=[];return r.forEach(s=>{s!==void 0&&n.push(s)}),n}}class De{parseValue(e){if(typeof e=="string")return e}}De.shared=new De;class ge{parseValue(e){return String(e)}}ge.shared=new ge;class M{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const n=this.parser.parseValue(r);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}l([c()],M.prototype,"values",null);l([c()],M.prototype,"value",null);class or extends M{constructor(e){super(je.shared,e)}}class T extends M{constructor(e){super(se.shared,e)}}class Re extends M{constructor(e){super(fe.shared,e)}}class E extends M{constructor(e){super(P.shared,e)}}class w extends M{constructor(e){super(ge.shared,e)}}class lr extends M{constructor(e){super(De.shared,e)}}class ft extends M{constructor(e){super(pe.shared,e)}}class dr extends M{constructor(e){super(Ue.shared,e)}}class ur extends M{constructor(e,t){super(t,e)}}class cr extends ur{constructor(e){const t=new ar(ge.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new T(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new w(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new E(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new E(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new w(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new w(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ft(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new w(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new w(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new w(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new w(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new T(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new w(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new E(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Re(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new w(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new E(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new T(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new w(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new w(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new E(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ft(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new w(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Re(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new w(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new E(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new dr(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new or(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new w(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new E(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new E(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new w(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new w(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new lr(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new w(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new E(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new T(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new w(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new T(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Re(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new w(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new w(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new T(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new T(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new T(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new cr(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new w(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new w(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new w(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new E(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new w(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new w(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new E(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new w(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new w(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new E(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new E(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([c()],p.prototype,"addeddate",null);l([c()],p.prototype,"audio_codec",null);l([c()],p.prototype,"audio_sample_rate",null);l([c()],p.prototype,"avg_rating",null);l([c()],p.prototype,"collection",null);l([c()],p.prototype,"collections_raw",null);l([c()],p.prototype,"collection_size",null);l([c()],p.prototype,"contributor",null);l([c()],p.prototype,"coverage",null);l([c()],p.prototype,"creator",null);l([c()],p.prototype,"collection_layout",null);l([c()],p.prototype,"date",null);l([c()],p.prototype,"description",null);l([c()],p.prototype,"downloads",null);l([c()],p.prototype,"duration",null);l([c()],p.prototype,"external_identifier",null);l([c()],p.prototype,"files_count",null);l([c()],p.prototype,"indexdate",null);l([c()],p.prototype,"isbn",null);l([c()],p.prototype,"issue",null);l([c()],p.prototype,"item_count",null);l([c()],p.prototype,"item_size",null);l([c()],p.prototype,"language",null);l([c()],p.prototype,"length",null);l([c()],p.prototype,"lineage",null);l([c()],p.prototype,"month",null);l([c()],p.prototype,"mediatype",null);l([c()],p.prototype,"noindex",null);l([c()],p.prototype,"notes",null);l([c()],p.prototype,"num_favorites",null);l([c()],p.prototype,"num_reviews",null);l([c()],p.prototype,"openlibrary_edition",null);l([c()],p.prototype,"openlibrary_work",null);l([c()],p.prototype,"page_progression",null);l([c()],p.prototype,"partner",null);l([c()],p.prototype,"ppi",null);l([c()],p.prototype,"publicdate",null);l([c()],p.prototype,"publisher",null);l([c()],p.prototype,"reviewdate",null);l([c()],p.prototype,"runtime",null);l([c()],p.prototype,"scanner",null);l([c()],p.prototype,"source",null);l([c()],p.prototype,"start_localtime",null);l([c()],p.prototype,"start_time",null);l([c()],p.prototype,"stop_time",null);l([c()],p.prototype,"subject",null);l([c()],p.prototype,"taper",null);l([c()],p.prototype,"title",null);l([c()],p.prototype,"transferer",null);l([c()],p.prototype,"track",null);l([c()],p.prototype,"type",null);l([c()],p.prototype,"uploader",null);l([c()],p.prototype,"utc_offset",null);l([c()],p.prototype,"venue",null);l([c()],p.prototype,"volume",null);l([c()],p.prototype,"week",null);l([c()],p.prototype,"year",null);class X{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?pe.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?fe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?P.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?P.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?P.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([c()],X.prototype,"size",null);l([c()],X.prototype,"length",null);l([c()],X.prototype,"height",null);l([c()],X.prototype,"width",null);l([c()],X.prototype,"track",null);class J{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?se.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?se.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?P.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([c()],J.prototype,"reviewdate",null);l([c()],J.prototype,"createdate",null);l([c()],J.prototype,"stars",null);class hr{constructor(e){var t,r;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(n=>new X(n)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new p(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(r=e.reviews)===null||r===void 0?void 0:r.map(n=>new J(n))}}var j;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(j||(j={}));class ze extends Error{constructor(e,t,r){super(t),this.name=e,this.type=e,this.details=r}}class pr{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const n=new URL(window.location.href).searchParams.get("scope");n&&(this.requestScope=n)}}async fetchMetadata(e,t){const r=t?`/${t}`:"",n=`https://${this.baseUrl}/metadata/${e}${r}`;return this.fetchUrl(n,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope);let s;try{const a=(r=t==null?void 0:t.requestOptions)!==null&&r!==void 0?r:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(n.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(j.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const o=a.forensics;return this.getErrorResult(j.searchEngineError,d,o)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(j.decodingError,d)}}getErrorResult(e,t,r){return{error:new ze(e,t,r)}}}class gt{constructor(e){this.backend=e}async fetchMetadata(e){var t;const r=await this.backend.fetchMetadata(e);return r.error?r:((t=r.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new ze(j.itemNotFound)}:{success:new hr(r.success)}}async fetchMetadataValue(e,t){var r;const n=await this.backend.fetchMetadata(e,t);return n.error?n:((r=n.success)===null||r===void 0?void 0:r.result)===void 0?{error:new ze(j.itemNotFound)}:{success:n.success.result}}}gt.default=new gt(new pr);let fr=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function gr(i){return new Promise(e=>setTimeout(e,i))}var k;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(k||(k={}));const mt="lazyLoaderService";class mr{constructor(e){var t,r,n;this.emitter=fr(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(r=e==null?void 0:e.retryCount)!==null&&r!==void 0?r:2,this.retryInterval=(n=e==null?void 0:e.retryInterval)!==null&&n!==void 0?n:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return oe(this,void 0,void 0,function*(){let t,r;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(r=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,r])})}loadScript(e){return oe(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return oe(this,void 0,void 0,function*(){const r=(t=e.retryNumber)!==null&&t!==void 0?t:0,n=`script[src='${e.src}'][async][${k.owner}='${mt}'][${k.retryNumber}='${r}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:r})),this.container.appendChild(s)),new Promise((a,d)=>{if(s.getAttribute(k.dynamicImportLoaded)){a();return}const o=e.scriptBeingRetried,u=s.onload||(o==null?void 0:o.onload);s.onload=f=>{u==null||u(f),s.setAttribute(k.dynamicImportLoaded,"true"),a()};const h=s.onerror||(o==null?void 0:o.onerror);s.onerror=f=>oe(this,void 0,void 0,function*(){const g=s.getAttribute(k.hasBeenRetried);if(r<this.retryCount&&!g){s.setAttribute(k.hasBeenRetried,"true"),yield gr(this.retryInterval*1e3);const v=r+1;this.emitter.emit("scriptLoadRetried",e.src,v),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:v,scriptBeingRetried:s}))}else g||this.emitter.emit("scriptLoadFailed",e.src,f),h==null||h(f),d(f)})})})}getScriptTag(e){var t;const r=e.src.replace("'",'"'),n=document.createElement("script"),s=e.retryNumber;n.setAttribute(k.owner,mt),n.setAttribute("src",r),n.setAttribute(k.retryNumber,s.toString()),n.async=!0;const a=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(a).forEach(d=>{n.setAttribute(d,a[d])}),e.bundleType){case"module":n.setAttribute("type",e.bundleType);break;case"nomodule":n.setAttribute(e.bundleType,"");break}return n}}class yr{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const r=this.createContainer();this.setup(r,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,r)=>{this.executionSuccessBlock=n=>{this.finishExecution(),t(n)},this.executionExpiredBlock=()=>{this.finishExecution(),r(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),r(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var r;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(r=t==null?void 0:t.size)!==null&&r!==void 0?r:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let r=document.getElementById(t);return r||(r=document.createElement("div"),r.id=t,r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.zIndex=e?`${e}`:"10",document.body.appendChild(r)),r}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class yt{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new mr,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const r=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!r)throw new Error("The reCaptcha widget requires a site key");const n=this.recaptchaCache[r];if(n)return n;const s=await this.getRecaptchaLibrary(),a=new yr({siteKey:r,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[r]=a,a}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=i=>typeof i!="string"&&"strTag"in i,br=(i,e,t)=>{let r=i[0];for(let n=1;n<i.length;n++)r+=e[n-1],r+=i[n];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=i=>wr(i)?br(i.strings,i.values):i;let _=vr;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $r{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _r=new $r;_r.resolve();const wt=b`var(--white, #fff)`,Ar=b`var(--ia-theme-link-color, #4b64ff)`,xr=b`var(--primaryDisableCTAFill, #767676)`,Sr=b`var(--secondaryCTABorder, #999)`,Er=b`var(--primaryCTAFill, #194880)`,Te=b`var(--primaryCTAFillRGB, 25, 72, 128)`,Mr=b`var(--primaryCTABorder, #c5d1df)`,kr=b`var(--primaryErrorCTAFill, #d9534f)`,Le=b`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Cr=b`var(--primaryErrorCTABorder, #d43f3a)`,Rr=b`var(--secondaryCTAFill, #333)`,Be=b`var(--secondaryCTAFillRGB, 51, 51, 51)`,Tr=b`var(--primaryCTABorder, #979797)`,Lr=b`var(---primaryWarningFill, #ee8950)`,Ne=b`var(--primaryWarningFillRGB, 238, 137, 80)`,Br=b`var(--primaryWarningBorder, #ec7939)`,Nr=b`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${wt};
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
    outline-color: ${wt};
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
    background-color: ${xr};
    border: 1px solid ${Sr};
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
    background-color: ${Er};
    border-color: ${Mr};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Te}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Te}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Te}, 0.7);
  }

  .ia-button.danger {
    background-color: ${kr};
    border-color: ${Cr};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Le}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Le}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Le}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Lr};
    border-color: ${Br};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Ne}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Ne}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Ne}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Rr};
    border-color: ${Tr};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Be}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Be}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Be}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Ar};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;b`
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
`;var bt;(function(i){i.processing="processing",i.complete="complete"})(bt||(bt={}));let Fe=class extends N{constructor(){super(...arguments),this.mode="processing"}render(){return y`
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
    `}static get styles(){const e=b`var(--activityIndicatorCheckmarkColor, #31A481)`,t=b`var(--activityIndicatorCompletedRingColor, #31A481)`,r=b`var(--activityIndicatorLoadingRingColor, #333333)`,n=b`var(--activityIndicatorLoadingDotColor, #333333)`;return b`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${r};
      }

      #activity-dots {
        fill: ${n};
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
    `}};l([x({type:String})],Fe.prototype,"mode",void 0);Fe=l([we("ia-activity-indicator")],Fe);const Pr=qe`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
    stroke="#2c2c2c"
    stroke-width="3px"
  />
</svg>`,Hr=qe`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
    stroke="#2c2c2c"
    stroke-width="3px"
  />
</svg>`,Ir=qe`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="currentColor"
  />
</svg>`;function Vr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return y`<span title="${i}">${t}</span>`}let z=class extends N{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=1e3,this.baseHost="https://archive.org",this.showTruncatedContent=!1}render(){return this.review?y`
          <article class="review" id=${this.review.domId}>
            <div class="top-line">
              <b>${_("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${_("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">${this.bodyTemplate}</div>
            ${this.truncationButtonsTemplate}
          </article>
        `:y`
          <div class="error">
            ${_("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewtitle?this.review.reviewtitle.length<=this.maxSubjectLength||this.showTruncatedContent?this.review.reviewtitle:this.review.reviewtitle.slice(0,this.maxSubjectLength).concat("..."):""}get bodyTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewbody?this.review.reviewbody.length<=this.maxBodyLength||this.showTruncatedContent?this.review.reviewbody:this.review.reviewbody.slice(0,this.maxBodyLength).concat("..."):""}get truncationButtonsTemplate(){var e,t;return!(!((e=this.review)===null||e===void 0)&&e.reviewtitle)||!(!((t=this.review)===null||t===void 0)&&t.reviewbody)||this.review.reviewtitle.length<=this.maxSubjectLength&&this.review.reviewbody.length<=this.maxBodyLength?m:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return y`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${_("More...")}
      </button>
    `}get lessButtonTemplate(){return y`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${_("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.itemname?y`
            <a
              href="${this.baseHost}/details/${this.review.itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Vr(this.review.screenname)}
            </a>
          `:y`${this.review.screenname}`:m}get starsTemplate(){return!this.review||!this.review.stars?m:y`
      <div
        class="review-stars"
        title="${_(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>y`<div class="review-star">${Ir}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return m;const r=new Date(this.review.reviewdate),n=new Date(this.review.createdate),s=n.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),a=r.getTime()!==n.getTime()?"(edited)":"";return _(`${s} ${a}`)}static get styles(){return b`
      :host {
        font-family: var(
          --ia-font-stack,
          'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif
        );

        font-size: inherit;
      }

      .error {
        color: var(--ia-theme-error-color, #cc0000);
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

      .simple-link {
        color: var(--ia-link-color, #4b64ff);
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0px;
      }

      .simple-link:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .subject {
        margin-bottom: 0.5rem;
      }
    `}};l([x({type:Object})],z.prototype,"review",void 0);l([x({type:Number})],z.prototype,"maxSubjectLength",void 0);l([x({type:Number})],z.prototype,"maxBodyLength",void 0);l([x({type:String})],z.prototype,"baseHost",void 0);l([S()],z.prototype,"showTruncatedContent",void 0);z=l([we("ia-review")],z);let $=class extends N{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.displayMode="form",this.bypassRecaptcha=!1,this.recaptchaToken="",this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return this.displayMode==="review"?this.reviewTemplate:y`<form id="review-form" @submit=${this.handleSubmit}>
          ${this.unrecoverableError?this.unrecoverableErrorTemplate:y`
                <span class="inputs">
                  ${this.starsInputTemplate} ${this.subjectInputTemplate}
                  ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
                </span>
              `}
          ${this.recoverableErrorTemplate} ${this.actionButtonsTemplate}
        </form>`}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&!this.unrecoverableError&&this.setupRecaptcha(),(e.has("currentSubjectLength")||e.has("currentBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get reviewTemplate(){return this.oldReview?y`
      <div class="review-container">
        <ia-review .review=${this.oldReview}></ia-review>
      </div>
    `:m}get unrecoverableErrorTemplate(){return this.unrecoverableError?y`
          <div class="unrecoverable-error">
            <span class="error-msg">${_(this.unrecoverableError)}</span>
          </div>
        `:m}get recoverableErrorTemplate(){return this.recoverableError?y`
          <div class="recoverable-error">${_(this.recoverableError)}</div>
        `:m}get starsInputTemplate(){return y`
      <div class="form-heading rating">
        <label for="stars-field">${_("Rating (optional)")}</label>
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
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${_("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return y`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${_("Subject")}</label>
        ${this.maxSubjectLength?y`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:m}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?y`
            <div class="input-error">
              ${_(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:m}</div></span>
    `}get bodyInputTemplate(){var e,t;return y`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${_("Review")}</label>
          ${this.maxBodyLength?y`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:m}
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
        ${this.maxBodyLength?y`
              <div class="input-error">
                ${_(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:m}
      </span>
    `}get hiddenInputsTemplate(){return y`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      <input
        type="hidden"
        name="g-recaptcha-response"
        .value=${this.recaptchaToken}
      />
      <!-- Indicates to backend that form submission is intended -->
      <input type="hidden" name="action" value="1" />
      ${this.identifier?y`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:m}
    `}get actionButtonsTemplate(){return y`<div class="action-btns">
      <button
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${()=>this.displayMode="review"}
      >
        ${_("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?y`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:_("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,r=_(`Rate ${e>1?`${e} stars`:"1 star"}`);return y`
      <button
        class="star star-${e}"
        title=${t?_("Clear rating"):r}
        @click=${n=>this.handleStarClicked(n,e)}
      >
        ${e<=this.currentStars?Pr:Hr}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}async handleSubmit(e){if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();try{const t=new URLSearchParams;if(!this.bypassRecaptcha){const r=await this.getRecaptchaToken();if(!this.recaptchaToken)return this.handleRecaptchaError();t.append("g-recaptcha-response",r??"")}for(const r of new FormData(this.reviewForm))t.append(r[0],r[1]);await fetch(`${this.baseHost}${this.endpointPath}?identifier=${this.identifier}`,{method:"POST",body:t}),this.submissionInProgress=!1,this.displayMode="review"}catch(t){console.log(t),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Nr,b`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          --ia-theme-error-color: #cc0000;
          --ia-theme-error-color: #cc0000;
        }

        form,
        .review-container {
          border: 2px solid #979797;
          border-radius: 5px;
          background-color: #f5f5f7;
          padding: 10px 30px 10px 10px;
          margin-bottom: 20px;
        }

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
          border: 1px solid #999999;
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--ia-theme-error-color, #cc0000);
        }

        .input-box.error .char-count,
        .input-error,
        .unrecoverable-error,
        .recoverable-error {
          color: var(--ia-theme-error-color, #cc0000);
        }

        .input-error {
          display: none;
        }

        .input-box.error .input-error {
          display: block;
          text-align: right;
          padding-top: 5px;
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

        .clear-stars-btn {
          padding: 0 5px;
          color: var(--ia-link-color, #2c2c2c);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 5px;
        }

        .clear-stars-btn:hover {
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
          height: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f5f5f7;
        }

        .loading-indicator {
          display: block;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          --activityIndicatorLoadingRingColor: #fff;
          --activityIndicatorLoadingDotColor: #fff;
        }

        @media only screen and (max-width: 350px) {
          .action-btns {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `]}};l([x({type:String})],$.prototype,"identifier",void 0);l([x({type:String})],$.prototype,"token",void 0);l([x({type:String})],$.prototype,"baseHost",void 0);l([x({type:String})],$.prototype,"endpointPath",void 0);l([x({type:String})],$.prototype,"displayMode",void 0);l([x({type:Object})],$.prototype,"oldReview",void 0);l([x({type:String})],$.prototype,"unrecoverableError",void 0);l([x({type:Number})],$.prototype,"maxSubjectLength",void 0);l([x({type:Number})],$.prototype,"maxBodyLength",void 0);l([x({type:Object})],$.prototype,"recaptchaManager",void 0);l([x({type:Boolean})],$.prototype,"bypassRecaptcha",void 0);l([S()],$.prototype,"recaptchaToken",void 0);l([S()],$.prototype,"currentStars",void 0);l([S()],$.prototype,"currentSubjectLength",void 0);l([S()],$.prototype,"currentBodyLength",void 0);l([S()],$.prototype,"recoverableError",void 0);l([S()],$.prototype,"formCanSubmit",void 0);l([S()],$.prototype,"submissionInProgress",void 0);l([sr("#review-form")],$.prototype,"reviewForm",void 0);$=l([we("ia-review-form")],$);let C=class extends N{constructor(){super(...arguments),this.mockOldReview={rawValue:new J({stars:5}),stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:new Date("03/20/2025"),createdate:new Date("02/07/2025"),screenname:"Foo Bar",itemname:"foo-bar",domId:"12345"},this.longReview={rawValue:new J({stars:5}),stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:new Date("03/20/2025"),createdate:new Date("02/07/2025"),screenname:"Foo Bar",itemname:"foo-bar",domId:"12345"},this.goodRecaptchaManager=new yt({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new yt({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.recoverableError=!1,this.useCharCounts=!0,this.useReviewDisplay=!1,this.useLongReview=!1}render(){return y`${this.recaptchaManager?m:y`
            <button
              @click=${()=>this.recaptchaManager=this.goodRecaptchaManager}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${()=>this.recaptchaManager=this.badRecaptchaManager}
            >
              Turn on ReCaptcha (bad site key)
            </button>
          `}
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <button
        @click=${()=>this.unrecoverableError=!this.unrecoverableError}
      >
        ${this.unrecoverableError?"Hide":"Show"} unrecoverable error
      </button>
      <button
        @click=${()=>{this.unrecoverableError=!1,this.recoverableError=!this.recoverableError}}
      >
        ${this.recoverableError?"Hide":"Show"} recoverable error
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <button @click=${()=>this.useReviewDisplay=!this.useReviewDisplay}>
        Switch to ${this.useReviewDisplay?"form view":"review view"}
      </button>
      <button @click=${()=>this.useLongReview=!this.useLongReview}>
        Prefill ${this.useLongReview?"normal review":"too-long review"}
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.useLongReview?this.longReview:this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .unrecoverableError=${this.unrecoverableError?"Sorry, you're not cool enough to write a review for this item.":void 0}
          .recoverableError=${this.recoverableError?"Why not try submitting again? What's the worst thing that could happen?":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .displayMode=${this.useReviewDisplay?"review":"form"}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?submissionInProgress=${!0}
        ></ia-review-form>
      </div>`}};C.styles=b`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
    }
  `;l([S()],C.prototype,"recaptchaManager",void 0);l([S()],C.prototype,"bypassRecaptcha",void 0);l([S()],C.prototype,"unrecoverableError",void 0);l([S()],C.prototype,"recoverableError",void 0);l([S()],C.prototype,"useCharCounts",void 0);l([S()],C.prototype,"useReviewDisplay",void 0);l([S()],C.prototype,"useLongReview",void 0);C=l([we("app-root")],C);
