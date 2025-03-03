(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function g(n,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,i);else for(var d=n.length-1;d>=0;d--)(o=n[d])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window,ct=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lt=Symbol(),vt=new WeakMap;let Xt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ct&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vt.set(e,t))}return t}toString(){return this.cssText}};const Yt=n=>new Xt(typeof n=="string"?n:n+"",void 0,Lt),te=(n,t)=>{ct?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=K.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},ft=ct?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Yt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const J=window,_t=J.trustedTypes,ee=_t?_t.emptyScript:"",mt=J.reactiveElementPolyfillSupport,at={toAttribute(n,t){switch(t){case Boolean:n=n?ee:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},zt=(n,t)=>t!==n&&(t==t||n==n),tt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:zt};let j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ft(s))}else t!==void 0&&e.push(ft(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return te(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=tt){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:at).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:at;this._$El=r,this[r]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||zt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:j}),((Y=J.reactiveElementVersions)!==null&&Y!==void 0?Y:J.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et;const Z=window,H=Z.trustedTypes,yt=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,It="?"+A,ie=`<${It}>`,T=document,F=(n="")=>T.createComment(n),I=n=>n===null||typeof n!="object"&&typeof n!="function",Bt=Array.isArray,se=n=>Bt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,At=/>/g,S=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,St=/"/g,Dt=/^(?:script|style|textarea|title)$/i,B=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Et=new WeakMap,x=T.createTreeWalker(T,129,null,!1),ne=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=L;for(let l=0;l<e;l++){const a=n[l];let $,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===L?h[1]==="!--"?o=gt:h[1]!==void 0?o=At:h[2]!==void 0?(Dt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=S):h[3]!==void 0&&(o=S):o===S?h[0]===">"?(o=s??L,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,$=h[1],o=h[3]===void 0?S:h[3]==='"'?St:bt):o===St||o===bt?o=S:o===gt||o===At?o=L:(o=S,s=void 0);const m=o===S&&n[l+1].startsWith("/>")?" ":"";r+=o===L?a+ie:c>=0?(i.push($),a.slice(0,c)+"$lit$"+a.slice(c)+A+m):a+A+(c===-2?(i.push(void 0),l):m)}const d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(d):d,i]};let G=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[a,$]=ne(t,e);if(this.el=G.createElement(a,i),x.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=x.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(A)){const u=$[o++];if(h.push(c),u!==void 0){const m=s.getAttribute(u.toLowerCase()+"$lit$").split(A),y=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:y[2],strings:m,ctor:y[1]==="."?oe:y[1]==="?"?ae:y[1]==="@"?he:Q})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Dt.test(s.tagName)){const h=s.textContent.split(A),c=h.length-1;if(c>0){s.textContent=H?H.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],F()),x.nextNode(),l.push({type:2,index:++r});s.append(h[c],F())}}}else if(s.nodeType===8)if(s.data===It)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:r}),h+=A.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}};function N(n,t,e=n,i){var s,r,o,d;if(t===B)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=I(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=N(n,l._$AS(n,t.values),l,i)),t}let re=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:T).importNode(i,!0);x.currentNode=r;let o=x.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let $;a.type===2?$=new ut(o,o.nextSibling,this,t):a.type===1?$=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&($=new de(o,this,t)),this.u.push($),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=x.nextNode(),d++)}return r}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ut=class{constructor(t,e,i,s){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),I(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==B&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==v&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=G.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const o=new re(r,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new G(t)),e}k(t){Bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ut(this.O(F()),this.O(F()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Q=class{constructor(t,e,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=N(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const d=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=N(this,d[i+l],e,l),a===B&&(a=this._$AH[l]),o||(o=!I(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},oe=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}};const le=H?H.emptyScript:"";let ae=class extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,le):this.element.removeAttribute(this.name)}},he=class extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:v)===B)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},de=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};const wt=Z.litHtmlPolyfillSupport;wt==null||wt(G,ut),((et=Z.litHtmlVersions)!==null&&et!==void 0?et:Z.litHtmlVersions=[]).push("2.6.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),Ct=new WeakMap;let Vt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ct.set(e,t))}return t}toString(){return this.cssText}};const ce=n=>new Vt(typeof n=="string"?n:n+"",void 0,$t),Wt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Vt(e,n,$t)},ue=(n,t)=>{pt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},xt=pt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ce(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const Pt=window.trustedTypes,pe=Pt?Pt.emptyScript:"",Ut=window.reactiveElementPolyfillSupport,ht={toAttribute(n,t){switch(t){case Boolean:n=n?pe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},qt=(n,t)=>t!==n&&(t==t||n==n),st={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:qt};let C=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||st}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(xt(s))}else t!==void 0&&e.push(xt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ue(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=st){var s,r;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const d=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:ht.toAttribute)(e,i.type);this._$El=t,d==null?this.removeAttribute(o):this.setAttribute(o,d),this._$El=null}}_$AK(t,e){var i,s;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const d=r.getPropertyOptions(o),l=d.converter,a=(s=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:ht.fromAttribute;this._$El=o,this[o]=a(e,d.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||qt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},Ut==null||Ut({ReactiveElement:C}),((it=globalThis.reactiveElementVersions)!==null&&it!==void 0?it:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;const O=globalThis.trustedTypes,Ht=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,Kt="?"+b,$e=`<${Kt}>`,R=document,D=(n="")=>R.createComment(n),V=n=>n===null||typeof n!="object"&&typeof n!="function",Jt=Array.isArray,ve=n=>{var t;return Jt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Nt=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ot=/'/g,Rt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Ft=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=Ft(1),Gt=Ft(2),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),kt=new WeakMap,fe=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new q(t.insertBefore(D(),d),d,void 0,e??{})}return o._$AI(n),o},P=R.createTreeWalker(R,129,null,!1),_e=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=z;for(let l=0;l<e;l++){const a=n[l];let $,h,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===z?h[1]==="!--"?o=Tt:h[1]!==void 0?o=Nt:h[2]!==void 0?(Zt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=E):h[3]!==void 0&&(o=E):o===E?h[0]===">"?(o=s??z,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,$=h[1],o=h[3]===void 0?E:h[3]==='"'?Rt:Ot):o===Rt||o===Ot?o=E:o===Tt||o===Nt?o=z:(o=E,s=void 0);const m=o===E&&n[l+1].startsWith("/>")?" ":"";r+=o===z?a+$e:c>=0?(i.push($),a.slice(0,c)+"$lit$"+a.slice(c)+b+m):a+b+(c===-2?(i.push(void 0),l):m)}const d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ht!==void 0?Ht.createHTML(d):d,i]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[a,$]=_e(t,e);if(this.el=W.createElement(a,i),P.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=P.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(b)){const u=$[o++];if(h.push(c),u!==void 0){const m=s.getAttribute(u.toLowerCase()+"$lit$").split(b),y=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:y[2],strings:m,ctor:y[1]==="."?ye:y[1]==="?"?Ae:y[1]==="@"?be:X})}else l.push({type:6,index:r})}for(const c of h)s.removeAttribute(c)}if(Zt.test(s.tagName)){const h=s.textContent.split(b),c=h.length-1;if(c>0){s.textContent=O?O.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],D()),P.nextNode(),l.push({type:2,index:++r});s.append(h[c],D())}}}else if(s.nodeType===8)if(s.data===Kt)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:r}),h+=b.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function M(n,t,e=n,i){var s,r,o,d;if(t===k)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const a=V(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((o=(d=e)._$Cl)!==null&&o!==void 0?o:d._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=M(n,l._$AS(n,t.values),l,i)),t}class me{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:R).importNode(i,!0);P.currentNode=r;let o=P.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let $;a.type===2?$=new q(o,o.nextSibling,this,t):a.type===1?$=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&($=new Se(o,this,t)),this.v.push($),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=P.nextNode(),d++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ve(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.k(R.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new me(r,this),d=o.p(this.options);o.m(i),this.k(d),this._$AH=o}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new W(t)),e}S(t){Jt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new q(this.M(D()),this.M(D()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class X{constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=M(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{const d=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=M(this,d[i+l],e,l),a===k&&(a=this._$AH[l]),o||(o=!V(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ye extends X{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const ge=O?O.emptyScript:"";class Ae extends X{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,ge):this.element.removeAttribute(this.name)}}class be extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=M(this,t,e,0))!==null&&i!==void 0?i:p)===k)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Se{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const Mt=window.litHtmlPolyfillSupport;Mt==null||Mt(W,q),((nt=globalThis.litHtmlVersions)!==null&&nt!==void 0?nt:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt,ot;class U extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return k}}U.finalized=!0,U._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:U});const jt=globalThis.litElementPolyfillSupport;jt==null||jt({LitElement:U});((ot=globalThis.litElementVersions)!==null&&ot!==void 0?ot:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function w(n){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,t,e):Ee(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(n){return w({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt;((lt=window.HTMLSlotElement)===null||lt===void 0?void 0:lt.prototype.assignedElements)!=null;const Ce=Gt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,xe=Gt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`;let _=class extends U{constructor(){super(...arguments),this.endpointUrl="/write-review.php",this.currentStars=0}render(){var t;return f`<form action=${`${(t=this.baseHost)!==null&&t!==void 0?t:""}/write-review.php`}>
      ${this.errors?f`<div class="errors">${this.errors.join(" ")}</div>`:p}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier?f`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:p}
      ${this.token?f`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`:p}
      ${this.actionButtonsTemplate}
    </form>`}updated(t){var e,i;t.has("oldReview")&&(this.currentStars=(i=(e=this.oldReview)===null||e===void 0?void 0:e.stars)!==null&&i!==void 0?i:0)}get starsInputTemplate(){return f`<div class="form-heading">
        <label for="stars-field">Rating (optional)</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(t=>this.renderStar(t))}
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          Clear
        </button>
      </div> `}get subjectInputTemplate(){var t,e;return f`<div class="form-heading">
        <label for="subject-input">Subject</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(e=(t=this.oldReview)===null||t===void 0?void 0:t.subject)!==null&&e!==void 0?e:""}
        required
      />`}get bodyInputTemplate(){var t,e;return f`<div class="form-heading">
        <label for="body-input">Review</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(e=(t=this.oldReview)===null||t===void 0?void 0:t.body)!==null&&e!==void 0?e:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get actionButtonsTemplate(){var t;return f`<div class="action-btns">
      ${this.identifier?f`<a
            class="btn cancel"
            href=${`${(t=this.baseHost)!==null&&t!==void 0?t:""}/details/${this.identifier}`}
          >
            Cancel
          </a>`:p}

      <button
        type="submit"
        class="btn submit"
        name="submit"
        value="Submit review"
      >
        Submit review
      </button>
    </div>`}renderStar(t){const e=t===this.currentStars,i=`Rate ${t>1?`${t} stars`:"1 star"}`;return f`<button
      class=${`star star-${t}`}
      title=${e?"Clear rating":`${i}`}
      @click=${s=>this.handleStarClicked(s,t)}
    >
      ${t<=this.currentStars?Ce:xe}
    </button> `}handleStarClicked(t,e){t.preventDefault(),this.setStars(e)}handleClearBtnClicked(t){t.preventDefault(),this.currentStars=0}setStars(t){this.currentStars=t===this.currentStars?0:t}};_.styles=Wt`
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

    .btn {
      border: 0.1rem solid #c5d1df;
      color: #fff;
      display: inline-block;
      margin-bottom: 0;
      font-weight: normal;
      text-align: center;
      font-family: inherit;
      vertical-align: middle;
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      border-radius: 4px;
      text-decoration: none;
    }

    .btn.submit {
      background-color: #194880;
    }

    .btn.cancel {
      background-color: #2c2c2c;
    }

    .btn:hover {
      cursor: pointer;
    }
  `;g([w({type:String})],_.prototype,"identifier",void 0);g([w({type:String})],_.prototype,"token",void 0);g([w({type:String})],_.prototype,"baseHost",void 0);g([w({type:String})],_.prototype,"endpointUrl",void 0);g([w({type:Object})],_.prototype,"oldReview",void 0);g([w({type:Array})],_.prototype,"errors",void 0);g([we()],_.prototype,"currentStars",void 0);_=g([Qt("ia-review-form")],_);const Pe={stars:5,subject:"What a cool book!",body:"I loved it."};let dt=class extends U{render(){return f`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .baseHost=${"https://archive.org"}
          .oldReview=${Pe}
        ></ia-review-form>
      </div>
    `}};dt.styles=Wt`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;dt=g([Qt("app-root")],dt);
