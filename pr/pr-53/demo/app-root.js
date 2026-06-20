(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function d(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function $t(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function c(g){try{h(n.next(g))}catch(y){o(y)}}function u(g){try{h(n.throw(g))}catch(y){o(y)}}function h(g){g.done?a(g.value):r(g.value).then(c,u)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=window,Bn=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hn=Symbol(),gr=new WeakMap;let ni=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=gr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&gr.set(t,e))}return e}toString(){return this.cssText}};const Xi=i=>new ni(typeof i=="string"?i:i+"",void 0,Hn),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new ni(t,i,Hn)},Zi=(i,e)=>{Bn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=St.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},yr=Bn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Xi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rn;const Rt=window,wr=Rt.trustedTypes,Ji=wr?wr.emptyScript:"",vr=Rt.reactiveElementPolyfillSupport,$n={toAttribute(i,e){switch(e){case Boolean:i=i?Ji:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ri=(i,e)=>e!==i&&(e==e||i==i),sn={attribute:!0,type:String,converter:$n,reflect:!1,hasChanged:ri},Tn="finalized";let Ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=sn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||sn}static finalize(){if(this.hasOwnProperty(Tn))return!1;this[Tn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(yr(r))}else e!==void 0&&t.push(yr(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Zi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=sn){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:$n).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:$n;this._$El=a,this[a]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ri)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ue[Tn]=!0,Ue.elementProperties=new Map,Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},vr==null||vr({ReactiveElement:Ue}),((rn=Rt.reactiveElementVersions)!==null&&rn!==void 0?rn:Rt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var an;const xt=window,je=xt.trustedTypes,br=je?je.createPolicy("lit-html",{createHTML:i=>i}):void 0,Sn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,ii="?"+we,Qi=`<${ii}>`,ke=document,Ct=()=>ke.createComment(""),dt=i=>i===null||typeof i!="object"&&typeof i!="function",si=Array.isArray,es=i=>si(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",on=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_r=/-->/g,Ar=/>/g,Te=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,$r=/"/g,ai=/^(?:script|style|textarea|title)$/i,Ve=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Tr=new WeakMap,xe=ke.createTreeWalker(ke,129,null,!1);function oi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return br!==void 0?br.createHTML(e):e}const ts=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=rt;for(let c=0;c<t;c++){const u=i[c];let h,g,y=-1,b=0;for(;b<u.length&&(o.lastIndex=b,g=o.exec(u),g!==null);)b=o.lastIndex,o===rt?g[1]==="!--"?o=_r:g[1]!==void 0?o=Ar:g[2]!==void 0?(ai.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Te):g[3]!==void 0&&(o=Te):o===Te?g[0]===">"?(o=r??rt,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,h=g[1],o=g[3]===void 0?Te:g[3]==='"'?$r:Er):o===$r||o===Er?o=Te:o===_r||o===Ar?o=rt:(o=Te,r=void 0);const M=o===Te&&i[c+1].startsWith("/>")?" ":"";a+=o===rt?u+Qi:y>=0?(n.push(h),u.slice(0,y)+Sn+u.slice(y)+we+M):u+we+(y===-2?(n.push(void 0),c):M)}return[oi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Rn=class li{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const c=e.length-1,u=this.parts,[h,g]=ts(e,t);if(this.el=li.createElement(h,n),xe.currentNode=this.el.content,t===2){const y=this.el.content,b=y.firstChild;b.remove(),y.append(...b.childNodes)}for(;(r=xe.nextNode())!==null&&u.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const b of r.getAttributeNames())if(b.endsWith(Sn)||b.startsWith(we)){const M=g[o++];if(y.push(b),M!==void 0){const Ne=r.getAttribute(M.toLowerCase()+Sn).split(we),te=/([.?@])?(.*)/.exec(M);u.push({type:1,index:a,name:te[2],strings:Ne,ctor:te[1]==="."?rs:te[1]==="?"?ss:te[1]==="@"?as:It})}else u.push({type:6,index:a})}for(const b of y)r.removeAttribute(b)}if(ai.test(r.tagName)){const y=r.textContent.split(we),b=y.length-1;if(b>0){r.textContent=je?je.emptyScript:"";for(let M=0;M<b;M++)r.append(y[M],Ct()),xe.nextNode(),u.push({type:2,index:++a});r.append(y[b],Ct())}}}else if(r.nodeType===8)if(r.data===ii)u.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(we,y+1))!==-1;)u.push({type:7,index:a}),y+=we.length-1}a++}}static createElement(e,t){const n=ke.createElement("template");return n.innerHTML=e,n}};function We(i,e,t=i,n){var r,a,o,c;if(e===Ve)return e;let u=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=dt(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==h&&((a=u==null?void 0:u._$AO)===null||a===void 0||a.call(u,!1),h===void 0?u=void 0:(u=new h(i),u._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=u:t._$Cl=u),u!==void 0&&(e=We(i,u._$AS(i,e.values),u,n)),e}let ns=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ke).importNode(n,!0);xe.currentNode=a;let o=xe.nextNode(),c=0,u=0,h=r[0];for(;h!==void 0;){if(c===h.index){let g;h.type===2?g=new di(o,o.nextSibling,this,e):h.type===1?g=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(g=new os(o,this,e)),this._$AV.push(g),h=r[++u]}c!==(h==null?void 0:h.index)&&(o=xe.nextNode(),c++)}return xe.currentNode=ke,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},di=class ui{constructor(e,t,n,r){var a;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),dt(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Ve&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):es(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.$(ke.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Rn.createElement(oi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new ns(a,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Tr.get(e.strings);return t===void 0&&Tr.set(e.strings,t=new Rn(e)),t}T(e){si(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new ui(this.k(Ct()),this.k(Ct()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},It=class{constructor(e,t,n,r,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=We(this,e,t,0),o=!dt(e)||e!==this._$AH&&e!==Ve,o&&(this._$AH=e);else{const c=e;let u,h;for(e=a[0],u=0;u<a.length-1;u++)h=We(this,c[n+u],t,u),h===Ve&&(h=this._$AH[u]),o||(o=!dt(h)||h!==this._$AH[u]),h===F?e=F:e!==F&&(e+=(h??"")+a[u+1]),this._$AH[u]=h}o&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rs=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}};const is=je?je.emptyScript:"";let ss=class extends It{constructor(){super(...arguments),this.type=4}j(e){e&&e!==F?this.element.setAttribute(this.name,is):this.element.removeAttribute(this.name)}},as=class extends It{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=We(this,e,t,0))!==null&&n!==void 0?n:F)===Ve)return;const r=this._$AH,a=e===F&&r!==F||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==F&&(r===F||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},os=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};const Sr=xt.litHtmlPolyfillSupport;Sr==null||Sr(Rn,di),((an=xt.litHtmlVersions)!==null&&an!==void 0?an:xt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ln;const Mt=window,Ge=Mt.trustedTypes,Rr=Ge?Ge.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",ve=`lit$${(Math.random()+"").slice(9)}$`,ci="?"+ve,ls=`<${ci}>`,Le=document,ut=()=>Le.createComment(""),ct=i=>i===null||typeof i!="object"&&typeof i!="function",hi=Array.isArray,ds=i=>hi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dn=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xr=/-->/g,Cr=/>/g,Se=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,kr=/"/g,fi=/^(?:script|style|textarea|title)$/i,pi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=pi(1),Ot=pi(2),Ye=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Lr=new WeakMap,Ce=Le.createTreeWalker(Le,129,null,!1);function mi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rr!==void 0?Rr.createHTML(e):e}const us=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=it;for(let c=0;c<t;c++){const u=i[c];let h,g,y=-1,b=0;for(;b<u.length&&(o.lastIndex=b,g=o.exec(u),g!==null);)b=o.lastIndex,o===it?g[1]==="!--"?o=xr:g[1]!==void 0?o=Cr:g[2]!==void 0?(fi.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Se):g[3]!==void 0&&(o=Se):o===Se?g[0]===">"?(o=r??it,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,h=g[1],o=g[3]===void 0?Se:g[3]==='"'?kr:Mr):o===kr||o===Mr?o=Se:o===xr||o===Cr?o=it:(o=Se,r=void 0);const M=o===Se&&i[c+1].startsWith("/>")?" ":"";a+=o===it?u+ls:y>=0?(n.push(h),u.slice(0,y)+xn+u.slice(y)+ve+M):u+ve+(y===-2?(n.push(void 0),c):M)}return[mi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ht{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const c=e.length-1,u=this.parts,[h,g]=us(e,t);if(this.el=ht.createElement(h,n),Ce.currentNode=this.el.content,t===2){const y=this.el.content,b=y.firstChild;b.remove(),y.append(...b.childNodes)}for(;(r=Ce.nextNode())!==null&&u.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const b of r.getAttributeNames())if(b.endsWith(xn)||b.startsWith(ve)){const M=g[o++];if(y.push(b),M!==void 0){const Ne=r.getAttribute(M.toLowerCase()+xn).split(ve),te=/([.?@])?(.*)/.exec(M);u.push({type:1,index:a,name:te[2],strings:Ne,ctor:te[1]==="."?hs:te[1]==="?"?ps:te[1]==="@"?ms:Dt})}else u.push({type:6,index:a})}for(const b of y)r.removeAttribute(b)}if(fi.test(r.tagName)){const y=r.textContent.split(ve),b=y.length-1;if(b>0){r.textContent=Ge?Ge.emptyScript:"";for(let M=0;M<b;M++)r.append(y[M],ut()),Ce.nextNode(),u.push({type:2,index:++a});r.append(y[b],ut())}}}else if(r.nodeType===8)if(r.data===ci)u.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(ve,y+1))!==-1;)u.push({type:7,index:a}),y+=ve.length-1}a++}}static createElement(e,t){const n=Le.createElement("template");return n.innerHTML=e,n}}function qe(i,e,t=i,n){var r,a,o,c;if(e===Ye)return e;let u=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==h&&((a=u==null?void 0:u._$AO)===null||a===void 0||a.call(u,!1),h===void 0?u=void 0:(u=new h(i),u._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=u:t._$Cl=u),u!==void 0&&(e=qe(i,u._$AS(i,e.values),u,n)),e}class cs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Le).importNode(n,!0);Ce.currentNode=a;let o=Ce.nextNode(),c=0,u=0,h=r[0];for(;h!==void 0;){if(c===h.index){let g;h.type===2?g=new pt(o,o.nextSibling,this,e):h.type===1?g=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(g=new gs(o,this,e)),this._$AV.push(g),h=r[++u]}c!==(h==null?void 0:h.index)&&(o=Ce.nextNode(),c++)}return Ce.currentNode=Le,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class pt{constructor(e,t,n,r){var a;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qe(this,e,t),ct(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Ye&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ds(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.$(Le.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ht.createElement(mi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new cs(a,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Lr.get(e.strings);return t===void 0&&Lr.set(e.strings,t=new ht(e)),t}T(e){hi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new pt(this.k(ut()),this.k(ut()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Dt{constructor(e,t,n,r,a){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=qe(this,e,t,0),o=!ct(e)||e!==this._$AH&&e!==Ye,o&&(this._$AH=e);else{const c=e;let u,h;for(e=a[0],u=0;u<a.length-1;u++)h=qe(this,c[n+u],t,u),h===Ye&&(h=this._$AH[u]),o||(o=!ct(h)||h!==this._$AH[u]),h===$?e=$:e!==$&&(e+=(h??"")+a[u+1]),this._$AH[u]=h}o&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hs extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const fs=Ge?Ge.emptyScript:"";class ps extends Dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,fs):this.element.removeAttribute(this.name)}}class ms extends Dt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=qe(this,e,t,0))!==null&&n!==void 0?n:$)===Ye)return;const r=this._$AH,a=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==$&&(r===$||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class gs{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}}const Nr=Mt.litHtmlPolyfillSupport;Nr==null||Nr(ht,pt),((ln=Mt.litHtmlVersions)!==null&&ln!==void 0?ln:Mt.litHtmlVersions=[]).push("2.8.0");const ys=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new pt(e.insertBefore(ut(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un,cn;class ce extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ys(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ye}}ce.finalized=!0,ce._$litElement$=!0,(un=globalThis.litElementHydrateSupport)===null||un===void 0||un.call(globalThis,{LitElement:ce});const Ir=globalThis.litElementPolyfillSupport;Ir==null||Ir({LitElement:ce});((cn=globalThis.litElementVersions)!==null&&cn!==void 0?cn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},vs=(i,e,t)=>{e.constructor.createProperty(t,i)};function A(i){return(e,t)=>t!==void 0?vs(i,e,t):ws(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(i){return A({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(c){i(c,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gi(i,e){return bs({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hn;((hn=window.HTMLSlotElement)===null||hn===void 0?void 0:hn.prototype.assignedElements)!=null;function m(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=Or(o.value,e,t,n);else if(o.get!=null)o.get=Or(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const fn=new Map;function Or(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[r];if(Array.isArray(n))for(const u of n)fn.has(u)?fn.get(u).push(c):fn.set(u,[c]);if(e||a.length>0||t>0){let u;e===!0?u=a.map(y=>y.toString()).join("!"):e?u=e.apply(this,a):u=a[0];const h=`${u}__timestamp`;let g=!1;if(t>0)if(!c.has(h))g=!0;else{let y=c.get(h);g=Date.now()-y>t}c.has(u)&&!g?o=c.get(u):(o=i.apply(this,a),c.set(u,o),t>0&&c.set(h,Date.now()))}else{const u=this;c.has(u)?o=c.get(u):(o=i.apply(this,a),c.set(u,o))}return o}}class Cn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Cn.shared=new Cn;class _e{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}_e.shared=new _e;class kt{parseValue(e){return _e.shared.parseValue(e)}}kt.shared=new kt;class ft{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ft.shared=new ft;class Lt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const u=60**(e.length-1-a);return o*Math.floor(u)}).reduce((r,a)=>r+a,0);return t?void 0:n}}Lt.shared=new Lt;class Mn{parseValue(e){if(typeof e=="string")return e}}Mn.shared=new Mn;class _s{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class kn{parseValue(e){if(typeof e=="string")return e}}kn.shared=new kn;class Nt{parseValue(e){return String(e)}}Nt.shared=new Nt;class ie{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}d([m()],ie.prototype,"values",null);d([m()],ie.prototype,"value",null);class As extends ie{constructor(e){super(Cn.shared,e)}}class ge extends ie{constructor(e){super(ft.shared,e)}}class pn extends ie{constructor(e){super(Lt.shared,e)}}class Z extends ie{constructor(e){super(_e.shared,e)}}class x extends ie{constructor(e){super(Nt.shared,e)}}class Es extends ie{constructor(e){super(kn.shared,e)}}class Dr extends ie{constructor(e){super(kt.shared,e)}}class $s extends ie{constructor(e){super(Mn.shared,e)}}class Ts extends ie{constructor(e,t){super(t,e)}}class Ss extends Ts{constructor(e){const t=new _s(Nt.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ge(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new x(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new Z(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new Z(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new x(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new x(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Dr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new x(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new x(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new x(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new x(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ge(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new x(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new Z(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new pn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new x(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new Z(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ge(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new x(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new x(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new Z(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Dr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new x(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new pn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new x(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new Z(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new $s(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new As(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new x(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new Z(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new Z(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new x(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new x(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Es(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new x(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new Z(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ge(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new x(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ge(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new pn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new x(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new x(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ge(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ge(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ge(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Ss(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new x(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new x(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new x(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new Z(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new x(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new x(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new Z(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new x(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new x(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new Z(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new Z(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}d([m()],v.prototype,"addeddate",null);d([m()],v.prototype,"audio_codec",null);d([m()],v.prototype,"audio_sample_rate",null);d([m()],v.prototype,"avg_rating",null);d([m()],v.prototype,"collection",null);d([m()],v.prototype,"collections_raw",null);d([m()],v.prototype,"collection_size",null);d([m()],v.prototype,"contributor",null);d([m()],v.prototype,"coverage",null);d([m()],v.prototype,"creator",null);d([m()],v.prototype,"collection_layout",null);d([m()],v.prototype,"date",null);d([m()],v.prototype,"description",null);d([m()],v.prototype,"downloads",null);d([m()],v.prototype,"duration",null);d([m()],v.prototype,"external_identifier",null);d([m()],v.prototype,"files_count",null);d([m()],v.prototype,"indexdate",null);d([m()],v.prototype,"isbn",null);d([m()],v.prototype,"issue",null);d([m()],v.prototype,"item_count",null);d([m()],v.prototype,"item_size",null);d([m()],v.prototype,"language",null);d([m()],v.prototype,"length",null);d([m()],v.prototype,"lineage",null);d([m()],v.prototype,"month",null);d([m()],v.prototype,"mediatype",null);d([m()],v.prototype,"noindex",null);d([m()],v.prototype,"notes",null);d([m()],v.prototype,"num_favorites",null);d([m()],v.prototype,"num_reviews",null);d([m()],v.prototype,"openlibrary_edition",null);d([m()],v.prototype,"openlibrary_work",null);d([m()],v.prototype,"page_progression",null);d([m()],v.prototype,"partner",null);d([m()],v.prototype,"ppi",null);d([m()],v.prototype,"publicdate",null);d([m()],v.prototype,"publisher",null);d([m()],v.prototype,"reviewdate",null);d([m()],v.prototype,"runtime",null);d([m()],v.prototype,"scanner",null);d([m()],v.prototype,"source",null);d([m()],v.prototype,"start_localtime",null);d([m()],v.prototype,"start_time",null);d([m()],v.prototype,"stop_time",null);d([m()],v.prototype,"subject",null);d([m()],v.prototype,"taper",null);d([m()],v.prototype,"title",null);d([m()],v.prototype,"transferer",null);d([m()],v.prototype,"track",null);d([m()],v.prototype,"type",null);d([m()],v.prototype,"uploader",null);d([m()],v.prototype,"utc_offset",null);d([m()],v.prototype,"venue",null);d([m()],v.prototype,"volume",null);d([m()],v.prototype,"week",null);d([m()],v.prototype,"year",null);class Ke{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?kt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Lt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?_e.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?_e.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?_e.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}d([m()],Ke.prototype,"size",null);d([m()],Ke.prototype,"length",null);d([m()],Ke.prototype,"height",null);d([m()],Ke.prototype,"width",null);d([m()],Ke.prototype,"track",null);class re{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?ft.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ft.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?_e.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}d([m()],re.prototype,"reviewdate",null);d([m()],re.prototype,"createdate",null);d([m()],re.prototype,"stars",null);class Rs{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Ke(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new re(r))}}var Me;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Me||(Me={}));class Ln extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class xs{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Me.networkError,c)}try{const o=await a.json(),c=o.error;if(c){const u=o.forensics;return this.getErrorResult(Me.searchEngineError,c,u)}else return{success:o}}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Me.decodingError,c)}}getErrorResult(e,t,n){return{error:new Ln(e,t,n)}}}class Pr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Ln(Me.itemNotFound)}:{success:new Rs(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new Ln(Me.itemNotFound)}:{success:r.success.result}}}Pr.default=new Pr(new xs);let Cs=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Ms(i){return new Promise(e=>setTimeout(e,i))}var de;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(de||(de={}));const Br="lazyLoaderService";class ks{constructor(e){var t,n,r;this.emitter=Cs(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return $t(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return $t(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return $t(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${de.owner}='${Br}'][${de.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,c)=>{if(a.getAttribute(de.dynamicImportLoaded)){o();return}const u=e.scriptBeingRetried,h=a.onload||(u==null?void 0:u.onload);a.onload=y=>{h==null||h(y),a.setAttribute(de.dynamicImportLoaded,"true"),o()};const g=a.onerror||(u==null?void 0:u.onerror);a.onerror=y=>$t(this,void 0,void 0,function*(){const b=a.getAttribute(de.hasBeenRetried);if(n<this.retryCount&&!b){a.setAttribute(de.hasBeenRetried,"true"),yield Ms(this.retryInterval*1e3);const M=n+1;this.emitter.emit("scriptLoadRetried",e.src,M),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:M,scriptBeingRetried:a}))}else b||this.emitter.emit("scriptLoadFailed",e.src,y),g==null||g(y),c(y)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(de.owner,Br),r.setAttribute("src",n),r.setAttribute(de.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(c=>{r.setAttribute(c,o[c])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Ls{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Ns{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new ks,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new Ls({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=i=>typeof i!="string"&&"strTag"in i,Os=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=i=>Is(i)?Os(i.strings,i.values):i;let R=Ds;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ps{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bs=new Ps;Bs.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fs=i=>(...e)=>({_$litDirective$:i,values:e});class Us{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nn extends Us{constructor(e){if(super(e),this.et=F,e.type!==Hs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this.ft=void 0,this.et=e;if(e===Ve)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Nn.directiveName="unsafeHTML",Nn.resultType=1;const yi=Fs(Nn);/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */function Hr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function zs(i){if(Array.isArray(i))return i}function js(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,c=[],u=!0,h=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(u=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(g){h=!0,r=g}finally{try{if(!u&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(h)throw r}}return c}}function Vs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ws(i,e){return zs(i)||js(i,e)||Gs(i,e)||Vs()}function Gs(i,e){if(i){if(typeof i=="string")return Hr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Hr(i,e):void 0}}const wi=Object.entries,Fr=Object.setPrototypeOf,Ys=Object.isFrozen,qs=Object.getPrototypeOf,Ks=Object.getOwnPropertyDescriptor;let W=Object.freeze,G=Object.seal,ze=Object.create,vi=typeof Reflect<"u"&&Reflect,In=vi.apply,On=vi.construct;W||(W=function(e){return e});G||(G=function(e){return e});In||(In=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});On||(On=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const st=U(Array.prototype.forEach),Xs=U(Array.prototype.lastIndexOf),Ur=U(Array.prototype.pop),Fe=U(Array.prototype.push),Zs=U(Array.prototype.splice),be=Array.isArray,lt=U(String.prototype.toLowerCase),mn=U(String.prototype.toString),zr=U(String.prototype.match),at=U(String.prototype.replace),jr=U(String.prototype.indexOf),Js=U(String.prototype.trim),Qs=U(Number.prototype.toString),ea=U(Boolean.prototype.toString),Vr=typeof BigInt>"u"?null:U(BigInt.prototype.toString),Wr=typeof Symbol>"u"?null:U(Symbol.prototype.toString),j=U(Object.prototype.hasOwnProperty),ot=U(Object.prototype.toString),V=U(RegExp.prototype.test),Re=ta(TypeError);function U(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return In(i,e,n)}}function ta(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return On(i,t)}}function T(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:lt;if(Fr&&Fr(i,null),!be(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(Ys(e)||(e[n]=a),r=a)}i[r]=!0}return i}function na(i){for(let e=0;e<i.length;e++)j(i,e)||(i[e]=null);return i}function q(i){const e=ze(null);for(const n of wi(i)){var t=Ws(n,2);const r=t[0],a=t[1];j(i,r)&&(be(a)?e[r]=na(a):a&&typeof a=="object"&&a.constructor===Object?e[r]=q(a):e[r]=a)}return e}function ra(i){switch(typeof i){case"string":return i;case"number":return Qs(i);case"boolean":return ea(i);case"bigint":return Vr?Vr(i):"0";case"symbol":return Wr?Wr(i):"Symbol()";case"undefined":return ot(i);case"function":case"object":{if(i===null)return ot(i);const e=i,t=le(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:ot(n)}return ot(i)}default:return ot(i)}}function le(i,e){for(;i!==null;){const n=Ks(i,e);if(n){if(n.get)return U(n.get);if(typeof n.value=="function")return U(n.value)}i=qs(i)}function t(){return null}return t}function ia(i){try{return V(i,""),!0}catch{return!1}}const Gr=W(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),gn=W(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),yn=W(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),sa=W(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),wn=W(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),aa=W(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Yr=W(["#text"]),qr=W(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),vn=W(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Kr=W(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Tt=W(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),oa=G(/{{[\w\W]*|^[\w\W]*}}/g),la=G(/<%[\w\W]*|^[\w\W]*%>/g),da=G(/\${[\w\W]*/g),ua=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),ca=G(/^aria-[\-\w]+$/),Xr=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ha=G(/^(?:\w+script|data):/i),fa=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pa=G(/^html$/i),ma=G(/^[a-z][.\w]*(-[.\w]+)+$/i),Zr=G(/<[/\w!]/g),ga=G(/<[/\w]/g),ya=G(/<\/no(script|embed|frames)/i),wa=G(/\/>/i),oe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},va=function(){return typeof window>"u"?null:window},ba=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Jr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ye=function(e,t,n,r){return j(e,t)&&be(e[t])?T(r.base?q(r.base):{},e[t],r.transform):n};function bi(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:va();const e=p=>bi(p);if(e.version="3.4.11",e.removed=[],!i||!i.document||i.document.nodeType!==oe.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const a=i.HTMLTemplateElement,o=i.Node,c=i.Element,u=i.NodeFilter,h=i.NamedNodeMap;h===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const g=i.DOMParser,y=i.trustedTypes,b=c.prototype,M=le(b,"cloneNode"),Ne=le(b,"remove"),te=le(b,"nextSibling"),Xe=le(b,"childNodes"),Ze=le(b,"parentNode"),Fn=le(b,"shadowRoot"),Pt=le(b,"attributes"),X=o&&o.prototype?le(o.prototype,"nodeType"):null,he=o&&o.prototype?le(o.prototype,"nodeName"):null;if(typeof a=="function"){const p=t.createElement("template");p.content&&p.content.ownerDocument&&(t=p.content.ownerDocument)}let K,Ae="",Bt,Un=!1,Je=0;const zn=function(){if(Je>0)throw Re('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Ie=function(s){zn(),Je++;try{return K.createHTML(s)}finally{Je--}},Ai=function(s){zn(),Je++;try{return K.createScriptURL(s)}finally{Je--}},Ei=function(){return Un||(Bt=ba(y,r),Un=!0),Bt},gt=t,Ht=gt.implementation,jn=gt.createNodeIterator,$i=gt.createDocumentFragment,Ti=gt.getElementsByTagName,Si=n.importNode;let B=Jr();e.isSupported=typeof wi=="function"&&typeof Ze=="function"&&Ht&&Ht.createHTMLDocument!==void 0;const Ri=oa,xi=la,Ci=da,Mi=ua,ki=ca,Li=ha,Vn=fa,Ni=ma;let Wn=Xr,L=null;const Gn=T({},[...Gr,...gn,...yn,...wn,...Yr]);let N=null;const Yn=T({},[...qr,...vn,...Kr,...Tt]);let I=Object.seal(ze(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Qe=null,qn=null;const fe=Object.seal(ze(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Kn=!0,Ft=!0,Xn=!1,Zn=!0,pe=!1,et=!0,Ee=!1,Ut=!1,zt=null,jt=null,Vt=!1,Oe=!1,yt=!1,wt=!1,Jn=!0,Qn=!1;const er="user-content-";let Wt=!0,Gt=!1,De={},se=null;const Yt=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let tr=null;const nr=T({},["audio","video","img","source","image","track"]);let qt=null;const rr=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),vt="http://www.w3.org/1998/Math/MathML",bt="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml";let Pe=ae,Kt=!1,Xt=null;const Ii=T({},[vt,bt,ae],mn),ir=W(["mi","mo","mn","ms","mtext"]);let Zt=T({},ir);const sr=W(["annotation-xml"]);let Jt=T({},sr);const Oi=T({},["title","style","font","a","script"]);let tt=null;const Di=["application/xhtml+xml","text/html"],Pi="text/html";let O=null,Be=null;const Bi=t.createElement("form"),ar=function(s){return s instanceof RegExp||s instanceof Function},Qt=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Be&&Be===s)return;(!s||typeof s!="object")&&(s={}),s=q(s),tt=Di.indexOf(s.PARSER_MEDIA_TYPE)===-1?Pi:s.PARSER_MEDIA_TYPE,O=tt==="application/xhtml+xml"?mn:lt,L=ye(s,"ALLOWED_TAGS",Gn,{transform:O}),N=ye(s,"ALLOWED_ATTR",Yn,{transform:O}),Xt=ye(s,"ALLOWED_NAMESPACES",Ii,{transform:mn}),qt=ye(s,"ADD_URI_SAFE_ATTR",rr,{transform:O,base:rr}),tr=ye(s,"ADD_DATA_URI_TAGS",nr,{transform:O,base:nr}),se=ye(s,"FORBID_CONTENTS",Yt,{transform:O}),Qe=ye(s,"FORBID_TAGS",q({}),{transform:O}),qn=ye(s,"FORBID_ATTR",q({}),{transform:O}),De=j(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?q(s.USE_PROFILES):s.USE_PROFILES:!1,Kn=s.ALLOW_ARIA_ATTR!==!1,Ft=s.ALLOW_DATA_ATTR!==!1,Xn=s.ALLOW_UNKNOWN_PROTOCOLS||!1,Zn=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,pe=s.SAFE_FOR_TEMPLATES||!1,et=s.SAFE_FOR_XML!==!1,Ee=s.WHOLE_DOCUMENT||!1,Oe=s.RETURN_DOM||!1,yt=s.RETURN_DOM_FRAGMENT||!1,wt=s.RETURN_TRUSTED_TYPE||!1,Vt=s.FORCE_BODY||!1,Jn=s.SANITIZE_DOM!==!1,Qn=s.SANITIZE_NAMED_PROPS||!1,Wt=s.KEEP_CONTENT!==!1,Gt=s.IN_PLACE||!1,Wn=ia(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:Xr,Pe=typeof s.NAMESPACE=="string"?s.NAMESPACE:ae,Zt=j(s,"MATHML_TEXT_INTEGRATION_POINTS")&&s.MATHML_TEXT_INTEGRATION_POINTS&&typeof s.MATHML_TEXT_INTEGRATION_POINTS=="object"?q(s.MATHML_TEXT_INTEGRATION_POINTS):T({},ir),Jt=j(s,"HTML_INTEGRATION_POINTS")&&s.HTML_INTEGRATION_POINTS&&typeof s.HTML_INTEGRATION_POINTS=="object"?q(s.HTML_INTEGRATION_POINTS):T({},sr);const l=j(s,"CUSTOM_ELEMENT_HANDLING")&&s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING=="object"?q(s.CUSTOM_ELEMENT_HANDLING):ze(null);if(I=ze(null),j(l,"tagNameCheck")&&ar(l.tagNameCheck)&&(I.tagNameCheck=l.tagNameCheck),j(l,"attributeNameCheck")&&ar(l.attributeNameCheck)&&(I.attributeNameCheck=l.attributeNameCheck),j(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(I.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),G(I),pe&&(Ft=!1),yt&&(Oe=!0),De&&(L=T({},Yr),N=ze(null),De.html===!0&&(T(L,Gr),T(N,qr)),De.svg===!0&&(T(L,gn),T(N,vn),T(N,Tt)),De.svgFilters===!0&&(T(L,yn),T(N,vn),T(N,Tt)),De.mathMl===!0&&(T(L,wn),T(N,Kr),T(N,Tt))),fe.tagCheck=null,fe.attributeCheck=null,j(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?fe.tagCheck=s.ADD_TAGS:be(s.ADD_TAGS)&&(L===Gn&&(L=q(L)),T(L,s.ADD_TAGS,O))),j(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?fe.attributeCheck=s.ADD_ATTR:be(s.ADD_ATTR)&&(N===Yn&&(N=q(N)),T(N,s.ADD_ATTR,O))),j(s,"ADD_URI_SAFE_ATTR")&&be(s.ADD_URI_SAFE_ATTR)&&T(qt,s.ADD_URI_SAFE_ATTR,O),j(s,"FORBID_CONTENTS")&&be(s.FORBID_CONTENTS)&&(se===Yt&&(se=q(se)),T(se,s.FORBID_CONTENTS,O)),j(s,"ADD_FORBID_CONTENTS")&&be(s.ADD_FORBID_CONTENTS)&&(se===Yt&&(se=q(se)),T(se,s.ADD_FORBID_CONTENTS,O)),Wt&&(L["#text"]=!0),Ee&&T(L,["html","head","body"]),L.table&&(T(L,["tbody"]),delete Qe.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const f=K;K=s.TRUSTED_TYPES_POLICY;try{Ae=Ie("")}catch(w){throw K=f,w}}else s.TRUSTED_TYPES_POLICY===null?(K=void 0,Ae=""):(K===void 0&&(K=Ei()),K&&typeof Ae=="string"&&(Ae=Ie("")));W&&W(s),Be=s},or=T({},[...gn,...yn,...sa]),lr=T({},[...wn,...aa]),Hi=function(s,l,f){return l.namespaceURI===ae?s==="svg":l.namespaceURI===vt?s==="svg"&&(f==="annotation-xml"||Zt[f]):!!or[s]},Fi=function(s,l,f){return l.namespaceURI===ae?s==="math":l.namespaceURI===bt?s==="math"&&Jt[f]:!!lr[s]},Ui=function(s,l,f){return l.namespaceURI===bt&&!Jt[f]||l.namespaceURI===vt&&!Zt[f]?!1:!lr[s]&&(Oi[s]||!or[s])},zi=function(s){let l=Ze(s);(!l||!l.tagName)&&(l={namespaceURI:Pe,tagName:"template"});const f=lt(s.tagName),w=lt(l.tagName);return Xt[s.namespaceURI]?s.namespaceURI===bt?Hi(f,l,w):s.namespaceURI===vt?Fi(f,l,w):s.namespaceURI===ae?Ui(f,l,w):!!(tt==="application/xhtml+xml"&&Xt[s.namespaceURI]):!1},me=function(s){Fe(e.removed,{element:s});try{Ze(s).removeChild(s)}catch{if(Ne(s),!Ze(s))throw Re("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},dr=function(s){const l=Xe(s);if(l){const w=[];st(l,E=>{Fe(w,E)}),st(w,E=>{try{Ne(E)}catch{}})}const f=Pt(s);if(f)for(let w=f.length-1;w>=0;--w){const E=f[w],S=E&&E.name;if(typeof S=="string")try{s.removeAttribute(S)}catch{}}},$e=function(s,l){try{Fe(e.removed,{attribute:l.getAttributeNode(s),from:l})}catch{Fe(e.removed,{attribute:null,from:l})}if(l.removeAttribute(s),s==="is")if(Oe||yt)try{me(l)}catch{}else try{l.setAttribute(s,"")}catch{}},ji=function(s){const l=Pt(s);if(l)for(let f=l.length-1;f>=0;--f){const w=l[f],E=w&&w.name;if(!(typeof E!="string"||N[O(E)]))try{s.removeAttribute(E)}catch{}}},Vi=function(s){const l=[s];for(;l.length>0;){const f=l.pop();(X?X(f):f.nodeType)===oe.element&&ji(f);const E=Xe(f);if(E)for(let S=E.length-1;S>=0;--S)l.push(E[S])}},ur=function(s){let l=null,f=null;if(Vt)s="<remove></remove>"+s;else{const S=zr(s,/^[\r\n\t ]+/);f=S&&S[0]}tt==="application/xhtml+xml"&&Pe===ae&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const w=K?Ie(s):s;if(Pe===ae)try{l=new g().parseFromString(w,tt)}catch{}if(!l||!l.documentElement){l=Ht.createDocument(Pe,"template",null);try{l.documentElement.innerHTML=Kt?Ae:w}catch{}}const E=l.body||l.documentElement;return s&&f&&E.insertBefore(t.createTextNode(f),E.childNodes[0]||null),Pe===ae?Ti.call(l,Ee?"html":"body")[0]:Ee?l.documentElement:E},cr=function(s){return jn.call(s.ownerDocument||s,s,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},_t=function(s){return s=at(s,Ri," "),s=at(s,xi," "),s=at(s,Ci," "),s},en=function(s){var l;s.normalize();const f=jn.call(s.ownerDocument||s,s,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let w=f.nextNode();for(;w;)w.data=_t(w.data),w=f.nextNode();const E=(l=s.querySelectorAll)===null||l===void 0?void 0:l.call(s,"template");E&&st(E,S=>{He(S.content)&&en(S.content)})},At=function(s){const l=he?he(s):null;return typeof l!="string"||O(l)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==Pt(s)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==X(s)||s.childNodes!==Xe(s)},He=function(s){if(!X||typeof s!="object"||s===null)return!1;try{return X(s)===oe.documentFragment}catch{return!1}},nt=function(s){if(!X||typeof s!="object"||s===null)return!1;try{return typeof X(s)=="number"}catch{return!1}};function ue(p,s,l){p.length!==0&&st(p,f=>{f.call(e,s,l,Be)})}const Wi=function(s,l){return!!(et&&s.hasChildNodes()&&!nt(s.firstElementChild)&&V(Zr,s.textContent)&&V(Zr,s.innerHTML)||et&&s.namespaceURI===ae&&l==="style"&&nt(s.firstElementChild)||s.nodeType===oe.processingInstruction||et&&s.nodeType===oe.comment&&V(ga,s.data))},Gi=function(s,l){if(!Qe[l]&&pr(l)&&(I.tagNameCheck instanceof RegExp&&V(I.tagNameCheck,l)||I.tagNameCheck instanceof Function&&I.tagNameCheck(l)))return!1;if(Wt&&!se[l]){const f=Ze(s),w=Xe(s);if(w&&f){const E=w.length;for(let S=E-1;S>=0;--S){const z=Gt?w[S]:M(w[S],!0);f.insertBefore(z,te(s))}}}return me(s),!0},hr=function(s){if(ue(B.beforeSanitizeElements,s,null),At(s))return me(s),!0;const l=O(he?he(s):s.nodeName);if(ue(B.uponSanitizeElement,s,{tagName:l,allowedTags:L}),Wi(s,l))return me(s),!0;if(Qe[l]||!(fe.tagCheck instanceof Function&&fe.tagCheck(l))&&!L[l])return Gi(s,l);if((X?X(s):s.nodeType)===oe.element&&!zi(s)||(l==="noscript"||l==="noembed"||l==="noframes")&&V(ya,s.innerHTML))return me(s),!0;if(pe&&s.nodeType===oe.text){const w=_t(s.textContent);s.textContent!==w&&(Fe(e.removed,{element:s.cloneNode()}),s.textContent=w)}return ue(B.afterSanitizeElements,s,null),!1},fr=function(s,l,f){if(qn[l]||Jn&&(l==="id"||l==="name")&&(f in t||f in Bi))return!1;const w=N[l]||fe.attributeCheck instanceof Function&&fe.attributeCheck(l,s);if(!(Ft&&V(Mi,l))){if(!(Kn&&V(ki,l))){if(w){if(!qt[l]){if(!V(Wn,at(f,Vn,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&s!=="script"&&jr(f,"data:")===0&&tr[s])){if(!(Xn&&!V(Li,at(f,Vn,"")))){if(f)return!1}}}}}else if(!(pr(s)&&(I.tagNameCheck instanceof RegExp&&V(I.tagNameCheck,s)||I.tagNameCheck instanceof Function&&I.tagNameCheck(s))&&(I.attributeNameCheck instanceof RegExp&&V(I.attributeNameCheck,l)||I.attributeNameCheck instanceof Function&&I.attributeNameCheck(l,s))||l==="is"&&I.allowCustomizedBuiltInElements&&(I.tagNameCheck instanceof RegExp&&V(I.tagNameCheck,f)||I.tagNameCheck instanceof Function&&I.tagNameCheck(f))))return!1}}return!0},Yi=T({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),pr=function(s){return!Yi[lt(s)]&&V(Ni,s)},qi=function(s,l,f,w){if(K&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!f)switch(y.getAttributeType(s,l)){case"TrustedHTML":return Ie(w);case"TrustedScriptURL":return Ai(w)}return w},Ki=function(s,l,f,w){try{f?s.setAttributeNS(f,l,w):s.setAttribute(l,w),At(s)?me(s):Ur(e.removed)}catch{$e(l,s)}},mr=function(s){ue(B.beforeSanitizeAttributes,s,null);const l=s.attributes;if(!l||At(s))return;const f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:N,forceKeepAttr:void 0};let w=l.length;const E=O(s.nodeName);for(;w--;){const S=l[w],z=S.name,H=S.namespaceURI,J=S.value,ne=O(z),nn=J;let Y=z==="value"?nn:Js(nn);if(f.attrName=ne,f.attrValue=Y,f.keepAttr=!0,f.forceKeepAttr=void 0,ue(B.uponSanitizeAttribute,s,f),Y=f.attrValue,Qn&&(ne==="id"||ne==="name")&&jr(Y,er)!==0&&($e(z,s),Y=er+Y),et&&V(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Y)){$e(z,s);continue}if(ne==="attributename"&&zr(Y,"href")){$e(z,s);continue}if(!f.forceKeepAttr){if(!f.keepAttr){$e(z,s);continue}if(!Zn&&V(wa,Y)){$e(z,s);continue}if(pe&&(Y=_t(Y)),!fr(E,ne,Y)){$e(z,s);continue}Y=qi(E,ne,H,Y),Y!==nn&&Ki(s,z,H,Y)}}ue(B.afterSanitizeAttributes,s,null)},Et=function(s){let l=null;const f=cr(s);for(ue(B.beforeSanitizeShadowDOM,s,null);l=f.nextNode();)if(ue(B.uponSanitizeShadowNode,l,null),hr(l),mr(l),He(l.content)&&Et(l.content),(X?X(l):l.nodeType)===oe.element){const E=Fn(l);He(E)&&(tn(E),Et(E))}ue(B.afterSanitizeShadowDOM,s,null)},tn=function(s){const l=[{node:s,shadow:null}];for(;l.length>0;){const f=l.pop();if(f.shadow){Et(f.shadow);continue}const w=f.node,S=(X?X(w):w.nodeType)===oe.element,z=Xe(w);if(z)for(let H=z.length-1;H>=0;--H)l.push({node:z[H],shadow:null});if(S){const H=he?he(w):null;if(typeof H=="string"&&O(H)==="template"){const J=w.content;He(J)&&l.push({node:J,shadow:null})}}if(S){const H=Fn(w);He(H)&&l.push({node:null,shadow:H},{node:H,shadow:null})}}};return e.sanitize=function(p){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,f=null,w=null,E=null;if(Kt=!p,Kt&&(p="<!-->"),typeof p!="string"&&!nt(p)&&(p=ra(p),typeof p!="string"))throw Re("dirty is not a string, aborting");if(!e.isSupported)return p;Ut?(L=zt,N=jt):Qt(s),(B.uponSanitizeElement.length>0||B.uponSanitizeAttribute.length>0)&&(L=q(L)),B.uponSanitizeAttribute.length>0&&(N=q(N)),e.removed=[];const S=Gt&&typeof p!="string"&&nt(p);if(S){const J=he?he(p):p.nodeName;if(typeof J=="string"){const ne=O(J);if(!L[ne]||Qe[ne])throw Re("root node is forbidden and cannot be sanitized in-place")}if(At(p))throw Re("root node is clobbered and cannot be sanitized in-place");try{tn(p)}catch(ne){throw dr(p),ne}}else if(nt(p))l=ur("<!---->"),f=l.ownerDocument.importNode(p,!0),f.nodeType===oe.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?l=f:l.appendChild(f),tn(f);else{if(!Oe&&!pe&&!Ee&&p.indexOf("<")===-1)return K&&wt?Ie(p):p;if(l=ur(p),!l)return Oe?null:wt?Ae:""}l&&Vt&&me(l.firstChild);const z=cr(S?p:l);try{for(;w=z.nextNode();)hr(w),mr(w),He(w.content)&&Et(w.content)}catch(J){throw S&&dr(p),J}if(S)return st(e.removed,J=>{J.element&&Vi(J.element)}),pe&&en(p),p;if(Oe){if(pe&&en(l),yt)for(E=$i.call(l.ownerDocument);l.firstChild;)E.appendChild(l.firstChild);else E=l;return(N.shadowroot||N.shadowrootmode)&&(E=Si.call(n,E,!0)),E}let H=Ee?l.outerHTML:l.innerHTML;return Ee&&L["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&V(pa,l.ownerDocument.doctype.name)&&(H="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+H),pe&&(H=_t(H)),K&&wt?Ie(H):H},e.setConfig=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Qt(p),Ut=!0,zt=L,jt=N},e.clearConfig=function(){Be=null,Ut=!1,zt=null,jt=null,K=Bt,Ae=""},e.isValidAttribute=function(p,s,l){Be||Qt({});const f=O(p),w=O(s);return fr(f,w,l)},e.addHook=function(p,s){typeof s=="function"&&j(B,p)&&Fe(B[p],s)},e.removeHook=function(p,s){if(j(B,p)){if(s!==void 0){const l=Xs(B[p],s);return l===-1?void 0:Zs(B[p],l,1)[0]}return Ur(B[p])}},e.removeHooks=function(p){j(B,p)&&(B[p]=[])},e.removeAllHooks=function(){B=Jr()},e}var Dn=bi();const Qr=C`var(--white, #fff)`,_a=C`var(--ia-theme-link-color, #4b64ff)`,Aa=C`var(--primaryDisableCTAFill, #767676)`,Ea=C`var(--secondaryCTABorder, #999)`,$a=C`var(--primaryCTAFill, #194880)`,bn=C`var(--primaryCTAFillRGB, 25, 72, 128)`,Ta=C`var(--primaryCTABorder, #c5d1df)`,Sa=C`var(--primaryErrorCTAFill, #d9534f)`,_n=C`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Ra=C`var(--primaryErrorCTABorder, #d43f3a)`,xa=C`var(--secondaryCTAFill, #333)`,An=C`var(--secondaryCTAFillRGB, 51, 51, 51)`,Ca=C`var(--primaryCTABorder, #979797)`,Ma=C`var(---primaryWarningFill, #ee8950)`,En=C`var(--primaryWarningFillRGB, 238, 137, 80)`,ka=C`var(--primaryWarningBorder, #ec7939)`,_i=C`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Qr};
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
    outline-color: ${Qr};
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
    background-color: ${Aa};
    border: 1px solid ${Ea};
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
    background-color: ${$a};
    border-color: ${Ta};
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
    background-color: ${Sa};
    border-color: ${Ra};
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
    background-color: ${Ma};
    border-color: ${ka};
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
    background-color: ${xa};
    border-color: ${Ca};
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
    color: ${_a};
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
`;var ei;(function(i){i.processing="processing",i.complete="complete"})(ei||(ei={}));let Pn=class extends ce{constructor(){super(...arguments),this.mode="processing"}render(){return _`
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
    `}};d([A({type:String})],Pn.prototype,"mode",void 0);Pn=d([mt("ia-activity-indicator")],Pn);const La=Ot`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Na=Ot`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ia=Ot`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function ti(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return _`<span title="${i}">${t}</span>`}const Oa=["a"];function Da(i){return Dn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Dn.sanitize(i,{ALLOWED_TAGS:Oa})}function Pa(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return Ba(i,n,e)}function Ba(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),c=o-t<=20;if(c&&i.length===o+4)return i;if(o!==-1&&c)n=i.slice(0,o+4);else{const u=n.lastIndexOf("<a");n=i.slice(0,u)}}}return n.concat("...")}const Ha=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Fa(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Ha,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Ua(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const za=Ot`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let Q=class extends ce{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?_`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?_`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${za}
                  </button>
                `:$}
            <div class="top-line">
              <b>${R("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${R("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?_`<i>${R(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:_`
          <div class="error">
            ${R("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return $;const n=Da(t),r=this.truncateContent(n,this.maxBodyLength);return _`${yi(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?$:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return _`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${R("More...")}
      </button>
    `}get lessButtonTemplate(){return _`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${R("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?_`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${ti(this.review.reviewer)}
            </a>
          `:_`${ti(this.review.reviewer)}`:$}get starsTemplate(){return!this.review||!this.review.stars?$:_`
      <div
        class="review-stars"
        title="${R(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>_`<div class="review-star">${Ia}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return $;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return R(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:Pa(e,t)}prepReview(e){return Ua(Fa(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(R("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return C`
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
    `}};d([A({type:Object})],Q.prototype,"review",void 0);d([A({type:String})],Q.prototype,"identifier",void 0);d([A({type:Number})],Q.prototype,"maxSubjectLength",void 0);d([A({type:Number})],Q.prototype,"maxBodyLength",void 0);d([A({type:String})],Q.prototype,"baseHost",void 0);d([A({type:String})],Q.prototype,"csrfToken",void 0);d([A({type:Boolean})],Q.prototype,"canDelete",void 0);d([A({type:Boolean})],Q.prototype,"bypassTruncation",void 0);d([P()],Q.prototype,"showTruncatedContent",void 0);d([P()],Q.prototype,"deleteMsg",void 0);Q=d([mt("ia-review")],Q);let D=class extends ce{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return _`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:_`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,o,c,u,h;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(h=(u=(c=this.oldReview)===null||c===void 0?void 0:c.reviewbody)===null||u===void 0?void 0:u.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?_`
          <div class="unrecoverable-error">
            <span class="error-msg">${R(this.unrecoverableError)}</span>
          </div>
        `:$}get recoverableErrorTemplate(){return this.recoverableError?_`
          <div class="recoverable-error">
            ${yi(this.sanitizeErrorMsg(R(this.recoverableError)))}
          </div>
        `:$}get recaptchaMessageTemplate(){return this.bypassRecaptcha?$:_`
      <span class="recaptcha-disclaimer"
        >${R(_`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return _`
      <div class="form-heading rating">
        <label for="stars-field">${R("Rating (optional)")}</label>
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
          ${R("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return _`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${R("Subject")}</label>
        ${this.maxSubjectLength?_`<div class="char-count subject">
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
    />${this.maxSubjectLength?_`
            <div class="input-error">
              ${R(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:$}</div></span>
    `}get bodyInputTemplate(){var e,t;return _`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${R("Review")}</label>
          ${this.maxBodyLength?_`<div class="char-count body">
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
        ${this.maxBodyLength?_`
              <div class="input-error">
                ${R(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:$}
      </span>
    `}get hiddenInputsTemplate(){return _`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?_`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:$}
    `}get actionButtonsTemplate(){return _`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${R("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?_`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:R("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=R(`Rate ${e>1?`${e} stars`:"1 star"}`);return _`
      <button
        class="star star-${e}"
        title=${t?R("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?La:Na}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Dn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,o;const c=new Date().toDateString();return new re({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:c,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&o!==void 0?o:c})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[_i,C`
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
      `]}};d([A({type:String})],D.prototype,"identifier",void 0);d([A({type:String})],D.prototype,"token",void 0);d([A({type:String})],D.prototype,"baseHost",void 0);d([A({type:String})],D.prototype,"endpointPath",void 0);d([A({type:String})],D.prototype,"submitterScreenname",void 0);d([A({type:String})],D.prototype,"submitterItemname",void 0);d([A({type:Object})],D.prototype,"oldReview",void 0);d([A({type:String})],D.prototype,"unrecoverableError",void 0);d([A({type:Number})],D.prototype,"maxSubjectLength",void 0);d([A({type:Number})],D.prototype,"maxBodyLength",void 0);d([A({type:Object})],D.prototype,"fetchHandler",void 0);d([A({type:Object})],D.prototype,"recaptchaManager",void 0);d([A({type:Boolean})],D.prototype,"bypassRecaptcha",void 0);d([P()],D.prototype,"currentStars",void 0);d([P()],D.prototype,"currentSubjectLength",void 0);d([P()],D.prototype,"currentBodyLength",void 0);d([P()],D.prototype,"recoverableError",void 0);d([P()],D.prototype,"formCanSubmit",void 0);d([P()],D.prototype,"submissionInProgress",void 0);d([gi("#review-form")],D.prototype,"reviewForm",void 0);D=d([mt("ia-review-form")],D);class ja{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(o=>{const c=n[o];r.searchParams.append(o,c)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class Va{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Wa{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new ja,this.analyticsHelpers=new Va(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ga(i){return new Promise(e=>setTimeout(e,i))}class Ya{constructor(e){this.analyticsHandler=new Wa({enableAnalytics:!0}),this.sleep=Ga,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class qa{constructor(e){this.fetchRetrier=new Ya,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,o]of Object.entries(t))r.searchParams.set(a,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let k=class extends ce{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new qa,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?_`
      <div class="reviews-list">
        ${this.reviewsFrozen?_`<div class="message">
              ${R("Reviews can no longer be added to this item.")}
            </div>`:$}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):$)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return _`<div class="message">
      ${R("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?_`
        <div class="message">
          ${R("Reviews cannot be added to this item.")}
        </div>
      `:_`
      <div class="message">
        ${R("There are no reviews yet.")}
        ${R(_`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return _`
      <div class="message">
        ${this.reviewsCount===1?R("There is 1 review for this item."):R(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${R(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?$:_`<div class="own-review-container">
      ${this.displayReviewForm?_`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?_`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:$}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[_i,C`
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
      `]}};d([A({type:String})],k.prototype,"identifier",void 0);d([A({type:Array})],k.prototype,"reviews",void 0);d([A({type:Boolean})],k.prototype,"reviewsDisabled",void 0);d([A({type:Boolean})],k.prototype,"reviewsFrozen",void 0);d([A({type:Boolean})],k.prototype,"canDelete",void 0);d([A({type:Boolean})],k.prototype,"displayReviewsByDefault",void 0);d([A({type:Number})],k.prototype,"maxSubjectLength",void 0);d([A({type:Number})],k.prototype,"maxBodyLength",void 0);d([A({type:String})],k.prototype,"baseHost",void 0);d([A({type:String})],k.prototype,"token",void 0);d([A({type:String})],k.prototype,"endpointPath",void 0);d([A({type:String})],k.prototype,"submitterScreenname",void 0);d([A({type:String})],k.prototype,"submitterItemname",void 0);d([A({type:Object})],k.prototype,"recaptchaManager",void 0);d([A({type:Boolean})],k.prototype,"bypassRecaptcha",void 0);d([A({type:String})],k.prototype,"reviewSubmissionError",void 0);d([A({type:Boolean})],k.prototype,"reviewAddEditRequested",void 0);d([A({type:Object})],k.prototype,"fetchHandler",void 0);d([P()],k.prototype,"displayReviewForm",void 0);d([P()],k.prototype,"displayReviews",void 0);d([P()],k.prototype,"filteredReviews",void 0);d([P()],k.prototype,"currentReview",void 0);d([P()],k.prototype,"reviewsCount",void 0);d([P()],k.prototype,"recaptchaActivated",void 0);k=d([mt("ia-reviews")],k);class Ka{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let ee=class extends ce{constructor(){super(...arguments),this.mockOldReview=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new re({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new re({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new re({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new Ka,this.mockRecaptchaManager=new Ns({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return _` <h2>General settings</h2>
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
      </div>`}renderReviewToggle(e,t){return _`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};ee.styles=C`
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
  `;d([P()],ee.prototype,"bypassRecaptcha",void 0);d([P()],ee.prototype,"unrecoverableError",void 0);d([P()],ee.prototype,"useCharCounts",void 0);d([P()],ee.prototype,"allowDeletion",void 0);d([P()],ee.prototype,"useExistingReviews",void 0);d([P()],ee.prototype,"review",void 0);d([P()],ee.prototype,"reviewsDisabled",void 0);d([P()],ee.prototype,"reviewsFrozen",void 0);d([gi("ia-reviews")],ee.prototype,"reviewsComponent",void 0);ee=d([mt("app-root")],ee);
