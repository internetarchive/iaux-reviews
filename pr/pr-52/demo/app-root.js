(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function l(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var u=i.length-1;u>=0;u--)(a=i[u])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function ot(i,e,t,n){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function u(f){try{h(n.next(f))}catch(g){a(g)}}function d(f){try{h(n.throw(f))}catch(g){a(g)}}function h(f){f.done?s(f.value):r(f.value).then(u,d)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=window,yn=ut.ShadowRoot&&(ut.ShadyCSS===void 0||ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol(),Wn=new WeakMap;let Sr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Wn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wn.set(t,e))}return e}toString(){return this.cssText}};const pi=i=>new Sr(typeof i=="string"?i:i+"",void 0,vn),R=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new Sr(t,i,vn)},fi=(i,e)=>{yn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=ut.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Gn=yn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return pi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const ht=window,Yn=ht.trustedTypes,mi=Yn?Yn.emptyScript:"",qn=ht.reactiveElementPolyfillSupport,rn={toAttribute(i,e){switch(e){case Boolean:i=i?mi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Rr=(i,e)=>e!==i&&(e==e||i==i),Bt={attribute:!0,type:String,converter:rn,reflect:!1,hasChanged:Rr},sn="finalized";let Se=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Bt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bt}static finalize(){if(this.hasOwnProperty(sn))return!1;this[sn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Gn(r))}else e!==void 0&&t.push(Gn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Bt){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:rn).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:rn;this._$El=s,this[s]=u.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Rr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Se[sn]=!0,Se.elementProperties=new Map,Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},qn==null||qn({ReactiveElement:Se}),((Pt=ht.reactiveElementVersions)!==null&&Pt!==void 0?Pt:ht.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const pt=window,Re=pt.trustedTypes,Kn=Re?Re.createPolicy("lit-html",{createHTML:i=>i}):void 0,an="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,xr="?"+le,gi=`<${xr}>`,ye=document,ft=()=>ye.createComment(""),Ge=i=>i===null||typeof i!="object"&&typeof i!="function",Mr=Array.isArray,wi=i=>Mr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xn=/-->/g,Zn=/>/g,he=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jn=/'/g,Qn=/"/g,Cr=/^(?:script|style|textarea|title)$/i,xe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),er=new WeakMap,me=ye.createTreeWalker(ye,129,null,!1);function kr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kn!==void 0?Kn.createHTML(e):e}const yi=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=He;for(let u=0;u<t;u++){const d=i[u];let h,f,g=-1,_=0;for(;_<d.length&&(a.lastIndex=_,f=a.exec(d),f!==null);)_=a.lastIndex,a===He?f[1]==="!--"?a=Xn:f[1]!==void 0?a=Zn:f[2]!==void 0?(Cr.test(f[2])&&(r=RegExp("</"+f[2],"g")),a=he):f[3]!==void 0&&(a=he):a===he?f[0]===">"?(a=r??He,g=-1):f[1]===void 0?g=-2:(g=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?he:f[3]==='"'?Qn:Jn):a===Qn||a===Jn?a=he:a===Xn||a===Zn?a=He:(a=he,r=void 0);const T=a===he&&i[u+1].startsWith("/>")?" ":"";s+=a===He?d+gi:g>=0?(n.push(h),d.slice(0,g)+an+d.slice(g)+le+T):d+le+(g===-2?(n.push(void 0),u):T)}return[kr(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let on=class Lr{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const u=e.length-1,d=this.parts,[h,f]=yi(e,t);if(this.el=Lr.createElement(h,n),me.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=me.nextNode())!==null&&d.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(an)||_.startsWith(le)){const T=f[a++];if(g.push(_),T!==void 0){const re=r.getAttribute(T.toLowerCase()+an).split(le),K=/([.?@])?(.*)/.exec(T);d.push({type:1,index:s,name:K[2],strings:re,ctor:K[1]==="."?bi:K[1]==="?"?$i:K[1]==="@"?Ai:vt})}else d.push({type:6,index:s})}for(const _ of g)r.removeAttribute(_)}if(Cr.test(r.tagName)){const g=r.textContent.split(le),_=g.length-1;if(_>0){r.textContent=Re?Re.emptyScript:"";for(let T=0;T<_;T++)r.append(g[T],ft()),me.nextNode(),d.push({type:2,index:++s});r.append(g[_],ft())}}}else if(r.nodeType===8)if(r.data===xr)d.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(le,g+1))!==-1;)d.push({type:7,index:s}),g+=le.length-1}s++}}static createElement(e,t){const n=ye.createElement("template");return n.innerHTML=e,n}};function Me(i,e,t=i,n){var r,s,a,u;if(e===xe)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=Ge(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((s=d==null?void 0:d._$AO)===null||s===void 0||s.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((a=(u=t)._$Co)!==null&&a!==void 0?a:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Me(i,d._$AS(i,e.values),d,n)),e}let vi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ye).importNode(n,!0);me.currentNode=s;let a=me.nextNode(),u=0,d=0,h=r[0];for(;h!==void 0;){if(u===h.index){let f;h.type===2?f=new Nr(a,a.nextSibling,this,e):h.type===1?f=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(f=new Ei(a,this,e)),this._$AV.push(f),h=r[++d]}u!==(h==null?void 0:h.index)&&(a=me.nextNode(),u++)}return me.currentNode=ye,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Nr=class Or{constructor(e,t,n,r){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Me(this,e,t),Ge(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=on.createElement(kr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new vi(s,this),u=a.u(this.options);a.v(n),this.$(u),this._$AH=a}}_$AC(e){let t=er.get(e.strings);return t===void 0&&er.set(e.strings,t=new on(e)),t}T(e){Mr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Or(this.k(ft()),this.k(ft()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},vt=class{constructor(e,t,n,r,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=Me(this,e,t,0),a=!Ge(e)||e!==this._$AH&&e!==xe,a&&(this._$AH=e);else{const u=e;let d,h;for(e=s[0],d=0;d<s.length-1;d++)h=Me(this,u[n+d],t,d),h===xe&&(h=this._$AH[d]),a||(a=!Ge(h)||h!==this._$AH[d]),h===N?e=N:e!==N&&(e+=(h??"")+s[d+1]),this._$AH[d]=h}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bi=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const _i=Re?Re.emptyScript:"";let $i=class extends vt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,_i):this.element.removeAttribute(this.name)}},Ai=class extends vt{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Me(this,e,t,0))!==null&&n!==void 0?n:N)===xe)return;const r=this._$AH,s=e===N&&r!==N||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==N&&(r===N||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Ei=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Me(this,e)}};const tr=pt.litHtmlPolyfillSupport;tr==null||tr(on,Nr),((Ht=pt.litHtmlVersions)!==null&&Ht!==void 0?Ht:pt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const mt=window,Ce=mt.trustedTypes,nr=Ce?Ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,ln="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,Dr="?"+de,Ti=`<${Dr}>`,ve=document,Ye=()=>ve.createComment(""),qe=i=>i===null||typeof i!="object"&&typeof i!="function",Ir=Array.isArray,Si=i=>Ir(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",zt=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rr=/-->/g,ir=/>/g,pe=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sr=/'/g,ar=/"/g,Pr=/^(?:script|style|textarea|title)$/i,Br=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),v=Br(1),bt=Br(2),ke=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),or=new WeakMap,ge=ve.createTreeWalker(ve,129,null,!1);function Hr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return nr!==void 0?nr.createHTML(e):e}const Ri=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=Ue;for(let u=0;u<t;u++){const d=i[u];let h,f,g=-1,_=0;for(;_<d.length&&(a.lastIndex=_,f=a.exec(d),f!==null);)_=a.lastIndex,a===Ue?f[1]==="!--"?a=rr:f[1]!==void 0?a=ir:f[2]!==void 0?(Pr.test(f[2])&&(r=RegExp("</"+f[2],"g")),a=pe):f[3]!==void 0&&(a=pe):a===pe?f[0]===">"?(a=r??Ue,g=-1):f[1]===void 0?g=-2:(g=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?pe:f[3]==='"'?ar:sr):a===ar||a===sr?a=pe:a===rr||a===ir?a=Ue:(a=pe,r=void 0);const T=a===pe&&i[u+1].startsWith("/>")?" ":"";s+=a===Ue?d+Ti:g>=0?(n.push(h),d.slice(0,g)+ln+d.slice(g)+de+T):d+de+(g===-2?(n.push(void 0),u):T)}return[Hr(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Ke{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const u=e.length-1,d=this.parts,[h,f]=Ri(e,t);if(this.el=Ke.createElement(h,n),ge.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=ge.nextNode())!==null&&d.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(ln)||_.startsWith(de)){const T=f[a++];if(g.push(_),T!==void 0){const re=r.getAttribute(T.toLowerCase()+ln).split(de),K=/([.?@])?(.*)/.exec(T);d.push({type:1,index:s,name:K[2],strings:re,ctor:K[1]==="."?Mi:K[1]==="?"?ki:K[1]==="@"?Li:_t})}else d.push({type:6,index:s})}for(const _ of g)r.removeAttribute(_)}if(Pr.test(r.tagName)){const g=r.textContent.split(de),_=g.length-1;if(_>0){r.textContent=Ce?Ce.emptyScript:"";for(let T=0;T<_;T++)r.append(g[T],Ye()),ge.nextNode(),d.push({type:2,index:++s});r.append(g[_],Ye())}}}else if(r.nodeType===8)if(r.data===Dr)d.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(de,g+1))!==-1;)d.push({type:7,index:s}),g+=de.length-1}s++}}static createElement(e,t){const n=ve.createElement("template");return n.innerHTML=e,n}}function Le(i,e,t=i,n){var r,s,a,u;if(e===ke)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=qe(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((s=d==null?void 0:d._$AO)===null||s===void 0||s.call(d,!1),h===void 0?d=void 0:(d=new h(i),d._$AT(i,t,n)),n!==void 0?((a=(u=t)._$Co)!==null&&a!==void 0?a:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Le(i,d._$AS(i,e.values),d,n)),e}class xi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ve).importNode(n,!0);ge.currentNode=s;let a=ge.nextNode(),u=0,d=0,h=r[0];for(;h!==void 0;){if(u===h.index){let f;h.type===2?f=new Ze(a,a.nextSibling,this,e):h.type===1?f=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(f=new Ni(a,this,e)),this._$AV.push(f),h=r[++d]}u!==(h==null?void 0:h.index)&&(a=ge.nextNode(),u++)}return ge.currentNode=ve,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ze{constructor(e,t,n,r){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),qe(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Si(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(ve.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ke.createElement(Hr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new xi(s,this),u=a.u(this.options);a.v(n),this.$(u),this._$AH=a}}_$AC(e){let t=or.get(e.strings);return t===void 0&&or.set(e.strings,t=new Ke(e)),t}T(e){Ir(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Ze(this.k(Ye()),this.k(Ye()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class _t{constructor(e,t,n,r,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=Le(this,e,t,0),a=!qe(e)||e!==this._$AH&&e!==ke,a&&(this._$AH=e);else{const u=e;let d,h;for(e=s[0],d=0;d<s.length-1;d++)h=Le(this,u[n+d],t,d),h===ke&&(h=this._$AH[d]),a||(a=!qe(h)||h!==this._$AH[d]),h===A?e=A:e!==A&&(e+=(h??"")+s[d+1]),this._$AH[d]=h}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mi extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const Ci=Ce?Ce.emptyScript:"";class ki extends _t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Ci):this.element.removeAttribute(this.name)}}class Li extends _t{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Le(this,e,t,0))!==null&&n!==void 0?n:A)===ke)return;const r=this._$AH,s=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==A&&(r===A||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ni{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}}const lr=mt.litHtmlPolyfillSupport;lr==null||lr(Ke,Ze),((Ft=mt.litHtmlVersions)!==null&&Ft!==void 0?Ft:mt.litHtmlVersions=[]).push("2.8.0");const Oi=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const u=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new Ze(e.insertBefore(Ye(),u),u,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt,Vt;class ae extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ke}}ae.finalized=!0,ae._$litElement$=!0,(jt=globalThis.litElementHydrateSupport)===null||jt===void 0||jt.call(globalThis,{LitElement:ae});const dr=globalThis.litElementPolyfillSupport;dr==null||dr({LitElement:ae});((Vt=globalThis.litElementVersions)!==null&&Vt!==void 0?Vt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ii=(i,e,t)=>{e.constructor.createProperty(t,i)};function b(i){return(e,t)=>t!==void 0?Ii(i,e,t):Di(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(u){i(u,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ur(i,e){return Pi({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;function p(i){let e,t,n;return e=i,(r,s,a)=>{if(a.value!=null)a.value=ur(a.value,e,t,n);else if(a.get!=null)a.get=ur(a.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Gt=new Map;function ur(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let u=this[r];if(Array.isArray(n))for(const d of n)Gt.has(d)?Gt.get(d).push(u):Gt.set(d,[u]);if(e||s.length>0||t>0){let d;e===!0?d=s.map(g=>g.toString()).join("!"):e?d=e.apply(this,s):d=s[0];const h=`${d}__timestamp`;let f=!1;if(t>0)if(!u.has(h))f=!0;else{let g=u.get(h);f=Date.now()-g>t}u.has(d)&&!f?a=u.get(d):(a=i.apply(this,s),u.set(d,a),t>0&&u.set(h,Date.now()))}else{const d=this;u.has(d)?a=u.get(d):(a=i.apply(this,s),u.set(d,a))}return a}}class dn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}dn.shared=new dn;class ue{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ue.shared=new ue;class gt{parseValue(e){return ue.shared.parseValue(e)}}gt.shared=new gt;class Xe{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Xe.shared=new Xe;class wt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,s)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const d=60**(e.length-1-s);return a*Math.floor(d)}).reduce((r,s)=>r+s,0);return t?void 0:n}}wt.shared=new wt;class un{parseValue(e){if(typeof e=="string")return e}}un.shared=new un;class Bi{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return n.forEach(s=>{s!==void 0&&r.push(s)}),r}}class cn{parseValue(e){if(typeof e=="string")return e}}cn.shared=new cn;class yt{parseValue(e){return String(e)}}yt.shared=new yt;class Q{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([p()],Q.prototype,"values",null);l([p()],Q.prototype,"value",null);class Hi extends Q{constructor(e){super(dn.shared,e)}}class oe extends Q{constructor(e){super(Xe.shared,e)}}class Yt extends Q{constructor(e){super(wt.shared,e)}}class G extends Q{constructor(e){super(ue.shared,e)}}class S extends Q{constructor(e){super(yt.shared,e)}}class Ui extends Q{constructor(e){super(cn.shared,e)}}class cr extends Q{constructor(e){super(gt.shared,e)}}class Fi extends Q{constructor(e){super(un.shared,e)}}class zi extends Q{constructor(e,t){super(t,e)}}class ji extends zi{constructor(e){const t=new Bi(yt.shared);super(e,t)}}class w{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new oe(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new S(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new G(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new G(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new S(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new S(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new cr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new S(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new S(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new S(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new S(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new oe(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new S(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new G(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Yt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new S(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new G(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new oe(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new S(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new S(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new G(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new cr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new S(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Yt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new S(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new G(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Fi(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Hi(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new S(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new G(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new G(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new S(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new S(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Ui(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new S(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new G(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new oe(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new S(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new oe(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Yt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new S(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new S(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new oe(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new oe(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new oe(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new ji(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new S(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new S(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new S(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new G(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new S(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new S(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new G(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new S(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new S(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new G(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new G(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([p()],w.prototype,"addeddate",null);l([p()],w.prototype,"audio_codec",null);l([p()],w.prototype,"audio_sample_rate",null);l([p()],w.prototype,"avg_rating",null);l([p()],w.prototype,"collection",null);l([p()],w.prototype,"collections_raw",null);l([p()],w.prototype,"collection_size",null);l([p()],w.prototype,"contributor",null);l([p()],w.prototype,"coverage",null);l([p()],w.prototype,"creator",null);l([p()],w.prototype,"collection_layout",null);l([p()],w.prototype,"date",null);l([p()],w.prototype,"description",null);l([p()],w.prototype,"downloads",null);l([p()],w.prototype,"duration",null);l([p()],w.prototype,"external_identifier",null);l([p()],w.prototype,"files_count",null);l([p()],w.prototype,"indexdate",null);l([p()],w.prototype,"isbn",null);l([p()],w.prototype,"issue",null);l([p()],w.prototype,"item_count",null);l([p()],w.prototype,"item_size",null);l([p()],w.prototype,"language",null);l([p()],w.prototype,"length",null);l([p()],w.prototype,"lineage",null);l([p()],w.prototype,"month",null);l([p()],w.prototype,"mediatype",null);l([p()],w.prototype,"noindex",null);l([p()],w.prototype,"notes",null);l([p()],w.prototype,"num_favorites",null);l([p()],w.prototype,"num_reviews",null);l([p()],w.prototype,"openlibrary_edition",null);l([p()],w.prototype,"openlibrary_work",null);l([p()],w.prototype,"page_progression",null);l([p()],w.prototype,"partner",null);l([p()],w.prototype,"ppi",null);l([p()],w.prototype,"publicdate",null);l([p()],w.prototype,"publisher",null);l([p()],w.prototype,"reviewdate",null);l([p()],w.prototype,"runtime",null);l([p()],w.prototype,"scanner",null);l([p()],w.prototype,"source",null);l([p()],w.prototype,"start_localtime",null);l([p()],w.prototype,"start_time",null);l([p()],w.prototype,"stop_time",null);l([p()],w.prototype,"subject",null);l([p()],w.prototype,"taper",null);l([p()],w.prototype,"title",null);l([p()],w.prototype,"transferer",null);l([p()],w.prototype,"track",null);l([p()],w.prototype,"type",null);l([p()],w.prototype,"uploader",null);l([p()],w.prototype,"utc_offset",null);l([p()],w.prototype,"venue",null);l([p()],w.prototype,"volume",null);l([p()],w.prototype,"week",null);l([p()],w.prototype,"year",null);class Ne{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?gt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?wt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?ue.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?ue.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?ue.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([p()],Ne.prototype,"size",null);l([p()],Ne.prototype,"length",null);l([p()],Ne.prototype,"height",null);l([p()],Ne.prototype,"width",null);l([p()],Ne.prototype,"track",null);class Z{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Xe.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Xe.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?ue.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([p()],Z.prototype,"reviewdate",null);l([p()],Z.prototype,"createdate",null);l([p()],Z.prototype,"stars",null);class Vi{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Ne(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new w(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new Z(r))}}var we;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(we||(we={}));class hn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Wi{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const a=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,a)}catch(a){const u=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(we.networkError,u)}try{const a=await s.json(),u=a.error;if(u){const d=a.forensics;return this.getErrorResult(we.searchEngineError,u,d)}else return{success:a}}catch(a){const u=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(we.decodingError,u)}}getErrorResult(e,t,n){return{error:new hn(e,t,n)}}}class hr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new hn(we.itemNotFound)}:{success:new Vi(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new hn(we.itemNotFound)}:{success:r.success.result}}}hr.default=new hr(new Wi);let Gi=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Yi(i){return new Promise(e=>setTimeout(e,i))}var ne;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(ne||(ne={}));const pr="lazyLoaderService";class qi{constructor(e){var t,n,r;this.emitter=Gi(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return ot(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return ot(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return ot(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${ne.owner}='${pr}'][${ne.retryNumber}='${n}']`;let s=this.container.querySelector(r);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(s)),new Promise((a,u)=>{if(s.getAttribute(ne.dynamicImportLoaded)){a();return}const d=e.scriptBeingRetried,h=s.onload||(d==null?void 0:d.onload);s.onload=g=>{h==null||h(g),s.setAttribute(ne.dynamicImportLoaded,"true"),a()};const f=s.onerror||(d==null?void 0:d.onerror);s.onerror=g=>ot(this,void 0,void 0,function*(){const _=s.getAttribute(ne.hasBeenRetried);if(n<this.retryCount&&!_){s.setAttribute(ne.hasBeenRetried,"true"),yield Yi(this.retryInterval*1e3);const T=n+1;this.emitter.emit("scriptLoadRetried",e.src,T),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:T,scriptBeingRetried:s}))}else _||this.emitter.emit("scriptLoadFailed",e.src,g),f==null||f(g),u(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),s=e.retryNumber;r.setAttribute(ne.owner,pr),r.setAttribute("src",n),r.setAttribute(ne.retryNumber,s.toString()),r.async=!0;const a=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(a).forEach(u=>{r.setAttribute(u,a[u])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Ki{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Xi{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new qi,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const s=await this.getRecaptchaLibrary(),a=new Ki({siteKey:n,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=a,a}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=i=>typeof i!="string"&&"strTag"in i,Ji=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=i=>Zi(i)?Ji(i.strings,i.values):i;let E=Qi;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class es{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ts=new es;ts.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rs=i=>(...e)=>({_$litDirective$:i,values:e});class is{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends is{constructor(e){if(super(e),this.et=N,e.type!==ns.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this.ft=void 0,this.et=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}pn.directiveName="unsafeHTML",pn.resultType=1;const Fr=rs(pn);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:zr,setPrototypeOf:fr,isFrozen:ss,getPrototypeOf:as,getOwnPropertyDescriptor:os}=Object;let{freeze:j,seal:Y,create:jr}=Object,{apply:fn,construct:mn}=typeof Reflect<"u"&&Reflect;j||(j=function(e){return e});Y||(Y=function(e){return e});fn||(fn=function(e,t,n){return e.apply(t,n)});mn||(mn=function(e,t){return new e(...t)});const lt=V(Array.prototype.forEach),ls=V(Array.prototype.lastIndexOf),mr=V(Array.prototype.pop),Fe=V(Array.prototype.push),ds=V(Array.prototype.splice),ct=V(String.prototype.toLowerCase),qt=V(String.prototype.toString),gr=V(String.prototype.match),ze=V(String.prototype.replace),us=V(String.prototype.indexOf),cs=V(String.prototype.trim),X=V(Object.prototype.hasOwnProperty),z=V(RegExp.prototype.test),je=hs(TypeError);function V(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return fn(i,e,n)}}function hs(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mn(i,t)}}function $(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ct;fr&&fr(i,null);let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const s=t(r);s!==r&&(ss(e)||(e[n]=s),r=s)}i[r]=!0}return i}function ps(i){for(let e=0;e<i.length;e++)X(i,e)||(i[e]=null);return i}function fe(i){const e=jr(null);for(const[t,n]of zr(i))X(i,t)&&(Array.isArray(n)?e[t]=ps(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=fe(n):e[t]=n);return e}function Ve(i,e){for(;i!==null;){const n=os(i,e);if(n){if(n.get)return V(n.get);if(typeof n.value=="function")return V(n.value)}i=as(i)}function t(){return null}return t}const wr=j(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Kt=j(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xt=j(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fs=j(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zt=j(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ms=j(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),yr=j(["#text"]),vr=j(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Jt=j(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),br=j(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),dt=j(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),gs=Y(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ws=Y(/<%[\w\W]*|[\w\W]*%>/gm),ys=Y(/\$\{[\w\W]*/gm),vs=Y(/^data-[\-\w.\u00B7-\uFFFF]+$/),bs=Y(/^aria-[\-\w]+$/),Vr=Y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_s=Y(/^(?:\w+script|data):/i),$s=Y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wr=Y(/^html$/i),As=Y(/^[a-z][.\w]*(-[.\w]+)+$/i);var _r=Object.freeze({__proto__:null,ARIA_ATTR:bs,ATTR_WHITESPACE:$s,CUSTOM_ELEMENT:As,DATA_ATTR:vs,DOCTYPE_NAME:Wr,ERB_EXPR:ws,IS_ALLOWED_URI:Vr,IS_SCRIPT_OR_DATA:_s,MUSTACHE_EXPR:gs,TMPLIT_EXPR:ys});const We={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Es=function(){return typeof window>"u"?null:window},Ts=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},$r=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Gr(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Es();const e=y=>Gr(y);if(e.version="3.2.5",e.removed=[],!i||!i.document||i.document.nodeType!==We.document||!i.Element)return e.isSupported=!1,e;let{document:t}=i;const n=t,r=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:u,Element:d,NodeFilter:h,NamedNodeMap:f=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:g,DOMParser:_,trustedTypes:T}=i,re=d.prototype,K=Ve(re,"cloneNode"),qr=Ve(re,"remove"),Kr=Ve(re,"nextSibling"),Xr=Ve(re,"childNodes"),Qe=Ve(re,"parentNode");if(typeof a=="function"){const y=t.createElement("template");y.content&&y.content.ownerDocument&&(t=y.content.ownerDocument)}let H,Oe="";const{implementation:$t,createNodeIterator:Zr,createDocumentFragment:Jr,getElementsByTagName:Qr}=t,{importNode:ei}=n;let U=$r();e.isSupported=typeof zr=="function"&&typeof Qe=="function"&&$t&&$t.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:Et,TMPLIT_EXPR:Tt,DATA_ATTR:ti,ARIA_ATTR:ni,IS_SCRIPT_OR_DATA:ri,ATTR_WHITESPACE:bn,CUSTOM_ELEMENT:ii}=_r;let{IS_ALLOWED_URI:_n}=_r,O=null;const $n=$({},[...wr,...Kt,...Xt,...Zt,...yr]);let I=null;const An=$({},[...vr,...Jt,...br,...dt]);let k=Object.seal(jr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,St=null,En=!0,Rt=!0,Tn=!1,Sn=!0,be=!1,xt=!0,ce=!1,Mt=!1,Ct=!1,_e=!1,et=!1,tt=!1,Rn=!0,xn=!1;const si="user-content-";let kt=!0,Ie=!1,$e={},Ae=null;const Mn=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Cn=null;const kn=$({},["audio","video","img","source","image","track"]);let Lt=null;const Ln=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ie="http://www.w3.org/1999/xhtml";let Ee=ie,Nt=!1,Ot=null;const ai=$({},[nt,rt,ie],qt);let it=$({},["mi","mo","mn","ms","mtext"]),st=$({},["annotation-xml"]);const oi=$({},["title","style","font","a","script"]);let Pe=null;const li=["application/xhtml+xml","text/html"],di="text/html";let D=null,Te=null;const ui=t.createElement("form"),Nn=function(o){return o instanceof RegExp||o instanceof Function},Dt=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Te&&Te===o)){if((!o||typeof o!="object")&&(o={}),o=fe(o),Pe=li.indexOf(o.PARSER_MEDIA_TYPE)===-1?di:o.PARSER_MEDIA_TYPE,D=Pe==="application/xhtml+xml"?qt:ct,O=X(o,"ALLOWED_TAGS")?$({},o.ALLOWED_TAGS,D):$n,I=X(o,"ALLOWED_ATTR")?$({},o.ALLOWED_ATTR,D):An,Ot=X(o,"ALLOWED_NAMESPACES")?$({},o.ALLOWED_NAMESPACES,qt):ai,Lt=X(o,"ADD_URI_SAFE_ATTR")?$(fe(Ln),o.ADD_URI_SAFE_ATTR,D):Ln,Cn=X(o,"ADD_DATA_URI_TAGS")?$(fe(kn),o.ADD_DATA_URI_TAGS,D):kn,Ae=X(o,"FORBID_CONTENTS")?$({},o.FORBID_CONTENTS,D):Mn,De=X(o,"FORBID_TAGS")?$({},o.FORBID_TAGS,D):{},St=X(o,"FORBID_ATTR")?$({},o.FORBID_ATTR,D):{},$e=X(o,"USE_PROFILES")?o.USE_PROFILES:!1,En=o.ALLOW_ARIA_ATTR!==!1,Rt=o.ALLOW_DATA_ATTR!==!1,Tn=o.ALLOW_UNKNOWN_PROTOCOLS||!1,Sn=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,be=o.SAFE_FOR_TEMPLATES||!1,xt=o.SAFE_FOR_XML!==!1,ce=o.WHOLE_DOCUMENT||!1,_e=o.RETURN_DOM||!1,et=o.RETURN_DOM_FRAGMENT||!1,tt=o.RETURN_TRUSTED_TYPE||!1,Ct=o.FORCE_BODY||!1,Rn=o.SANITIZE_DOM!==!1,xn=o.SANITIZE_NAMED_PROPS||!1,kt=o.KEEP_CONTENT!==!1,Ie=o.IN_PLACE||!1,_n=o.ALLOWED_URI_REGEXP||Vr,Ee=o.NAMESPACE||ie,it=o.MATHML_TEXT_INTEGRATION_POINTS||it,st=o.HTML_INTEGRATION_POINTS||st,k=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Nn(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(k.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Nn(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(k.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(k.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),be&&(Rt=!1),et&&(_e=!0),$e&&(O=$({},yr),I=[],$e.html===!0&&($(O,wr),$(I,vr)),$e.svg===!0&&($(O,Kt),$(I,Jt),$(I,dt)),$e.svgFilters===!0&&($(O,Xt),$(I,Jt),$(I,dt)),$e.mathMl===!0&&($(O,Zt),$(I,br),$(I,dt))),o.ADD_TAGS&&(O===$n&&(O=fe(O)),$(O,o.ADD_TAGS,D)),o.ADD_ATTR&&(I===An&&(I=fe(I)),$(I,o.ADD_ATTR,D)),o.ADD_URI_SAFE_ATTR&&$(Lt,o.ADD_URI_SAFE_ATTR,D),o.FORBID_CONTENTS&&(Ae===Mn&&(Ae=fe(Ae)),$(Ae,o.FORBID_CONTENTS,D)),kt&&(O["#text"]=!0),ce&&$(O,["html","head","body"]),O.table&&($(O,["tbody"]),delete De.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=o.TRUSTED_TYPES_POLICY,Oe=H.createHTML("")}else H===void 0&&(H=Ts(T,r)),H!==null&&typeof Oe=="string"&&(Oe=H.createHTML(""));j&&j(o),Te=o}},On=$({},[...Kt,...Xt,...fs]),Dn=$({},[...Zt,...ms]),ci=function(o){let c=Qe(o);(!c||!c.tagName)&&(c={namespaceURI:Ee,tagName:"template"});const m=ct(o.tagName),M=ct(c.tagName);return Ot[o.namespaceURI]?o.namespaceURI===rt?c.namespaceURI===ie?m==="svg":c.namespaceURI===nt?m==="svg"&&(M==="annotation-xml"||it[M]):!!On[m]:o.namespaceURI===nt?c.namespaceURI===ie?m==="math":c.namespaceURI===rt?m==="math"&&st[M]:!!Dn[m]:o.namespaceURI===ie?c.namespaceURI===rt&&!st[M]||c.namespaceURI===nt&&!it[M]?!1:!Dn[m]&&(oi[m]||!On[m]):!!(Pe==="application/xhtml+xml"&&Ot[o.namespaceURI]):!1},ee=function(o){Fe(e.removed,{element:o});try{Qe(o).removeChild(o)}catch{qr(o)}},at=function(o,c){try{Fe(e.removed,{attribute:c.getAttributeNode(o),from:c})}catch{Fe(e.removed,{attribute:null,from:c})}if(c.removeAttribute(o),o==="is")if(_e||et)try{ee(c)}catch{}else try{c.setAttribute(o,"")}catch{}},In=function(o){let c=null,m=null;if(Ct)o="<remove></remove>"+o;else{const P=gr(o,/^[\r\n\t ]+/);m=P&&P[0]}Pe==="application/xhtml+xml"&&Ee===ie&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const M=H?H.createHTML(o):o;if(Ee===ie)try{c=new _().parseFromString(M,Pe)}catch{}if(!c||!c.documentElement){c=$t.createDocument(Ee,"template",null);try{c.documentElement.innerHTML=Nt?Oe:M}catch{}}const B=c.body||c.documentElement;return o&&m&&B.insertBefore(t.createTextNode(m),B.childNodes[0]||null),Ee===ie?Qr.call(c,ce?"html":"body")[0]:ce?c.documentElement:B},Pn=function(o){return Zr.call(o.ownerDocument||o,o,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},It=function(o){return o instanceof g&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof f)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},Bn=function(o){return typeof u=="function"&&o instanceof u};function se(y,o,c){lt(y,m=>{m.call(e,o,c,Te)})}const Hn=function(o){let c=null;if(se(U.beforeSanitizeElements,o,null),It(o))return ee(o),!0;const m=D(o.nodeName);if(se(U.uponSanitizeElement,o,{tagName:m,allowedTags:O}),o.hasChildNodes()&&!Bn(o.firstElementChild)&&z(/<[/\w!]/g,o.innerHTML)&&z(/<[/\w!]/g,o.textContent)||o.nodeType===We.progressingInstruction||xt&&o.nodeType===We.comment&&z(/<[/\w]/g,o.data))return ee(o),!0;if(!O[m]||De[m]){if(!De[m]&&Fn(m)&&(k.tagNameCheck instanceof RegExp&&z(k.tagNameCheck,m)||k.tagNameCheck instanceof Function&&k.tagNameCheck(m)))return!1;if(kt&&!Ae[m]){const M=Qe(o)||o.parentNode,B=Xr(o)||o.childNodes;if(B&&M){const P=B.length;for(let W=P-1;W>=0;--W){const te=K(B[W],!0);te.__removalCount=(o.__removalCount||0)+1,M.insertBefore(te,Kr(o))}}}return ee(o),!0}return o instanceof d&&!ci(o)||(m==="noscript"||m==="noembed"||m==="noframes")&&z(/<\/no(script|embed|frames)/i,o.innerHTML)?(ee(o),!0):(be&&o.nodeType===We.text&&(c=o.textContent,lt([At,Et,Tt],M=>{c=ze(c,M," ")}),o.textContent!==c&&(Fe(e.removed,{element:o.cloneNode()}),o.textContent=c)),se(U.afterSanitizeElements,o,null),!1)},Un=function(o,c,m){if(Rn&&(c==="id"||c==="name")&&(m in t||m in ui))return!1;if(!(Rt&&!St[c]&&z(ti,c))){if(!(En&&z(ni,c))){if(!I[c]||St[c]){if(!(Fn(o)&&(k.tagNameCheck instanceof RegExp&&z(k.tagNameCheck,o)||k.tagNameCheck instanceof Function&&k.tagNameCheck(o))&&(k.attributeNameCheck instanceof RegExp&&z(k.attributeNameCheck,c)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(c))||c==="is"&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&z(k.tagNameCheck,m)||k.tagNameCheck instanceof Function&&k.tagNameCheck(m))))return!1}else if(!Lt[c]){if(!z(_n,ze(m,bn,""))){if(!((c==="src"||c==="xlink:href"||c==="href")&&o!=="script"&&us(m,"data:")===0&&Cn[o])){if(!(Tn&&!z(ri,ze(m,bn,"")))){if(m)return!1}}}}}}return!0},Fn=function(o){return o!=="annotation-xml"&&gr(o,ii)},zn=function(o){se(U.beforeSanitizeAttributes,o,null);const{attributes:c}=o;if(!c||It(o))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0};let M=c.length;for(;M--;){const B=c[M],{name:P,namespaceURI:W,value:te}=B,Be=D(P);let F=P==="value"?te:cs(te);if(m.attrName=Be,m.attrValue=F,m.keepAttr=!0,m.forceKeepAttr=void 0,se(U.uponSanitizeAttribute,o,m),F=m.attrValue,xn&&(Be==="id"||Be==="name")&&(at(P,o),F=si+F),xt&&z(/((--!?|])>)|<\/(style|title)/i,F)){at(P,o);continue}if(m.forceKeepAttr||(at(P,o),!m.keepAttr))continue;if(!Sn&&z(/\/>/i,F)){at(P,o);continue}be&&lt([At,Et,Tt],Vn=>{F=ze(F,Vn," ")});const jn=D(o.nodeName);if(Un(jn,Be,F)){if(H&&typeof T=="object"&&typeof T.getAttributeType=="function"&&!W)switch(T.getAttributeType(jn,Be)){case"TrustedHTML":{F=H.createHTML(F);break}case"TrustedScriptURL":{F=H.createScriptURL(F);break}}try{W?o.setAttributeNS(W,P,F):o.setAttribute(P,F),It(o)?ee(o):mr(e.removed)}catch{}}}se(U.afterSanitizeAttributes,o,null)},hi=function y(o){let c=null;const m=Pn(o);for(se(U.beforeSanitizeShadowDOM,o,null);c=m.nextNode();)se(U.uponSanitizeShadowNode,c,null),Hn(c),zn(c),c.content instanceof s&&y(c.content);se(U.afterSanitizeShadowDOM,o,null)};return e.sanitize=function(y){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,m=null,M=null,B=null;if(Nt=!y,Nt&&(y="<!-->"),typeof y!="string"&&!Bn(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw je("dirty is not a string, aborting")}else throw je("toString is not a function");if(!e.isSupported)return y;if(Mt||Dt(o),e.removed=[],typeof y=="string"&&(Ie=!1),Ie){if(y.nodeName){const te=D(y.nodeName);if(!O[te]||De[te])throw je("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof u)c=In("<!---->"),m=c.ownerDocument.importNode(y,!0),m.nodeType===We.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?c=m:c.appendChild(m);else{if(!_e&&!be&&!ce&&y.indexOf("<")===-1)return H&&tt?H.createHTML(y):y;if(c=In(y),!c)return _e?null:tt?Oe:""}c&&Ct&&ee(c.firstChild);const P=Pn(Ie?y:c);for(;M=P.nextNode();)Hn(M),zn(M),M.content instanceof s&&hi(M.content);if(Ie)return y;if(_e){if(et)for(B=Jr.call(c.ownerDocument);c.firstChild;)B.appendChild(c.firstChild);else B=c;return(I.shadowroot||I.shadowrootmode)&&(B=ei.call(n,B,!0)),B}let W=ce?c.outerHTML:c.innerHTML;return ce&&O["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&z(Wr,c.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+W),be&&lt([At,Et,Tt],te=>{W=ze(W,te," ")}),H&&tt?H.createHTML(W):W},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Dt(y),Mt=!0},e.clearConfig=function(){Te=null,Mt=!1},e.isValidAttribute=function(y,o,c){Te||Dt({});const m=D(y),M=D(o);return Un(m,M,c)},e.addHook=function(y,o){typeof o=="function"&&Fe(U[y],o)},e.removeHook=function(y,o){if(o!==void 0){const c=ls(U[y],o);return c===-1?void 0:ds(U[y],c,1)[0]}return mr(U[y])},e.removeHooks=function(y){U[y]=[]},e.removeAllHooks=function(){U=$r()},e}var gn=Gr();const Ar=R`var(--white, #fff)`,Ss=R`var(--ia-theme-link-color, #4b64ff)`,Rs=R`var(--primaryDisableCTAFill, #767676)`,xs=R`var(--secondaryCTABorder, #999)`,Ms=R`var(--primaryCTAFill, #194880)`,Qt=R`var(--primaryCTAFillRGB, 25, 72, 128)`,Cs=R`var(--primaryCTABorder, #c5d1df)`,ks=R`var(--primaryErrorCTAFill, #d9534f)`,en=R`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Ls=R`var(--primaryErrorCTABorder, #d43f3a)`,Ns=R`var(--secondaryCTAFill, #333)`,tn=R`var(--secondaryCTAFillRGB, 51, 51, 51)`,Os=R`var(--primaryCTABorder, #979797)`,Ds=R`var(---primaryWarningFill, #ee8950)`,nn=R`var(--primaryWarningFillRGB, 238, 137, 80)`,Is=R`var(--primaryWarningBorder, #ec7939)`,Yr=R`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Ar};
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
    outline-color: ${Ar};
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
    background-color: ${Rs};
    border: 1px solid ${xs};
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
    background-color: ${Ms};
    border-color: ${Cs};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Qt}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Qt}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Qt}, 0.7);
  }

  .ia-button.danger {
    background-color: ${ks};
    border-color: ${Ls};
  }
  .ia-button.danger:hover {
    background-color: rgba(${en}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${en}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${en}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Ds};
    border-color: ${Is};
  }
  .ia-button.warning:hover {
    background-color: rgba(${nn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${nn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${nn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Ns};
    border-color: ${Os};
  }
  .ia-button.dark:hover {
    background-color: rgba(${tn}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${tn}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${tn}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Ss};
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
`;var Er;(function(i){i.processing="processing",i.complete="complete"})(Er||(Er={}));let wn=class extends ae{constructor(){super(...arguments),this.mode="processing"}render(){return v`
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
    `}};l([b({type:String})],wn.prototype,"mode",void 0);wn=l([Je("ia-activity-indicator")],wn);const Ps=bt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Bs=bt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Hs=bt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Tr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return v`<span title="${i}">${t}</span>`}const Us=["a"];function Fs(i){return gn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),gn.sanitize(i,{ALLOWED_TAGS:Us})}function zs(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),s=r-e<=20;if(s&&r===i.length-1)return i;r!==-1&&s&&(n=r)}return js(i,n,e)}function js(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const s=n.match(/<\/a/gi);if(!s||s.length<r.length){const a=i.indexOf("</a>",e),u=a-t<=20;if(u&&i.length===a+4)return i;if(a!==-1&&u)n=i.slice(0,a+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const Vs=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Ws(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Vs,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Gs(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Ys=bt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let J=class extends ae{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?v`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?v`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Ys}
                  </button>
                `:A}
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
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return A;const n=Fs(t),r=this.truncateContent(n,this.maxBodyLength);return v`${Fr(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,s,a;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((a=(s=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||s===void 0?void 0:s.length)!==null&&a!==void 0?a:0)<=this.maxBodyLength?A:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return v`
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
              ${Tr(this.review.reviewer)}
            </a>
          `:v`${Tr(this.review.reviewer)}`:A}get starsTemplate(){return!this.review||!this.review.stars?A:v`
      <div
        class="review-stars"
        title="${E(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>v`<div class="review-star">${Hs}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return A;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),s=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),a=n.getTime()!==r.getTime()?"(edited)":"";return E(`${s} ${a}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:zs(e,t)}prepReview(e){return Gs(Ws(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(E("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return R`
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
    `}};l([b({type:Object})],J.prototype,"review",void 0);l([b({type:String})],J.prototype,"identifier",void 0);l([b({type:Number})],J.prototype,"maxSubjectLength",void 0);l([b({type:Number})],J.prototype,"maxBodyLength",void 0);l([b({type:String})],J.prototype,"baseHost",void 0);l([b({type:Boolean})],J.prototype,"canDelete",void 0);l([b({type:Boolean})],J.prototype,"bypassTruncation",void 0);l([C()],J.prototype,"showTruncatedContent",void 0);l([C()],J.prototype,"deleteMsg",void 0);J=l([Je("ia-review")],J);let L=class extends ae{constructor(){super(...arguments),this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return v`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:v`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,s,a,u,d,h;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(a=(s=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||s===void 0?void 0:s.length)!==null&&a!==void 0?a:0,this.currentBodyLength=(h=(d=(u=this.oldReview)===null||u===void 0?void 0:u.reviewbody)===null||d===void 0?void 0:d.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?v`
          <div class="unrecoverable-error">
            <span class="error-msg">${E(this.unrecoverableError)}</span>
          </div>
        `:A}get recoverableErrorTemplate(){return this.recoverableError?v`
          <div class="recoverable-error">
            ${Fr(this.sanitizeErrorMsg(E(this.recoverableError)))}
          </div>
        `:A}get recaptchaMessageTemplate(){return this.bypassRecaptcha?A:v`
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
              </div>`:A}
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
          `:A}</div></span>
    `}get bodyInputTemplate(){var e,t;return v`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${E("Review")}</label>
          ${this.maxBodyLength?v`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:A}
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
            `:A}
      </span>
    `}get hiddenInputsTemplate(){return v`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?v`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:A}
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
        ${e<=this.currentStars?Ps:Bs}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return gn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const s=await this.getRecaptchaToken();if(!s)return this.handleRecaptchaError();n.append("g-recaptcha-response",s??"")}for(const s of new FormData(this.reviewForm))n.append(s[0],s[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiPathResponse(this.endpointPath,{method:"POST",includeCredentials:!0,body:n});if(r.success===!0){this.submissionInProgress=!1;const s=this.generateSubmittedReview(),a=new CustomEvent("reviewUpdated",{detail:s});this.dispatchEvent(a)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,s,a;const u=new Date().toDateString();return new Z({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:u,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(a=this.dateToString((s=this.oldReview)===null||s===void 0?void 0:s.createdate))!==null&&a!==void 0?a:u})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Yr,R`
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
      `]}};l([b({type:String})],L.prototype,"identifier",void 0);l([b({type:String})],L.prototype,"token",void 0);l([b({type:String})],L.prototype,"endpointPath",void 0);l([b({type:String})],L.prototype,"submitterScreenname",void 0);l([b({type:String})],L.prototype,"submitterItemname",void 0);l([b({type:Object})],L.prototype,"oldReview",void 0);l([b({type:String})],L.prototype,"unrecoverableError",void 0);l([b({type:Number})],L.prototype,"maxSubjectLength",void 0);l([b({type:Number})],L.prototype,"maxBodyLength",void 0);l([b({type:Object})],L.prototype,"fetchHandler",void 0);l([b({type:Object})],L.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],L.prototype,"bypassRecaptcha",void 0);l([C()],L.prototype,"currentStars",void 0);l([C()],L.prototype,"currentSubjectLength",void 0);l([C()],L.prototype,"currentBodyLength",void 0);l([C()],L.prototype,"recoverableError",void 0);l([C()],L.prototype,"formCanSubmit",void 0);l([C()],L.prototype,"submissionInProgress",void 0);l([Ur("#review-form")],L.prototype,"reviewForm",void 0);L=l([Je("ia-review-form")],L);let x=class extends ae{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?v`
      <div class="reviews-list">
        ${this.reviewsFrozen?v`<div class="message">
              ${E("Reviews can no longer be added to this item.")}
            </div>`:A}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):A)}
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
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?A:v`<div class="own-review-container">
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
    ></ia-review>`:A}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[Yr,R`
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
      `]}};l([b({type:String})],x.prototype,"identifier",void 0);l([b({type:Array})],x.prototype,"reviews",void 0);l([b({type:Boolean})],x.prototype,"reviewsDisabled",void 0);l([b({type:Boolean})],x.prototype,"reviewsFrozen",void 0);l([b({type:Boolean})],x.prototype,"canDelete",void 0);l([b({type:Boolean})],x.prototype,"displayReviewsByDefault",void 0);l([b({type:Number})],x.prototype,"maxSubjectLength",void 0);l([b({type:Number})],x.prototype,"maxBodyLength",void 0);l([b({type:String})],x.prototype,"baseHost",void 0);l([b({type:String})],x.prototype,"token",void 0);l([b({type:String})],x.prototype,"endpointPath",void 0);l([b({type:String})],x.prototype,"submitterScreenname",void 0);l([b({type:String})],x.prototype,"submitterItemname",void 0);l([b({type:Object})],x.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],x.prototype,"bypassRecaptcha",void 0);l([b({type:String})],x.prototype,"reviewSubmissionError",void 0);l([b({type:Boolean})],x.prototype,"reviewAddEditRequested",void 0);l([b({type:Object})],x.prototype,"fetchHandler",void 0);l([C()],x.prototype,"displayReviewForm",void 0);l([C()],x.prototype,"displayReviews",void 0);l([C()],x.prototype,"filteredReviews",void 0);l([C()],x.prototype,"currentReview",void 0);l([C()],x.prototype,"reviewsCount",void 0);l([C()],x.prototype,"recaptchaActivated",void 0);x=l([Je("ia-reviews")],x);class qs{fetchApiPathResponse(){throw new Error("Method not implemented.")}async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let q=class extends ae{constructor(){super(...arguments),this.mockOldReview=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new Z({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new Z({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new Z({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new qs,this.mockRecaptchaManager=new Xi({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return v` <h2>General settings</h2>
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
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};q.styles=R`
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
  `;l([C()],q.prototype,"bypassRecaptcha",void 0);l([C()],q.prototype,"unrecoverableError",void 0);l([C()],q.prototype,"useCharCounts",void 0);l([C()],q.prototype,"allowDeletion",void 0);l([C()],q.prototype,"useExistingReviews",void 0);l([C()],q.prototype,"review",void 0);l([C()],q.prototype,"reviewsDisabled",void 0);l([C()],q.prototype,"reviewsFrozen",void 0);l([Ur("ia-reviews")],q.prototype,"reviewsComponent",void 0);q=l([Je("app-root")],q);
