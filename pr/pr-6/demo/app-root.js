(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function A(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var d=r.length-1;d>=0;d--)(n=r[d])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=window,vt=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ft=Symbol(),mt=new WeakMap;let ie=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(vt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mt.set(e,t))}return t}toString(){return this.cssText}};const se=r=>new ie(typeof r=="string"?r:r+"",void 0,Ft),re=(r,t)=>{vt?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=G.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},yt=vt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return se(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt;const K=window,At=K.trustedTypes,oe=At?At.emptyScript:"",bt=K.reactiveElementPolyfillSupport,ut={toAttribute(r,t){switch(t){case Boolean:r=r?oe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Vt=(r,t)=>t!==r&&(t==t||r==r),et={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Vt};let j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||et}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(yt(s))}else t!==void 0&&e.push(yt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return re(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=et){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ut).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:ut;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Vt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},bt==null||bt({ReactiveElement:j}),((tt=K.reactiveElementVersions)!==null&&tt!==void 0?tt:K.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const J=window,H=J.trustedTypes,St=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,Wt="?"+b,ne=`<${Wt}>`,U=document,Z=(r="")=>U.createComment(r),I=r=>r===null||typeof r!="object"&&typeof r!="function",qt=Array.isArray,le=r=>qt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,wt=/>/g,E=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,xt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,D=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),kt=new WeakMap,k=U.createTreeWalker(U,129,null,!1),ae=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=z;for(let l=0;l<e;l++){const a=r[l];let $,h,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,h=n.exec(a),h!==null);)u=n.lastIndex,n===z?h[1]==="!--"?n=Et:h[1]!==void 0?n=wt:h[2]!==void 0?(Gt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=E):h[3]!==void 0&&(n=E):n===E?h[0]===">"?(n=s??z,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,$=h[1],n=h[3]===void 0?E:h[3]==='"'?xt:Ct):n===xt||n===Ct?n=E:n===Et||n===wt?n=z:(n=E,s=void 0);const g=n===E&&r[l+1].startsWith("/>")?" ":"";o+=n===z?a+ne:c>=0?(i.push($),a.slice(0,c)+"$lit$"+a.slice(c)+b+g):a+b+(c===-2?(i.push(void 0),l):g)}const d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[St!==void 0?St.createHTML(d):d,i]};let Q=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[a,$]=ae(t,e);if(this.el=Q.createElement(a,i),k.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=k.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(b)){const u=$[n++];if(h.push(c),u!==void 0){const g=s.getAttribute(u.toLowerCase()+"$lit$").split(b),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?de:m[1]==="?"?ue:m[1]==="@"?pe:X})}else l.push({type:6,index:o})}for(const c of h)s.removeAttribute(c)}if(Gt.test(s.tagName)){const h=s.textContent.split(b),c=h.length-1;if(c>0){s.textContent=H?H.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],Z()),k.nextNode(),l.push({type:2,index:++o});s.append(h[c],Z())}}}else if(s.nodeType===8)if(s.data===Wt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}};function N(r,t,e=r,i){var s,o,n,d;if(t===D)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=I(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=N(r,l._$AS(r,t.values),l,i)),t}let he=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);k.currentNode=o;let n=k.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let $;a.type===2?$=new ft(n,n.nextSibling,this,t):a.type===1?$=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&($=new $e(n,this,t)),this.u.push($),a=s[++l]}d!==(a==null?void 0:a.index)&&(n=k.nextNode(),d++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ft=class{constructor(t,e,i,s){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),I(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==D&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):le(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==v&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Q.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new he(o,this),d=n.v(this.options);n.p(i),this.T(d),this._$AH=n}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new Q(t)),e}k(t){qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new ft(this.O(Z()),this.O(Z()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},X=class{constructor(t,e,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=N(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=N(this,d[i+l],e,l),a===D&&(a=this._$AH[l]),n||(n=!I(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}};const ce=H?H.emptyScript:"";let ue=class extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,ce):this.element.removeAttribute(this.name)}},pe=class extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:v)===D)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},$e=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};const Pt=J.litHtmlPolyfillSupport;Pt==null||Pt(Q,ft),((it=J.litHtmlVersions)!==null&&it!==void 0?it:J.litHtmlVersions=[]).push("2.6.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Tt=new WeakMap;let Kt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_t&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Tt.set(e,t))}return t}toString(){return this.cssText}};const ve=r=>new Kt(typeof r=="string"?r:r+"",void 0,gt),f=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Kt(e,r,gt)},fe=(r,t)=>{_t?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Ht=_t?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ve(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const Ut=window.trustedTypes,_e=Ut?Ut.emptyScript:"",Nt=window.reactiveElementPolyfillSupport,pt={toAttribute(r,t){switch(t){case Boolean:r=r?_e:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Jt=(r,t)=>t!==r&&(t==t||r==r),rt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Jt};let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||rt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ht(s))}else t!==void 0&&e.push(Ht(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=rt){var s,o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const d=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:pt.toAttribute)(e,i.type);this._$El=t,d==null?this.removeAttribute(n):this.setAttribute(n,d),this._$El=null}}_$AK(t,e){var i,s;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const d=o.getPropertyOptions(n),l=d.converter,a=(s=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:pt.fromAttribute;this._$El=n,this[n]=a(e,d.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},Nt==null||Nt({ReactiveElement:x}),((st=globalThis.reactiveElementVersions)!==null&&st!==void 0?st:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;const R=globalThis.trustedTypes,Rt=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Zt="?"+S,ge=`<${Zt}>`,O=document,F=(r="")=>O.createComment(r),V=r=>r===null||typeof r!="object"&&typeof r!="function",Qt=Array.isArray,me=r=>{var t;return Qt(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Mt=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Bt=/'/g,jt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,Yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=Yt(1),te=Yt(2),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),zt=new WeakMap,ye=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new q(t.insertBefore(F(),d),d,void 0,e??{})}return n._$AI(r),n},P=O.createTreeWalker(O,129,null,!1),Ae=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=L;for(let l=0;l<e;l++){const a=r[l];let $,h,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,h=n.exec(a),h!==null);)u=n.lastIndex,n===L?h[1]==="!--"?n=Ot:h[1]!==void 0?n=Mt:h[2]!==void 0?(Xt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=w):h[3]!==void 0&&(n=w):n===w?h[0]===">"?(n=s??L,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,$=h[1],n=h[3]===void 0?w:h[3]==='"'?jt:Bt):n===jt||n===Bt?n=w:n===Ot||n===Mt?n=L:(n=w,s=void 0);const g=n===w&&r[l+1].startsWith("/>")?" ":"";o+=n===L?a+ge:c>=0?(i.push($),a.slice(0,c)+"$lit$"+a.slice(c)+S+g):a+S+(c===-2?(i.push(void 0),l):g)}const d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Rt!==void 0?Rt.createHTML(d):d,i]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[a,$]=Ae(t,e);if(this.el=W.createElement(a,i),P.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=P.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(S)){const u=$[n++];if(h.push(c),u!==void 0){const g=s.getAttribute(u.toLowerCase()+"$lit$").split(S),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?Se:m[1]==="?"?we:m[1]==="@"?Ce:Y})}else l.push({type:6,index:o})}for(const c of h)s.removeAttribute(c)}if(Xt.test(s.tagName)){const h=s.textContent.split(S),c=h.length-1;if(c>0){s.textContent=R?R.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],F()),P.nextNode(),l.push({type:2,index:++o});s.append(h[c],F())}}}else if(s.nodeType===8)if(s.data===Zt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:o}),h+=S.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function B(r,t,e=r,i){var s,o,n,d;if(t===M)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const a=V(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(d=e)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=B(r,l._$AS(r,t.values),l,i)),t}class be{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:O).importNode(i,!0);P.currentNode=o;let n=P.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let $;a.type===2?$=new q(n,n.nextSibling,this,t):a.type===1?$=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&($=new xe(n,this,t)),this.v.push($),a=s[++l]}d!==(a==null?void 0:a.index)&&(n=P.nextNode(),d++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==M&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):me(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.k(O.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const n=new be(o,this),d=n.p(this.options);n.m(i),this.k(d),this._$AH=n}}_$AC(t){let e=zt.get(t.strings);return e===void 0&&zt.set(t.strings,e=new W(t)),e}S(t){Qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.M(F()),this.M(F()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Y{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=B(this,t,e,0),n=!V(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=B(this,d[i+l],e,l),a===M&&(a=this._$AH[l]),n||(n=!V(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Se extends Y{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const Ee=R?R.emptyScript:"";class we extends Y{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,Ee):this.element.removeAttribute(this.name)}}class Ce extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=B(this,t,e,0))!==null&&i!==void 0?i:p)===M)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class xe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Lt=window.litHtmlPolyfillSupport;Lt==null||Lt(W,q),((ot=globalThis.litHtmlVersions)!==null&&ot!==void 0?ot:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt,lt;class T extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ye(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return M}}T.finalized=!0,T._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:T});const It=globalThis.litElementPolyfillSupport;It==null||It({LitElement:T});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function C(r){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(r,t,e):ke(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pe(r){return C({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;((at=window.HTMLSlotElement)===null||at===void 0?void 0:at.prototype.assignedElements)!=null;const Te=te`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,He=te`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,Dt=f`var(--white, #fff)`,Ue=f`var(--primaryDisableCTAFill, #767676)`,Ne=f`var(--secondaryCTABorder, #999)`,Re=f`var(--primaryCTAFill, #194880)`,ht=f`var(--primaryCTAFillRGB, 25, 72, 128)`,Oe=f`var(--primaryCTABorder, #c5d1df)`,Me=f`var(--primaryErrorCTAFill, #d9534f)`,dt=f`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Be=f`var(--primaryErrorCTABorder, #d43f3a)`,je=f`var(--secondaryCTAFill, #333)`,ct=f`var(--secondaryCTAFillRGB, 51, 51, 51)`,ze=f`var(--primaryCTABorder, #979797)`,Le=f`#ee8950`,Ie=f`#ec7939`,De=f`
  .ia-button {
    height: 3.5rem;
    min-height: 3rem;
    cursor: pointer;
    color: ${Dt};
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
    outline-color: ${Dt};
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
    background-color: ${Ue};
    border: 1px solid ${Ne};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Le}
    border-color: ${Ie};
  }

  .ia-button.primary {
    background-color: ${Re};
    border-color: ${Oe};
  }
  .ia-button.primary:hover {
    background-color: rgba(${ht}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${ht}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${ht}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Me};
    border-color: ${Be};
  }
  .ia-button.danger:hover {
    background-color: rgba(${dt}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${dt}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${dt}, 0.7);
  }

  .ia-button.dark {
    background-color: ${je};
    border-color: ${ze};
  }
  .ia-button.dark:hover {
    background-color: rgba(${ct}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${ct}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${ct}, 0.7);
  }
