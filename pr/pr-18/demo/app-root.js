(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function o(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function ie(i,e,t,n){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function d(h){try{u(n.next(h))}catch(f){a(f)}}function l(h){try{u(n.throw(h))}catch(f){a(f)}}function u(h){h.done?s(h.value):r(h.value).then(d,l)}u((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=window,ze=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),Fe=new WeakMap;let ht=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fe.set(t,e))}return e}toString(){return this.cssText}};const Ct=i=>new ht(typeof i=="string"?i:i+"",void 0,Ie),_=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new ht(t,i,Ie)},Nt=(i,e)=>{ze?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=se.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},De=ze?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ct(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me;const ae=window,je=ae.trustedTypes,Rt=je?je.emptyScript:"",qe=ae.reactiveElementPolyfillSupport,Ne={toAttribute(i,e){switch(e){case Boolean:i=i?Rt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},pt=(i,e)=>e!==i&&(e==e||i==i),ye={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:pt},Re="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ye}static finalize(){if(this.hasOwnProperty(Re))return!1;this[Re]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(De(r))}else e!==void 0&&t.push(De(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Nt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ye){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Ne).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ne;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||pt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};z[Re]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},qe==null||qe({ReactiveElement:z}),((me=ae.reactiveElementVersions)!==null&&me!==void 0?me:ae.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const le=window,F=le.trustedTypes,We=F?F.createPolicy("lit-html",{createHTML:i=>i}):void 0,Te="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,ft="?"+N,Tt=`<${ft}>`,O=document,oe=()=>O.createComment(""),J=i=>i===null||typeof i!="object"&&typeof i!="function",gt=Array.isArray,Bt=i=>gt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ze=/>/g,B=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,Je=/"/g,mt=/^(?:script|style|textarea|title)$/i,Q=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Qe=new WeakMap,P=O.createTreeWalker(O,129,null,!1);function yt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const Ht=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=Z;for(let d=0;d<t;d++){const l=i[d];let u,h,f=-1,g=0;for(;g<l.length&&(a.lastIndex=g,h=a.exec(l),h!==null);)g=a.lastIndex,a===Z?h[1]==="!--"?a=Ke:h[1]!==void 0?a=Ze:h[2]!==void 0?(mt.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=B):h[3]!==void 0&&(a=B):a===B?h[0]===">"?(a=r??Z,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?B:h[3]==='"'?Je:Ge):a===Je||a===Ge?a=B:a===Ke||a===Ze?a=Z:(a=B,r=void 0);const y=a===B&&i[d+1].startsWith("/>")?" ":"";s+=a===Z?l+Tt:f>=0?(n.push(u),l.slice(0,f)+Te+l.slice(f)+N+y):l+N+(f===-2?(n.push(void 0),d):y)}return[yt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Be=class wt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const d=e.length-1,l=this.parts,[u,h]=Ht(e,t);if(this.el=wt.createElement(u,n),P.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=P.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(Te)||g.startsWith(N)){const y=h[a++];if(f.push(g),y!==void 0){const ge=r.getAttribute(y.toLowerCase()+Te).split(N),x=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:x[2],strings:ge,ctor:x[1]==="."?Vt:x[1]==="?"?Ot:x[1]==="@"?Ut:pe})}else l.push({type:6,index:s})}for(const g of f)r.removeAttribute(g)}if(mt.test(r.tagName)){const f=r.textContent.split(N),g=f.length-1;if(g>0){r.textContent=F?F.emptyScript:"";for(let y=0;y<g;y++)r.append(f[y],oe()),P.nextNode(),l.push({type:2,index:++s});r.append(f[g],oe())}}}else if(r.nodeType===8)if(r.data===ft)l.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(N,f+1))!==-1;)l.push({type:7,index:s}),f+=N.length-1}s++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}};function D(i,e,t=i,n){var r,s,a,d;if(e===Q)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const u=J(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(i),l._$AT(i,t,n)),n!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=D(i,l._$AS(i,e.values),l,n)),e}let Pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:O).importNode(n,!0);P.currentNode=s;let a=P.nextNode(),d=0,l=0,u=r[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new $t(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new zt(a,this,e)),this._$AV.push(h),u=r[++l]}d!==(u==null?void 0:u.index)&&(a=P.nextNode(),d++)}return P.currentNode=O,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},$t=class _t{constructor(e,t,n,r){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),J(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&J(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Be.createElement(yt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new Pt(s,this),d=a.u(this.options);a.v(n),this.$(d),this._$AH=a}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new Be(e)),t}T(e){gt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new _t(this.k(oe()),this.k(oe()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},pe=class{constructor(e,t,n,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=D(this,e,t,0),a=!J(e)||e!==this._$AH&&e!==Q,a&&(this._$AH=e);else{const d=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=D(this,d[n+l],t,l),u===Q&&(u=this._$AH[l]),a||(a=!J(u)||u!==this._$AH[l]),u===$?e=$:e!==$&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vt=class extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}};const Lt=F?F.emptyScript:"";let Ot=class extends pe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}},Ut=class extends pe{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=D(this,e,t,0))!==null&&n!==void 0?n:$)===Q)return;const r=this._$AH,s=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==$&&(r===$||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},zt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}};const Ye=le.litHtmlPolyfillSupport;Ye==null||Ye(Be,$t),((we=le.litHtmlVersions)!==null&&we!==void 0?we:le.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const de=window,j=de.trustedTypes,Xe=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,He="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+R,It=`<${bt}>`,U=document,Y=()=>U.createComment(""),X=i=>i===null||typeof i!="object"&&typeof i!="function",vt=Array.isArray,Ft=i=>vt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",be=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,H=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,rt=/"/g,At=/^(?:script|style|textarea|title)$/i,Mt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=Mt(1),St=Mt(2),q=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),it=new WeakMap,V=U.createTreeWalker(U,129,null,!1);function xt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const Dt=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=G;for(let d=0;d<t;d++){const l=i[d];let u,h,f=-1,g=0;for(;g<l.length&&(a.lastIndex=g,h=a.exec(l),h!==null);)g=a.lastIndex,a===G?h[1]==="!--"?a=et:h[1]!==void 0?a=tt:h[2]!==void 0?(At.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=H):h[3]!==void 0&&(a=H):a===H?h[0]===">"?(a=r??G,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?H:h[3]==='"'?rt:nt):a===rt||a===nt?a=H:a===et||a===tt?a=G:(a=H,r=void 0);const y=a===H&&i[d+1].startsWith("/>")?" ":"";s+=a===G?l+It:f>=0?(n.push(u),l.slice(0,f)+He+l.slice(f)+R+y):l+R+(f===-2?(n.push(void 0),d):y)}return[xt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ee{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const d=e.length-1,l=this.parts,[u,h]=Dt(e,t);if(this.el=ee.createElement(u,n),V.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=V.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(He)||g.startsWith(R)){const y=h[a++];if(f.push(g),y!==void 0){const ge=r.getAttribute(y.toLowerCase()+He).split(R),x=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:x[2],strings:ge,ctor:x[1]==="."?qt:x[1]==="?"?Kt:x[1]==="@"?Zt:fe})}else l.push({type:6,index:s})}for(const g of f)r.removeAttribute(g)}if(At.test(r.tagName)){const f=r.textContent.split(R),g=f.length-1;if(g>0){r.textContent=j?j.emptyScript:"";for(let y=0;y<g;y++)r.append(f[y],Y()),V.nextNode(),l.push({type:2,index:++s});r.append(f[g],Y())}}}else if(r.nodeType===8)if(r.data===bt)l.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(R,f+1))!==-1;)l.push({type:7,index:s}),f+=R.length-1}s++}}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}}function W(i,e,t=i,n){var r,s,a,d;if(e===q)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const u=X(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(i),l._$AT(i,t,n)),n!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=W(i,l._$AS(i,e.values),l,n)),e}class jt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(n,!0);V.currentNode=s;let a=V.nextNode(),d=0,l=0,u=r[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new ne(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new Gt(a,this,e)),this._$AV.push(h),u=r[++l]}d!==(u==null?void 0:u.index)&&(a=V.nextNode(),d++)}return V.currentNode=U,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ne{constructor(e,t,n,r){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),X(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ft(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ee.createElement(xt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new jt(s,this),d=a.u(this.options);a.v(n),this.$(d),this._$AH=a}}_$AC(e){let t=it.get(e.strings);return t===void 0&&it.set(e.strings,t=new ee(e)),t}T(e){vt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ne(this.k(Y()),this.k(Y()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class fe{constructor(e,t,n,r,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=W(this,e,t,0),a=!X(e)||e!==this._$AH&&e!==q,a&&(this._$AH=e);else{const d=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=W(this,d[n+l],t,l),u===q&&(u=this._$AH[l]),a||(a=!X(u)||u!==this._$AH[l]),u===w?e=w:e!==w&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qt extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const Wt=j?j.emptyScript:"";class Kt extends fe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,Wt):this.element.removeAttribute(this.name)}}class Zt extends fe{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=W(this,e,t,0))!==null&&n!==void 0?n:w)===q)return;const r=this._$AH,s=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==w&&(r===w||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Gt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const st=de.litHtmlPolyfillSupport;st==null||st(ee,ne),((_e=de.litHtmlVersions)!==null&&_e!==void 0?_e:de.litHtmlVersions=[]).push("2.8.0");const Jt=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new ne(e.insertBefore(Y(),d),d,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve,Ae;class I extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return q}}I.finalized=!0,I._$litElement$=!0,(ve=globalThis.litElementHydrateSupport)===null||ve===void 0||ve.call(globalThis,{LitElement:I});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:I});((Ae=globalThis.litElementVersions)!==null&&Ae!==void 0?Ae:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Yt=(i,e,t)=>{e.constructor.createProperty(t,i)};function E(i){return(e,t)=>t!==void 0?Yt(i,e,t):Qt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kt(i){return E({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(d){i(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function en(i,e){return Xt({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;((Me=window.HTMLSlotElement)===null||Me===void 0?void 0:Me.prototype.assignedElements)!=null;function c(i){let e,t,n;return e=i,(r,s,a)=>{if(a.value!=null)a.value=lt(a.value,e,t,n);else if(a.get!=null)a.get=lt(a.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Se=new Map;function lt(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(n))for(const l of n)Se.has(l)?Se.get(l).push(d):Se.set(l,[d]);if(e||s.length>0||t>0){let l;e===!0?l=s.map(f=>f.toString()).join("!"):e?l=e.apply(this,s):l=s[0];const u=`${l}__timestamp`;let h=!1;if(t>0)if(!d.has(u))h=!0;else{let f=d.get(u);h=Date.now()-f>t}d.has(l)&&!h?a=d.get(l):(a=i.apply(this,s),d.set(l,a),t>0&&d.set(u,Date.now()))}else{const l=this;d.has(l)?a=d.get(l):(a=i.apply(this,s),d.set(l,a))}return a}}class Pe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Pe.shared=new Pe;class T{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}T.shared=new T;class ue{parseValue(e){return T.shared.parseValue(e)}}ue.shared=new ue;class te{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}te.shared=new te;class ce{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,s)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const l=60**(e.length-1-s);return a*Math.floor(l)}).reduce((r,s)=>r+s,0);return t?void 0:n}}ce.shared=new ce;class Ve{parseValue(e){if(typeof e=="string")return e}}Ve.shared=new Ve;class tn{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return n.forEach(s=>{s!==void 0&&r.push(s)}),r}}class Le{parseValue(e){if(typeof e=="string")return e}}Le.shared=new Le;class he{parseValue(e){return String(e)}}he.shared=new he;class M{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}o([c()],M.prototype,"values",null);o([c()],M.prototype,"value",null);class nn extends M{constructor(e){super(Pe.shared,e)}}class k extends M{constructor(e){super(te.shared,e)}}class xe extends M{constructor(e){super(ce.shared,e)}}class b extends M{constructor(e){super(T.shared,e)}}class m extends M{constructor(e){super(he.shared,e)}}class rn extends M{constructor(e){super(Le.shared,e)}}class ot extends M{constructor(e){super(ue.shared,e)}}class sn extends M{constructor(e){super(Ve.shared,e)}}class an extends M{constructor(e,t){super(t,e)}}class ln extends an{constructor(e){const t=new tn(he.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new k(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new m(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new b(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new b(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new m(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new m(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ot(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new m(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new m(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new m(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new m(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new k(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new m(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new b(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new xe(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new m(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new b(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new k(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new m(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new m(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new b(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ot(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new m(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new xe(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new m(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new b(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new sn(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new nn(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new m(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new b(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new b(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new m(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new m(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new rn(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new m(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new b(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new k(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new m(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new k(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new xe(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new m(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new m(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new k(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new k(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new k(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new ln(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new m(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new m(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new m(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new b(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new m(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new m(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new b(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new m(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new m(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new b(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new b(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([c()],p.prototype,"addeddate",null);o([c()],p.prototype,"audio_codec",null);o([c()],p.prototype,"audio_sample_rate",null);o([c()],p.prototype,"avg_rating",null);o([c()],p.prototype,"collection",null);o([c()],p.prototype,"collections_raw",null);o([c()],p.prototype,"collection_size",null);o([c()],p.prototype,"contributor",null);o([c()],p.prototype,"coverage",null);o([c()],p.prototype,"creator",null);o([c()],p.prototype,"collection_layout",null);o([c()],p.prototype,"date",null);o([c()],p.prototype,"description",null);o([c()],p.prototype,"downloads",null);o([c()],p.prototype,"duration",null);o([c()],p.prototype,"external_identifier",null);o([c()],p.prototype,"files_count",null);o([c()],p.prototype,"indexdate",null);o([c()],p.prototype,"isbn",null);o([c()],p.prototype,"issue",null);o([c()],p.prototype,"item_count",null);o([c()],p.prototype,"item_size",null);o([c()],p.prototype,"language",null);o([c()],p.prototype,"length",null);o([c()],p.prototype,"lineage",null);o([c()],p.prototype,"month",null);o([c()],p.prototype,"mediatype",null);o([c()],p.prototype,"noindex",null);o([c()],p.prototype,"notes",null);o([c()],p.prototype,"num_favorites",null);o([c()],p.prototype,"num_reviews",null);o([c()],p.prototype,"openlibrary_edition",null);o([c()],p.prototype,"openlibrary_work",null);o([c()],p.prototype,"page_progression",null);o([c()],p.prototype,"partner",null);o([c()],p.prototype,"ppi",null);o([c()],p.prototype,"publicdate",null);o([c()],p.prototype,"publisher",null);o([c()],p.prototype,"reviewdate",null);o([c()],p.prototype,"runtime",null);o([c()],p.prototype,"scanner",null);o([c()],p.prototype,"source",null);o([c()],p.prototype,"start_localtime",null);o([c()],p.prototype,"start_time",null);o([c()],p.prototype,"stop_time",null);o([c()],p.prototype,"subject",null);o([c()],p.prototype,"taper",null);o([c()],p.prototype,"title",null);o([c()],p.prototype,"transferer",null);o([c()],p.prototype,"track",null);o([c()],p.prototype,"type",null);o([c()],p.prototype,"uploader",null);o([c()],p.prototype,"utc_offset",null);o([c()],p.prototype,"venue",null);o([c()],p.prototype,"volume",null);o([c()],p.prototype,"week",null);o([c()],p.prototype,"year",null);class K{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?ue.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?ce.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?T.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?T.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?T.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}o([c()],K.prototype,"size",null);o([c()],K.prototype,"length",null);o([c()],K.prototype,"height",null);o([c()],K.prototype,"width",null);o([c()],K.prototype,"track",null);class re{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?te.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?te.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?T.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}o([c()],re.prototype,"reviewdate",null);o([c()],re.prototype,"createdate",null);o([c()],re.prototype,"stars",null);class on{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new K(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new p(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new re(r))}}var L;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(L||(L={}));class Oe extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class dn{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const a=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(L.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const l=a.forensics;return this.getErrorResult(L.searchEngineError,d,l)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(L.decodingError,d)}}getErrorResult(e,t,n){return{error:new Oe(e,t,n)}}}class dt{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Oe(L.itemNotFound)}:{success:new on(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new Oe(L.itemNotFound)}:{success:r.success.result}}}dt.default=new dt(new dn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un=i=>typeof i!="string"&&"strTag"in i,cn=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hn=i=>un(i)?cn(i.strings,i.values):i;let C=hn;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fn=new pn;fn.resolve();const gn=St`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,mn=St`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,ut=_`var(--white, #fff)`,yn=_`var(--primaryDisableCTAFill, #767676)`,wn=_`var(--secondaryCTABorder, #999)`,$n=_`var(--primaryCTAFill, #194880)`,Ee=_`var(--primaryCTAFillRGB, 25, 72, 128)`,_n=_`var(--primaryCTABorder, #c5d1df)`,bn=_`var(--primaryErrorCTAFill, #d9534f)`,ke=_`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,vn=_`var(--primaryErrorCTABorder, #d43f3a)`,An=_`var(--secondaryCTAFill, #333)`,Ce=_`var(--secondaryCTAFillRGB, 51, 51, 51)`,Mn=_`var(--primaryCTABorder, #979797)`,Sn=_`#ee8950`,xn=_`#ec7939`,En=_`
  .ia-button {
    height: 3.5rem;
    min-height: 3rem;
    cursor: pointer;
    color: ${ut};
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
    padding: 0 1rem;
    outline-color: ${ut};
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
    pointer-events: none;
    background-color: ${yn};
    border: 1px solid ${wn};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Sn}
    border-color: ${xn};
  }

  .ia-button.primary {
    background-color: ${$n};
    border-color: ${_n};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Ee}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Ee}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Ee}, 0.7);
  }

  .ia-button.danger {
    background-color: ${bn};
    border-color: ${vn};
  }
  .ia-button.danger:hover {
    background-color: rgba(${ke}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${ke}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${ke}, 0.7);
  }

  .ia-button.dark {
    background-color: ${An};
    border-color: ${Mn};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Ce}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Ce}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Ce}, 0.7);
  }
