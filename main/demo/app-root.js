(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function l(i,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,r);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}function oe(i,e,t,r){function n(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function d(h){try{u(r.next(h))}catch(f){a(f)}}function o(h){try{u(r.throw(h))}catch(f){a(f)}}function u(h){h.done?s(h.value):n(h.value).then(d,o)}u((r=r.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=window,De=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Ke=new WeakMap;let yt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ke.set(t,e))}return e}toString(){return this.cssText}};const Lt=i=>new yt(typeof i=="string"?i:i+"",void 0,Fe),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new yt(t,i,Fe)},Tt=(i,e)=>{De?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),n=le.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)})},Ze=De?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Lt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const de=window,Ge=de.trustedTypes,Nt=Ge?Ge.emptyScript:"",Je=de.reactiveElementPolyfillSupport,Ne={toAttribute(i,e){switch(e){case Boolean:i=i?Nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},$t=(i,e)=>e!==i&&(e==e||i==i),be={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:$t},He="finalized";let F=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||be}static finalize(){if(this.hasOwnProperty(He))return!1;this[He]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Ze(n))}else e!==void 0&&t.push(Ze(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=be){var n;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const a=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:Ne).toAttribute(t,r.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=n.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:Ne;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||$t)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};F[He]=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Je==null||Je({ReactiveElement:F}),(($e=de.reactiveElementVersions)!==null&&$e!==void 0?$e:de.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const ue=window,W=ue.trustedTypes,Qe=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Pe="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+L,Ht=`<${bt}>`,I=document,ce=()=>I.createComment(""),ee=i=>i===null||typeof i!="object"&&typeof i!="function",vt=Array.isArray,Pt=i=>vt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ye=/>/g,H=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,_t=/^(?:script|style|textarea|title)$/i,te=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),rt=new WeakMap,V=I.createTreeWalker(I,129,null,!1);function At(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}const Vt=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",a=X;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===X?h[1]==="!--"?a=Xe:h[1]!==void 0?a=Ye:h[2]!==void 0?(_t.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=H):h[3]!==void 0&&(a=H):a===H?h[0]===">"?(a=n??X,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?H:h[3]==='"'?tt:et):a===tt||a===et?a=H:a===Xe||a===Ye?a=X:(a=H,n=void 0);const $=a===H&&i[d+1].startsWith("/>")?" ":"";s+=a===X?o+Ht:f>=0?(r.push(u),o.slice(0,f)+Pe+o.slice(f)+L+$):o+L+(f===-2?(r.push(void 0),d):$)}return[At(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let Ve=class xt{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=Vt(e,t);if(this.el=xt.createElement(u,r),V.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=V.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(Pe)||g.startsWith(L)){const $=h[a++];if(f.push(g),$!==void 0){const ye=n.getAttribute($.toLowerCase()+Pe).split(L),C=/([.?@])?(.*)/.exec($);o.push({type:1,index:s,name:C[2],strings:ye,ctor:C[1]==="."?Ot:C[1]==="?"?It:C[1]==="@"?zt:me})}else o.push({type:6,index:s})}for(const g of f)n.removeAttribute(g)}if(_t.test(n.tagName)){const f=n.textContent.split(L),g=f.length-1;if(g>0){n.textContent=W?W.emptyScript:"";for(let $=0;$<g;$++)n.append(f[$],ce()),V.nextNode(),o.push({type:2,index:++s});n.append(f[g],ce())}}}else if(n.nodeType===8)if(n.data===bt)o.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(L,f+1))!==-1;)o.push({type:7,index:s}),f+=L.length-1}s++}}static createElement(e,t){const r=I.createElement("template");return r.innerHTML=e,r}};function q(i,e,t=i,r){var n,s,a,d;if(e===te)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=ee(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=q(i,o._$AS(i,e.values),o,r)),e}let jt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:I).importNode(r,!0);V.currentNode=s;let a=V.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new St(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new Dt(a,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(a=V.nextNode(),d++)}return V.currentNode=I,s}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},St=class Mt{constructor(e,t,r,n){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),ee(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==te&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Pt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ve.createElement(At(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{const a=new jt(s,this),d=a.u(this.options);a.v(r),this.$(d),this._$AH=a}}_$AC(e){let t=rt.get(e.strings);return t===void 0&&rt.set(e.strings,t=new Ve(e)),t}T(e){vt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new Mt(this.k(ce()),this.k(ce()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},me=class{constructor(e,t,r,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let a=!1;if(s===void 0)e=q(this,e,t,0),a=!ee(e)||e!==this._$AH&&e!==te,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=q(this,d[r+o],t,o),u===te&&(u=this._$AH[o]),a||(a=!ee(u)||u!==this._$AH[o]),u===A?e=A:e!==A&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ot=class extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}};const Ut=W?W.emptyScript:"";let It=class extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},zt=class extends me{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=q(this,e,t,0))!==null&&r!==void 0?r:A)===te)return;const n=this._$AH,s=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Dt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};const nt=ue.litHtmlPolyfillSupport;nt==null||nt(Ve,St),((ve=ue.litHtmlVersions)!==null&&ve!==void 0?ve:ue.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae;const he=window,K=he.trustedTypes,it=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,je="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+T,Ft=`<${kt}>`,z=document,re=()=>z.createComment(""),ne=i=>i===null||typeof i!="object"&&typeof i!="function",Et=Array.isArray,Wt=i=>Et(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",xe=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,at=/>/g,P=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,lt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Rt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),y=Rt(1),We=Rt(2),Z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),dt=new WeakMap,j=z.createTreeWalker(z,129,null,!1);function Bt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(e):e}const qt=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",a=Y;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===Y?h[1]==="!--"?a=st:h[1]!==void 0?a=at:h[2]!==void 0?(Ct.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=P):h[3]!==void 0&&(a=P):a===P?h[0]===">"?(a=n??Y,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?P:h[3]==='"'?lt:ot):a===lt||a===ot?a=P:a===st||a===at?a=Y:(a=P,n=void 0);const $=a===P&&i[d+1].startsWith("/>")?" ":"";s+=a===Y?o+Ft:f>=0?(r.push(u),o.slice(0,f)+je+o.slice(f)+T+$):o+T+(f===-2?(r.push(void 0),d):$)}return[Bt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class ie{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=qt(e,t);if(this.el=ie.createElement(u,r),j.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=j.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(je)||g.startsWith(T)){const $=h[a++];if(f.push(g),$!==void 0){const ye=n.getAttribute($.toLowerCase()+je).split(T),C=/([.?@])?(.*)/.exec($);o.push({type:1,index:s,name:C[2],strings:ye,ctor:C[1]==="."?Zt:C[1]==="?"?Jt:C[1]==="@"?Qt:we})}else o.push({type:6,index:s})}for(const g of f)n.removeAttribute(g)}if(Ct.test(n.tagName)){const f=n.textContent.split(T),g=f.length-1;if(g>0){n.textContent=K?K.emptyScript:"";for(let $=0;$<g;$++)n.append(f[$],re()),j.nextNode(),o.push({type:2,index:++s});n.append(f[g],re())}}}else if(n.nodeType===8)if(n.data===kt)o.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(T,f+1))!==-1;)o.push({type:7,index:s}),f+=T.length-1}s++}}static createElement(e,t){const r=z.createElement("template");return r.innerHTML=e,r}}function G(i,e,t=i,r){var n,s,a,d;if(e===Z)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=ne(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=G(i,o._$AS(i,e.values),o,r)),e}class Kt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(r,!0);j.currentNode=s;let a=j.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new ae(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new Xt(a,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(a=j.nextNode(),d++)}return j.currentNode=z,s}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ae{constructor(e,t,r,n){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ne(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Wt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ie.createElement(Bt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{const a=new Kt(s,this),d=a.u(this.options);a.v(r),this.$(d),this._$AH=a}}_$AC(e){let t=dt.get(e.strings);return t===void 0&&dt.set(e.strings,t=new ie(e)),t}T(e){Et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new ae(this.k(re()),this.k(re()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class we{constructor(e,t,r,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let a=!1;if(s===void 0)e=G(this,e,t,0),a=!ne(e)||e!==this._$AH&&e!==Z,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=G(this,d[r+o],t,o),u===Z&&(u=this._$AH[o]),a||(a=!ne(u)||u!==this._$AH[o]),u===m?e=m:e!==m&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!n&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Zt extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Gt=K?K.emptyScript:"";class Jt extends we{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Gt):this.element.removeAttribute(this.name)}}class Qt extends we{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=G(this,e,t,0))!==null&&r!==void 0?r:m)===Z)return;const n=this._$AH,s=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==m&&(n===m||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Xt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ut=he.litHtmlPolyfillSupport;ut==null||ut(ie,ae),((Ae=he.litHtmlVersions)!==null&&Ae!==void 0?Ae:he.litHtmlVersions=[]).push("2.8.0");const Yt=(i,e,t)=>{var r,n;const s=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let a=s._$litPart$;if(a===void 0){const d=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=a=new ae(e.insertBefore(re(),d),d,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se,Me;class O extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}}O.finalized=!0,O._$litElement$=!0,(Se=globalThis.litElementHydrateSupport)===null||Se===void 0||Se.call(globalThis,{LitElement:O});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:O});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=i=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(i,e):((t,r)=>{const{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},tr=(i,e,t)=>{e.constructor.createProperty(t,i)};function x(i){return(e,t)=>t!==void 0?tr(i,e,t):er(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(i){return x({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=({finisher:i,descriptor:e})=>(t,r)=>{var n;if(r===void 0){const s=(n=t.originalKey)!==null&&n!==void 0?n:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(d){i(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),i==null||i(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nr(i,e){return rr({descriptor:t=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;((ke=window.HTMLSlotElement)===null||ke===void 0?void 0:ke.prototype.assignedElements)!=null;function c(i){let e,t,r;return e=i,(n,s,a)=>{if(a.value!=null)a.value=ht(a.value,e,t,r);else if(a.get!=null)a.get=ht(a.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ee=new Map;function ht(i,e,t=0,r){const n=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[n];if(Array.isArray(r))for(const o of r)Ee.has(o)?Ee.get(o).push(d):Ee.set(o,[d]);if(e||s.length>0||t>0){let o;e===!0?o=s.map(f=>f.toString()).join("!"):e?o=e.apply(this,s):o=s[0];const u=`${o}__timestamp`;let h=!1;if(t>0)if(!d.has(u))h=!0;else{let f=d.get(u);h=Date.now()-f>t}d.has(o)&&!h?a=d.get(o):(a=i.apply(this,s),d.set(o,a),t>0&&d.set(u,Date.now()))}else{const o=this;d.has(o)?a=d.get(o):(a=i.apply(this,s),d.set(o,a))}return a}}class Oe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Oe.shared=new Oe;class N{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}N.shared=new N;class pe{parseValue(e){return N.shared.parseValue(e)}}pe.shared=new pe;class se{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}se.shared=new se;class fe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((n,s)=>{const a=parseFloat(n);if(Number.isNaN(a))return t=!0,0;const o=60**(e.length-1-s);return a*Math.floor(o)}).reduce((n,s)=>n+s,0);return t?void 0:r}}fe.shared=new fe;class Ue{parseValue(e){if(typeof e=="string")return e}}Ue.shared=new Ue;class ir{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const n of this.separators)if(r=t.split(n),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),n=[];return r.forEach(s=>{s!==void 0&&n.push(s)}),n}}class Ie{parseValue(e){if(typeof e=="string")return e}}Ie.shared=new Ie;class ge{parseValue(e){return String(e)}}ge.shared=new ge;class k{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const n=this.parser.parseValue(r);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}l([c()],k.prototype,"values",null);l([c()],k.prototype,"value",null);class sr extends k{constructor(e){super(Oe.shared,e)}}class B extends k{constructor(e){super(se.shared,e)}}class Ce extends k{constructor(e){super(fe.shared,e)}}class S extends k{constructor(e){super(N.shared,e)}}class w extends k{constructor(e){super(ge.shared,e)}}class ar extends k{constructor(e){super(Ie.shared,e)}}class pt extends k{constructor(e){super(pe.shared,e)}}class or extends k{constructor(e){super(Ue.shared,e)}}class lr extends k{constructor(e,t){super(t,e)}}class dr extends lr{constructor(e){const t=new ir(ge.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new B(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new w(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new S(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new S(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new w(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new w(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new pt(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new w(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new w(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new w(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new w(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new B(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new w(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new S(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Ce(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new w(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new S(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new B(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new w(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new w(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new S(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new pt(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new w(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Ce(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new w(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new S(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new or(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new sr(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new w(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new S(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new S(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new w(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new w(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new ar(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new w(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new S(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new B(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new w(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new B(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Ce(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new w(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new w(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new B(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new B(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new B(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new dr(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new w(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new w(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new w(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new S(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new w(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new w(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new S(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new w(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new w(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new S(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new S(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([c()],p.prototype,"addeddate",null);l([c()],p.prototype,"audio_codec",null);l([c()],p.prototype,"audio_sample_rate",null);l([c()],p.prototype,"avg_rating",null);l([c()],p.prototype,"collection",null);l([c()],p.prototype,"collections_raw",null);l([c()],p.prototype,"collection_size",null);l([c()],p.prototype,"contributor",null);l([c()],p.prototype,"coverage",null);l([c()],p.prototype,"creator",null);l([c()],p.prototype,"collection_layout",null);l([c()],p.prototype,"date",null);l([c()],p.prototype,"description",null);l([c()],p.prototype,"downloads",null);l([c()],p.prototype,"duration",null);l([c()],p.prototype,"external_identifier",null);l([c()],p.prototype,"files_count",null);l([c()],p.prototype,"indexdate",null);l([c()],p.prototype,"isbn",null);l([c()],p.prototype,"issue",null);l([c()],p.prototype,"item_count",null);l([c()],p.prototype,"item_size",null);l([c()],p.prototype,"language",null);l([c()],p.prototype,"length",null);l([c()],p.prototype,"lineage",null);l([c()],p.prototype,"month",null);l([c()],p.prototype,"mediatype",null);l([c()],p.prototype,"noindex",null);l([c()],p.prototype,"notes",null);l([c()],p.prototype,"num_favorites",null);l([c()],p.prototype,"num_reviews",null);l([c()],p.prototype,"openlibrary_edition",null);l([c()],p.prototype,"openlibrary_work",null);l([c()],p.prototype,"page_progression",null);l([c()],p.prototype,"partner",null);l([c()],p.prototype,"ppi",null);l([c()],p.prototype,"publicdate",null);l([c()],p.prototype,"publisher",null);l([c()],p.prototype,"reviewdate",null);l([c()],p.prototype,"runtime",null);l([c()],p.prototype,"scanner",null);l([c()],p.prototype,"source",null);l([c()],p.prototype,"start_localtime",null);l([c()],p.prototype,"start_time",null);l([c()],p.prototype,"stop_time",null);l([c()],p.prototype,"subject",null);l([c()],p.prototype,"taper",null);l([c()],p.prototype,"title",null);l([c()],p.prototype,"transferer",null);l([c()],p.prototype,"track",null);l([c()],p.prototype,"type",null);l([c()],p.prototype,"uploader",null);l([c()],p.prototype,"utc_offset",null);l([c()],p.prototype,"venue",null);l([c()],p.prototype,"volume",null);l([c()],p.prototype,"week",null);l([c()],p.prototype,"year",null);class Q{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?pe.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?fe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?N.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?N.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?N.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([c()],Q.prototype,"size",null);l([c()],Q.prototype,"length",null);l([c()],Q.prototype,"height",null);l([c()],Q.prototype,"width",null);l([c()],Q.prototype,"track",null);class J{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?se.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?se.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?N.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([c()],J.prototype,"reviewdate",null);l([c()],J.prototype,"createdate",null);l([c()],J.prototype,"stars",null);class ur{constructor(e){var t,r;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(n=>new Q(n)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new p(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(r=e.reviews)===null||r===void 0?void 0:r.map(n=>new J(n))}}var U;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(U||(U={}));class ze extends Error{constructor(e,t,r){super(t),this.name=e,this.type=e,this.details=r}}class cr{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const n=new URL(window.location.href).searchParams.get("scope");n&&(this.requestScope=n)}}async fetchMetadata(e,t){const r=t?`/${t}`:"",n=`https://${this.baseUrl}/metadata/${e}${r}`;return this.fetchUrl(n,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope);let s;try{const a=(r=t==null?void 0:t.requestOptions)!==null&&r!==void 0?r:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(n.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(U.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const o=a.forensics;return this.getErrorResult(U.searchEngineError,d,o)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(U.decodingError,d)}}getErrorResult(e,t,r){return{error:new ze(e,t,r)}}}class ft{constructor(e){this.backend=e}async fetchMetadata(e){var t;const r=await this.backend.fetchMetadata(e);return r.error?r:((t=r.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new ze(U.itemNotFound)}:{success:new ur(r.success)}}async fetchMetadataValue(e,t){var r;const n=await this.backend.fetchMetadata(e,t);return n.error?n:((r=n.success)===null||r===void 0?void 0:r.result)===void 0?{error:new ze(U.itemNotFound)}:{success:n.success.result}}}ft.default=new ft(new cr);let hr=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function pr(i){return new Promise(e=>setTimeout(e,i))}var E;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(E||(E={}));const gt="lazyLoaderService";class fr{constructor(e){var t,r,n;this.emitter=hr(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(r=e==null?void 0:e.retryCount)!==null&&r!==void 0?r:2,this.retryInterval=(n=e==null?void 0:e.retryInterval)!==null&&n!==void 0?n:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return oe(this,void 0,void 0,function*(){let t,r;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(r=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,r])})}loadScript(e){return oe(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return oe(this,void 0,void 0,function*(){const r=(t=e.retryNumber)!==null&&t!==void 0?t:0,n=`script[src='${e.src}'][async][${E.owner}='${gt}'][${E.retryNumber}='${r}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:r})),this.container.appendChild(s)),new Promise((a,d)=>{if(s.getAttribute(E.dynamicImportLoaded)){a();return}const o=e.scriptBeingRetried,u=s.onload||(o==null?void 0:o.onload);s.onload=f=>{u==null||u(f),s.setAttribute(E.dynamicImportLoaded,"true"),a()};const h=s.onerror||(o==null?void 0:o.onerror);s.onerror=f=>oe(this,void 0,void 0,function*(){const g=s.getAttribute(E.hasBeenRetried);if(r<this.retryCount&&!g){s.setAttribute(E.hasBeenRetried,"true"),yield pr(this.retryInterval*1e3);const $=r+1;this.emitter.emit("scriptLoadRetried",e.src,$),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:$,scriptBeingRetried:s}))}else g||this.emitter.emit("scriptLoadFailed",e.src,f),h==null||h(f),d(f)})})})}getScriptTag(e){var t;const r=e.src.replace("'",'"'),n=document.createElement("script"),s=e.retryNumber;n.setAttribute(E.owner,gt),n.setAttribute("src",r),n.setAttribute(E.retryNumber,s.toString()),n.async=!0;const a=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(a).forEach(d=>{n.setAttribute(d,a[d])}),e.bundleType){case"module":n.setAttribute("type",e.bundleType);break;case"nomodule":n.setAttribute(e.bundleType,"");break}return n}}class gr{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const r=this.createContainer();this.setup(r,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,r)=>{this.executionSuccessBlock=n=>{this.finishExecution(),t(n)},this.executionExpiredBlock=()=>{this.finishExecution(),r(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),r(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var r;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(r=t==null?void 0:t.size)!==null&&r!==void 0?r:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let r=document.getElementById(t);return r||(r=document.createElement("div"),r.id=t,r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.zIndex=e?`${e}`:"10",document.body.appendChild(r)),r}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class mt{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new fr,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const r=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!r)throw new Error("The reCaptcha widget requires a site key");const n=this.recaptchaCache[r];if(n)return n;const s=await this.getRecaptchaLibrary(),a=new gr({siteKey:r,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[r]=a,a}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=i=>typeof i!="string"&&"strTag"in i,wr=(i,e,t)=>{let r=i[0];for(let n=1;n<i.length;n++)r+=e[n-1],r+=i[n];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=i=>mr(i)?wr(i.strings,i.values):i;let _=yr;/**
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
 */let br=new $r;br.resolve();const wt=b`var(--white, #fff)`,vr=b`var(--ia-theme-link-color, #4b64ff)`,_r=b`var(--primaryDisableCTAFill, #767676)`,Ar=b`var(--secondaryCTABorder, #999)`,xr=b`var(--primaryCTAFill, #194880)`,Re=b`var(--primaryCTAFillRGB, 25, 72, 128)`,Sr=b`var(--primaryCTABorder, #c5d1df)`,Mr=b`var(--primaryErrorCTAFill, #d9534f)`,Be=b`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,kr=b`var(--primaryErrorCTABorder, #d43f3a)`,Er=b`var(--secondaryCTAFill, #333)`,Le=b`var(--secondaryCTAFillRGB, 51, 51, 51)`,Cr=b`var(--primaryCTABorder, #979797)`,Rr=b`var(---primaryWarningFill, #ee8950)`,Te=b`var(--primaryWarningFillRGB, 238, 137, 80)`,Br=b`var(--primaryWarningBorder, #ec7939)`,Lr=b`
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
    background-color: ${_r};
    border: 1px solid ${Ar};
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
    background-color: ${xr};
    border-color: ${Sr};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Re}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Re}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Re}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Mr};
    border-color: ${kr};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Be}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Be}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Be}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Rr};
    border-color: ${Br};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Te}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Te}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Te}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Er};
    border-color: ${Cr};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Le}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Le}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Le}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${vr};
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
`;const Tr=We`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,Nr=We`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,Hr=We`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="currentColor"
  />