`;let y=class extends T{constructor(){super(...arguments),this.endpointUrl="/write-review.php",this.currentStars=0}render(){var t;return _`<form action=${`${(t=this.baseHost)!==null&&t!==void 0?t:""}/write-review.php`}>
      ${this.errors?_`<div class="errors">${this.errors.join(" ")}</div>`:p}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier?_`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:p}
      ${this.token?_`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`:p}
      ${this.actionButtonsTemplate}
    </form>`}updated(t){var e,i;t.has("oldReview")&&(this.currentStars=(i=(e=this.oldReview)===null||e===void 0?void 0:e.stars)!==null&&i!==void 0?i:0)}get starsInputTemplate(){return _`<div class="form-heading">
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
      </div> `}get subjectInputTemplate(){var t,e;return _`<div class="form-heading">
        <label for="subject-input">Subject</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(e=(t=this.oldReview)===null||t===void 0?void 0:t.subject)!==null&&e!==void 0?e:""}
        required
      />`}get bodyInputTemplate(){var t,e;return _`<div class="form-heading">
        <label for="body-input">Review</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(e=(t=this.oldReview)===null||t===void 0?void 0:t.body)!==null&&e!==void 0?e:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get actionButtonsTemplate(){var t;return _`<div class="action-btns">
      ${this.identifier?_`<a
            class="ia-button dark"
            href=${`${(t=this.baseHost)!==null&&t!==void 0?t:""}/details/${this.identifier}`}
            data-testid="cancel-btn"
          >
            Cancel
          </a>`:p}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        value="Submit review"
      >
        Submit review
      </button>
    </div>`}renderStar(t){const e=t===this.currentStars,i=`Rate ${t>1?`${t} stars`:"1 star"}`;return _`<button
      class=${`star star-${t}`}
      title=${e?"Clear rating":`${i}`}
      @click=${s=>this.handleStarClicked(s,t)}
    >
      ${t<=this.currentStars?Te:He}
    </button> `}handleStarClicked(t,e){t.preventDefault(),this.setStars(e)}handleClearBtnClicked(t){t.preventDefault(),this.currentStars=0}setStars(t){this.currentStars=t===this.currentStars?0:t}static get styles(){return[De,f`
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
      `]}};A([C({type:String})],y.prototype,"identifier",void 0);A([C({type:String})],y.prototype,"token",void 0);A([C({type:String})],y.prototype,"baseHost",void 0);A([C({type:String})],y.prototype,"endpointUrl",void 0);A([C({type:Object})],y.prototype,"oldReview",void 0);A([C({type:Array})],y.prototype,"errors",void 0);A([Pe()],y.prototype,"currentStars",void 0);y=A([ee("ia-review-form")],y);const Fe={stars:5,subject:"What a cool book!",body:"I loved it."};let $t=class extends T{render(){return _`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .baseHost=${"https://archive.org"}
          .oldReview=${Fe}
        ></ia-review-form>
      </div>
    `}};$t.styles=f`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;$t=A([ee("app-root")],$t);