`;let v=class extends I{constructor(){super(...arguments),this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.errors=[],this.recaptchaToken="",this.currentStars=0}render(){return A`<form
      id="review-form"
      action="${this.baseHost}${this.endpointPath}"
      method="post"
    >
      ${this.errors.length?A`<div class="errors">${this.errors.join(" ")}</div>`:w}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
      ${this.actionButtonsTemplate}
    </form>`}async updated(e){var t,n;e.has("oldReview")&&(!((t=this.oldReview)===null||t===void 0)&&t.stars)&&(this.currentStars=this.oldReview.stars),e.has("recaptchaManager")&&this.recaptchaManager&&(this.recaptchaWidget=await((n=this.recaptchaManager)===null||n===void 0?void 0:n.getRecaptchaWidget()))}get starsInputTemplate(){return A`
      <div class="form-heading">
        <label for="stars-field">${C("Rating (optional)")}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(e=>this.renderStar(e))}
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${C("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return A`<div class="form-heading">
        <label for="subject-input">${C("Subject")}</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        required
      />`}get bodyInputTemplate(){var e,t;return A`<div class="form-heading">
        <label for="body-input">${C("Review")}</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get hiddenInputsTemplate(){return A`<input
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
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:w}`}get actionButtonsTemplate(){return A`<div class="action-btns">
      ${this.identifier?A`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${C("Cancel")}
          </a>`:w}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        value="Submit review"
        @click=${this.handleSubmit}
      >
        ${C("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=C(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?C("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?gn:mn}
      </button>
    `}async handleSubmit(e){var t;if(e.preventDefault(),!!this.reviewForm.reportValidity())try{const n=await((t=this.recaptchaWidget)===null||t===void 0?void 0:t.execute());this.recaptchaToken=n??"",await this.updateComplete,this.reviewForm.requestSubmit()}catch{this.errors.push("Sorry, we are unable to post your review at this time.")}}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}static get styles(){return[En,_`
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

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 1.5rem;
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'] {
          padding: 0.5rem;
          width: calc(100% - 1rem);
          font-family: inherit;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 0.2rem;
          align-items: center;
        }

        .star {
          all: unset;
          width: 3rem;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn {
          padding: 0 0.5rem;
          color: var(--ia-link-color, #4b64ff);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 0.5rem;
        }

        .clear-stars-btn:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
        }
      `]}};o([E({type:String})],v.prototype,"identifier",void 0);o([E({type:String})],v.prototype,"token",void 0);o([E({type:String})],v.prototype,"baseHost",void 0);o([E({type:String})],v.prototype,"endpointPath",void 0);o([E({type:Object})],v.prototype,"oldReview",void 0);o([E({type:Array})],v.prototype,"errors",void 0);o([E({type:Object})],v.prototype,"recaptchaManager",void 0);o([E({type:Object})],v.prototype,"recaptchaWidget",void 0);o([kt()],v.prototype,"recaptchaToken",void 0);o([kt()],v.prototype,"currentStars",void 0);o([en("#review-form")],v.prototype,"reviewForm",void 0);v=o([Et("ia-review-form")],v);let kn=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Cn(i){return new Promise(e=>setTimeout(e,i))}var S;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(S||(S={}));const ct="lazyLoaderService";class Nn{constructor(e){var t,n,r;this.emitter=kn(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return ie(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return ie(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return ie(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${S.owner}='${ct}'][${S.retryNumber}='${n}']`;let s=this.container.querySelector(r);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(s)),new Promise((a,d)=>{if(s.getAttribute(S.dynamicImportLoaded)){a();return}const l=e.scriptBeingRetried,u=s.onload||(l==null?void 0:l.onload);s.onload=f=>{u==null||u(f),s.setAttribute(S.dynamicImportLoaded,"true"),a()};const h=s.onerror||(l==null?void 0:l.onerror);s.onerror=f=>ie(this,void 0,void 0,function*(){const g=s.getAttribute(S.hasBeenRetried);if(n<this.retryCount&&!g){s.setAttribute(S.hasBeenRetried,"true"),yield Cn(this.retryInterval*1e3);const y=n+1;this.emitter.emit("scriptLoadRetried",e.src,y),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:y,scriptBeingRetried:s}))}else g||this.emitter.emit("scriptLoadFailed",e.src,f),h==null||h(f),d(f)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),s=e.retryNumber;r.setAttribute(S.owner,ct),r.setAttribute("src",n),r.setAttribute(S.retryNumber,s.toString()),r.async=!0;const a=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(a).forEach(d=>{r.setAttribute(d,a[d])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Rn{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Tn{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Nn,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const s=await this.getRecaptchaLibrary(),a=new Rn({siteKey:n,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=a,a}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}let Ue=class extends I{constructor(){super(...arguments),this.mockOldReview=new re({stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:"2025-03-03 18:13:36",createdate:"2025-02-25 14:28:19"}),this.recaptchaManager=new Tn({defaultSiteKey:"6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2"})}render(){return A`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
        ></ia-review-form>
      </div>
    `}};Ue.styles=_`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;Ue=o([Et("app-root")],Ue);