</svg>`;let D=class extends O{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=1e3,this.baseHost="https://archive.org",this.showTruncatedContent=!1}render(){return this.review?y`<article class="review" id=${this.review.domId}>
          <div class="top-line">
            <b>${_("Reviewer:")} </b>${this.reviewerTemplate} -
            ${this.starsTemplate}${this.createDateTemplate}
          </div>
          <div class="subject">
            <b>${_("Subject: ")}</b>${this.subjectTemplate}
          </div>
          <div class="body">${this.bodyTemplate}</div>
          ${this.truncationButtonsTemplate}
        </article>`:y`<div class="error">
          ${_("This review cannot be displayed at this time.")}
        </div>`}get subjectTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewtitle?this.review.reviewtitle.length<=this.maxSubjectLength||this.showTruncatedContent?this.review.reviewtitle:this.review.reviewtitle.slice(0,this.maxSubjectLength).concat("..."):""}get bodyTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewbody?this.review.reviewbody.length<=this.maxBodyLength||this.showTruncatedContent?this.review.reviewbody:this.review.reviewbody.slice(0,this.maxBodyLength).concat("..."):""}get truncationButtonsTemplate(){var e,t;return!(!((e=this.review)===null||e===void 0)&&e.reviewtitle)||!(!((t=this.review)===null||t===void 0)&&t.reviewbody)||this.review.reviewtitle.length<=this.maxSubjectLength&&this.review.reviewbody.length<=this.maxBodyLength?m:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return y`<button
      class="simple-link more-btn"
      @click=${()=>this.showTruncatedContent=!0}
    >
      ${_("More...")}
    </button>`}get lessButtonTemplate(){return y`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${_("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.itemname?y`<a
            href="${this.baseHost}/details/${this.review.itemname}"
            class="reviewer-link simple-link"
            data-event-click-tracking="ItemReviews|ReviewerLink"
            >${this.review.screenname}</a
          >`:y`${this.review.screenname}`:m}get starsTemplate(){return!this.review||!this.review.stars?m:y`<div
        class="review-stars"
        title="${_(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(this.review.stars).fill(null).map(()=>y`<div class="review-star">${Hr}</div>`)}
      </div>
      - `}get createDateTemplate(){var e,t,r;if(!this.review)return m;const n=(e=this.review.createdate)===null||e===void 0?void 0:e.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),s=((t=this.review.reviewdate)===null||t===void 0?void 0:t.getTime())!==((r=this.review.createdate)===null||r===void 0?void 0:r.getTime())?"(edited)":"";return _(`${n} ${s}`)}static get styles(){return b`
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
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-bottom: 0.5rem;
      }

      .review-star {
        width: 1rem;
      }

      .review-stars {
        display: flex;
        flex-direction: row;
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
    `}};l([x({type:Object})],D.prototype,"review",void 0);l([x({type:Number})],D.prototype,"maxSubjectLength",void 0);l([x({type:Number})],D.prototype,"maxBodyLength",void 0);l([x({type:String})],D.prototype,"baseHost",void 0);l([M()],D.prototype,"showTruncatedContent",void 0);D=l([qe("ia-review")],D);let v=class extends O{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.displayMode="form",this.prefilledErrors=[],this.bypassRecaptcha=!1,this.recaptchaToken="",this.recaptchaError=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1}render(){return this.displayMode==="review"?y`<ia-review .review=${this.oldReview}></ia-review>`:y`<form
      id="review-form"
      action="${this.baseHost}${this.endpointPath}"
      method="post"
    >
      ${this.prefilledErrors.length?this.prefilledErrors.map(e=>y`<div class="errors prefilled-error">${e}</div>`):m}
      ${this.recaptchaError?y`<div class="errors recaptcha-error">
            ${_("Could not validate review. Please try again later.")}
          </div>`:m}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
      ${this.actionButtonsTemplate}
    </form>`}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),(e.has("currentSubjectLength")||e.has("currentBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get starsInputTemplate(){return y`
      <div class="form-heading">
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
    `}get subjectInputTemplate(){var e,t;return y`<span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
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
          `:m}</div></span>`}get bodyInputTemplate(){var e,t;return y`<span
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
    </span>`}get hiddenInputsTemplate(){return y`<input
        type="hidden"
        name="field_reviewtoken"
        .value=${this.token}
      />
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
          />`:m}`}get actionButtonsTemplate(){return y`<div class="action-btns">
      ${this.identifier?y`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${_("Cancel")}
          </a>`:m}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit}
        @click=${this.handleSubmit}
      >
        ${_("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,r=_(`Rate ${e>1?`${e} stars`:"1 star"}`);return y`
      <button
        class="star star-${e}"
        title=${t?_("Clear rating"):r}
        @click=${n=>this.handleStarClicked(n,e)}
      >
        ${e<=this.currentStars?Tr:Nr}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget()),this.recaptchaError=!1}catch{this.recaptchaError=!0}}async handleSubmit(e){if(e.preventDefault(),!!this.reviewForm.reportValidity()){if(this.bypassRecaptcha){this.reviewForm.requestSubmit();return}if(!this.recaptchaWidget){this.recaptchaError=!0;return}try{const t=await this.recaptchaWidget.execute();this.dispatchEvent(new Event("recaptchaFinished")),this.recaptchaToken=t,await this.updateComplete,this.reviewForm.requestSubmit()}catch{this.recaptchaError=!0}}}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Lr,b`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          --ia-theme-error-color: #ff0000;
        }

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 15px;
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
        input[type='text'] {
          padding: 5px;
          width: calc(100% - 10px);
          font-family: inherit;
          border-radius: 5px;
          border: 1px solid #999999;
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--ia-theme-error-color, #ff0000);
        }

        .input-box.error .char-count,
        .input-error {
          color: var(--ia-theme-error-color, #ff0000);
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
          color: var(--ia-link-color, #4b64ff);
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

        .errors {
          padding: 15px;
          border: 1px solid #ebccd1;
          color: #a94442;
          background-color: #f2dede;
          border-radius: 4px;
          margin-bottom: 10px;
        }
      `]}};l([x({type:String})],v.prototype,"identifier",void 0);l([x({type:String})],v.prototype,"token",void 0);l([x({type:String})],v.prototype,"baseHost",void 0);l([x({type:String})],v.prototype,"endpointPath",void 0);l([x({type:String})],v.prototype,"displayMode",void 0);l([x({type:Object})],v.prototype,"oldReview",void 0);l([x({type:Array})],v.prototype,"prefilledErrors",void 0);l([x({type:Number})],v.prototype,"maxSubjectLength",void 0);l([x({type:Number})],v.prototype,"maxBodyLength",void 0);l([x({type:Object})],v.prototype,"recaptchaManager",void 0);l([x({type:Boolean})],v.prototype,"bypassRecaptcha",void 0);l([M()],v.prototype,"recaptchaToken",void 0);l([M()],v.prototype,"recaptchaError",void 0);l([M()],v.prototype,"currentStars",void 0);l([M()],v.prototype,"currentSubjectLength",void 0);l([M()],v.prototype,"currentBodyLength",void 0);l([M()],v.prototype,"formCanSubmit",void 0);l([nr("#review-form")],v.prototype,"reviewForm",void 0);v=l([qe("ia-review-form")],v);let R=class extends O{constructor(){super(...arguments),this.mockOldReview={rawValue:new J({stars:5}),stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:new Date("03/20/2025"),createdate:new Date("02/07/2025"),screenname:"Foo Bar",itemname:"foo-bar",domId:"12345"},this.longReview={rawValue:new J({stars:5}),stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:new Date("03/20/2025"),createdate:new Date("02/07/2025"),screenname:"Foo Bar",itemname:"foo-bar",domId:"12345"},this.goodRecaptchaManager=new mt({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new mt({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.errors=["Sorry, we couldn't submit your review.","Write a better one."],this.bypassRecaptcha=!1,this.showErrors=!1,this.useCharCounts=!0,this.useReviewDisplay=!1,this.useLongReview=!1}render(){return y`${this.recaptchaManager?m:y`<button
              @click=${()=>this.recaptchaManager=this.goodRecaptchaManager}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${()=>this.recaptchaManager=this.badRecaptchaManager}
            >
              Turn on ReCaptcha (bad site key)
            </button> `}
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <button @click=${()=>this.showErrors=!this.showErrors}>
        ${this.showErrors?"Hide":"Show"} pre-filled errors
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
          .prefilledErrors=${this.showErrors?this.errors:[]}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .displayMode=${this.useReviewDisplay?"review":"form"}
          ?bypassRecaptcha=${this.bypassRecaptcha}
        ></ia-review-form>
      </div>`}};R.styles=b`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
    }
  `;l([M()],R.prototype,"recaptchaManager",void 0);l([M()],R.prototype,"bypassRecaptcha",void 0);l([M()],R.prototype,"showErrors",void 0);l([M()],R.prototype,"useCharCounts",void 0);l([M()],R.prototype,"useReviewDisplay",void 0);l([M()],R.prototype,"useLongReview",void 0);R=l([qe("app-root")],R);
