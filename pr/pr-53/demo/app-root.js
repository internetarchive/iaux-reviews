(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function u(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var h=i.length-1;h>=0;h--)(o=i[h])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function St(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function h(g){try{p(n.next(g))}catch(y){o(y)}}function d(g){try{p(n.throw(g))}catch(y){o(y)}}function p(g){g.done?a(g.value):r(g.value).then(h,d)}p((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=window,Fn=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Un=Symbol(),yr=new WeakMap;let ii=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Un)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Fn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=yr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&yr.set(t,e))}return e}toString(){return this.cssText}};const Ji=i=>new ii(typeof i=="string"?i:i+"",void 0,Un),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new ii(t,i,Un)},Qi=(i,e)=>{Fn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=xt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},wr=Fn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ji(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var an;const Ct=window,vr=Ct.trustedTypes,es=vr?vr.emptyScript:"",br=Ct.reactiveElementPolyfillSupport,Sn={toAttribute(i,e){switch(e){case Boolean:i=i?es:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},si=(i,e)=>e!==i&&(e==e||i==i),on={attribute:!0,type:String,converter:Sn,reflect:!1,hasChanged:si},Rn="finalized";let Ge=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=on){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||on}static finalize(){if(this.hasOwnProperty(Rn))return!1;this[Rn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(wr(r))}else e!==void 0&&t.push(wr(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Qi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=on){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Sn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Sn;this._$El=a,this[a]=h.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||si)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ge[Rn]=!0,Ge.elementProperties=new Map,Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},br==null||br({ReactiveElement:Ge}),((an=Ct.reactiveElementVersions)!==null&&an!==void 0?an:Ct.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ln;const Mt=window,qe=Mt.trustedTypes,_r=qe?qe.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,ai="?"+be,ts=`<${ai}>`,Oe=document,kt=()=>Oe.createComment(""),dt=i=>i===null||typeof i!="object"&&typeof i!="function",oi=Array.isArray,ns=i=>oi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",un=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ar=/-->/g,Er=/>/g,Ce=RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$r=/'/g,Tr=/"/g,li=/^(?:script|style|textarea|title)$/i,Ke=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Sr=new WeakMap,Le=Oe.createTreeWalker(Oe,129,null,!1);function ui(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _r!==void 0?_r.createHTML(e):e}const rs=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=st;for(let h=0;h<t;h++){const d=i[h];let p,g,y=-1,A=0;for(;A<d.length&&(o.lastIndex=A,g=o.exec(d),g!==null);)A=o.lastIndex,o===st?g[1]==="!--"?o=Ar:g[1]!==void 0?o=Er:g[2]!==void 0?(li.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Ce):g[3]!==void 0&&(o=Ce):o===Ce?g[0]===">"?(o=r??st,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,p=g[1],o=g[3]===void 0?Ce:g[3]==='"'?Tr:$r):o===Tr||o===$r?o=Ce:o===Ar||o===Er?o=st:(o=Ce,r=void 0);const M=o===Ce&&i[h+1].startsWith("/>")?" ":"";a+=o===st?d+ts:y>=0?(n.push(p),d.slice(0,y)+xn+d.slice(y)+be+M):d+be+(y===-2?(n.push(void 0),h):M)}return[ui(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Cn=class di{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[p,g]=rs(e,t);if(this.el=di.createElement(p,n),Le.currentNode=this.el.content,t===2){const y=this.el.content,A=y.firstChild;A.remove(),y.append(...A.childNodes)}for(;(r=Le.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const A of r.getAttributeNames())if(A.endsWith(xn)||A.startsWith(be)){const M=g[o++];if(y.push(A),M!==void 0){const $e=r.getAttribute(M.toLowerCase()+xn).split(be),ne=/([.?@])?(.*)/.exec(M);d.push({type:1,index:a,name:ne[2],strings:$e,ctor:ne[1]==="."?ss:ne[1]==="?"?os:ne[1]==="@"?ls:Dt})}else d.push({type:6,index:a})}for(const A of y)r.removeAttribute(A)}if(li.test(r.tagName)){const y=r.textContent.split(be),A=y.length-1;if(A>0){r.textContent=qe?qe.emptyScript:"";for(let M=0;M<A;M++)r.append(y[M],kt()),Le.nextNode(),d.push({type:2,index:++a});r.append(y[A],kt())}}}else if(r.nodeType===8)if(r.data===ai)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(be,y+1))!==-1;)d.push({type:7,index:a}),y+=be.length-1}a++}}static createElement(e,t){const n=Oe.createElement("template");return n.innerHTML=e,n}};function Xe(i,e,t=i,n){var r,a,o,h;if(e===Ke)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const p=dt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==p&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),p===void 0?d=void 0:(d=new p(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Xe(i,d._$AS(i,e.values),d,n)),e}let is=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Oe).importNode(n,!0);Le.currentNode=a;let o=Le.nextNode(),h=0,d=0,p=r[0];for(;p!==void 0;){if(h===p.index){let g;p.type===2?g=new ci(o,o.nextSibling,this,e):p.type===1?g=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(g=new us(o,this,e)),this._$AV.push(g),p=r[++d]}h!==(p==null?void 0:p.index)&&(o=Le.nextNode(),h++)}return Le.currentNode=Oe,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ci=class hi{constructor(e,t,n,r){var a;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),dt(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ns(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Oe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Cn.createElement(ui(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new is(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=Sr.get(e.strings);return t===void 0&&Sr.set(e.strings,t=new Cn(e)),t}T(e){oi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new hi(this.k(kt()),this.k(kt()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Dt=class{constructor(e,t,n,r,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Xe(this,e,t,0),o=!dt(e)||e!==this._$AH&&e!==Ke,o&&(this._$AH=e);else{const h=e;let d,p;for(e=a[0],d=0;d<a.length-1;d++)p=Xe(this,h[n+d],t,d),p===Ke&&(p=this._$AH[d]),o||(o=!dt(p)||p!==this._$AH[d]),p===F?e=F:e!==F&&(e+=(p??"")+a[d+1]),this._$AH[d]=p}o&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ss=class extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}};const as=qe?qe.emptyScript:"";let os=class extends Dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==F?this.element.setAttribute(this.name,as):this.element.removeAttribute(this.name)}},ls=class extends Dt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Xe(this,e,t,0))!==null&&n!==void 0?n:F)===Ke)return;const r=this._$AH,a=e===F&&r!==F||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==F&&(r===F||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},us=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}};const Rr=Mt.litHtmlPolyfillSupport;Rr==null||Rr(Cn,ci),((ln=Mt.litHtmlVersions)!==null&&ln!==void 0?ln:Mt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dn;const Lt=window,Ze=Lt.trustedTypes,xr=Ze?Ze.createPolicy("lit-html",{createHTML:i=>i}):void 0,Mn="$lit$",_e=`lit$${(Math.random()+"").slice(9)}$`,fi="?"+_e,ds=`<${fi}>`,De=document,ct=()=>De.createComment(""),ht=i=>i===null||typeof i!="object"&&typeof i!="function",pi=Array.isArray,cs=i=>pi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",cn=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cr=/-->/g,Mr=/>/g,Me=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kr=/'/g,Lr=/"/g,mi=/^(?:script|style|textarea|title)$/i,gi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),E=gi(1),Pt=gi(2),Je=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Nr=new WeakMap,Ne=De.createTreeWalker(De,129,null,!1);function yi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xr!==void 0?xr.createHTML(e):e}const hs=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=at;for(let h=0;h<t;h++){const d=i[h];let p,g,y=-1,A=0;for(;A<d.length&&(o.lastIndex=A,g=o.exec(d),g!==null);)A=o.lastIndex,o===at?g[1]==="!--"?o=Cr:g[1]!==void 0?o=Mr:g[2]!==void 0?(mi.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Me):g[3]!==void 0&&(o=Me):o===Me?g[0]===">"?(o=r??at,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,p=g[1],o=g[3]===void 0?Me:g[3]==='"'?Lr:kr):o===Lr||o===kr?o=Me:o===Cr||o===Mr?o=at:(o=Me,r=void 0);const M=o===Me&&i[h+1].startsWith("/>")?" ":"";a+=o===at?d+ds:y>=0?(n.push(p),d.slice(0,y)+Mn+d.slice(y)+_e+M):d+_e+(y===-2?(n.push(void 0),h):M)}return[yi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ft{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[p,g]=hs(e,t);if(this.el=ft.createElement(p,n),Ne.currentNode=this.el.content,t===2){const y=this.el.content,A=y.firstChild;A.remove(),y.append(...A.childNodes)}for(;(r=Ne.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const A of r.getAttributeNames())if(A.endsWith(Mn)||A.startsWith(_e)){const M=g[o++];if(y.push(A),M!==void 0){const $e=r.getAttribute(M.toLowerCase()+Mn).split(_e),ne=/([.?@])?(.*)/.exec(M);d.push({type:1,index:a,name:ne[2],strings:$e,ctor:ne[1]==="."?ps:ne[1]==="?"?gs:ne[1]==="@"?ys:Bt})}else d.push({type:6,index:a})}for(const A of y)r.removeAttribute(A)}if(mi.test(r.tagName)){const y=r.textContent.split(_e),A=y.length-1;if(A>0){r.textContent=Ze?Ze.emptyScript:"";for(let M=0;M<A;M++)r.append(y[M],ct()),Ne.nextNode(),d.push({type:2,index:++a});r.append(y[A],ct())}}}else if(r.nodeType===8)if(r.data===fi)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(_e,y+1))!==-1;)d.push({type:7,index:a}),y+=_e.length-1}a++}}static createElement(e,t){const n=De.createElement("template");return n.innerHTML=e,n}}function Qe(i,e,t=i,n){var r,a,o,h;if(e===Je)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const p=ht(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==p&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),p===void 0?d=void 0:(d=new p(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Qe(i,d._$AS(i,e.values),d,n)),e}class fs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:De).importNode(n,!0);Ne.currentNode=a;let o=Ne.nextNode(),h=0,d=0,p=r[0];for(;p!==void 0;){if(h===p.index){let g;p.type===2?g=new mt(o,o.nextSibling,this,e):p.type===1?g=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(g=new ws(o,this,e)),this._$AV.push(g),p=r[++d]}h!==(p==null?void 0:p.index)&&(o=Ne.nextNode(),h++)}return Ne.currentNode=De,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class mt{constructor(e,t,n,r){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qe(this,e,t),ht(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):cs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.$(De.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ft.createElement(yi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new fs(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=Nr.get(e.strings);return t===void 0&&Nr.set(e.strings,t=new ft(e)),t}T(e){pi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new mt(this.k(ct()),this.k(ct()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Bt{constructor(e,t,n,r,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Qe(this,e,t,0),o=!ht(e)||e!==this._$AH&&e!==Je,o&&(this._$AH=e);else{const h=e;let d,p;for(e=a[0],d=0;d<a.length-1;d++)p=Qe(this,h[n+d],t,d),p===Je&&(p=this._$AH[d]),o||(o=!ht(p)||p!==this._$AH[d]),p===T?e=T:e!==T&&(e+=(p??"")+a[d+1]),this._$AH[d]=p}o&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ps extends Bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const ms=Ze?Ze.emptyScript:"";class gs extends Bt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,ms):this.element.removeAttribute(this.name)}}class ys extends Bt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Qe(this,e,t,0))!==null&&n!==void 0?n:T)===Je)return;const r=this._$AH,a=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==T&&(r===T||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ws{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}}const Ir=Lt.litHtmlPolyfillSupport;Ir==null||Ir(ft,mt),((dn=Lt.litHtmlVersions)!==null&&dn!==void 0?dn:Lt.litHtmlVersions=[]).push("2.8.0");const vs=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new mt(e.insertBefore(ct(),h),h,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hn,fn;class fe extends Ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Je}}fe.finalized=!0,fe._$litElement$=!0,(hn=globalThis.litElementHydrateSupport)===null||hn===void 0||hn.call(globalThis,{LitElement:fe});const Or=globalThis.litElementPolyfillSupport;Or==null||Or({LitElement:fe});((fn=globalThis.litElementVersions)!==null&&fn!==void 0?fn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},_s=(i,e,t)=>{e.constructor.createProperty(t,i)};function $(i){return(e,t)=>t!==void 0?_s(i,e,t):bs(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(i){return $({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(h){i(h,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wi(i,e){return As({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pn;((pn=window.HTMLSlotElement)===null||pn===void 0?void 0:pn.prototype.assignedElements)!=null;function m(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=Dr(o.value,e,t,n);else if(o.get!=null)o.get=Dr(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const mn=new Map;function Dr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[r];if(Array.isArray(n))for(const d of n)mn.has(d)?mn.get(d).push(h):mn.set(d,[h]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(y=>y.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const p=`${d}__timestamp`;let g=!1;if(t>0)if(!h.has(p))g=!0;else{let y=h.get(p);g=Date.now()-y>t}h.has(d)&&!g?o=h.get(d):(o=i.apply(this,a),h.set(d,o),t>0&&h.set(p,Date.now()))}else{const d=this;h.has(d)?o=h.get(d):(o=i.apply(this,a),h.set(d,o))}return o}}class kn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}kn.shared=new kn;class Ee{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ee.shared=new Ee;class Nt{parseValue(e){return Ee.shared.parseValue(e)}}Nt.shared=new Nt;class pt{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}pt.shared=new pt;class It{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const d=60**(e.length-1-a);return o*Math.floor(d)}).reduce((r,a)=>r+a,0);return t?void 0:n}}It.shared=new It;class Ln{parseValue(e){if(typeof e=="string")return e}}Ln.shared=new Ln;class Es{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class Nn{parseValue(e){if(typeof e=="string")return e}}Nn.shared=new Nn;class Ot{parseValue(e){return String(e)}}Ot.shared=new Ot;class ae{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}u([m()],ae.prototype,"values",null);u([m()],ae.prototype,"value",null);class $s extends ae{constructor(e){super(kn.shared,e)}}class we extends ae{constructor(e){super(pt.shared,e)}}class gn extends ae{constructor(e){super(It.shared,e)}}class J extends ae{constructor(e){super(Ee.shared,e)}}class x extends ae{constructor(e){super(Ot.shared,e)}}class Ts extends ae{constructor(e){super(Nn.shared,e)}}class Pr extends ae{constructor(e){super(Nt.shared,e)}}class Ss extends ae{constructor(e){super(Ln.shared,e)}}class Rs extends ae{constructor(e,t){super(t,e)}}class xs extends Rs{constructor(e){const t=new Es(Ot.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new we(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new x(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new J(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new J(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new x(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new x(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Pr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new x(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new x(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new x(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new x(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new we(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new x(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new J(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new gn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new x(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new J(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new we(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new x(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new x(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new J(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Pr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new x(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new gn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new x(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new J(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Ss(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new $s(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new x(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new J(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new J(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new x(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new x(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Ts(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new x(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new J(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new we(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new x(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new we(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new gn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new x(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new x(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new we(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new we(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new we(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new xs(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new x(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new x(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new x(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new J(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new x(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new x(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new J(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new x(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new x(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new J(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new J(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}u([m()],v.prototype,"addeddate",null);u([m()],v.prototype,"audio_codec",null);u([m()],v.prototype,"audio_sample_rate",null);u([m()],v.prototype,"avg_rating",null);u([m()],v.prototype,"collection",null);u([m()],v.prototype,"collections_raw",null);u([m()],v.prototype,"collection_size",null);u([m()],v.prototype,"contributor",null);u([m()],v.prototype,"coverage",null);u([m()],v.prototype,"creator",null);u([m()],v.prototype,"collection_layout",null);u([m()],v.prototype,"date",null);u([m()],v.prototype,"description",null);u([m()],v.prototype,"downloads",null);u([m()],v.prototype,"duration",null);u([m()],v.prototype,"external_identifier",null);u([m()],v.prototype,"files_count",null);u([m()],v.prototype,"indexdate",null);u([m()],v.prototype,"isbn",null);u([m()],v.prototype,"issue",null);u([m()],v.prototype,"item_count",null);u([m()],v.prototype,"item_size",null);u([m()],v.prototype,"language",null);u([m()],v.prototype,"length",null);u([m()],v.prototype,"lineage",null);u([m()],v.prototype,"month",null);u([m()],v.prototype,"mediatype",null);u([m()],v.prototype,"noindex",null);u([m()],v.prototype,"notes",null);u([m()],v.prototype,"num_favorites",null);u([m()],v.prototype,"num_reviews",null);u([m()],v.prototype,"openlibrary_edition",null);u([m()],v.prototype,"openlibrary_work",null);u([m()],v.prototype,"page_progression",null);u([m()],v.prototype,"partner",null);u([m()],v.prototype,"ppi",null);u([m()],v.prototype,"publicdate",null);u([m()],v.prototype,"publisher",null);u([m()],v.prototype,"reviewdate",null);u([m()],v.prototype,"runtime",null);u([m()],v.prototype,"scanner",null);u([m()],v.prototype,"source",null);u([m()],v.prototype,"start_localtime",null);u([m()],v.prototype,"start_time",null);u([m()],v.prototype,"stop_time",null);u([m()],v.prototype,"subject",null);u([m()],v.prototype,"taper",null);u([m()],v.prototype,"title",null);u([m()],v.prototype,"transferer",null);u([m()],v.prototype,"track",null);u([m()],v.prototype,"type",null);u([m()],v.prototype,"uploader",null);u([m()],v.prototype,"utc_offset",null);u([m()],v.prototype,"venue",null);u([m()],v.prototype,"volume",null);u([m()],v.prototype,"week",null);u([m()],v.prototype,"year",null);class et{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Nt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?It.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?Ee.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?Ee.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?Ee.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}u([m()],et.prototype,"size",null);u([m()],et.prototype,"length",null);u([m()],et.prototype,"height",null);u([m()],et.prototype,"width",null);u([m()],et.prototype,"track",null);class se{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?pt.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?pt.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?Ee.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}u([m()],se.prototype,"reviewdate",null);u([m()],se.prototype,"createdate",null);u([m()],se.prototype,"stars",null);class Cs{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new et(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new se(r))}}var Ie;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Ie||(Ie={}));class In extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Ms{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ie.networkError,h)}try{const o=await a.json(),h=o.error;if(h){const d=o.forensics;return this.getErrorResult(Ie.searchEngineError,h,d)}else return{success:o}}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ie.decodingError,h)}}getErrorResult(e,t,n){return{error:new In(e,t,n)}}}class Br{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new In(Ie.itemNotFound)}:{success:new Cs(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new In(Ie.itemNotFound)}:{success:r.success.result}}}Br.default=new Br(new Ms);let ks=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Ls(i){return new Promise(e=>setTimeout(e,i))}var he;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(he||(he={}));const Hr="lazyLoaderService";class Ns{constructor(e){var t,n,r;this.emitter=ks(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return St(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return St(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return St(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${he.owner}='${Hr}'][${he.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,h)=>{if(a.getAttribute(he.dynamicImportLoaded)){o();return}const d=e.scriptBeingRetried,p=a.onload||(d==null?void 0:d.onload);a.onload=y=>{p==null||p(y),a.setAttribute(he.dynamicImportLoaded,"true"),o()};const g=a.onerror||(d==null?void 0:d.onerror);a.onerror=y=>St(this,void 0,void 0,function*(){const A=a.getAttribute(he.hasBeenRetried);if(n<this.retryCount&&!A){a.setAttribute(he.hasBeenRetried,"true"),yield Ls(this.retryInterval*1e3);const M=n+1;this.emitter.emit("scriptLoadRetried",e.src,M),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:M,scriptBeingRetried:a}))}else A||this.emitter.emit("scriptLoadFailed",e.src,y),g==null||g(y),h(y)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(he.owner,Hr),r.setAttribute("src",n),r.setAttribute(he.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(h=>{r.setAttribute(h,o[h])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Is{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Os{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Ns,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new Is({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=i=>typeof i!="string"&&"strTag"in i,Ps=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=i=>Ds(i)?Ps(i.strings,i.values):i;let R=Bs;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hs{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fs=new Hs;Fs.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zs=i=>(...e)=>({_$litDirective$:i,values:e});class js{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class On extends js{constructor(e){if(super(e),this.et=F,e.type!==Us.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this.ft=void 0,this.et=e;if(e===Ke)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}On.directiveName="unsafeHTML",On.resultType=1;const vi=zs(On);/*! @license DOMPurify 3.4.12 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.12/LICENSE */function Fr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Vs(i){if(Array.isArray(i))return i}function Ws(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,h=[],d=!0,p=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(h.push(n.value),h.length!==e);d=!0);}catch(g){p=!0,r=g}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(p)throw r}}return h}}function Gs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ys(i,e){return Vs(i)||Ws(i,e)||qs(i,e)||Gs()}function qs(i,e){if(i){if(typeof i=="string")return Fr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Fr(i,e):void 0}}const bi=Object.entries,Ur=Object.setPrototypeOf,Ks=Object.isFrozen,Xs=Object.getPrototypeOf,Zs=Object.getOwnPropertyDescriptor;let V=Object.freeze,W=Object.seal,Ye=Object.create,_i=typeof Reflect<"u"&&Reflect,Dn=_i.apply,Pn=_i.construct;V||(V=function(e){return e});W||(W=function(e){return e});Dn||(Dn=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});Pn||(Pn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const Ve=U(Array.prototype.forEach),Js=U(Array.prototype.lastIndexOf),zr=U(Array.prototype.pop),We=U(Array.prototype.push),Qs=U(Array.prototype.splice),Ae=Array.isArray,ut=U(String.prototype.toLowerCase),yn=U(String.prototype.toString),jr=U(String.prototype.match),ot=U(String.prototype.replace),Vr=U(String.prototype.indexOf),ea=U(String.prototype.trim),ta=U(Number.prototype.toString),na=U(Boolean.prototype.toString),Wr=typeof BigInt>"u"?null:U(BigInt.prototype.toString),Gr=typeof Symbol>"u"?null:U(Symbol.prototype.toString),j=U(Object.prototype.hasOwnProperty),lt=U(Object.prototype.toString),z=U(RegExp.prototype.test),ke=ra(TypeError);function U(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dn(i,e,n)}}function ra(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Pn(i,t)}}function S(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ut;if(Ur&&Ur(i,null),!Ae(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(Ks(e)||(e[n]=a),r=a)}i[r]=!0}return i}function ia(i){for(let e=0;e<i.length;e++)j(i,e)||(i[e]=null);return i}function K(i){const e=Ye(null);for(const n of bi(i)){var t=Ys(n,2);const r=t[0],a=t[1];j(i,r)&&(Ae(a)?e[r]=ia(a):a&&typeof a=="object"&&a.constructor===Object?e[r]=K(a):e[r]=a)}return e}function sa(i){switch(typeof i){case"string":return i;case"number":return ta(i);case"boolean":return na(i);case"bigint":return Wr?Wr(i):"0";case"symbol":return Gr?Gr(i):"Symbol()";case"undefined":return lt(i);case"function":case"object":{if(i===null)return lt(i);const e=i,t=ce(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:lt(n)}return lt(i)}default:return lt(i)}}function ce(i,e){for(;i!==null;){const n=Zs(i,e);if(n){if(n.get)return U(n.get);if(typeof n.value=="function")return U(n.value)}i=Xs(i)}function t(){return null}return t}function aa(i){try{return z(i,""),!0}catch{return!1}}const Yr=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wn=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vn=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),oa=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),bn=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),la=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),qr=V(["#text"]),Kr=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),_n=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Xr=V(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Rt=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ua=W(/{{[\w\W]*|^[\w\W]*}}/g),da=W(/<%[\w\W]*|^[\w\W]*%>/g),ca=W(/\${[\w\W]*/g),ha=W(/^data-[\-\w.\u00B7-\uFFFF]+$/),fa=W(/^aria-[\-\w]+$/),Zr=W(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pa=W(/^(?:\w+script|data):/i),ma=W(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ga=W(/^html$/i),ya=W(/^[a-z][.\w]*(-[.\w]+)+$/i),Jr=W(/<[/\w!]/g),Qr=W(/<[/\w]/g),wa=W(/<\/no(script|embed|frames)/i),va=W(/\/>/i),Q={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ba=function(){return typeof window>"u"?null:window},_a=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},ei=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ve=function(e,t,n,r){return j(e,t)&&Ae(e[t])?S(r.base?K(r.base):{},e[t],r.transform):n};function Ai(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ba();const e=f=>Ai(f);if(e.version="3.4.12",e.removed=[],!i||!i.document||i.document.nodeType!==Q.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const a=i.HTMLTemplateElement,o=i.Node,h=i.Element,d=i.NodeFilter,p=i.NamedNodeMap;p===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const g=i.DOMParser,y=i.trustedTypes,A=h.prototype,M=ce(A,"cloneNode"),$e=ce(A,"remove"),ne=ce(A,"nextSibling"),Pe=ce(A,"childNodes"),Te=ce(A,"parentNode"),zn=ce(A,"shadowRoot"),Ht=ce(A,"attributes"),Y=o&&o.prototype?ce(o.prototype,"nodeType"):null,oe=o&&o.prototype?ce(o.prototype,"nodeName"):null;if(typeof a=="function"){const f=t.createElement("template");f.content&&f.content.ownerDocument&&(t=f.content.ownerDocument)}let X,Se="",Ft,jn=!1,tt=0;const Vn=function(){if(tt>0)throw ke('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Be=function(s){Vn(),tt++;try{return X.createHTML(s)}finally{tt--}},$i=function(s){Vn(),tt++;try{return X.createScriptURL(s)}finally{tt--}},Ti=function(){return jn||(Ft=_a(y,r),jn=!0),Ft},yt=t,Ut=yt.implementation,Wn=yt.createNodeIterator,Si=yt.createDocumentFragment,Ri=yt.getElementsByTagName,xi=n.importNode;let N=ei();e.isSupported=typeof bi=="function"&&typeof Te=="function"&&Ut&&Ut.createHTMLDocument!==void 0;const Ci=ua,Mi=da,ki=ca,Li=ha,Ni=fa,Ii=pa,Gn=ma,Oi=ya;let Yn=Zr,I=null;const qn=S({},[...Yr,...wn,...vn,...bn,...qr]);let O=null;const Kn=S({},[...Kr,..._n,...Xr,...Rt]);let D=Object.seal(Ye(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),nt=null,Xn=null;const pe=Object.seal(Ye(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Zn=!0,zt=!0,Jn=!1,Qn=!0,me=!1,ge=!0,Re=!1,jt=!1,Vt=null,Wt=null,Gt=!1,He=!1,wt=!1,vt=!1,er=!0,tr=!1;const nr="user-content-";let Yt=!0,qt=!1,Fe={},le=null;const Kt=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let rr=null;const ir=S({},["audio","video","img","source","image","track"]);let Xt=null;const sr=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),bt="http://www.w3.org/1998/Math/MathML",_t="http://www.w3.org/2000/svg",ue="http://www.w3.org/1999/xhtml";let Ue=ue,Zt=!1,Jt=null;const Di=S({},[bt,_t,ue],yn),ar=V(["mi","mo","mn","ms","mtext"]);let Qt=S({},ar);const or=V(["annotation-xml"]);let en=S({},or);const Pi=S({},["title","style","font","a","script"]);let rt=null;const Bi=["application/xhtml+xml","text/html"],Hi="text/html";let L=null,ze=null;const Fi=t.createElement("form"),lr=function(s){return s instanceof RegExp||s instanceof Function},tn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ze&&ze===s)return;(!s||typeof s!="object")&&(s={}),s=K(s),rt=Bi.indexOf(s.PARSER_MEDIA_TYPE)===-1?Hi:s.PARSER_MEDIA_TYPE,L=rt==="application/xhtml+xml"?yn:ut,I=ve(s,"ALLOWED_TAGS",qn,{transform:L}),O=ve(s,"ALLOWED_ATTR",Kn,{transform:L}),Jt=ve(s,"ALLOWED_NAMESPACES",Di,{transform:yn}),Xt=ve(s,"ADD_URI_SAFE_ATTR",sr,{transform:L,base:sr}),rr=ve(s,"ADD_DATA_URI_TAGS",ir,{transform:L,base:ir}),le=ve(s,"FORBID_CONTENTS",Kt,{transform:L}),nt=ve(s,"FORBID_TAGS",K({}),{transform:L}),Xn=ve(s,"FORBID_ATTR",K({}),{transform:L}),Fe=j(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?K(s.USE_PROFILES):s.USE_PROFILES:!1,Zn=s.ALLOW_ARIA_ATTR!==!1,zt=s.ALLOW_DATA_ATTR!==!1,Jn=s.ALLOW_UNKNOWN_PROTOCOLS||!1,Qn=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,me=s.SAFE_FOR_TEMPLATES||!1,ge=s.SAFE_FOR_XML!==!1,Re=s.WHOLE_DOCUMENT||!1,He=s.RETURN_DOM||!1,wt=s.RETURN_DOM_FRAGMENT||!1,vt=s.RETURN_TRUSTED_TYPE||!1,Gt=s.FORCE_BODY||!1,er=s.SANITIZE_DOM!==!1,tr=s.SANITIZE_NAMED_PROPS||!1,Yt=s.KEEP_CONTENT!==!1,qt=s.IN_PLACE||!1,Yn=aa(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:Zr,Ue=typeof s.NAMESPACE=="string"?s.NAMESPACE:ue,Qt=j(s,"MATHML_TEXT_INTEGRATION_POINTS")&&s.MATHML_TEXT_INTEGRATION_POINTS&&typeof s.MATHML_TEXT_INTEGRATION_POINTS=="object"?K(s.MATHML_TEXT_INTEGRATION_POINTS):S({},ar),en=j(s,"HTML_INTEGRATION_POINTS")&&s.HTML_INTEGRATION_POINTS&&typeof s.HTML_INTEGRATION_POINTS=="object"?K(s.HTML_INTEGRATION_POINTS):S({},or);const l=j(s,"CUSTOM_ELEMENT_HANDLING")&&s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING=="object"?K(s.CUSTOM_ELEMENT_HANDLING):Ye(null);if(D=Ye(null),j(l,"tagNameCheck")&&lr(l.tagNameCheck)&&(D.tagNameCheck=l.tagNameCheck),j(l,"attributeNameCheck")&&lr(l.attributeNameCheck)&&(D.attributeNameCheck=l.attributeNameCheck),j(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(D.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),W(D),me&&(zt=!1),wt&&(He=!0),Fe&&(I=S({},qr),O=Ye(null),Fe.html===!0&&(S(I,Yr),S(O,Kr)),Fe.svg===!0&&(S(I,wn),S(O,_n),S(O,Rt)),Fe.svgFilters===!0&&(S(I,vn),S(O,_n),S(O,Rt)),Fe.mathMl===!0&&(S(I,bn),S(O,Xr),S(O,Rt))),pe.tagCheck=null,pe.attributeCheck=null,j(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?pe.tagCheck=s.ADD_TAGS:Ae(s.ADD_TAGS)&&(I===qn&&(I=K(I)),S(I,s.ADD_TAGS,L))),j(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?pe.attributeCheck=s.ADD_ATTR:Ae(s.ADD_ATTR)&&(O===Kn&&(O=K(O)),S(O,s.ADD_ATTR,L))),j(s,"ADD_URI_SAFE_ATTR")&&Ae(s.ADD_URI_SAFE_ATTR)&&S(Xt,s.ADD_URI_SAFE_ATTR,L),j(s,"FORBID_CONTENTS")&&Ae(s.FORBID_CONTENTS)&&(le===Kt&&(le=K(le)),S(le,s.FORBID_CONTENTS,L)),j(s,"ADD_FORBID_CONTENTS")&&Ae(s.ADD_FORBID_CONTENTS)&&(le===Kt&&(le=K(le)),S(le,s.ADD_FORBID_CONTENTS,L)),Yt&&(I["#text"]=!0),Re&&S(I,["html","head","body"]),I.table&&(S(I,["tbody"]),delete nt.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw ke('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ke('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const c=X;X=s.TRUSTED_TYPES_POLICY;try{Se=Be("")}catch(w){throw X=c,w}}else s.TRUSTED_TYPES_POLICY===null?(X=void 0,Se=""):(X===void 0&&(X=Ti()),X&&typeof Se=="string"&&(Se=Be("")));V&&V(s),ze=s},ur=S({},[...wn,...vn,...oa]),dr=S({},[...bn,...la]),Ui=function(s,l,c){return l.namespaceURI===ue?s==="svg":l.namespaceURI===bt?s==="svg"&&(c==="annotation-xml"||Qt[c]):!!ur[s]},zi=function(s,l,c){return l.namespaceURI===ue?s==="math":l.namespaceURI===_t?s==="math"&&en[c]:!!dr[s]},ji=function(s,l,c){return l.namespaceURI===_t&&!en[c]||l.namespaceURI===bt&&!Qt[c]?!1:!dr[s]&&(Pi[s]||!ur[s])},Vi=function(s){let l=Te(s);(!l||!l.tagName)&&(l={namespaceURI:Ue,tagName:"template"});const c=ut(s.tagName),w=ut(l.tagName);return Jt[s.namespaceURI]?s.namespaceURI===_t?Ui(c,l,w):s.namespaceURI===bt?zi(c,l,w):s.namespaceURI===ue?ji(c,l,w):!!(rt==="application/xhtml+xml"&&Jt[s.namespaceURI]):!1},ye=function(s){We(e.removed,{element:s});try{Te(s).removeChild(s)}catch{if($e(s),!Te(s))throw ke("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},At=function(s){nn(s);const l=Pe(s);if(l){const w=[];Ve(l,b=>{We(w,b)}),Ve(w,b=>{try{$e(b)}catch{}})}const c=Ht(s);if(c)for(let w=c.length-1;w>=0;--w){const b=c[w],_=b&&b.name;if(typeof _=="string")try{s.removeAttribute(_)}catch{}}},xe=function(s,l){try{We(e.removed,{attribute:l.getAttributeNode(s),from:l})}catch{We(e.removed,{attribute:null,from:l})}if(l.removeAttribute(s),s==="is")if(He||wt)try{ye(l)}catch{}else try{l.setAttribute(s,"")}catch{}},Wi=function(s){const l=Ht(s);if(l)for(let c=l.length-1;c>=0;--c){const w=l[c],b=w&&w.name;if(!(typeof b!="string"||O[L(b)]))try{s.removeAttribute(b)}catch{}}},nn=function(s){const l=[s];for(;l.length>0;){const c=l.pop();(Y?Y(c):c.nodeType)===Q.element&&Wi(c);const b=Pe(c);if(b)for(let _=b.length-1;_>=0;--_)l.push(b[_])}},Gi=function(s){if(!ge)return;const l=[s];for(;l.length>0;){const c=l.pop(),w=Y?Y(c):c.nodeType;if(w===Q.processingInstruction||w===Q.comment&&z(Qr,c.data)){try{$e(c)}catch{}continue}if(w===Q.element){const _=c,P=L(oe?oe(c):c.nodeName);try{_.hasAttribute&&_.hasAttribute("patchsrc")&&_.removeAttribute("patchsrc"),_.hasAttribute&&_.hasAttribute("for")&&P!=="label"&&P!=="output"&&_.removeAttribute("for")}catch{}}const b=Pe(c);if(b)for(let _=b.length-1;_>=0;--_)l.push(b[_])}},cr=function(s){let l=null,c=null;if(Gt)s="<remove></remove>"+s;else{const _=jr(s,/^[\r\n\t ]+/);c=_&&_[0]}rt==="application/xhtml+xml"&&Ue===ue&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const w=X?Be(s):s;if(Ue===ue)try{l=new g().parseFromString(w,rt)}catch{}if(!l||!l.documentElement){l=Ut.createDocument(Ue,"template",null);try{l.documentElement.innerHTML=Zt?Se:w}catch{}}const b=l.body||l.documentElement;return s&&c&&b.insertBefore(t.createTextNode(c),b.childNodes[0]||null),Ue===ue?Ri.call(l,Re?"html":"body")[0]:Re?l.documentElement:b},hr=function(s){return Wn.call(s.ownerDocument||s,s,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Et=function(s){return s=ot(s,Ci," "),s=ot(s,Mi," "),s=ot(s,ki," "),s},rn=function(s){var l;s.normalize();const c=Wn.call(s.ownerDocument||s,s,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let w=c.nextNode();for(;w;)w.data=Et(w.data),w=c.nextNode();const b=(l=s.querySelectorAll)===null||l===void 0?void 0:l.call(s,"template");b&&Ve(b,_=>{je(_.content)&&rn(_.content)})},$t=function(s){const l=oe?oe(s):null;return typeof l!="string"||L(l)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==Ht(s)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==Y(s)||s.childNodes!==Pe(s)},je=function(s){if(!Y||typeof s!="object"||s===null)return!1;try{return Y(s)===Q.documentFragment}catch{return!1}},it=function(s){if(!Y||typeof s!="object"||s===null)return!1;try{return typeof Y(s)=="number"}catch{return!1}};function de(f,s,l){f.length!==0&&Ve(f,c=>{c.call(e,s,l,ze)})}const Yi=function(s,l){return!!(ge&&s.hasChildNodes()&&!it(s.firstElementChild)&&z(Jr,s.textContent)&&z(Jr,s.innerHTML)||ge&&s.namespaceURI===ue&&l==="style"&&it(s.firstElementChild)||s.nodeType===Q.processingInstruction||ge&&s.nodeType===Q.comment&&z(Qr,s.data))},qi=function(s,l){if(!nt[l]&&mr(l)&&(D.tagNameCheck instanceof RegExp&&z(D.tagNameCheck,l)||D.tagNameCheck instanceof Function&&D.tagNameCheck(l)))return!1;if(Yt&&!le[l]){const c=Te(s),w=Pe(s);if(w&&c){const b=w.length;for(let _=b-1;_>=0;--_){const P=qt?w[_]:M(w[_],!0);c.insertBefore(P,ne(s))}}}return ye(s),!0},fr=function(s,l){if(de(N.beforeSanitizeElements,s,null),s!==l&&Te(s)===null)return!0;if($t(s))return ye(s),!0;const c=L(oe?oe(s):s.nodeName);if(de(N.uponSanitizeElement,s,{tagName:c,allowedTags:I}),s!==l&&Te(s)===null)return!0;if(Yi(s,c))return ye(s),!0;if(nt[c]||!(pe.tagCheck instanceof Function&&pe.tagCheck(c))&&!I[c]){const b=qi(s,c);return b===!1&&de(N.afterSanitizeElements,s,null),b}if((Y?Y(s):s.nodeType)===Q.element&&!Vi(s)||(c==="noscript"||c==="noembed"||c==="noframes")&&z(wa,s.innerHTML))return ye(s),!0;if(me&&s.nodeType===Q.text){const b=Et(s.textContent);s.textContent!==b&&(We(e.removed,{element:s.cloneNode()}),s.textContent=b)}return de(N.afterSanitizeElements,s,null),!1},pr=function(s,l,c){if(Xn[l]||ge&&l==="patchsrc"||ge&&l==="for"&&s!=="label"&&s!=="output"||er&&(l==="id"||l==="name")&&(c in t||c in Fi))return!1;const w=O[l]||pe.attributeCheck instanceof Function&&pe.attributeCheck(l,s);if(!(zt&&z(Li,l))){if(!(Zn&&z(Ni,l))){if(w){if(!Xt[l]){if(!z(Yn,ot(c,Gn,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&s!=="script"&&Vr(c,"data:")===0&&rr[s])){if(!(Jn&&!z(Ii,ot(c,Gn,"")))){if(c)return!1}}}}}else if(!(mr(s)&&(D.tagNameCheck instanceof RegExp&&z(D.tagNameCheck,s)||D.tagNameCheck instanceof Function&&D.tagNameCheck(s))&&(D.attributeNameCheck instanceof RegExp&&z(D.attributeNameCheck,l)||D.attributeNameCheck instanceof Function&&D.attributeNameCheck(l,s))||l==="is"&&D.allowCustomizedBuiltInElements&&(D.tagNameCheck instanceof RegExp&&z(D.tagNameCheck,c)||D.tagNameCheck instanceof Function&&D.tagNameCheck(c))))return!1}}return!0},Ki=S({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),mr=function(s){return!Ki[ut(s)]&&z(Oi,s)},Xi=function(s,l,c,w){if(X&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!c)switch(y.getAttributeType(s,l)){case"TrustedHTML":return Be(w);case"TrustedScriptURL":return $i(w)}return w},Zi=function(s,l,c,w){try{c?s.setAttributeNS(c,l,w):s.setAttribute(l,w),$t(s)?ye(s):zr(e.removed)}catch{xe(l,s)}},gr=function(s){de(N.beforeSanitizeAttributes,s,null);const l=s.attributes;if(!l||$t(s))return;const c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O,forceKeepAttr:void 0};let w=l.length;const b=L(s.nodeName);for(;w--;){const _=l[w],P=_.name,G=_.namespaceURI,re=_.value,Z=L(P),ie=re;let q=P==="value"?ie:ea(ie);if(c.attrName=Z,c.attrValue=q,c.keepAttr=!0,c.forceKeepAttr=void 0,de(N.uponSanitizeAttribute,s,c),q=c.attrValue,tr&&(Z==="id"||Z==="name")&&Vr(q,nr)!==0&&(xe(P,s),q=nr+q),ge&&z(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,q)){xe(P,s);continue}if(Z==="attributename"&&jr(q,"href")){xe(P,s);continue}if(!c.forceKeepAttr){if(!c.keepAttr){xe(P,s);continue}if(!Qn&&z(va,q)){xe(P,s);continue}if(me&&(q=Et(q)),!pr(b,Z,q)){xe(P,s);continue}q=Xi(b,Z,G,q),q!==ie&&Zi(s,P,G,q)}}de(N.afterSanitizeAttributes,s,null)},Tt=function(s){let l=null;const c=hr(s);for(de(N.beforeSanitizeShadowDOM,s,null);l=c.nextNode();)if(de(N.uponSanitizeShadowNode,l,null),fr(l,s),gr(l),je(l.content)&&Tt(l.content),(Y?Y(l):l.nodeType)===Q.element){const b=zn(l);je(b)&&(sn(b),Tt(b))}de(N.afterSanitizeShadowDOM,s,null)},sn=function(s){const l=[{node:s,shadow:null}];for(;l.length>0;){const c=l.pop();if(c.shadow){Tt(c.shadow);continue}const w=c.node,_=(Y?Y(w):w.nodeType)===Q.element,P=Pe(w);if(P)for(let G=P.length-1;G>=0;--G)l.push({node:P[G],shadow:null});if(_){const G=oe?oe(w):null;if(typeof G=="string"&&L(G)==="template"){const re=w.content;je(re)&&l.push({node:re,shadow:null})}}if(_){const G=zn(w);je(G)&&l.push({node:null,shadow:G},{node:G,shadow:null})}}};return e.sanitize=function(f){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,w=null,b=null;if(Zt=!f,Zt&&(f="<!-->"),typeof f!="string"&&!it(f)&&(f=sa(f),typeof f!="string"))throw ke("dirty is not a string, aborting");if(!e.isSupported)return f;jt?(I=Vt,O=Wt):tn(s),(N.uponSanitizeElement.length>0||N.uponSanitizeAttribute.length>0)&&(I=K(I)),N.uponSanitizeAttribute.length>0&&(O=K(O)),e.removed=[];const _=qt&&typeof f!="string"&&it(f);if(_){Gi(f);const Z=oe?oe(f):f.nodeName;if(typeof Z=="string"){const ie=L(Z);if(!I[ie]||nt[ie])throw At(f),ke("root node is forbidden and cannot be sanitized in-place")}if($t(f))throw At(f),ke("root node is clobbered and cannot be sanitized in-place");try{sn(f)}catch(ie){throw At(f),ie}}else if(it(f))l=cr("<!---->"),c=l.ownerDocument.importNode(f,!0),c.nodeType===Q.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c),sn(c);else{if(!He&&!me&&!Re&&f.indexOf("<")===-1)return X&&vt?Be(f):f;if(l=cr(f),!l)return He?null:vt?Se:""}l&&Gt&&ye(l.firstChild);const P=_?f:l,G=hr(P);try{for(;w=G.nextNode();)fr(w,P),gr(w),je(w.content)&&Tt(w.content)}catch(Z){throw _&&(At(f),Ve(e.removed,ie=>{ie.element&&nn(ie.element)})),Z}if(_)return Ve(e.removed,Z=>{Z.element&&nn(Z.element)}),me&&rn(f),f;if(He){if(me&&rn(l),wt)for(b=Si.call(l.ownerDocument);l.firstChild;)b.appendChild(l.firstChild);else b=l;return(O.shadowroot||O.shadowrootmode)&&(b=xi.call(n,b,!0)),b}let re=Re?l.outerHTML:l.innerHTML;return Re&&I["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&z(ga,l.ownerDocument.doctype.name)&&(re="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+re),me&&(re=Et(re)),X&&vt?Be(re):re},e.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};tn(f),jt=!0,Vt=I,Wt=O},e.clearConfig=function(){ze=null,jt=!1,Vt=null,Wt=null,X=Ft,Se=""},e.isValidAttribute=function(f,s,l){ze||tn({});const c=L(f),w=L(s);return pr(c,w,l)},e.addHook=function(f,s){typeof s=="function"&&j(N,f)&&We(N[f],s)},e.removeHook=function(f,s){if(j(N,f)){if(s!==void 0){const l=Js(N[f],s);return l===-1?void 0:Qs(N[f],l,1)[0]}return zr(N[f])}},e.removeHooks=function(f){j(N,f)&&(N[f]=[])},e.removeAllHooks=function(){N=ei()},e}var Bn=Ai();const ti=C`var(--white, #fff)`,Aa=C`var(--ia-theme-link-color, #4b64ff)`,Ea=C`var(--primaryDisableCTAFill, #767676)`,$a=C`var(--secondaryCTABorder, #999)`,Ta=C`var(--primaryCTAFill, #194880)`,An=C`var(--primaryCTAFillRGB, 25, 72, 128)`,Sa=C`var(--primaryCTABorder, #c5d1df)`,Ra=C`var(--primaryErrorCTAFill, #d9534f)`,En=C`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,xa=C`var(--primaryErrorCTABorder, #d43f3a)`,Ca=C`var(--secondaryCTAFill, #333)`,$n=C`var(--secondaryCTAFillRGB, 51, 51, 51)`,Ma=C`var(--primaryCTABorder, #979797)`,ka=C`var(---primaryWarningFill, #ee8950)`,Tn=C`var(--primaryWarningFillRGB, 238, 137, 80)`,La=C`var(--primaryWarningBorder, #ec7939)`,Ei=C`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${ti};
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
    outline-color: ${ti};
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
    background-color: ${Ea};
    border: 1px solid ${$a};
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
    background-color: ${Ta};
    border-color: ${Sa};
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
    background-color: ${Ra};
    border-color: ${xa};
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
    background-color: ${ka};
    border-color: ${La};
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
    background-color: ${Ca};
    border-color: ${Ma};
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
    color: ${Aa};
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
`;var ni;(function(i){i.processing="processing",i.complete="complete"})(ni||(ni={}));let Hn=class extends fe{constructor(){super(...arguments),this.mode="processing"}render(){return E`
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
    `}};u([$({type:String})],Hn.prototype,"mode",void 0);Hn=u([gt("ia-activity-indicator")],Hn);const Na=Pt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ia=Pt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Oa=Pt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function ri(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return E`<span title="${i}">${t}</span>`}const Da=["a"];function Pa(i){return Bn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Bn.sanitize(i,{ALLOWED_TAGS:Da})}function Ba(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return Ha(i,n,e)}function Ha(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),h=o-t<=20;if(h&&i.length===o+4)return i;if(o!==-1&&h)n=i.slice(0,o+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const Fa=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Ua(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Fa,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function za(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const ja=Pt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let ee=class extends fe{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?E`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?E`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${ja}
                  </button>
                `:T}
            <div class="top-line">
              <b>${R("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${R("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?E`<i>${R(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:E`
          <div class="error">
            ${R("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return T;const n=Pa(t),r=this.truncateContent(n,this.maxBodyLength);return E`${vi(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?T:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return E`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${R("More...")}
      </button>
    `}get lessButtonTemplate(){return E`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${R("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?E`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${ri(this.review.reviewer)}
            </a>
          `:E`${ri(this.review.reviewer)}`:T}get starsTemplate(){return!this.review||!this.review.stars?T:E`
      <div
        class="review-stars"
        title="${R(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>E`<div class="review-star">${Oa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return T;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return R(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:Ba(e,t)}prepReview(e){return za(Ua(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(R("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return C`
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
    `}};u([$({type:Object})],ee.prototype,"review",void 0);u([$({type:String})],ee.prototype,"identifier",void 0);u([$({type:Number})],ee.prototype,"maxSubjectLength",void 0);u([$({type:Number})],ee.prototype,"maxBodyLength",void 0);u([$({type:String})],ee.prototype,"baseHost",void 0);u([$({type:String})],ee.prototype,"csrfToken",void 0);u([$({type:Boolean})],ee.prototype,"canDelete",void 0);u([$({type:Boolean})],ee.prototype,"bypassTruncation",void 0);u([H()],ee.prototype,"showTruncatedContent",void 0);u([H()],ee.prototype,"deleteMsg",void 0);ee=u([gt("ia-review")],ee);let B=class extends fe{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return E`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:E`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,o,h,d,p;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(p=(d=(h=this.oldReview)===null||h===void 0?void 0:h.reviewbody)===null||d===void 0?void 0:d.length)!==null&&p!==void 0?p:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?E`
          <div class="unrecoverable-error">
            <span class="error-msg">${R(this.unrecoverableError)}</span>
          </div>
        `:T}get recoverableErrorTemplate(){return this.recoverableError?E`
          <div class="recoverable-error">
            ${vi(this.sanitizeErrorMsg(R(this.recoverableError)))}
          </div>
        `:T}get recaptchaMessageTemplate(){return this.bypassRecaptcha?T:E`
      <span class="recaptcha-disclaimer"
        >${R(E`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return E`
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
    `}get subjectInputTemplate(){var e,t;return E`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${R("Subject")}</label>
        ${this.maxSubjectLength?E`<div class="char-count subject">
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
    />${this.maxSubjectLength?E`
            <div class="input-error">
              ${R(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:T}</div></span>
    `}get bodyInputTemplate(){var e,t;return E`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${R("Review")}</label>
          ${this.maxBodyLength?E`<div class="char-count body">
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
        ${this.maxBodyLength?E`
              <div class="input-error">
                ${R(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:T}
      </span>
    `}get hiddenInputsTemplate(){return E`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?E`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:T}
    `}get actionButtonsTemplate(){return E`<div class="action-btns">
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
        ${this.submissionInProgress?E`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:R("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=R(`Rate ${e>1?`${e} stars`:"1 star"}`);return E`
      <button
        class="star star-${e}"
        title=${t?R("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?Na:Ia}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Bn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,o;const h=new Date().toDateString();return new se({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:h,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&o!==void 0?o:h})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Ei,C`
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
      `]}};u([$({type:String})],B.prototype,"identifier",void 0);u([$({type:String})],B.prototype,"token",void 0);u([$({type:String})],B.prototype,"baseHost",void 0);u([$({type:String})],B.prototype,"endpointPath",void 0);u([$({type:String})],B.prototype,"submitterScreenname",void 0);u([$({type:String})],B.prototype,"submitterItemname",void 0);u([$({type:Object})],B.prototype,"oldReview",void 0);u([$({type:String})],B.prototype,"unrecoverableError",void 0);u([$({type:Number})],B.prototype,"maxSubjectLength",void 0);u([$({type:Number})],B.prototype,"maxBodyLength",void 0);u([$({type:Object})],B.prototype,"fetchHandler",void 0);u([$({type:Object})],B.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],B.prototype,"bypassRecaptcha",void 0);u([H()],B.prototype,"currentStars",void 0);u([H()],B.prototype,"currentSubjectLength",void 0);u([H()],B.prototype,"currentBodyLength",void 0);u([H()],B.prototype,"recoverableError",void 0);u([H()],B.prototype,"formCanSubmit",void 0);u([H()],B.prototype,"submissionInProgress",void 0);u([wi("#review-form")],B.prototype,"reviewForm",void 0);B=u([gt("ia-review-form")],B);class Va{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(o=>{const h=n[o];r.searchParams.append(o,h)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class Wa{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Ga{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Va,this.analyticsHelpers=new Wa(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ya(i){return new Promise(e=>setTimeout(e,i))}class qa{constructor(e){this.analyticsHandler=new Ga({enableAnalytics:!0}),this.sleep=Ya,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class Ka{constructor(e){this.fetchRetrier=new qa,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,o]of Object.entries(t))r.searchParams.set(a,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let k=class extends fe{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new Ka,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?E`
      <div class="reviews-list">
        ${this.reviewsFrozen?E`<div class="message">
              ${R("Reviews can no longer be added to this item.")}
            </div>`:T}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):T)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return E`<div class="message">
      ${R("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?E`
        <div class="message">
          ${R("Reviews cannot be added to this item.")}
        </div>
      `:E`
      <div class="message">
        ${R("There are no reviews yet.")}
        ${R(E`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return E`
      <div class="message">
        ${this.reviewsCount===1?R("There is 1 review for this item."):R(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${R(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?T:E`<div class="own-review-container">
      ${this.displayReviewForm?E`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?E`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:T}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[Ei,C`
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
      `]}};u([$({type:String})],k.prototype,"identifier",void 0);u([$({type:Array})],k.prototype,"reviews",void 0);u([$({type:Boolean})],k.prototype,"reviewsDisabled",void 0);u([$({type:Boolean})],k.prototype,"reviewsFrozen",void 0);u([$({type:Boolean})],k.prototype,"canDelete",void 0);u([$({type:Boolean})],k.prototype,"displayReviewsByDefault",void 0);u([$({type:Number})],k.prototype,"maxSubjectLength",void 0);u([$({type:Number})],k.prototype,"maxBodyLength",void 0);u([$({type:String})],k.prototype,"baseHost",void 0);u([$({type:String})],k.prototype,"token",void 0);u([$({type:String})],k.prototype,"endpointPath",void 0);u([$({type:String})],k.prototype,"submitterScreenname",void 0);u([$({type:String})],k.prototype,"submitterItemname",void 0);u([$({type:Object})],k.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],k.prototype,"bypassRecaptcha",void 0);u([$({type:String})],k.prototype,"reviewSubmissionError",void 0);u([$({type:Boolean})],k.prototype,"reviewAddEditRequested",void 0);u([$({type:Object})],k.prototype,"fetchHandler",void 0);u([H()],k.prototype,"displayReviewForm",void 0);u([H()],k.prototype,"displayReviews",void 0);u([H()],k.prototype,"filteredReviews",void 0);u([H()],k.prototype,"currentReview",void 0);u([H()],k.prototype,"reviewsCount",void 0);u([H()],k.prototype,"recaptchaActivated",void 0);k=u([gt("ia-reviews")],k);class Xa{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let te=class extends fe{constructor(){super(...arguments),this.mockOldReview=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new se({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new se({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new se({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new Xa,this.mockRecaptchaManager=new Os({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return E` <h2>General settings</h2>
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
      </div>`}renderReviewToggle(e,t){return E`
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
  `;u([H()],te.prototype,"bypassRecaptcha",void 0);u([H()],te.prototype,"unrecoverableError",void 0);u([H()],te.prototype,"useCharCounts",void 0);u([H()],te.prototype,"allowDeletion",void 0);u([H()],te.prototype,"useExistingReviews",void 0);u([H()],te.prototype,"review",void 0);u([H()],te.prototype,"reviewsDisabled",void 0);u([H()],te.prototype,"reviewsFrozen",void 0);u([wi("ia-reviews")],te.prototype,"reviewsComponent",void 0);te=u([gt("app-root")],te);
