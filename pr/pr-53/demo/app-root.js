(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function l(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function xt(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(g){try{f(n.next(g))}catch(y){o(y)}}function u(g){try{f(n.throw(g))}catch(y){o(y)}}function f(g){g.done?s(g.value):r(g.value).then(c,u)}f((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=window,Fn=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Un=Symbol(),pr=new WeakMap;let Qr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Un)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Fn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=pr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&pr.set(t,e))}return e}toString(){return this.cssText}};const Pi=i=>new Qr(typeof i=="string"?i:i+"",void 0,Un),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new Qr(t,i,Un)},Bi=(i,e)=>{Fn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=Mt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},mr=Fn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Pi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sn;const kt=window,gr=kt.trustedTypes,Hi=gr?gr.emptyScript:"",yr=kt.reactiveElementPolyfillSupport,Sn={toAttribute(i,e){switch(e){case Boolean:i=i?Hi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ei=(i,e)=>e!==i&&(e==e||i==i),on={attribute:!0,type:String,converter:Sn,reflect:!1,hasChanged:ei},Rn="finalized";let je=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=on){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||on}static finalize(){if(this.hasOwnProperty(Rn))return!1;this[Rn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(mr(r))}else e!==void 0&&t.push(mr(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Bi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=on){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Sn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Sn;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ei)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};je[Rn]=!0,je.elementProperties=new Map,je.elementStyles=[],je.shadowRootOptions={mode:"open"},yr==null||yr({ReactiveElement:je}),((sn=kt.reactiveElementVersions)!==null&&sn!==void 0?sn:kt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ln;const Lt=window,We=Lt.trustedTypes,wr=We?We.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,ti="?"+be,Fi=`<${ti}>`,Le=document,Nt=()=>Le.createComment(""),dt=i=>i===null||typeof i!="object"&&typeof i!="function",ni=Array.isArray,Ui=i=>ni(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dn=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vr=/-->/g,br=/>/g,Se=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_r=/'/g,Ar=/"/g,ri=/^(?:script|style|textarea|title)$/i,Ge=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Er=new WeakMap,Ce=Le.createTreeWalker(Le,129,null,!1);function ii(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return wr!==void 0?wr.createHTML(e):e}const zi=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=at;for(let c=0;c<t;c++){const u=i[c];let f,g,y=-1,b=0;for(;b<u.length&&(o.lastIndex=b,g=o.exec(u),g!==null);)b=o.lastIndex,o===at?g[1]==="!--"?o=vr:g[1]!==void 0?o=br:g[2]!==void 0?(ri.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Se):g[3]!==void 0&&(o=Se):o===Se?g[0]===">"?(o=r??at,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,f=g[1],o=g[3]===void 0?Se:g[3]==='"'?Ar:_r):o===Ar||o===_r?o=Se:o===vr||o===br?o=at:(o=Se,r=void 0);const M=o===Se&&i[c+1].startsWith("/>")?" ":"";s+=o===at?u+Fi:y>=0?(n.push(f),u.slice(0,y)+xn+u.slice(y)+be+M):u+be+(y===-2?(n.push(void 0),c):M)}return[ii(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Cn=class ai{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,u=this.parts,[f,g]=zi(e,t);if(this.el=ai.createElement(f,n),Ce.currentNode=this.el.content,t===2){const y=this.el.content,b=y.firstChild;b.remove(),y.append(...b.childNodes)}for(;(r=Ce.nextNode())!==null&&u.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const b of r.getAttributeNames())if(b.endsWith(xn)||b.startsWith(be)){const M=g[o++];if(y.push(b),M!==void 0){const Ie=r.getAttribute(M.toLowerCase()+xn).split(be),ne=/([.?@])?(.*)/.exec(M);u.push({type:1,index:s,name:ne[2],strings:Ie,ctor:ne[1]==="."?Vi:ne[1]==="?"?Gi:ne[1]==="@"?Yi:Bt})}else u.push({type:6,index:s})}for(const b of y)r.removeAttribute(b)}if(ri.test(r.tagName)){const y=r.textContent.split(be),b=y.length-1;if(b>0){r.textContent=We?We.emptyScript:"";for(let M=0;M<b;M++)r.append(y[M],Nt()),Ce.nextNode(),u.push({type:2,index:++s});r.append(y[b],Nt())}}}else if(r.nodeType===8)if(r.data===ti)u.push({type:2,index:s});else{let y=-1;for(;(y=r.data.indexOf(be,y+1))!==-1;)u.push({type:7,index:s}),y+=be.length-1}s++}}static createElement(e,t){const n=Le.createElement("template");return n.innerHTML=e,n}};function Ye(i,e,t=i,n){var r,s,o,c;if(e===Ge)return e;let u=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const f=dt(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==f&&((s=u==null?void 0:u._$AO)===null||s===void 0||s.call(u,!1),f===void 0?u=void 0:(u=new f(i),u._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=u:t._$Cl=u),u!==void 0&&(e=Ye(i,u._$AS(i,e.values),u,n)),e}let ji=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Le).importNode(n,!0);Ce.currentNode=s;let o=Ce.nextNode(),c=0,u=0,f=r[0];for(;f!==void 0;){if(c===f.index){let g;f.type===2?g=new si(o,o.nextSibling,this,e):f.type===1?g=new f.ctor(o,f.name,f.strings,this,e):f.type===6&&(g=new qi(o,this,e)),this._$AV.push(g),f=r[++u]}c!==(f==null?void 0:f.index)&&(o=Ce.nextNode(),c++)}return Ce.currentNode=Le,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},si=class oi{constructor(e,t,n,r){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),dt(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Ge&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ui(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Le.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Cn.createElement(ii(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new ji(s,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Er.get(e.strings);return t===void 0&&Er.set(e.strings,t=new Cn(e)),t}T(e){ni(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new oi(this.k(Nt()),this.k(Nt()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Bt=class{constructor(e,t,n,r,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=Ye(this,e,t,0),o=!dt(e)||e!==this._$AH&&e!==Ge,o&&(this._$AH=e);else{const c=e;let u,f;for(e=s[0],u=0;u<s.length-1;u++)f=Ye(this,c[n+u],t,u),f===Ge&&(f=this._$AH[u]),o||(o=!dt(f)||f!==this._$AH[u]),f===U?e=U:e!==U&&(e+=(f??"")+s[u+1]),this._$AH[u]=f}o&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vi=class extends Bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const Wi=We?We.emptyScript:"";let Gi=class extends Bt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,Wi):this.element.removeAttribute(this.name)}},Yi=class extends Bt{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ye(this,e,t,0))!==null&&n!==void 0?n:U)===Ge)return;const r=this._$AH,s=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},qi=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};const $r=Lt.litHtmlPolyfillSupport;$r==null||$r(Cn,si),((ln=Lt.litHtmlVersions)!==null&&ln!==void 0?ln:Lt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un;const It=window,qe=It.trustedTypes,Tr=qe?qe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Mn="$lit$",_e=`lit$${(Math.random()+"").slice(9)}$`,li="?"+_e,Ki=`<${li}>`,Ne=document,ut=()=>Ne.createComment(""),ct=i=>i===null||typeof i!="object"&&typeof i!="function",di=Array.isArray,Xi=i=>di(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",cn=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sr=/-->/g,Rr=/>/g,Re=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xr=/'/g,Cr=/"/g,ui=/^(?:script|style|textarea|title)$/i,ci=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=ci(1),Ht=ci(2),Ke=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Mr=new WeakMap,Me=Ne.createTreeWalker(Ne,129,null,!1);function hi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tr!==void 0?Tr.createHTML(e):e}const Zi=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=st;for(let c=0;c<t;c++){const u=i[c];let f,g,y=-1,b=0;for(;b<u.length&&(o.lastIndex=b,g=o.exec(u),g!==null);)b=o.lastIndex,o===st?g[1]==="!--"?o=Sr:g[1]!==void 0?o=Rr:g[2]!==void 0?(ui.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Re):g[3]!==void 0&&(o=Re):o===Re?g[0]===">"?(o=r??st,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,f=g[1],o=g[3]===void 0?Re:g[3]==='"'?Cr:xr):o===Cr||o===xr?o=Re:o===Sr||o===Rr?o=st:(o=Re,r=void 0);const M=o===Re&&i[c+1].startsWith("/>")?" ":"";s+=o===st?u+Ki:y>=0?(n.push(f),u.slice(0,y)+Mn+u.slice(y)+_e+M):u+_e+(y===-2?(n.push(void 0),c):M)}return[hi(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ht{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,u=this.parts,[f,g]=Zi(e,t);if(this.el=ht.createElement(f,n),Me.currentNode=this.el.content,t===2){const y=this.el.content,b=y.firstChild;b.remove(),y.append(...b.childNodes)}for(;(r=Me.nextNode())!==null&&u.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const b of r.getAttributeNames())if(b.endsWith(Mn)||b.startsWith(_e)){const M=g[o++];if(y.push(b),M!==void 0){const Ie=r.getAttribute(M.toLowerCase()+Mn).split(_e),ne=/([.?@])?(.*)/.exec(M);u.push({type:1,index:s,name:ne[2],strings:Ie,ctor:ne[1]==="."?Qi:ne[1]==="?"?ta:ne[1]==="@"?na:Ft})}else u.push({type:6,index:s})}for(const b of y)r.removeAttribute(b)}if(ui.test(r.tagName)){const y=r.textContent.split(_e),b=y.length-1;if(b>0){r.textContent=qe?qe.emptyScript:"";for(let M=0;M<b;M++)r.append(y[M],ut()),Me.nextNode(),u.push({type:2,index:++s});r.append(y[b],ut())}}}else if(r.nodeType===8)if(r.data===li)u.push({type:2,index:s});else{let y=-1;for(;(y=r.data.indexOf(_e,y+1))!==-1;)u.push({type:7,index:s}),y+=_e.length-1}s++}}static createElement(e,t){const n=Ne.createElement("template");return n.innerHTML=e,n}}function Xe(i,e,t=i,n){var r,s,o,c;if(e===Ke)return e;let u=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const f=ct(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==f&&((s=u==null?void 0:u._$AO)===null||s===void 0||s.call(u,!1),f===void 0?u=void 0:(u=new f(i),u._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=u:t._$Cl=u),u!==void 0&&(e=Xe(i,u._$AS(i,e.values),u,n)),e}class Ji{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ne).importNode(n,!0);Me.currentNode=s;let o=Me.nextNode(),c=0,u=0,f=r[0];for(;f!==void 0;){if(c===f.index){let g;f.type===2?g=new pt(o,o.nextSibling,this,e):f.type===1?g=new f.ctor(o,f.name,f.strings,this,e):f.type===6&&(g=new ra(o,this,e)),this._$AV.push(g),f=r[++u]}c!==(f==null?void 0:f.index)&&(o=Me.nextNode(),c++)}return Me.currentNode=Ne,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class pt{constructor(e,t,n,r){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),ct(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ne.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ht.createElement(hi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new Ji(s,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Mr.get(e.strings);return t===void 0&&Mr.set(e.strings,t=new ht(e)),t}T(e){di(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new pt(this.k(ut()),this.k(ut()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ft{constructor(e,t,n,r,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=Xe(this,e,t,0),o=!ct(e)||e!==this._$AH&&e!==Ke,o&&(this._$AH=e);else{const c=e;let u,f;for(e=s[0],u=0;u<s.length-1;u++)f=Xe(this,c[n+u],t,u),f===Ke&&(f=this._$AH[u]),o||(o=!ct(f)||f!==this._$AH[u]),f===S?e=S:e!==S&&(e+=(f??"")+s[u+1]),this._$AH[u]=f}o&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qi extends Ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}const ea=qe?qe.emptyScript:"";class ta extends Ft{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,ea):this.element.removeAttribute(this.name)}}class na extends Ft{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Xe(this,e,t,0))!==null&&n!==void 0?n:S)===Ke)return;const r=this._$AH,s=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==S&&(r===S||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ra{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}}const kr=It.litHtmlPolyfillSupport;kr==null||kr(ht,pt),((un=It.litHtmlVersions)!==null&&un!==void 0?un:It.litHtmlVersions=[]).push("2.8.0");const ia=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new pt(e.insertBefore(ut(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hn,fn;class fe extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ke}}fe.finalized=!0,fe._$litElement$=!0,(hn=globalThis.litElementHydrateSupport)===null||hn===void 0||hn.call(globalThis,{LitElement:fe});const Lr=globalThis.litElementPolyfillSupport;Lr==null||Lr({LitElement:fe});((fn=globalThis.litElementVersions)!==null&&fn!==void 0?fn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const aa=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},sa=(i,e,t)=>{e.constructor.createProperty(t,i)};function $(i){return(e,t)=>t!==void 0?sa(i,e,t):aa(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(i){return $({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(o.finisher=function(c){i(c,s)}),o}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fi(i,e){return oa({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pn;((pn=window.HTMLSlotElement)===null||pn===void 0?void 0:pn.prototype.assignedElements)!=null;function m(i){let e,t,n;return e=i,(r,s,o)=>{if(o.value!=null)o.value=Nr(o.value,e,t,n);else if(o.get!=null)o.get=Nr(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const mn=new Map;function Nr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...s){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[r];if(Array.isArray(n))for(const u of n)mn.has(u)?mn.get(u).push(c):mn.set(u,[c]);if(e||s.length>0||t>0){let u;e===!0?u=s.map(y=>y.toString()).join("!"):e?u=e.apply(this,s):u=s[0];const f=`${u}__timestamp`;let g=!1;if(t>0)if(!c.has(f))g=!0;else{let y=c.get(f);g=Date.now()-y>t}c.has(u)&&!g?o=c.get(u):(o=i.apply(this,s),c.set(u,o),t>0&&c.set(f,Date.now()))}else{const u=this;c.has(u)?o=c.get(u):(o=i.apply(this,s),c.set(u,o))}return o}}class kn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}kn.shared=new kn;class Ae{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ae.shared=new Ae;class Dt{parseValue(e){return Ae.shared.parseValue(e)}}Dt.shared=new Dt;class ft{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ft.shared=new ft;class Ot{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,s)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const u=60**(e.length-1-s);return o*Math.floor(u)}).reduce((r,s)=>r+s,0);return t?void 0:n}}Ot.shared=new Ot;class Ln{parseValue(e){if(typeof e=="string")return e}}Ln.shared=new Ln;class la{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return n.forEach(s=>{s!==void 0&&r.push(s)}),r}}class Nn{parseValue(e){if(typeof e=="string")return e}}Nn.shared=new Nn;class Pt{parseValue(e){return String(e)}}Pt.shared=new Pt;class ae{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([m()],ae.prototype,"values",null);l([m()],ae.prototype,"value",null);class da extends ae{constructor(e){super(kn.shared,e)}}class ve extends ae{constructor(e){super(ft.shared,e)}}class gn extends ae{constructor(e){super(Ot.shared,e)}}class J extends ae{constructor(e){super(Ae.shared,e)}}class x extends ae{constructor(e){super(Pt.shared,e)}}class ua extends ae{constructor(e){super(Nn.shared,e)}}class Ir extends ae{constructor(e){super(Dt.shared,e)}}class ca extends ae{constructor(e){super(Ln.shared,e)}}class ha extends ae{constructor(e,t){super(t,e)}}class fa extends ha{constructor(e){const t=new la(Pt.shared);super(e,t)}}class w{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ve(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new x(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new J(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new J(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new x(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new x(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Ir(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new x(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new x(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new x(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new x(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ve(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new x(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new J(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new gn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new x(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new J(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ve(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new x(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new x(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new J(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Ir(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new x(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new gn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new x(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new J(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new ca(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new da(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new x(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new J(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new J(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new x(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new x(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new ua(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new x(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new J(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ve(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new x(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ve(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new gn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new x(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new x(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ve(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ve(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ve(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new fa(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new x(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new x(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new x(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new J(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new x(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new x(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new J(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new x(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new x(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new J(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new J(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([m()],w.prototype,"addeddate",null);l([m()],w.prototype,"audio_codec",null);l([m()],w.prototype,"audio_sample_rate",null);l([m()],w.prototype,"avg_rating",null);l([m()],w.prototype,"collection",null);l([m()],w.prototype,"collections_raw",null);l([m()],w.prototype,"collection_size",null);l([m()],w.prototype,"contributor",null);l([m()],w.prototype,"coverage",null);l([m()],w.prototype,"creator",null);l([m()],w.prototype,"collection_layout",null);l([m()],w.prototype,"date",null);l([m()],w.prototype,"description",null);l([m()],w.prototype,"downloads",null);l([m()],w.prototype,"duration",null);l([m()],w.prototype,"external_identifier",null);l([m()],w.prototype,"files_count",null);l([m()],w.prototype,"indexdate",null);l([m()],w.prototype,"isbn",null);l([m()],w.prototype,"issue",null);l([m()],w.prototype,"item_count",null);l([m()],w.prototype,"item_size",null);l([m()],w.prototype,"language",null);l([m()],w.prototype,"length",null);l([m()],w.prototype,"lineage",null);l([m()],w.prototype,"month",null);l([m()],w.prototype,"mediatype",null);l([m()],w.prototype,"noindex",null);l([m()],w.prototype,"notes",null);l([m()],w.prototype,"num_favorites",null);l([m()],w.prototype,"num_reviews",null);l([m()],w.prototype,"openlibrary_edition",null);l([m()],w.prototype,"openlibrary_work",null);l([m()],w.prototype,"page_progression",null);l([m()],w.prototype,"partner",null);l([m()],w.prototype,"ppi",null);l([m()],w.prototype,"publicdate",null);l([m()],w.prototype,"publisher",null);l([m()],w.prototype,"reviewdate",null);l([m()],w.prototype,"runtime",null);l([m()],w.prototype,"scanner",null);l([m()],w.prototype,"source",null);l([m()],w.prototype,"start_localtime",null);l([m()],w.prototype,"start_time",null);l([m()],w.prototype,"stop_time",null);l([m()],w.prototype,"subject",null);l([m()],w.prototype,"taper",null);l([m()],w.prototype,"title",null);l([m()],w.prototype,"transferer",null);l([m()],w.prototype,"track",null);l([m()],w.prototype,"type",null);l([m()],w.prototype,"uploader",null);l([m()],w.prototype,"utc_offset",null);l([m()],w.prototype,"venue",null);l([m()],w.prototype,"volume",null);l([m()],w.prototype,"week",null);l([m()],w.prototype,"year",null);class Ze{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Dt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Ot.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?Ae.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?Ae.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?Ae.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([m()],Ze.prototype,"size",null);l([m()],Ze.prototype,"length",null);l([m()],Ze.prototype,"height",null);l([m()],Ze.prototype,"width",null);l([m()],Ze.prototype,"track",null);class ie{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?ft.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ft.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?Ae.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([m()],ie.prototype,"reviewdate",null);l([m()],ie.prototype,"createdate",null);l([m()],ie.prototype,"stars",null);class pa{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Ze(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new w(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new ie(r))}}var ke;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(ke||(ke={}));class In extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class ma{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,o)}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(ke.networkError,c)}try{const o=await s.json(),c=o.error;if(c){const u=o.forensics;return this.getErrorResult(ke.searchEngineError,c,u)}else return{success:o}}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(ke.decodingError,c)}}getErrorResult(e,t,n){return{error:new In(e,t,n)}}}class Dr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new In(ke.itemNotFound)}:{success:new pa(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new In(ke.itemNotFound)}:{success:r.success.result}}}Dr.default=new Dr(new ma);let ga=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function ya(i){return new Promise(e=>setTimeout(e,i))}var ue;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(ue||(ue={}));const Or="lazyLoaderService";class wa{constructor(e){var t,n,r;this.emitter=ga(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return xt(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return xt(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return xt(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${ue.owner}='${Or}'][${ue.retryNumber}='${n}']`;let s=this.container.querySelector(r);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(s)),new Promise((o,c)=>{if(s.getAttribute(ue.dynamicImportLoaded)){o();return}const u=e.scriptBeingRetried,f=s.onload||(u==null?void 0:u.onload);s.onload=y=>{f==null||f(y),s.setAttribute(ue.dynamicImportLoaded,"true"),o()};const g=s.onerror||(u==null?void 0:u.onerror);s.onerror=y=>xt(this,void 0,void 0,function*(){const b=s.getAttribute(ue.hasBeenRetried);if(n<this.retryCount&&!b){s.setAttribute(ue.hasBeenRetried,"true"),yield ya(this.retryInterval*1e3);const M=n+1;this.emitter.emit("scriptLoadRetried",e.src,M),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:M,scriptBeingRetried:s}))}else b||this.emitter.emit("scriptLoadFailed",e.src,y),g==null||g(y),c(y)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),s=e.retryNumber;r.setAttribute(ue.owner,Or),r.setAttribute("src",n),r.setAttribute(ue.retryNumber,s.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(c=>{r.setAttribute(c,o[c])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class va{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class ba{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new wa,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const s=await this.getRecaptchaLibrary(),o=new va({siteKey:n,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=i=>typeof i!="string"&&"strTag"in i,Aa=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ea=i=>_a(i)?Aa(i.strings,i.values):i;let R=Ea;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $a{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ta=new $a;Ta.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ra=i=>(...e)=>({_$litDirective$:i,values:e});class xa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dn extends xa{constructor(e){if(super(e),this.et=U,e.type!==Sa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this.ft=void 0,this.et=e;if(e===Ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Dn.directiveName="unsafeHTML",Dn.resultType=1;const pi=Ra(Dn);/*! @license DOMPurify 3.4.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.9/LICENSE */function Pr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Ca(i){if(Array.isArray(i))return i}function Ma(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,s,o,c=[],u=!0,f=!1;try{if(s=(t=t.call(i)).next,e!==0)for(;!(u=(n=s.call(t)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(g){f=!0,r=g}finally{try{if(!u&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(f)throw r}}return c}}function ka(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function La(i,e){return Ca(i)||Ma(i,e)||Na(i,e)||ka()}function Na(i,e){if(i){if(typeof i=="string")return Pr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pr(i,e):void 0}}const mi=Object.entries,Br=Object.setPrototypeOf,Ia=Object.isFrozen,Da=Object.getPrototypeOf,Oa=Object.getOwnPropertyDescriptor;let K=Object.freeze,Q=Object.seal,Ve=Object.create,gi=typeof Reflect<"u"&&Reflect,On=gi.apply,Pn=gi.construct;K||(K=function(e){return e});Q||(Q=function(e){return e});On||(On=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return e.apply(t,r)});Pn||(Pn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const he=z(Array.prototype.forEach),Pa=z(Array.prototype.lastIndexOf),Hr=z(Array.prototype.pop),Ue=z(Array.prototype.push),Ba=z(Array.prototype.splice),q=Array.isArray,lt=z(String.prototype.toLowerCase),yn=z(String.prototype.toString),Fr=z(String.prototype.match),ze=z(String.prototype.replace),Ur=z(String.prototype.indexOf),Ha=z(String.prototype.trim),Fa=z(Number.prototype.toString),Ua=z(Boolean.prototype.toString),zr=typeof BigInt>"u"?null:z(BigInt.prototype.toString),jr=typeof Symbol>"u"?null:z(Symbol.prototype.toString),I=z(Object.prototype.hasOwnProperty),ot=z(Object.prototype.toString),G=z(RegExp.prototype.test),xe=za(TypeError);function z(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return On(i,e,n)}}function za(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Pn(i,t)}}function E(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:lt;if(Br&&Br(i,null),!q(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const s=t(r);s!==r&&(Ia(e)||(e[n]=s),r=s)}i[r]=!0}return i}function ja(i){for(let e=0;e<i.length;e++)I(i,e)||(i[e]=null);return i}function Y(i){const e=Ve(null);for(const n of mi(i)){var t=La(n,2);const r=t[0],s=t[1];I(i,r)&&(q(s)?e[r]=ja(s):s&&typeof s=="object"&&s.constructor===Object?e[r]=Y(s):e[r]=s)}return e}function Va(i){switch(typeof i){case"string":return i;case"number":return Fa(i);case"boolean":return Ua(i);case"bigint":return zr?zr(i):"0";case"symbol":return jr?jr(i):"Symbol()";case"undefined":return ot(i);case"function":case"object":{if(i===null)return ot(i);const e=i,t=de(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:ot(n)}return ot(i)}default:return ot(i)}}function de(i,e){for(;i!==null;){const n=Oa(i,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}i=Da(i)}function t(){return null}return t}function Wa(i){try{return G(i,""),!0}catch{return!1}}const Vr=K(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wn=K(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vn=K(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ga=K(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),bn=K(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ya=K(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Wr=K(["#text"]),Gr=K(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),_n=K(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Yr=K(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ct=K(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qa=Q(/{{[\w\W]*|^[\w\W]*}}/g),Ka=Q(/<%[\w\W]*|^[\w\W]*%>/g),Xa=Q(/\${[\w\W]*/g),Za=Q(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ja=Q(/^aria-[\-\w]+$/),qr=Q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Qa=Q(/^(?:\w+script|data):/i),es=Q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ts=Q(/^html$/i),ns=Q(/^[a-z][.\w]*(-[.\w]+)+$/i),le={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},rs=function(){return typeof window>"u"?null:window},is=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Kr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function yi(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:rs();const e=p=>yi(p);if(e.version="3.4.9",e.removed=[],!i||!i.document||i.document.nodeType!==le.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const s=i.HTMLTemplateElement,o=i.Node,c=i.Element,u=i.NodeFilter,f=i.NamedNodeMap;f===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const g=i.DOMParser,y=i.trustedTypes,b=c.prototype,M=de(b,"cloneNode"),Ie=de(b,"remove"),ne=de(b,"nextSibling"),pe=de(b,"childNodes"),Je=de(b,"parentNode"),gt=de(b,"shadowRoot"),Qe=de(b,"attributes"),Z=o&&o.prototype?de(o.prototype,"nodeType"):null,me=o&&o.prototype?de(o.prototype,"nodeName"):null;if(typeof s=="function"){const p=t.createElement("template");p.content&&p.content.ownerDocument&&(t=p.content.ownerDocument)}let X,Ee="",Ut,zn=!1,et=0;const jn=function(){if(et>0)throw xe('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},De=function(a){jn(),et++;try{return X.createHTML(a)}finally{et--}},vi=function(a){jn(),et++;try{return X.createScriptURL(a)}finally{et--}},bi=function(){return zn||(Ut=is(y,r),zn=!0),Ut},yt=t,zt=yt.implementation,Vn=yt.createNodeIterator,_i=yt.createDocumentFragment,Ai=yt.getElementsByTagName,Ei=n.importNode;let V=Kr();e.isSupported=typeof mi=="function"&&typeof Je=="function"&&zt&&zt.createHTMLDocument!==void 0;const wt=qa,vt=Ka,bt=Xa,$i=Za,Ti=Ja,Si=Qa,Wn=es,Ri=ns;let Gn=qr,P=null;const jt=E({},[...Vr,...wn,...vn,...bn,...Wr]);let B=null;const Vt=E({},[...Gr,..._n,...Yr,...Ct]);let H=Object.seal(Ve(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),tt=null,_t=null;const ge=Object.seal(Ve(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Yn=!0,Wt=!0,qn=!1,Kn=!0,ye=!1,nt=!0,$e=!1,Gt=!1,Yt=!1,Oe=!1,At=!1,Et=!1,Xn=!0,Zn=!1;const Jn="user-content-";let qt=!0,Kt=!1,Pe={},se=null;const Xt=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Qn=null;const er=E({},["audio","video","img","source","image","track"]);let Zt=null;const tr=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$t="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",oe="http://www.w3.org/1999/xhtml";let Be=oe,Jt=!1,Qt=null;const xi=E({},[$t,Tt,oe],yn);let en=E({},["mi","mo","mn","ms","mtext"]),tn=E({},["annotation-xml"]);const Ci=E({},["title","style","font","a","script"]);let rt=null;const Mi=["application/xhtml+xml","text/html"],ki="text/html";let N=null,He=null;const Li=t.createElement("form"),nr=function(a){return a instanceof RegExp||a instanceof Function},nn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(He&&He===a)return;(!a||typeof a!="object")&&(a={}),a=Y(a),rt=Mi.indexOf(a.PARSER_MEDIA_TYPE)===-1?ki:a.PARSER_MEDIA_TYPE,N=rt==="application/xhtml+xml"?yn:lt,P=I(a,"ALLOWED_TAGS")&&q(a.ALLOWED_TAGS)?E({},a.ALLOWED_TAGS,N):jt,B=I(a,"ALLOWED_ATTR")&&q(a.ALLOWED_ATTR)?E({},a.ALLOWED_ATTR,N):Vt,Qt=I(a,"ALLOWED_NAMESPACES")&&q(a.ALLOWED_NAMESPACES)?E({},a.ALLOWED_NAMESPACES,yn):xi,Zt=I(a,"ADD_URI_SAFE_ATTR")&&q(a.ADD_URI_SAFE_ATTR)?E(Y(tr),a.ADD_URI_SAFE_ATTR,N):tr,Qn=I(a,"ADD_DATA_URI_TAGS")&&q(a.ADD_DATA_URI_TAGS)?E(Y(er),a.ADD_DATA_URI_TAGS,N):er,se=I(a,"FORBID_CONTENTS")&&q(a.FORBID_CONTENTS)?E({},a.FORBID_CONTENTS,N):Xt,tt=I(a,"FORBID_TAGS")&&q(a.FORBID_TAGS)?E({},a.FORBID_TAGS,N):Y({}),_t=I(a,"FORBID_ATTR")&&q(a.FORBID_ATTR)?E({},a.FORBID_ATTR,N):Y({}),Pe=I(a,"USE_PROFILES")?a.USE_PROFILES&&typeof a.USE_PROFILES=="object"?Y(a.USE_PROFILES):a.USE_PROFILES:!1,Yn=a.ALLOW_ARIA_ATTR!==!1,Wt=a.ALLOW_DATA_ATTR!==!1,qn=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Kn=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ye=a.SAFE_FOR_TEMPLATES||!1,nt=a.SAFE_FOR_XML!==!1,$e=a.WHOLE_DOCUMENT||!1,Oe=a.RETURN_DOM||!1,At=a.RETURN_DOM_FRAGMENT||!1,Et=a.RETURN_TRUSTED_TYPE||!1,Yt=a.FORCE_BODY||!1,Xn=a.SANITIZE_DOM!==!1,Zn=a.SANITIZE_NAMED_PROPS||!1,qt=a.KEEP_CONTENT!==!1,Kt=a.IN_PLACE||!1,Gn=Wa(a.ALLOWED_URI_REGEXP)?a.ALLOWED_URI_REGEXP:qr,Be=typeof a.NAMESPACE=="string"?a.NAMESPACE:oe,en=I(a,"MATHML_TEXT_INTEGRATION_POINTS")&&a.MATHML_TEXT_INTEGRATION_POINTS&&typeof a.MATHML_TEXT_INTEGRATION_POINTS=="object"?Y(a.MATHML_TEXT_INTEGRATION_POINTS):E({},["mi","mo","mn","ms","mtext"]),tn=I(a,"HTML_INTEGRATION_POINTS")&&a.HTML_INTEGRATION_POINTS&&typeof a.HTML_INTEGRATION_POINTS=="object"?Y(a.HTML_INTEGRATION_POINTS):E({},["annotation-xml"]);const d=I(a,"CUSTOM_ELEMENT_HANDLING")&&a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING=="object"?Y(a.CUSTOM_ELEMENT_HANDLING):Ve(null);if(H=Ve(null),I(d,"tagNameCheck")&&nr(d.tagNameCheck)&&(H.tagNameCheck=d.tagNameCheck),I(d,"attributeNameCheck")&&nr(d.attributeNameCheck)&&(H.attributeNameCheck=d.attributeNameCheck),I(d,"allowCustomizedBuiltInElements")&&typeof d.allowCustomizedBuiltInElements=="boolean"&&(H.allowCustomizedBuiltInElements=d.allowCustomizedBuiltInElements),ye&&(Wt=!1),At&&(Oe=!0),Pe&&(P=E({},Wr),B=Ve(null),Pe.html===!0&&(E(P,Vr),E(B,Gr)),Pe.svg===!0&&(E(P,wn),E(B,_n),E(B,Ct)),Pe.svgFilters===!0&&(E(P,vn),E(B,_n),E(B,Ct)),Pe.mathMl===!0&&(E(P,bn),E(B,Yr),E(B,Ct))),ge.tagCheck=null,ge.attributeCheck=null,I(a,"ADD_TAGS")&&(typeof a.ADD_TAGS=="function"?ge.tagCheck=a.ADD_TAGS:q(a.ADD_TAGS)&&(P===jt&&(P=Y(P)),E(P,a.ADD_TAGS,N))),I(a,"ADD_ATTR")&&(typeof a.ADD_ATTR=="function"?ge.attributeCheck=a.ADD_ATTR:q(a.ADD_ATTR)&&(B===Vt&&(B=Y(B)),E(B,a.ADD_ATTR,N))),I(a,"ADD_URI_SAFE_ATTR")&&q(a.ADD_URI_SAFE_ATTR)&&E(Zt,a.ADD_URI_SAFE_ATTR,N),I(a,"FORBID_CONTENTS")&&q(a.FORBID_CONTENTS)&&(se===Xt&&(se=Y(se)),E(se,a.FORBID_CONTENTS,N)),I(a,"ADD_FORBID_CONTENTS")&&q(a.ADD_FORBID_CONTENTS)&&(se===Xt&&(se=Y(se)),E(se,a.ADD_FORBID_CONTENTS,N)),qt&&(P["#text"]=!0),$e&&E(P,["html","head","body"]),P.table&&(E(P,["tbody"]),delete tt.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw xe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw xe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const h=X;X=a.TRUSTED_TYPES_POLICY;try{Ee=De("")}catch(v){throw X=h,v}}else a.TRUSTED_TYPES_POLICY===null?(X=void 0,Ee=""):(X===void 0&&(X=bi()),X&&typeof Ee=="string"&&(Ee=De("")));(V.uponSanitizeElement.length>0||V.uponSanitizeAttribute.length>0)&&P===jt&&(P=Y(P)),V.uponSanitizeAttribute.length>0&&B===Vt&&(B=Y(B)),K&&K(a),He=a},rr=E({},[...wn,...vn,...Ga]),ir=E({},[...bn,...Ya]),Ni=function(a){let d=Je(a);(!d||!d.tagName)&&(d={namespaceURI:Be,tagName:"template"});const h=lt(a.tagName),v=lt(d.tagName);return Qt[a.namespaceURI]?a.namespaceURI===Tt?d.namespaceURI===oe?h==="svg":d.namespaceURI===$t?h==="svg"&&(v==="annotation-xml"||en[v]):!!rr[h]:a.namespaceURI===$t?d.namespaceURI===oe?h==="math":d.namespaceURI===Tt?h==="math"&&tn[v]:!!ir[h]:a.namespaceURI===oe?d.namespaceURI===Tt&&!tn[v]||d.namespaceURI===$t&&!en[v]?!1:!ir[h]&&(Ci[h]||!rr[h]):!!(rt==="application/xhtml+xml"&&Qt[a.namespaceURI]):!1},re=function(a){Ue(e.removed,{element:a});try{Je(a).removeChild(a)}catch{if(Ie(a),!Je(a))throw xe("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},ar=function(a){const d=pe?pe(a):a.childNodes;if(d){const v=[];he(d,_=>{Ue(v,_)}),he(v,_=>{try{Ie(_)}catch{}})}const h=Qe?Qe(a):null;if(h)for(let v=h.length-1;v>=0;--v){const _=h[v],T=_&&_.name;if(typeof T=="string")try{a.removeAttribute(T)}catch{}}},Te=function(a,d){try{Ue(e.removed,{attribute:d.getAttributeNode(a),from:d})}catch{Ue(e.removed,{attribute:null,from:d})}if(d.removeAttribute(a),a==="is")if(Oe||At)try{re(d)}catch{}else try{d.setAttribute(a,"")}catch{}},Ii=function(a){const d=Qe?Qe(a):a.attributes;if(d)for(let h=d.length-1;h>=0;--h){const v=d[h],_=v&&v.name;if(!(typeof _!="string"||B[N(_)]))try{a.removeAttribute(_)}catch{}}},Di=function(a){const d=[a];for(;d.length>0;){const h=d.pop();(Z?Z(h):h.nodeType)===le.element&&Ii(h);const _=pe?pe(h):h.childNodes;if(_)for(let T=_.length-1;T>=0;--T)d.push(_[T])}},sr=function(a){let d=null,h=null;if(Yt)a="<remove></remove>"+a;else{const T=Fr(a,/^[\r\n\t ]+/);h=T&&T[0]}rt==="application/xhtml+xml"&&Be===oe&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const v=X?De(a):a;if(Be===oe)try{d=new g().parseFromString(v,rt)}catch{}if(!d||!d.documentElement){d=zt.createDocument(Be,"template",null);try{d.documentElement.innerHTML=Jt?Ee:v}catch{}}const _=d.body||d.documentElement;return a&&h&&_.insertBefore(t.createTextNode(h),_.childNodes[0]||null),Be===oe?Ai.call(d,$e?"html":"body")[0]:$e?d.documentElement:_},or=function(a){return Vn.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},rn=function(a){var d,h;a.normalize();const v=Vn.call(a.ownerDocument||a,a,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let _=v.nextNode();for(;_;){let j=_.data;he([wt,vt,bt],k=>{j=ze(j,k," ")}),_.data=j,_=v.nextNode()}const T=(d=(h=a.querySelectorAll)===null||h===void 0?void 0:h.call(a,"template"))!==null&&d!==void 0?d:[];he(Array.from(T),j=>{Fe(j.content)&&rn(j.content)})},St=function(a){const d=me?me(a):null;return typeof d!="string"||N(d)!=="form"?!1:typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||a.attributes!==Qe(a)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function"||a.nodeType!==Z(a)||a.childNodes!==pe(a)},Fe=function(a){if(!Z||typeof a!="object"||a===null)return!1;try{return Z(a)===le.documentFragment}catch{return!1}},it=function(a){if(!Z||typeof a!="object"||a===null)return!1;try{return typeof Z(a)=="number"}catch{return!1}};function ce(p,a,d){he(p,h=>{h.call(e,a,d,He)})}const lr=function(a){let d=null;if(ce(V.beforeSanitizeElements,a,null),St(a))return re(a),!0;const h=N(me?me(a):a.nodeName);if(ce(V.uponSanitizeElement,a,{tagName:h,allowedTags:P}),nt&&a.hasChildNodes()&&!it(a.firstElementChild)&&G(/<[/\w!]/g,a.innerHTML)&&G(/<[/\w!]/g,a.textContent)||nt&&a.namespaceURI===oe&&h==="style"&&it(a.firstElementChild)||a.nodeType===le.progressingInstruction||nt&&a.nodeType===le.comment&&G(/<[/\w]/g,a.data))return re(a),!0;if(tt[h]||!(ge.tagCheck instanceof Function&&ge.tagCheck(h))&&!P[h]){if(!tt[h]&&ur(h)&&(H.tagNameCheck instanceof RegExp&&G(H.tagNameCheck,h)||H.tagNameCheck instanceof Function&&H.tagNameCheck(h)))return!1;if(qt&&!se[h]){const _=Je(a),T=pe(a);if(T&&_){const j=T.length;for(let k=j-1;k>=0;--k){const F=Kt?T[k]:M(T[k],!0);_.insertBefore(F,ne(a))}}}return re(a),!0}return(Z?Z(a):a.nodeType)===le.element&&!Ni(a)||(h==="noscript"||h==="noembed"||h==="noframes")&&G(/<\/no(script|embed|frames)/i,a.innerHTML)?(re(a),!0):(ye&&a.nodeType===le.text&&(d=a.textContent,he([wt,vt,bt],_=>{d=ze(d,_," ")}),a.textContent!==d&&(Ue(e.removed,{element:a.cloneNode()}),a.textContent=d)),ce(V.afterSanitizeElements,a,null),!1)},dr=function(a,d,h){if(_t[d]||Xn&&(d==="id"||d==="name")&&(h in t||h in Li))return!1;const v=B[d]||ge.attributeCheck instanceof Function&&ge.attributeCheck(d,a);if(!(Wt&&!_t[d]&&G($i,d))){if(!(Yn&&G(Ti,d))){if(!v||_t[d]){if(!(ur(a)&&(H.tagNameCheck instanceof RegExp&&G(H.tagNameCheck,a)||H.tagNameCheck instanceof Function&&H.tagNameCheck(a))&&(H.attributeNameCheck instanceof RegExp&&G(H.attributeNameCheck,d)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(d,a))||d==="is"&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&G(H.tagNameCheck,h)||H.tagNameCheck instanceof Function&&H.tagNameCheck(h))))return!1}else if(!Zt[d]){if(!G(Gn,ze(h,Wn,""))){if(!((d==="src"||d==="xlink:href"||d==="href")&&a!=="script"&&Ur(h,"data:")===0&&Qn[a])){if(!(qn&&!G(Si,ze(h,Wn,"")))){if(h)return!1}}}}}}return!0},Oi=E({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ur=function(a){return!Oi[lt(a)]&&G(Ri,a)},cr=function(a){ce(V.beforeSanitizeAttributes,a,null);const d=a.attributes;if(!d||St(a))return;const h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B,forceKeepAttr:void 0};let v=d.length;for(;v--;){const _=d[v],T=_.name,j=_.namespaceURI,k=_.value,F=N(T),we=k;let W=T==="value"?we:Ha(we);if(h.attrName=F,h.attrValue=W,h.keepAttr=!0,h.forceKeepAttr=void 0,ce(V.uponSanitizeAttribute,a,h),W=h.attrValue,Zn&&(F==="id"||F==="name")&&Ur(W,Jn)!==0&&(Te(T,a),W=Jn+W),nt&&G(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,W)){Te(T,a);continue}if(F==="attributename"&&Fr(W,"href")){Te(T,a);continue}if(h.forceKeepAttr)continue;if(!h.keepAttr){Te(T,a);continue}if(!Kn&&G(/\/>/i,W)){Te(T,a);continue}ye&&he([wt,vt,bt],fr=>{W=ze(W,fr," ")});const hr=N(a.nodeName);if(!dr(hr,F,W)){Te(T,a);continue}if(X&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!j)switch(y.getAttributeType(hr,F)){case"TrustedHTML":{W=De(W);break}case"TrustedScriptURL":{W=vi(W);break}}if(W!==we)try{j?a.setAttributeNS(j,T,W):a.setAttribute(T,W),St(a)?re(a):Hr(e.removed)}catch{Te(T,a)}}ce(V.afterSanitizeAttributes,a,null)},Rt=function(a){let d=null;const h=or(a);for(ce(V.beforeSanitizeShadowDOM,a,null);d=h.nextNode();)if(ce(V.uponSanitizeShadowNode,d,null),lr(d),cr(d),Fe(d.content)&&Rt(d.content),(Z?Z(d):d.nodeType)===le.element){const _=gt?gt(d):d.shadowRoot;Fe(_)&&(an(_),Rt(_))}ce(V.afterSanitizeShadowDOM,a,null)},an=function(a){const d=[{node:a,shadow:null}];for(;d.length>0;){const h=d.pop();if(h.shadow){Rt(h.shadow);continue}const v=h.node,T=(Z?Z(v):v.nodeType)===le.element,j=pe?pe(v):v.childNodes;if(j)for(let k=j.length-1;k>=0;--k)d.push({node:j[k],shadow:null});if(T){const k=me?me(v):null;if(typeof k=="string"&&N(k)==="template"){const F=v.content;Fe(F)&&d.push({node:F,shadow:null})}}if(T){const k=gt?gt(v):v.shadowRoot;Fe(k)&&d.push({node:null,shadow:k},{node:k,shadow:null})}}};return e.sanitize=function(p){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=null,h=null,v=null,_=null;if(Jt=!p,Jt&&(p="<!-->"),typeof p!="string"&&!it(p)&&(p=Va(p),typeof p!="string"))throw xe("dirty is not a string, aborting");if(!e.isSupported)return p;Gt||nn(a),e.removed=[];const T=Kt&&typeof p!="string"&&it(p);if(T){const F=me?me(p):p.nodeName;if(typeof F=="string"){const we=N(F);if(!P[we]||tt[we])throw xe("root node is forbidden and cannot be sanitized in-place")}if(St(p))throw xe("root node is clobbered and cannot be sanitized in-place");try{an(p)}catch(we){throw ar(p),we}}else if(it(p))d=sr("<!---->"),h=d.ownerDocument.importNode(p,!0),h.nodeType===le.element&&h.nodeName==="BODY"||h.nodeName==="HTML"?d=h:d.appendChild(h),an(h);else{if(!Oe&&!ye&&!$e&&p.indexOf("<")===-1)return X&&Et?De(p):p;if(d=sr(p),!d)return Oe?null:Et?Ee:""}d&&Yt&&re(d.firstChild);const j=or(T?p:d);try{for(;v=j.nextNode();)lr(v),cr(v),Fe(v.content)&&Rt(v.content)}catch(F){throw T&&ar(p),F}if(T)return he(e.removed,F=>{F.element&&Di(F.element)}),ye&&rn(p),p;if(Oe){if(ye&&rn(d),At)for(_=_i.call(d.ownerDocument);d.firstChild;)_.appendChild(d.firstChild);else _=d;return(B.shadowroot||B.shadowrootmode)&&(_=Ei.call(n,_,!0)),_}let k=$e?d.outerHTML:d.innerHTML;return $e&&P["!doctype"]&&d.ownerDocument&&d.ownerDocument.doctype&&d.ownerDocument.doctype.name&&G(ts,d.ownerDocument.doctype.name)&&(k="<!DOCTYPE "+d.ownerDocument.doctype.name+`>
`+k),ye&&he([wt,vt,bt],F=>{k=ze(k,F," ")}),X&&Et?De(k):k},e.setConfig=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nn(p),Gt=!0},e.clearConfig=function(){He=null,Gt=!1,X=Ut,Ee=""},e.isValidAttribute=function(p,a,d){He||nn({});const h=N(p),v=N(a);return dr(h,v,d)},e.addHook=function(p,a){typeof a=="function"&&Ue(V[p],a)},e.removeHook=function(p,a){if(a!==void 0){const d=Pa(V[p],a);return d===-1?void 0:Ba(V[p],d,1)[0]}return Hr(V[p])},e.removeHooks=function(p){V[p]=[]},e.removeAllHooks=function(){V=Kr()},e}var Bn=yi();const Xr=C`var(--white, #fff)`,as=C`var(--ia-theme-link-color, #4b64ff)`,ss=C`var(--primaryDisableCTAFill, #767676)`,os=C`var(--secondaryCTABorder, #999)`,ls=C`var(--primaryCTAFill, #194880)`,An=C`var(--primaryCTAFillRGB, 25, 72, 128)`,ds=C`var(--primaryCTABorder, #c5d1df)`,us=C`var(--primaryErrorCTAFill, #d9534f)`,En=C`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,cs=C`var(--primaryErrorCTABorder, #d43f3a)`,hs=C`var(--secondaryCTAFill, #333)`,$n=C`var(--secondaryCTAFillRGB, 51, 51, 51)`,fs=C`var(--primaryCTABorder, #979797)`,ps=C`var(---primaryWarningFill, #ee8950)`,Tn=C`var(--primaryWarningFillRGB, 238, 137, 80)`,ms=C`var(--primaryWarningBorder, #ec7939)`,wi=C`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Xr};
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
    outline-color: ${Xr};
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
    background-color: ${ss};
    border: 1px solid ${os};
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
    background-color: ${ls};
    border-color: ${ds};
  }
  .ia-button.primary:hover {
    background-color: rgba(${An}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${An}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${An}, 0.7);
  }

  .ia-button.danger {
    background-color: ${us};
    border-color: ${cs};
  }
  .ia-button.danger:hover {
    background-color: rgba(${En}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${En}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${En}, 0.7);
  }

  .ia-button.warning {
    background-color: ${ps};
    border-color: ${ms};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Tn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Tn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Tn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${hs};
    border-color: ${fs};
  }
  .ia-button.dark:hover {
    background-color: rgba(${$n}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${$n}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${$n}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${as};
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
`;var Zr;(function(i){i.processing="processing",i.complete="complete"})(Zr||(Zr={}));let Hn=class extends fe{constructor(){super(...arguments),this.mode="processing"}render(){return A`
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
    `}};l([$({type:String})],Hn.prototype,"mode",void 0);Hn=l([mt("ia-activity-indicator")],Hn);const gs=Ht`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,ys=Ht`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,ws=Ht`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Jr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return A`<span title="${i}">${t}</span>`}const vs=["a"];function bs(i){return Bn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Bn.sanitize(i,{ALLOWED_TAGS:vs})}function _s(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),s=r-e<=20;if(s&&r===i.length-1)return i;r!==-1&&s&&(n=r)}return As(i,n,e)}function As(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const s=n.match(/<\/a/gi);if(!s||s.length<r.length){const o=i.indexOf("</a>",e),c=o-t<=20;if(c&&i.length===o+4)return i;if(o!==-1&&c)n=i.slice(0,o+4);else{const u=n.lastIndexOf("<a");n=i.slice(0,u)}}}return n.concat("...")}const Es=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function $s(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Es,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Ts(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Ss=Ht`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let ee=class extends fe{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?A`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?A`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Ss}
                  </button>
                `:S}
            <div class="top-line">
              <b>${R("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${R("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?A`<i>${R(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:A`
          <div class="error">
            ${R("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return S;const n=bs(t),r=this.truncateContent(n,this.maxBodyLength);return A`${pi(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,s,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(s=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?S:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return A`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${R("More...")}
      </button>
    `}get lessButtonTemplate(){return A`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${R("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?A`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Jr(this.review.reviewer)}
            </a>
          `:A`${Jr(this.review.reviewer)}`:S}get starsTemplate(){return!this.review||!this.review.stars?S:A`
      <div
        class="review-stars"
        title="${R(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>A`<div class="review-star">${ws}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return S;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),s=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return R(`${s} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:_s(e,t)}prepReview(e){return Ts($s(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(R("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return C`
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
    `}};l([$({type:Object})],ee.prototype,"review",void 0);l([$({type:String})],ee.prototype,"identifier",void 0);l([$({type:Number})],ee.prototype,"maxSubjectLength",void 0);l([$({type:Number})],ee.prototype,"maxBodyLength",void 0);l([$({type:String})],ee.prototype,"baseHost",void 0);l([$({type:String})],ee.prototype,"csrfToken",void 0);l([$({type:Boolean})],ee.prototype,"canDelete",void 0);l([$({type:Boolean})],ee.prototype,"bypassTruncation",void 0);l([O()],ee.prototype,"showTruncatedContent",void 0);l([O()],ee.prototype,"deleteMsg",void 0);ee=l([mt("ia-review")],ee);let D=class extends fe{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return A`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:A`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,s,o,c,u,f;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(s=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(f=(u=(c=this.oldReview)===null||c===void 0?void 0:c.reviewbody)===null||u===void 0?void 0:u.length)!==null&&f!==void 0?f:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?A`
          <div class="unrecoverable-error">
            <span class="error-msg">${R(this.unrecoverableError)}</span>
          </div>
        `:S}get recoverableErrorTemplate(){return this.recoverableError?A`
          <div class="recoverable-error">
            ${pi(this.sanitizeErrorMsg(R(this.recoverableError)))}
          </div>
        `:S}get recaptchaMessageTemplate(){return this.bypassRecaptcha?S:A`
      <span class="recaptcha-disclaimer"
        >${R(A`This site is protected by reCAPTCHA and the Google
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
    `}get subjectInputTemplate(){var e,t;return A`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${R("Subject")}</label>
        ${this.maxSubjectLength?A`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:S}
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
              ${R(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:S}</div></span>
    `}get bodyInputTemplate(){var e,t;return A`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${R("Review")}</label>
          ${this.maxBodyLength?A`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:S}
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
                ${R(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:S}
      </span>
    `}get hiddenInputsTemplate(){return A`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:S}
    `}get actionButtonsTemplate(){return A`<div class="action-btns">
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
        ${this.submissionInProgress?A`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:R("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=R(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?R("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?gs:ys}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Bn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const s=await this.getRecaptchaToken();if(!s)return this.handleRecaptchaError();n.append("g-recaptcha-response",s??"")}for(const s of new FormData(this.reviewForm))n.append(s[0],s[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const s=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:s});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,s,o;const c=new Date().toDateString();return new ie({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:c,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((s=this.oldReview)===null||s===void 0?void 0:s.createdate))!==null&&o!==void 0?o:c})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[wi,C`
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
      `]}};l([$({type:String})],D.prototype,"identifier",void 0);l([$({type:String})],D.prototype,"token",void 0);l([$({type:String})],D.prototype,"baseHost",void 0);l([$({type:String})],D.prototype,"endpointPath",void 0);l([$({type:String})],D.prototype,"submitterScreenname",void 0);l([$({type:String})],D.prototype,"submitterItemname",void 0);l([$({type:Object})],D.prototype,"oldReview",void 0);l([$({type:String})],D.prototype,"unrecoverableError",void 0);l([$({type:Number})],D.prototype,"maxSubjectLength",void 0);l([$({type:Number})],D.prototype,"maxBodyLength",void 0);l([$({type:Object})],D.prototype,"fetchHandler",void 0);l([$({type:Object})],D.prototype,"recaptchaManager",void 0);l([$({type:Boolean})],D.prototype,"bypassRecaptcha",void 0);l([O()],D.prototype,"currentStars",void 0);l([O()],D.prototype,"currentSubjectLength",void 0);l([O()],D.prototype,"currentBodyLength",void 0);l([O()],D.prototype,"recoverableError",void 0);l([O()],D.prototype,"formCanSubmit",void 0);l([O()],D.prototype,"submissionInProgress",void 0);l([fi("#review-form")],D.prototype,"reviewForm",void 0);D=l([mt("ia-review-form")],D);class Rs{constructor(e){var t,n,r,s;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(s=e==null?void 0:e.requireImagePing)!==null&&s!==void 0?s:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),s=Object.keys(n);return s.forEach(o=>{const c=n[o];r.searchParams.append(o,c)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${s.length+2}`),r}}class xs{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),s=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:s,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Cs{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Rs,this.analyticsHelpers=new xs(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ms(i){return new Promise(e=>setTimeout(e,i))}class ks{constructor(e){this.analyticsHandler=new Cs({enableAnalytics:!0}),this.sleep=Ms,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,s=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,s,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,s,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class Ls{constructor(e){this.fetchRetrier=new ks,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[s,o]of Object.entries(t))r.searchParams.set(s,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let L=class extends fe{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new Ls,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?A`
      <div class="reviews-list">
        ${this.reviewsFrozen?A`<div class="message">
              ${R("Reviews can no longer be added to this item.")}
            </div>`:S}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):S)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return A`<div class="message">
      ${R("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?A`
        <div class="message">
          ${R("Reviews cannot be added to this item.")}
        </div>
      `:A`
      <div class="message">
        ${R("There are no reviews yet.")}
        ${R(A`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return A`
      <div class="message">
        ${this.reviewsCount===1?R("There is 1 review for this item."):R(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${R(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?S:A`<div class="own-review-container">
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?A`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:S}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[wi,C`
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
      `]}};l([$({type:String})],L.prototype,"identifier",void 0);l([$({type:Array})],L.prototype,"reviews",void 0);l([$({type:Boolean})],L.prototype,"reviewsDisabled",void 0);l([$({type:Boolean})],L.prototype,"reviewsFrozen",void 0);l([$({type:Boolean})],L.prototype,"canDelete",void 0);l([$({type:Boolean})],L.prototype,"displayReviewsByDefault",void 0);l([$({type:Number})],L.prototype,"maxSubjectLength",void 0);l([$({type:Number})],L.prototype,"maxBodyLength",void 0);l([$({type:String})],L.prototype,"baseHost",void 0);l([$({type:String})],L.prototype,"token",void 0);l([$({type:String})],L.prototype,"endpointPath",void 0);l([$({type:String})],L.prototype,"submitterScreenname",void 0);l([$({type:String})],L.prototype,"submitterItemname",void 0);l([$({type:Object})],L.prototype,"recaptchaManager",void 0);l([$({type:Boolean})],L.prototype,"bypassRecaptcha",void 0);l([$({type:String})],L.prototype,"reviewSubmissionError",void 0);l([$({type:Boolean})],L.prototype,"reviewAddEditRequested",void 0);l([$({type:Object})],L.prototype,"fetchHandler",void 0);l([O()],L.prototype,"displayReviewForm",void 0);l([O()],L.prototype,"displayReviews",void 0);l([O()],L.prototype,"filteredReviews",void 0);l([O()],L.prototype,"currentReview",void 0);l([O()],L.prototype,"reviewsCount",void 0);l([O()],L.prototype,"recaptchaActivated",void 0);L=l([mt("ia-reviews")],L);class Ns{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let te=class extends fe{constructor(){super(...arguments),this.mockOldReview=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new ie({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new ie({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new ie({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new Ns,this.mockRecaptchaManager=new ba({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return A` <h2>General settings</h2>
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
      </div>`}renderReviewToggle(e,t){return A`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};te.styles=C`
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
  `;l([O()],te.prototype,"bypassRecaptcha",void 0);l([O()],te.prototype,"unrecoverableError",void 0);l([O()],te.prototype,"useCharCounts",void 0);l([O()],te.prototype,"allowDeletion",void 0);l([O()],te.prototype,"useExistingReviews",void 0);l([O()],te.prototype,"review",void 0);l([O()],te.prototype,"reviewsDisabled",void 0);l([O()],te.prototype,"reviewsFrozen",void 0);l([fi("ia-reviews")],te.prototype,"reviewsComponent",void 0);te=l([mt("app-root")],te);
